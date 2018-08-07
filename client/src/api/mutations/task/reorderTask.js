import gql from 'graphql-tag'

export default gql`
  mutation reorderTask(
    $id: ID!
    $from: Int!
    $to: Int!
    $fromList: ID!
    $toList: ID!
  ) {
    reorderTask(
      id: $id
      from: $from
      to: $to
      fromList: $fromList
      toList: $toList
    ) {
      _id
      createdAt
      description
      title
      order
    }
  }
`
