export default /* GraphQL */ `
  type Comment {
    _id: ID!
    createdAt: String!
    text: String!
    task: Task!
    user: User!
  }

  extend type Mutation {
    addComment(taskId: ID!, text: String!): Comment!
  }

  extend type Query {
    comments(taskId: ID!): [Comment!]
  }
`
