# installation 
if (!require("devtools")) install.packages("devtools")
devtools::install_github("JackEdTaylor/LexOPS@*release")
library(LexOPS)

# install.packages('tidyverse')
library(tidyverse)

stimuli.df <- read.csv("potential stimuli.csv")
controls.df <- read.csv("items.csv")
controls.df[,3:7] <- as.data.frame(sapply(controls.df[,3:7],as.numeric))
stimuli.df <- left_join(stimuli.df,controls.df,by=c("label"="Word"))
stimuli.df <- stimuli.df %>% 
    na.omit()
head(stimuli.df)

quantile(stimuli.df$total_degree)
quantile(stimuli.df$scaled)

quantile(stimuli.df$BG_Sum)

str(stimuli.df)
plot(stimuli.df$total_degree, stimuli.df$scaled)

# pipeline 
# https://jackedtaylor.github.io/LexOPSdocs/the-generate-pipeline.html 
# https://link.springer.com/article/10.3758%2Fs13428-020-01389-1
# https://jackedtaylor.github.io/LexOPSdocs/vignettes/custom-data.html

stim <- stimuli.df %>%
    set_options(id_col = "label") %>% # when using own dataset 
    split_by(total_degree, 40:48 ~ 49:66) %>%
    split_by(scaled, 0.3733699:0.4307122 ~ 0.4307123:0.4850163) %>%
    control_for(Length, -1:1) %>%
    control_for(LgSUBTLWF, -0.25:0.25) %>%
    control_for(Concreteness_Rating, -0.5:0.5) %>%
    control_for(Semantic_Neighborhood_Density, -0.04:0.04) %>%
    control_for(Age_Of_Acquisition, -1:1) %>%
    control_for(BG_Sum, -2500:2500) %>%
    generate(n=40, match_null = "random")

stim.long <- reshape2::melt(stim[,2:5],measure.vars=c("A1_B1","A1_B2","A2_B1","A2_B2"),variable.name="condition",value.name="label")

stim.long <- left_join(stim.long,stimuli.df,by="label")

plot_design(stim)

write.csv(stim,"final stimuli.csv")
write.csv(stim.long,"final stim for analysis.csv")

# stim <- lexops %>%
#     subset(PK.Brysbaert >= 0.9) %>%
#     split_by(CNC.Brysbaert, 1:2 ~ 4:5) %>%
#     split_by(BG.SUBTLEX_UK, 0:0.003 ~ 0.009:0.013) %>%
#     control_for(Length, 0:0) %>%
#     control_for(Zipf.SUBTLEX_UK, -0.2:0.2) %>%
#     generate(n = 25)
# 
LexOPS::run_shiny()
