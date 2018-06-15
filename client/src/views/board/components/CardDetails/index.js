import React, { Component } from 'react'

import { Container, Title, SubTitle } from './style'

import Textarea from '../../../../components/Textarea'
import Button from '../../../../components/Button'
import Avatar from '../../../../components/Avatar'

class CardDetails extends Component {
  render() {
    const { content } = this.props
    return (
      <Container>
        <Title>{content}</Title>
        <SubTitle>Members</SubTitle>
        <Avatar src="https://media.licdn.com/dms/image/C5103AQF_PFTuP8_8xA/profile-displayphoto-shrink_200_200/0?e=1530298800&v=beta&t=LZM7EC9K127BDnzUoBU1_ehwwKEJWbwrSZg1yyuRjaM" />
        <Avatar src="https://gfx.aftonbladet-cdn.se/image-c/16045605/500/normal/202f3fbc7c3ca/bard034.jpg" />
        <SubTitle>Description</SubTitle>
        <Textarea placeholder="Write a description to the task..." />
        <Button>Save</Button>
        <SubTitle>Comments</SubTitle>
      </Container>
    )
  }
}

export default CardDetails
