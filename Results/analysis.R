library(ggplot2)
library(ggpubr)
library(tidyverse)
library(broom)
library(AICcmodavg)

#set file paths
pathF_HT <- "C:\\Users\\Lenovo\\Documents\\University\\Files\\Thesis\\Results\\"
pathF_RA <- "C:\\Users\\Lenovo\\Documents\\Research Assistant\\Semantic Distance\\Results\\"##ANOVA analysis

#analysis of combined data (change x in task=x for study number)
df <- read_csv(paste0(pathF_RA,'combined processed data.csv'))
df <- read_csv('combined processed data.csv')
df <- df %>% 
  filter(closeness!='trial') %>% 
  filter(task==1)
results <- aov(score~closeness+degree,data=df)
summary(results)

#analysis of HT data (change x in task=x for study number)
df1 <- read_csv(paste0(pathF_HT,'processed data w demographics.csv'))
df1 <- df1 %>% 
  filter(closeness!='trial') %>% 
  filter(task==1)
results1 <- aov(score~closeness+degree,data=df1)
summary(results1)

#analysis of RA data (change x in task=x for study number)
df2 <- read_csv(paste0(pathF_RA,'processed data w demographics.csv'))
df2 <- df2 %>% 
  filter(closeness!='trial') %>% 
  filter(task==1)
results2 <- aov(score~closeness+degree,data=df2)
summary(results2)



##MLM analysis

#analysis of combined data (change x in task=x for study number)
df <- read_csv(paste0(pathF_RA,'combined cleaned data.csv'))
df <- df %>% 
  filter(closeness!='trial') %>% 
  filter(task==1)
results <- lm(lenient_numeric~scaled+total_degree,data=df)
summary(results)

#analysis of HT data (change x in task=x for study number)
df1 <- read_csv(paste0(pathF_HT,'cleaned data w demographics.csv'))
df1 <- df1 %>% 
  filter(closeness!='trial') %>% 
  filter(task==1)
results1 <- lm(lenient_numeric~scaled+total_degree,data=df1)
summary(results1)

#analysis of RA data (change x in task=x for study number)
df2 <- read_csv(paste0(pathF_RA,'cleaned data w demographics.csv'))
df2 <- df2 %>% 
  filter(closeness!='trial') %>% 
  filter(task==1)
results2 <- lm(lenient_numeric~scaled+total_degree,data=df2)
summary(results2)

(g_plot <- ggplot(df,aes(x=TSR_score,y=total_degree)) +
    geom_point() +
    geom_smooth(method = "lm"))

qqnorm(resid(results))
qqline(resid(results))

# CS - 11th April 2022

df2 <- read_csv('combined cleaned data.csv')
df2 <- df2 %>% filter(closeness != 'trial') # remove trials 

# set up for MLM

# ensure that DVs are categorical, except for tsr
class(df2$strict_numeric)
class(df2$lenient_numeric)
df2$strict_numeric <- as.factor(df2$strict_numeric) # binary variable, either correct or wrong
df2$lenient_numeric <- as.factor(df2$lenient_numeric) # ditto
levels(df2$strict_numeric)
levels(df2$lenient_numeric)

class(df2$TSR_score)
hist(df2$TSR_score)

# random effects are code (participant) and cue (item)
class(df2$cue)
class(df2$code)

# main variables are categorical
class(df2$closeness)
table(df2$closeness)
df2$closeness <- factor(df2$closeness, levels = c('low', 'high'))
levels(df2$closeness)

class(df2$degree)
table(df2$degree)
df2$degree <- factor(df2$degree, levels = c('low', 'high'))
levels(df2$degree)

table(df2$degree, df2$closeness)

# task 
class(df2$task)
df2$task <- as.factor(df2$task)

# lexical covariates need to be scaled 
class(df2$Length)
class(df2$LgSUBTLWF)
class(df2$Concreteness_Rating)
class(df2$Semantic_Neighborhood_Density)
class(df2$Age_Of_Acquisition)
class(df2$BG_Sum)
class(df2$total_degree)
class(df2$scaled)

