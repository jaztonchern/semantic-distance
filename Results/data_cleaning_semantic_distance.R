library(tidyverse)

df <- read.csv('RN67_-Semantic-Networks-all-data.csv',na.strings=c("","NA"))
test.df <- df[,c(2,5:8,18,21,29)]
test.df <- test.df %>% 
  filter(task!='trial-4')
test.df$task <- ifelse(test.df$task=='rn7-study-2'|test.df$task=='rn7-study-2-v2-1',2,1)
test.df <- test.df %>% 
  filter(sender=='Word pair presentation'|sender=='Recall screen') %>% 
  filter(ended_on!='skipped') %>% 
  distinct(ended_on,cue,code,.keep_all=T)
test.df[test.df=="aadjust"]<-'adjust'

df1 <- test.df[,c(1:2,6:8)]
df1 <- df1 %>%
  filter(response!='')
df1 <- reshape2::dcast(df1,code+task+cue~sender,value.var='response')
headers <- c('code','task','cue','response','target')
colnames(df1) <- headers

write.csv(df1,'tsr.csv',row.names=F)

df2 <- read.csv('tsr_output.csv')

df2$strict <- as.factor(ifelse(df2$TSR_score==100,'correct','wrong'))
df2$lenient <- as.factor(ifelse(df2$TSR_score>84,'correct','wrong'))

cues.df <- read.csv('final stimuli.csv')
cues.df <- reshape2::melt(cues.df[,-5],measure.vars=c('A1_B1','A1_B2','A2_B1','A2_B2'),variable.name='condition',value.name='cue')

df2 <- merge(df2,cues.df,by='cue',all.x=T)
df2$condition <- as.character(df2$condition)
df2$condition <- df2$condition %>% 
  replace_na("trial")
df2$condition <- as.factor(df2$condition)
df2 <- df2[,c(3,2,1,4:9)]
df2 <- df2[order(df2$code),]

write.csv(df2,'cleaned data.csv',row.names=F)

df3 <- as.data.frame(unique(df2$code))

df3 <- df2 %>% 
  group_by(task,code,condition) %>% 
  count(strict,.drop=F) %>% 
  filter(strict=='correct') %>% 
  select(-strict) %>% 
  rename('strict'='n') %>% 
  reshape2::dcast(task+code~condition,value.var='strict')
df3$type <- 'strict'

df4 <- df2 %>% 
  group_by(task,code,condition) %>% 
  count(lenient,.drop=F) %>% 
  filter(lenient=='correct') %>% 
  select(-lenient) %>% 
  rename('lenient'='n') %>% 
  reshape2::dcast(task+code~condition,value.var='lenient')
df4$type <- 'lenient'

df5 <- rbind(df3,df4)
df5 <- df5[order(df5$code),]

demographics <- df[,c(2,7:8,21,31:41)] %>% 
  filter(sender=='Checks form'|sender=='Demography form') %>% 
  fill(c('Device','Distraction','Honesty'),.direction='up') %>% 
  drop_na() %>% 
  select(-c(sender:duration))

df7$strict_numeric <- ifelse(df2$strict=='correct',1,0)
df7$lenient_numeric <- ifelse(df2$lenient=='correct',1,0)

df8 <- merge(df7,demographics,by='code',all.x=T)

write.csv(df8,'cleaned data w demographics.csv',row.names=F)

df7$closeness <- ifelse(grepl("A1",df7$condition),'low','high')
df7$degree <- ifelse(grepl("B1",df7$condition),'low','high')
df6 <- merge(df5,demographics,by='code',all.x=T)

write.csv(df6,'processed data w demographics.csv',row.names=F)
