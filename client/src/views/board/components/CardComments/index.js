import React, { Component } from 'react'
import moment from 'moment'
import { Mutation } from 'react-apollo'
import ReactDOM from 'react-dom'

import ADD_COMMENT from 'api/mutations/comment/addComment'

import { Input, Avatar } from 'components'

import { CommentsList, Comment } from './style'

class CardComments extends Component {
  state = {
    commentInput: ''
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  addComment = (e, addComment) => {
    e.preventDefault()
    console.log('ADD COMMENT')
    if (this.state.commentInput) {
      addComment()
      this.setState({ commentInput: '' })
    }
  }

  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.commentsList)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  render() {
    const { commentInput } = this.state
    const { comments, taskId } = this.props
    return (
      <Mutation
        mutation={ADD_COMMENT}
        variables={{ taskId, text: commentInput }}
      >
        {addComment => (
          <div>
            <CommentsList
              ref={node => {
                this.commentsList = node
              }}
            >
              {comments.map(comment => (
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
            </CommentsList>
            <form onSubmit={e => this.addComment(e, addComment)}>
              <Input
                value={commentInput}
                onChange={e => this.setState({ commentInput: e.target.value })}
                placeholder="Comment on the task..."
              />
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default CardComments
