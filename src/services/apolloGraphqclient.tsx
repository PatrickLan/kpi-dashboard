import { createHttpLink, ApolloLink, InMemoryCache, ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uri = "https://devteilautos.zemtu.com/graphql";

export function useGraphqlClient() {


    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9saXZlciIsImV4cCI6MTU5MTg3Mzg4Niwib3JpZ0lhdCI6MTU5MTg3MzI4Nn0.kTwH28Qblrl07BB4JvGGGv4TmLENa_kqJn4aoN6g3qk'
    
    // localStorage.getItem('token');
    
    const httpLink = createHttpLink({
        uri: `${uri}`,
    });
    
    const authentictationHeader = setContext((operation, context) => ({
        headers: {
            Authorization: token ? `JWT ${token}` : '',
        },
    }));
    
    const apolloLink = ApolloLink.from([authentictationHeader, httpLink]);
    
    const client = new ApolloClient({
        link: apolloLink,
        cache: new InMemoryCache(),
    });

    return client;
}