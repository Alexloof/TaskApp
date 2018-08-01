import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Transition } from 'react-spring'

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
        <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {this.state.content
            ? styles => <div style={styles}>{this.state.content} </div>
            : styles => <div style={styles}>{this.state.content} </div>}
        </Transition>
      </ReactModal>
    )
  }
}

export function openModal(content) {
  openModalFn(content)
}

export function closeModal() {
  closeModalFn()
}

export default Modal
