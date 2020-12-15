import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { useGraphqlClient } from './apolloGraphqclient';
import {gql} from '@apollo/client';
import {AllUsersData} from '../model/all_users_data';


const ALL_Users_QUERY = gql`
query AllUsers(
    $first: Int = 50
) {
  allUsers(first: $first ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        email
        zip
        city
        username
        firstName
        lastName
        }
        cursor
      }
    }
  }`


  





export const getAllUsersData = async () => {

const client: ApolloClient<NormalizedCacheObject> = useGraphqlClient();
        const response = 
            await client.query({
                query: ALL_Users_QUERY,
                // variables: variables
            })
                .then(response => {
                    const allUsersData:AllUsersData = response.data;
                    console.log("allUsersData", allUsersData)
                    return allUsersData;
                })
                .catch((err) => {
                    console.log('client.query error:', err);
                })        
        return response;
    }
