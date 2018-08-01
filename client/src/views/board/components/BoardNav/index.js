import React, { Component } from 'react'

import AddListForm from '../AddListForm'

class BoardNav extends Component {
  render() {
    return (
      <div>
        BoardNav <AddListForm boardId={this.props.board._id} />
      </div>
    )
  }
}

export default BoardNav
