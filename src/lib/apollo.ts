import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oghgd500tw01xt0jg8fzeq/master',
    cache: new InMemoryCache()
})