import React from 'react';
import './Scss/Header.scss';
import { BrowserRouter, Link, Switch, Route  } from 'react-router-dom';
import Img1 from './images/slider.png'
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

const Header = ({english, arabian, uzbek, russian}) => {

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

    const {t} = useTranslation()

    const dataSlider = [
        {id: 1, name: "Discover New Amazing Grocery Deals", desc: "The most Healty organic Food is save for health The most Healty organic Food is save for health", img: Img1},
        {id: 2, name: "Discover New Amazing Grocery Deals", desc: "Discounts for pools", img: Img1},
        {id: 3, name: "Discover New Amazing Grocery Deals", desc: "The most Healty organic Food is save for health", img: Img1},
        {id: 4, name: "Discover New Amazing Grocery Deals", desc: "The most Healty organic Food is save for health", img: Img1},
    ]

    return (
        <div className='Header'>            
            <div className='wrapper'>
                <div className='carousel-slide'>
                    <Slider {...settings} className="slider">
                        {dataSlider.map((data) => {
                            return(
                                <div className='slider-page col-md-12'>
                                    <div className='body'>
                                        <img src={data.img} />
                                        <div className='col-6 title'>
                                            <h2>{data.name}</h2>
                                        </div>
                                        <div className='col-6 desc'>
                                            <p>{data.desc}</p>
                                        </div>
                                        <div className='col-6 link'>
                                            <Link to={`/shop${data.id}`} className='nav-link shop'>Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Header;