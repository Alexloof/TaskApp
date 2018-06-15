import React, { Component } from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    background: '#00000082'
  }
}

let openModalFn

class Modal extends Component {
  state = {
    modalIsOpen: false,
    content: ''
  }

  componentDidMount() {
    openModalFn = this.openModal
  }

  openModal = content => {
    this.setState({ modalIsOpen: true, content })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, content: '' })
  }

  render() {
    return (
      <ReactModal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {this.state.content}
      </ReactModal>
    )
  }
}

export function openModal(content) {
  openModalFn(content)
}

export default Modal
