export default /* GraphQL */ `
  type Board {
    _id: ID!
    createdAt: String!
    name: String!
    members: [User!]!
    taskLists: [TaskList!]
  }

  extend type Query {
    userBoards(userId: ID!): [Board!]
  }

  extend type Mutation {
    addBoard(name: String!): Board!
  }
`