df2 <- df2 %>% mutate_at(c("Length", "LgSUBTLWF", "Concreteness_Rating", 
                           "Semantic_Neighborhood_Density", "Age_Of_Acquisition", 
                           "BG_Sum", "total_degree", "scaled"), ~(scale(.) %>% as.vector))

# split df2
df2_task1 <- df2 %>% filter(task == 1) # words
df2_task2 <- df2 %>% filter(task == 2) # nonwords 

# reject "bad" participants 
table(df2_task1$first.language) # exclude "no"
table(df2_task1$Disorders)
table(df2_task1$Device)

table(df2_task1$Distraction) # exclude "yes" - what does the , and ,, mean? 
table(df2_task1$Honesty) # what was the original question? not sure which one to exclude 

df2_task1 <- df2_task1 %>% filter(first.language == 'yes') %>% 
  filter(Distraction != 'yes') 

# library for MLM 
library(lmerTest)

# task 1 - 139 (-> 102 after exclusions) participants, 78 cue words

# simple model with binary predictors 
mlm_m1 <- glmer(lenient_numeric ~ 1 + degree * closeness + (1|code) + (1|cue), data = df2_task1,
                family = binomial(link = 'logit'))
summary(mlm_m1) # ns  

mlm_m2 <- glmer(strict_numeric ~ 1 + degree * closeness + (1|code) + (1|cue), data = df2_task1,
                family = binomial(link = 'logit'))
summary(mlm_m2) # ns 

mlm_m3 <- lmer(TSR_score ~ 1 + degree * closeness + (1|code) + (1|cue), data = df2_task1)
summary(mlm_m3) # ns 

# simple model with continuous predictors 
mlm_m4 <- glmer(lenient_numeric ~ 1 + total_degree * scaled + (1|code) + (1|cue), 
                data = df2_task1,
                family = binomial(link = 'logit'))
summary(mlm_m4) # ns  

mlm_m5 <- glmer(strict_numeric ~ 1 + total_degree * scaled + (1|code) + (1|cue), 
                data = df2_task1,
                family = binomial(link = 'logit'))
summary(mlm_m5) # degree is marginal but not in expected direction 

mlm_m6 <- lmer(TSR_score ~ 1 + total_degree * scaled + (1|code) + (1|cue), data = df2_task1)
summary(mlm_m6) # ns 

# complex model with lexical covariates - note the predictors need to be scaled
mlm_m7 <- glmer(lenient_numeric ~ 1 + total_degree * scaled + 
                  Length + LgSUBTLWF + Concreteness_Rating + Semantic_Neighborhood_Density +
                  Age_Of_Acquisition + BG_Sum + (1|code) + (1|cue), 
                data = df2_task1,
                family = binomial(link = 'logit'))
summary(mlm_m7) # interaction is marginal  

mlm_m8 <- glmer(strict_numeric ~ 1 + total_degree * scaled + 
                  Length + LgSUBTLWF + Concreteness_Rating + Semantic_Neighborhood_Density +
                  Age_Of_Acquisition + BG_Sum + (1|code) + (1|cue), 
                data = df2_task1,
                family = binomial(link = 'logit'))
summary(mlm_m8) # interaction is significant 

mlm_m9 <- lmer(TSR_score ~ 1 + total_degree * scaled + 
                 Length + LgSUBTLWF + Concreteness_Rating + Semantic_Neighborhood_Density +
                 Age_Of_Acquisition + BG_Sum + (1|code) + (1|cue), data = df2_task1)
summary(mlm_m9) # interaction is marginal 

library(sjPlot)

plot_model(mlm_m8, type = "pred", terms = c("total_degree [all]", "scaled"))

plot_model(mlm_m8, type = "pred", terms = c("scaled [all]", "total_degree"))

# worse performance as degree of cue word increases, especially when closeness centrality is low 
# better performance with increasing closeness, but this relation only holds for higher degree words 

# for JC to repeat with task 2 
