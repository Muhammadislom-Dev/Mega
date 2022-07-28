import React from 'react';
import './Scss/Card.scss';
import Img1 from './images/card1.png';
import Img2 from './images/card2.png';
import { Headset, LocalAtm, LocalShipping, Payment } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const CardSimple = () => {
    return (
        <div className='Card'>
            <div className='wrapper'>
                {/* <h1>Hot Offers</h1>
                <div className='row cards'>
                    <div className='col-md-6 e1'>
                        <div className='body'>
                            <img src={Img2} />
                            <span>Up to</span>
                            <h3>20% Off</h3>
                            <p>On Your Daily Needs</p>
                            <Link to="/off" className='nav-link shop'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='col-md-6 e2'>
                        <div className='body'>
                            <img src={Img1} />
                            <span>Up to</span>
                            <h3>20% Off</h3>
                            <p>Snack & Catering</p>
                            <Link to="/off" className='nav-link shop'>Shop Now</Link>
                        </div>
                    </div>
                </div> */}
                <div className='col-md-12'>
                    <div className='body row'>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <LocalShipping className='icon' />
                                <div className='d-block mx-'>
                                    <h5>Free Shipping</h5>
                                    <p>Free delivery for all orders</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <LocalAtm className='icon' />
                                <div className='d-block mx-'>
                                    <h5>Money Guarantee</h5>
                                    <p>30 days money back</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <Headset className='icon' />
                                <div className='d-block mx-'>
                                    <h5>24/7 Support</h5>
                                    <p>Friendly 24/7 support</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-3'>
                            <Link to="/" className='tool nav-link'>
                                <Payment className='icon' />
                                <div className='d-block mx-'>
                                    <h5>Secure Payment</h5>
                                    <p>All cards accepted</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSimple;