export default /* GraphQL */ `
  type TaskList {
    _id: ID!
    name: String!
    createdAt: String!
    order: Int!
    tasks: [Task!]
  }

  extend type Mutation {
    addTaskList(name: String!): TaskList!
    reorderTaskList(id: ID!, from: Int!, to: Int!): TaskList!
  }
`
