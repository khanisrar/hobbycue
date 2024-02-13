import React from "react";
import Img from "../images/hobby.png";
const HobbyCommunity = () => {
    return (
        <>
            <div className="container-fluid hobby-community">
                <div className="container">
                    <h1>Your <span className="hobby">hobby</span>, Your <span className="comm">Community...</span></h1>
                    <button>Get Started</button>
                    <img src={Img} alt="hobbyImg" />
                </div>
            </div>
        </>
    )
}

export default HobbyCommunity;