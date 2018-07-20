export default /* GraphQL */ `
  type Task {
    _id: ID!
    createdAt: String!
    title: String!
    description: String
    order: Int!
    members: [User!]
    comments: [Comment!]
    taskList: TaskList!
  }

  extend type Mutation {
    addTask(taskListId: ID!, title: String!): Task!
    addUserToTask(taskId: ID!): Task!
    addDescToTask(taskId: ID!, description: String!): Task!
    reorderTask(
      id: ID!
      from: Int!
      to: Int!
      fromList: ID!
      toList: ID!
    ): Task!
  }
`
