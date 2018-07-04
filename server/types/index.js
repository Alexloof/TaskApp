import User from './User'
import Auth from './Auth'
import Board from './Board'
import TaskList from './TaskList'
import Task from './Task'
import Comment from './Comment'

const Root = /* GraphQL */ `
  # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`

export default [Root, User, Auth, Board, TaskList, Task, Comment]
