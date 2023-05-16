// services/graphql.ts
import { GraphQLClient } from 'graphql-request';
import { MockGraphQLClient } from '../Mocks/MockGraphQLClient';

export function createGraphQLClient(endpoint: string) : GraphQLClient {
  const useMockData = process.env.MOCK_GRAPGQL === 'true';
  if (useMockData) {
    return new MockGraphQLClient();
  } else {
    const graphQLClient = new GraphQLClient(endpoint);

    graphQLClient.setHeader('X-GQL-Token', process.env.PREVIEW_CH_ENDPOINT as string);

    return graphQLClient
  }
}
