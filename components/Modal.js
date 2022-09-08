import React, { useEffect, useCallback } from "react";
import styles from "../styles/Modal.module.css"
import Image from "next/image";

const Modal = ( props, modal ) => {
    if(!props.show){
        return null
    }

const { onClose } = props;
const { image } = props;
const {artType} = props;
const { artDate } = props;
const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27){
    onClose()
    }
}, [onClose])

useEffect(() =>{
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup(){
        document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
}, [closeOnEscapeKeyDown])



return (
<div className={styles.modal} onClick={props.onClose}>
    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
            <h4 className={styles.modalTitle}>Modal Titel</h4>
        </div>
        <div className={styles.modalBody}>
        <Image src={modal.image} alt="test" height="150px" width="75px" />
        Type: {`${modal.artType}`}
        <br/>
        Date: {`${modal.artDate}`}
        </div>
        <div className={styles.modalFooter}>
            <button onClick={props.onClose} className="modal-close">Close</button>
        </div>
    </div>
</div>
    )
}

export default Modal