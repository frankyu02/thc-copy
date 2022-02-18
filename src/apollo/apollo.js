import { useMemo } from "react";
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
} from "@apollo/client";

let apolloClient;

export function createApolloClient() {
    return new ApolloClient({
        ssrMode: (typeof window === "undefined"),
        link: new HttpLink({
            uri: process.env.DUTCHIE_API_URL,
            headers: {
                Authorization: `Bearer ${process.env.DUTCHIE_API_KEY}`,
            },
        }),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(initialState) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") {
        return _apolloClient;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = _apolloClient;
    }

    return _apolloClient;
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}