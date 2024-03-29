import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Transition } from 'react-spring'

const customStyles = {
  content: {
    top: '13%',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxHeight: '80vh'
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
          items={this.state.content}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {content =>
            content
              ? props => <div style={props}>{this.state.content} </div>
              : props => <div style={props}>{this.state.content} </div>
          }
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
