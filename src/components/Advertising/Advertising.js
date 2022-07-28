import React from 'react';
import './Scss/Advertising.scss';
import Img1 from './images/sale.png';
import { Link } from 'react-router-dom';

const Advertising = () => {

    const dataAdvertising = [
        {id: 1, name: "SALE ON MADE IN UZB", desc: "Discounts up to 80%", img: Img1}
    ]

    return (
        <div className='Advertising'>
            <div className='wrapper'>
                {dataAdvertising.map((data) => (
                    <div className='col-md-12'>
                        <Link to="/adver" className='body nav-link'>
                            <img src={data.img} />
                            <h1 className='title'>{data.name}</h1>
                            <p className='descript'>{data.desc}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advertising;