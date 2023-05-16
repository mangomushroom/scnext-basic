import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

export class MockGraphQLClient extends GraphQLClient {
  constructor() {
    super(''); // Pass an empty string as the endpoint since we won't be making any network requests
  }

  request<T, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V>,
    ...variablesAndRequestHeaders: any[]
  ): Promise<T>;
  request<T, V extends Variables = Variables>(options: any): Promise<T>;
  request<T = any, V = any>(query: string | any, variables?: V) {
    // Return mock data here instead of making a network request
    // You can use the query and variables parameters to determine what mock data to return
    const data = {"item":{"id":"3C1715FE6A134FCF845FDE308BA9741D","path":"/sitecore/templates","children":[{"id":"BAD98E0EC1B54598AC1321B06218B30C","name":"Branches"},{"id":"2E5892C5A5294646989B1F15DE10453E","name":"Common"},{"id":"DB1CC00F719D4400B50D73F007B15D6C","name":"Design Guide"},{"id":"AAD495A81F064041AB811CE86247732C","name":"Global"},{"id":"7C71AE4146BC40C5A785568E6C6AD773","name":"Legacy Site"},{"id":"D2833213CB77431A910855E62E4E47FD","name":"List Manager"},{"id":"E6904C9A3ACE4B53B4654C05C6B1F1CC","name":"Modules"},{"id":"9F873FC4D7C242129C5E1F3C5AEBCBFF","name":"Pumpkin"},{"id":"DE159E4FB7A14ECB9D10105F270FCFD5","name":"Site"},{"id":"37F42940FC0E44D59CF18C0073949F1E","name":"Social Media"},{"id":"4BF98EF51D094DD19AFE795F9829FD44","name":"System"},{"id":"D5DE1FEBC49347E9B0602F59E7DA1021","name":"Taxonomy"},{"id":"EF1F13FDC75F425983931D9C00267177","name":"Validation"},{"id":"B26BD0358D0A4DF38F672DE3C7FDD74A","name":"Foundation"},{"id":"8F3430793CC54EF7BC2732ADDB46F45E","name":"Feature"},{"id":"825B30B4B40B422E992023A1B6BDA89C","name":"Project"},{"id":"73BAECEB744D4D4AA7A57A935638643F","name":"Sample"},{"id":"B29EE504861C492F95A30D890B6FCA09","name":"User Defined"}]}};
    return Promise.resolve(data as T);
  }
}
