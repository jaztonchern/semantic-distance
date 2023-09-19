library(tidyverse)

#set file paths
pathF_HT <- "C:\\Users\\Lenovo\\Documents\\University\\Files\\Thesis\\Results\\"
pathF_RA <- "C:\\Users\\Lenovo\\Documents\\Research Assistant\\Semantic Distance\\Results\\"

#read files
df1 <- read_csv(paste0(pathF_HT,"processed data w demographics.csv"))
df2 <- read_csv(paste0(pathF_RA,"processed data w demographics.csv"))

#renames columns to match each other
colnames(df1) <- colnames(df2)

#combine data from both studies
df <- rbind(df1,df2)

#write to csv
write.csv(df,paste0(pathF_RA,'combined processed data.csv'),row.names=F)

#read files
df1 <- read_csv(paste0(pathF_HT,"cleaned data w demographics.csv"))
df2 <- read_csv(paste0(pathF_RA,"cleaned data w demographics.csv"))

#renames columns to match each other
colnames(df1) <- colnames(df2)

#combine data from both studies
df <- rbind(df1,df2)

#write to csv
write.csv(df,paste0(pathF_RA,'combined cleaned data.csv'),row.names=F)