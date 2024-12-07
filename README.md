# GraphQL TypeScript SDK Generator

This tool generates a TypeScript SDK from a GraphQL API.


## Bird eye view

```mermaid
flowchart TD
    classDef apiClass fill:#1a2634,stroke:#a9b1ba,color:#fff
    classDef getGraphQLSchemaClass fill:#4361ee,stroke:#2d3f9e,color:#fff
    classDef gqlGeneratorClass fill:#219fbc,stroke:#187c94,color:#fff
    classDef graphQLCodgenClass fill:#01d8,stroke:#0096b4,color:#fff

    %% Adding step numbers in the labels
    API[GraphQL API]:::apiClass
    Schema[1. get-graphql-schema]:::getGraphQLSchemaClass
    Generator[2. gql-generator]:::gqlGeneratorClass
    Codegen[3. graphql-codegen]:::graphQLCodgenClass
    
    SchemaFile[schema.graphql]:::getGraphQLSchemaClass
    Operators[operators/]:::gqlGeneratorClass
    Generated[sdk/]:::graphQLCodgenClass

    %% External connections
    API --> |fetch schema| Schema
    
    %% Tool operations
    Schema --> |write| SchemaFile
    Generator --> |read| SchemaFile
    Generator --> |write| Operators
    Codegen --> |read| APIFiles
    Codegen --> |write| Generated
    
    %% Styling
    subgraph APIFiles [API files]
        SchemaFile
        Operators
    end

    subgraph GeneratedFiles [SDK implementation]
        Generated
    end
    
    subgraph ProjectFiles [Project Files]
        APIFiles
        GeneratedFiles
    end
```


## Usage

Set the GraphQL API URL in the environment variable `GRAPHQL_API_URL`.
```bash
export GRAPHQL_API_URL=http://localhost:4000
```

Run the generate script (full process):
```bash
npm run generate
```

Run the generate script (step by step):
```bash
npm run get-graphql-schema
npm run gqlg
npm run codegen
```
