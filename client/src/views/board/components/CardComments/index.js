import React, { Component } from 'react'
import moment from 'moment'

import { Input, Avatar } from 'components'

import { CommentsList, Comment } from './style'

class CardComments extends Component {
  state = {
    commentInput: ''
  }
  render() {
    const { commentInput } = this.state
    return (
      <div>
        <CommentsList>
          {this.props.comments.map(comment => (
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
        <Input
          value={commentInput}
          onChange={e => this.setState({ commentInput: e.target.value })}
          placeholder="Comment on the task..."
        />
      </div>
    )
  }
}

export default CardComments
