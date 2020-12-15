import  {PageInfo} from './all_users_page_info'; 
import {UserNodeEdge} from './user_node_edge';

export interface UserNodeConnection{
    pageInfo: PageInfo,
    edges: UserNodeEdge[]
}