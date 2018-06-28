export default /* GraphQL */ `
  type User {
    _id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    email: String!
    googleId: String
  }

  extend type Query {
    allUsers: [User!]
    currentUser: User!
  }
`
