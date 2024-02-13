import React, { useState } from "react";
import SignJoin from "./SignJoin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {

    const [popup, setPopup] = useState(true)

    const removePopup = () => {
        setPopup(false)
    }
    return (
        <>
            {popup && <div className="popup-container">

                <div className="popup">
                    <button onClick={removePopup}><FontAwesomeIcon className="icon-remove" icon={faXmark} /></button>
                    <SignJoin />
                </div>
            </div>}
        </>
    )
}
export default Popup;