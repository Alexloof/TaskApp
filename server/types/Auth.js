export default /* GraphQL */ `
  extend type Mutation {
    loginOrSignup(email: String!): AuthPayload
  }

  type AuthPayload {
    token: String
    user: User
  }
`
