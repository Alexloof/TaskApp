import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import ADD_DESC_TO_TASK from '../../../../api/mutations/task/addDescToTask'

import { Container, Title, SubTitle, MembersGroup } from './style'

import Textarea from '../../../../components/Textarea'
import Button from '../../../../components/Button'
import Icon from '../../../../components/Icon'
import Avatar from '../../../../components/Avatar'

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
    const { title, _id, description } = this.props
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
            <MembersGroup>
              <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
              <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
              <Icon
                size="17px"
                name="plus"
                style={{ cursor: 'pointer', marginLeft: '5px' }}
              />
            </MembersGroup>

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
