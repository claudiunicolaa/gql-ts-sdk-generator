# Simple GraphQL Server

This is a simple GraphQL server that uses Apollo Server.

## Setup

```bash
# Install dependencies
npm install

# Start server
npm start
```

Server runs at `http://localhost:4000`

## API

### Query

```graphql
query {
  books {
    id
    title
    author
  }
}
```

### Mutation

```graphql
mutation {
  addBook(input: { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }) {
    id
    title
    author
  }
}
```

