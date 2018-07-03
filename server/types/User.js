export default /* GraphQL */ `
  type User {
    _id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    email: String!
    avatar: String
    googleId: String
    facebookId: String
    boards: [Board!]
  }

  extend type Query {
    allUsers: [User!]
    currentUser: User!
  }
`
