library(igraph)
library(tibble)
library(dplyr)

swow_r100.df <- read.csv("SWOW-EN.R100.csv",na.strings=c("","NA"))
swow_us.df <- read.csv("SWOW-EN.complete.csv",na.strings=c("","NA"))

swow_r100.long <- reshape2::melt(swow_r100.df,measure.vars=c("R1","R2","R3"),value.name="response")

cue <- swow_r100.long %>%
  distinct(cue) %>%
  rename(label = cue)

response <- swow_r100.long %>%
  distinct(response) %>%
  rename(label = response)

nodes <- full_join(cue, response, by="label")
nodes <- nodes %>% rowid_to_column("id")

per_route <- swow_r100.long %>%  
  group_by(cue, response) %>%
  summarise(weight = n()) %>% 
  ungroup()

edges <- per_route %>% 
  left_join(nodes, by = c("cue" = "label")) %>% 
  rename(from = id)

edges <- edges %>% 
  left_join(nodes, by = c("response" = "label")) %>% 
  rename(to = id)

edges <- select(edges,from,to,weight)

routes_igraph <- graph_from_data_frame(d=edges,vertices=nodes,directed=T)

degree <- data.frame(total_degree,in_degree,out_degree)
degree <- rowid_to_column(degree)
degree <- merge(x=nodes,y=degree,by.x="id",by.y="rowid",all.x=T)

# total_closeness <- closeness(routes_igraph,mode="all")
# in_closeness <- closeness(routes_igraph,mode="in")
# out_closeness <- closeness(routes_igraph,mode="out")

# closeness <- data.frame(total_closeness,in_closeness,out_closeness)
# closeness <- rowid_to_column(closeness)
# closeness <- merge(x=nodes,y=closeness,by.x="id",by.y="rowid",all.x=T)

###
summary(routes_igraph)
comp <- components(routes_igraph)
comp$csize %>% max()

# extract the largest connected component 
routes_igraph_lcc <- induced_subgraph(routes_igraph, v = comp$membership == 1)
summary(routes_igraph_lcc)

total_closeness_lcc <- closeness(routes_igraph_lcc,mode="all")
hist(scale(total_closeness_lcc, center = F), breaks = 100)

save(total_closeness_lcc, file = 'tmp.RData')
load('tmp.Rdata')

total_degree <- degree(routes_igraph_lcc,mode="all")
in_degree <- degree(routes_igraph_lcc,mode="in")
out_degree <- degree(routes_igraph_lcc,mode="out")

summary_lcc <- data.frame(total_degree,in_degree,out_degree,total_closeness_lcc)
summary_lcc <- summary_lcc %>% rowid_to_column("id")

nodes_lcc <- as.data.frame(vertex.attributes(routes_igraph_lcc))
nodes_lcc <- nodes_lcc %>% rename(id=name)
nodes_lcc$id <- as.numeric(nodes_lcc$id)

summary_lcc <- left_join(summary_lcc,nodes_lcc,by="id")

summary_lcc <- summary_lcc %>% 
  filter(total_degree>1) %>% 
  filter(out_degree>1) %>% 
  filter(in_degree>1)

summary_lcc$scaled <- (summary_lcc$total_closeness_lcc-min(summary_lcc$total_closeness_lcc))/(max(summary_lcc$total_closeness_lcc)-min(summary_lcc$total_closeness_lcc))

hist(summary_lcc$scaled, breaks = 100)
quantile(summary_lcc$total_degree)

write.csv(summary_lcc,"potential stimuli.csv")
