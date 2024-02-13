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
                    <FontAwesomeIcon onClick={removePopup} className="icon-remove" icon={faXmark} />
                    <SignJoin />
                </div>
            </div>}
        </>
    )
}
export default Popup;