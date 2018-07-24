import React, { Component } from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '13%',
    left: 'auto',
    right: 'auto',
    bottom: 'auto'
  },
  overlay: {
    background: '#00000082',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

let openModalFn
let closeModalFn

class Modal extends Component {
  state = {
    modalIsOpen: false,
    content: ''
  }

  componentDidMount() {
    openModalFn = this.openModal
    closeModalFn = this.closeModal
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

export function clodeModal() {
  closeModalFn()
}

export default Modal
