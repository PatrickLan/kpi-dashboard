import { createHttpLink, ApolloLink, InMemoryCache, ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uri = "https://devteilautos.zemtu.com/graphql";

export function useGraphqlClient() {


    const token = 'XXX'
    
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
