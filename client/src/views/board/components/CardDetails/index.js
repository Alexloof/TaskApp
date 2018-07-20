import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_DESC_TO_TASK from '../../../../api/mutations/task/addDescToTask'

import CardMembers from '../CardMembers'

import { Container, Title, SubTitle } from './style'

import Textarea from '../../../../components/Textarea'
import Button from '../../../../components/Button'

class CardDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskDesc: props.description,
      showEditTextarea: false
    }
  }

  onAddDesc = addDescToTask => {
    if (this.state.taskDesc) {
      addDescToTask()
      this.setState({ showEditTextarea: false })
    }
  }

  render() {
    const { title, _id, description, members, boardMembers } = this.props
    const { taskDesc, showEditTextarea } = this.state
    return (
      <Mutation
        mutation={ADD_DESC_TO_TASK}
        variables={{ taskId: _id, description: taskDesc }}
      >
        {(addDescToTask, { loading, error, data }) => (
          <Container>
            <Title>{title}</Title>
            <SubTitle>Members</SubTitle>
            <CardMembers
              taskMembers={members}
              boardMembers={boardMembers}
              taskId={_id}
            />
            <SubTitle>
              Description
              <span
                onClick={() =>
                  this.setState({ showEditTextarea: !showEditTextarea })
                }
              >
                Edit
              </span>
            </SubTitle>
            {!showEditTextarea && description ? (
              <p>{description}</p>
            ) : (
              <React.Fragment>
                <Textarea
                  value={taskDesc}
                  onChange={e => this.setState({ taskDesc: e.target.value })}
                  placeholder="Write a description to the task..."
                />
                <Button onClick={() => this.onAddDesc(addDescToTask)}>
                  Save
                </Button>
              </React.Fragment>
            )}

            <SubTitle>Comments</SubTitle>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default CardDetails
