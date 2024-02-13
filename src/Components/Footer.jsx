import React from 'react';
import Facebook from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import Instagram from "./images/instagram.png";
import Pinterest from "./images/pinterest.png";
import Google from "./images/google.png";
import Youtube from "./images/youtube.png";
import Telegram from "./images/telegram.png";
import Email from "./images/email.png";

const Footer = () => {
    return (
        <>
            <div className="container footer">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
                        <div className="content">
                            <h6>Hobbycue</h6>
                            <div className='links'>
                                <a href="">About Us</a>
                                <a href="">Our Services</a>
                                <a href="">Work with Us</a>
                                <a href="">FAQ</a>
                                <a href="">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
                        <div className="content">
                            <h6>How Do I</h6>
                            <div className="links">
                                <a href="">Sign Up</a>
                                <a href="">Add a Listing</a>
                                <a href="">Claim Listing</a>
                                <a href="">Post a Query</a>
                                <a href="">Add a Blog Post</a>
                                <a href="">Other Queries</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
                        <div className="content">
                            <h6>Quick Links</h6>
                            <div className="links">
                                <a href="">Listings</a>
                                <a href="">Blog Posts</a>
                                <a href="">Shop / Store</a>
                                <a href="">Community</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4">
                        <div className="content">
                            <h6>Social Media</h6>
                            <div className="social-links">
                                <a href='#'> <img src={Facebook} alt="SocialImg" /></a>
                                <a href='#'> <img src={Twitter} alt="SocialImg" /></a>
                                <a href='#'> <img src={Instagram} alt="SocialImg" /></a>
                                <a href='#'><img src={Pinterest} alt="SocialImg" /></a>
                                <a href='#'>   <img src={Google} alt="SocialImg" /></a>
                                <a href='#'> <img src={Youtube} alt="SocialImg" /></a>
                                <a href='#'> <img src={Telegram} alt="SocialImg" /></a>
                                <a href='#'> <img src={Email} alt="SocialImg" /></a>

                            </div>
                            <h6 className='mtop'>Invite Friends</h6>
                            <form className="d-flex justify-content-center align-items-center" >
                                <input type="email" placeholder="Email ID" className="email-input" />
                                <button className="btn-invite " type="submit">
                                    Invite
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright">
                © Purple Cues Private Limited
            </div>
        </>
    )
}

export default Footer;