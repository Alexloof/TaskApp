export default /* GraphQL */ `
  type Board {
    _id: ID!
    createdAt: String!
    name: String!
    members: [User!]!
    taskLists: [TaskList!]
  }

  extend type Query {
    userBoards: [Board!]
  }

  extend type Mutation {
    addBoard(name: String!): Board!
  }
`
