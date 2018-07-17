export default /* GraphQL */ `
  type TaskList {
    _id: ID!
    name: String!
    createdAt: String!
    order: Int!
    tasks: [Task!]
    board: Board!
  }

  extend type Mutation {
    addTaskList(boardId: ID!, name: String!): TaskList!
    reorderTaskList(id: ID!, from: Int!, to: Int!): TaskList!
  }
`
