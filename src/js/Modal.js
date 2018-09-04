import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/modal.css';

import util from '../js/util';
// 声明全局的变量和函数
const modalOpenClass = 'modal-open';

const toggleBodyClass = isOpen => {
  const body = document.body;
  if(isOpen) {
    body.classList.add(modalOpenClass);
  } else {
    body.classList.remove(modalOpenClass);
  }
}

export default class Modal extends Component {
  constructor(props) {
    super(props);
    // util.bindMethods(['onCancelClick', 'onOkClick', 'close'], this);

    this.state = {
      isOpen: props.isOpen || false
    };
    toggleBodyClass(props.isOpen);
    util.bindMethods(['onCancelClick', 'onOkClick', 'close'], this);

  }
  // 关闭弹层函数
  close() {
    this.setState({
      isOpen: false
    }) 
  }

  // 点击确认回调函数
  onOkClick() {
    this.props.onOk();
    this.close();
  }

  // 点击取消回调函数
  onCancelClick() {
    this.props.onCancel();
    this.close();
  }

  componentWillReceiveProps(nextProps) {
    if('isOpen' in nextProps) {
      this.setState({
        isOpen: nextProps.isOpen
      });
    }
  }
  render() {
    const {
      title,
      children,
      className,
      okText,
      cancelText,
      onOk,
      onCancel,
      maskClosable
    } = this.props;
    return (
      <div className='modal-container' onClick={maskClosable ? this.close : () => {}}>
        <div className="modal-body">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">
            <button className="ok-btn" onClick={this.onOkClick}>{okText}</button>
            <button className="cancel-ben" onClick={this.onCancelClick}>{cancelText}</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  maskClosable: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  type:PropTypes.oneOf(['alert', 'confirm', 'error'])
};
Modal.defaultProps = {
  className: '',
  maskClosable: true,
  onCancel: () => {},
  onOk: () => {},
  okText: 'ok',
  cancelText: 'Cancel',
  type: 'alert'
};