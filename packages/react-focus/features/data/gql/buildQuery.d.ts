import { IntrospectionResult, BuildQuery } from './build';
export declare const buildQueryFactory: (buildVariablesImpl?: (introspectionResults: IntrospectionResult) => (resource: import("./build").IntrospectedResource, raFetchMethod: string, params: any, queryType: import("graphql").IntrospectionField) => {}, buildGqlQueryImpl?: (introspectionResults: IntrospectionResult) => (resource: import("./build").IntrospectedResource, raFetchMethod: string, queryType: import("graphql").IntrospectionField, variables: any) => any, getResponseParserImpl?: (introspectionResults: IntrospectionResult) => (raFetchMethod: string, resource: import("./build").IntrospectedResource, queryType: import("graphql").IntrospectionField) => (response: import("@apollo/client").ApolloQueryResult<any>) => {
    data: any;
    total: any;
} | {
    data: any;
    total?: undefined;
}) => (introspectionResults: IntrospectionResult) => BuildQuery;
declare const _default: (introspectionResults: IntrospectionResult) => BuildQuery;
export default _default;
