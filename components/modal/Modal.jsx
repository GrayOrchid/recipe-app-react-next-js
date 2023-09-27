import React from 'react';
import './modal.css'
const Modal = ({ children, show, setShow }) => {
    return (
        <div className={show ? 'modal __active' : 'modal'} onClick={() => setShow(false)}>
            <div className='modal__body' onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
}

export default Modal;
