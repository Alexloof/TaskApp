import React, { Component, Fragment } from 'react'
import moment from 'moment'
import { Mutation, Query } from 'react-apollo'
import ReactDOM from 'react-dom'

import ADD_COMMENT from 'api/mutations/comment/addComment'
import GET_COMMENTS from 'api/queries/comment/comments'

import { Input, Avatar } from 'components'

import { CommentsList, Comment } from './style'

class CardComments extends Component {
  state = {
    commentInput: ''
  }

  addComment = (e, addComment) => {
    e.preventDefault()

    if (this.state.commentInput) {
      addComment()
      this.setState({ commentInput: '' })
    }
  }

  render() {
    const { commentInput } = this.state
    const { taskId } = this.props

    return (
      <Mutation
        mutation={ADD_COMMENT}
        variables={{ taskId, text: commentInput }}
      >
        {addComment => (
          <Fragment>
            <Query query={GET_COMMENTS} variables={{ taskId }}>
              {result => <CommentsWrapper {...result} />}
            </Query>

            <form onSubmit={e => this.addComment(e, addComment)}>
              <Input
                value={commentInput}
                onChange={e => this.setState({ commentInput: e.target.value })}
                placeholder="Comment on the task..."
              />
            </form>
          </Fragment>
        )}
      </Mutation>
    )
  }
}

export default CardComments

// create another component to take advantage of CDU to auto scroll the comment list
class CommentsWrapper extends Component {
  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.commentsList)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  render() {
    const { data, loading, error } = this.props

    return (
      <CommentsList
        ref={node => {
          this.commentsList = node
        }}
      >
        <Fragment>
          {error && <h4>Could not find the board..., {error}</h4>}

          {!loading &&
            !error &&
            data.comments.map(comment => (
              <Comment key={comment._id}>
                <Comment.Avatar>
                  <Avatar src={comment.user.avatar} />
                </Comment.Avatar>
                <Comment.UserName>{comment.user.name}</Comment.UserName>
                <Comment.Time>
                  {moment(new Date(comment.createdAt)).fromNow()}
                </Comment.Time>
                <Comment.Text>{comment.text}</Comment.Text>
              </Comment>
            ))}
        </Fragment>
      </CommentsList>
    )
  }
}
