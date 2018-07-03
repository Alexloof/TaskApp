export default /* GraphQL */ `
  type Board {
    _id: ID!
    createdAt: String!
    name: String!
    members: [User!]!
  }

  extend type Query {
    boardByUser(id: String): Board
  }
`
