import React from "react";
import HeaderLeft from './HeaderLeft';
import SignJoin from '../SignJoin';
import HeaderImg from "../images/header-img.png";


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <HeaderLeft />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <SignJoin />
                        </div>
                    </div>
                    <img style={{ width: '100%', marginTop: '50px' }} src={HeaderImg} className="lg-none" alt="" />
                </div>
            </div></>
    )
}
export default Header;