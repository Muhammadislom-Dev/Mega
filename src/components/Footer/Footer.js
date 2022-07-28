import React from 'react';
import './Scss/Footer.scss';
import Img1 from './images/coding.png';
import Img2 from './images/media.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = ({ english, arabian, uzbek, russian }) => {

    const { t } = useTranslation()

    return (
        <div className="Footer">
            <div className='wrapper'>
                <div className='f1 row'>
                    <div className='col-3 c1'>
                        <h3>MADEINUZB</h3>
                        <p>This is the usefull template from Sebo.
                            You can buy this on our website, UI8
                            and also our Creativemarket.
                        </p>
                        <div className='icons'>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-play'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-github'></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-3 c4'>
                        <h6>Subscribe Us</h6>
                        <input type="email" placeholder='Your email here...' />
                        <button className='subs-btn'>Subscribe</button>
                    </div>
                    <div className='col-2 c2'>
                        <ul>
                            <li className='title'>Products</li>
                            <li><a className='nav-link'>Features</a></li>
                            <li><a className='nav-link'>Enterprise</a></li>
                            <li><a className='nav-link'>Security</a></li>
                            <li><a className='nav-link'>Customer Store</a></li>
                            <li><a className='nav-link'>Pricing</a></li>
                            <li><a className='nav-link'>Demo</a></li>
                        </ul>
                    </div>
                    <div className='col-2 c2'>
                        <ul>
                            <li className='title'>Teams</li>
                            <li><a className='nav-link'>Engineering</a></li>
                            <li><a className='nav-link'>Financial Services</a></li>
                            <li><a className='nav-link'>Sales</a></li>
                            <li><a className='nav-link'>IT</a></li>
                            <li><a className='nav-link'>Customer Support</a></li>
                            <li><a className='nav-link'>Human Resources</a></li>
                            <li><a className='nav-link'>Media</a></li>
                        </ul>
                    </div>
                    <div className='col-2 c2'>
                        <ul>
                            <li className='title'>Company</li>
                            <li><a className='nav-link'>Features</a></li>
                            <li><a className='nav-link'>Enterprise</a></li>
                            <li><a className='nav-link'>Security</a></li>
                            <li><a className='nav-link'>Customer Store</a></li>
                            <li><a className='nav-link'>Pricing</a></li>
                            <li><a className='nav-link'>Demo</a></li>
                        </ul>
                    </div>
                    <div className='col-3 c3'>
                        <h6>Subscribe Us</h6>
                        <input type="email" placeholder='Your email here...' />
                        <button className='subs-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;