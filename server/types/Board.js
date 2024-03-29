export default /* GraphQL */ `
  type Board {
    _id: ID!
    createdAt: String!
    name: String!
    members: [User!]!
    taskLists: [TaskList!]
  }

  extend type Query {
    board(id: ID!): Board!
    boards: [Board!]
  }

  extend type Mutation {
    addBoard(name: String!): Board!
    addMembers(boardId: ID!, membersEmail: [String!]!): Board!
  }
`
