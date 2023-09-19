library(tidyverse)

df <- read.csv("potential stimuli list.csv",fileEncoding='UTF-8-BOM')

headers <- c("unrelated","related","target")

df <- df %>% 
  separate(header,headers, "                ")

df[,headers] <- lapply(df[,headers], trimws)

stimuli.df <- read.csv("potential stimuli.csv")
stimuli.df <- stimuli.df[,-1]

final.df <- stimuli.df %>% 
  filter(label %in% df$target)

write.csv(final.df,"stimuli list (potential).csv")
