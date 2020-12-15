import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { useGraphqlClient } from './apolloGraphqclient';
import { gql } from '@apollo/client';
import { AllUsersData } from '../model/all_users_data';
import {AllUsersVariables} from '../model/all_users_variables';


const ALL_Users_QUERY = gql`
query AllUsers(
    $first: Int = 50
    $before:String
      $after:String
) {
  allUsers(first: $first
    before:$before
    after:$after
    ) {
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




//"2020-01-31T00:00"
//"2020-01-01T00:00"



export const getAllUsersData = async (dateAfter:string, dateBefore:string) => {

  const variables:AllUsersVariables = {
    after: dateAfter,
    before: dateBefore
  }

  const client: ApolloClient<NormalizedCacheObject> = useGraphqlClient();
  const response =
    await client.query({
      query: ALL_Users_QUERY,
      variables: variables
    })
      .then(response => {
        const allUsersData: AllUsersData = response.data;
        console.log("allUsersData", allUsersData)
        return allUsersData;
      })
      .catch((err) => {
        console.log('client.query error:', err);
      })
  return response;
}
