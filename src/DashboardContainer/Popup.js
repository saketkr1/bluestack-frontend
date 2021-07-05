import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Modal from 'react-modal'
import { GoX } from 'react-icons/go'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
Modal.setAppElement('#root')

export default class Popup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
    label: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    size: 'small',
    label: 'Test',
    title: '',
    isOpen: false,
    children: null,
    closeModal: () => { },
  }

  render() {
    const {
      label, title, isOpen, closeModal, children,
    } = this.props
    return (
      <Modal

        contentLabel={label}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modalheader">
          <h2>
            {title}
          </h2>
          <span className="close_icon" onClick={closeModal}><GoX /></span>
        </div>
        {children}
      </Modal>
    )
  }
}
