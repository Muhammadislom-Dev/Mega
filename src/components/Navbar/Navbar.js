import React, { useState } from 'react';
import './Scss/Navbar.scss';
import { Link } from 'react-router-dom';
import Img1 from './images/call.png'
import { useTranslation } from 'react-i18next';
import { Close, Language } from '@material-ui/icons';

const Navbar = ({ white, english, uzbek, russian, change1, change2, change3, langTitle, dataProducts, inputValue, filterData }) => {

    // window scrolling to change background-color of navbar

    window.addEventListener("scroll", function () {
        let navScroll = document.getElementById('nav');
        if (white) {
            navScroll.classList.toggle("white", window.scrollY > 10);
        } else if (!white) {
            navScroll.classList.toggle("black", window.scrollY > 10);
        }
    });

    // responsive navbar-nav show modal

    const [show, setShow] = useState(false)

    // language functions

    const [language, setLanguage] = useState(false)

    function changeHandle1() {
        change1(true)
        setLanguage(!language)
    }
    function changeHandle2() {
        change2(true)
        setLanguage(!language)
    }
    function changeHandle3() {
        change3(true)
        setLanguage(!language)
    }   
    
    const { t } = useTranslation()

    // category bar

    const [catBar, setCatBar] = useState(false)
    const [searchBar, setSearchBar] = useState(false)

    function openCategory(item){
        setCatBar(!catBar)
        setSearchBar(!item)
    }

    // search input methods

    const [dataProd, setDataProd] = useState(dataProducts)

    function clickedSearch(item, post){
        setCatBar(post)
        setSearchBar(item)
    }

    // like 

    const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)

    // add 

    const [addedProds, setAddedProds] = useState(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : 0)

    return (
        <>
            <div id={`nav`} className={`Navbar`}>
                <nav className="navbar navbar-expand justify-content-between align-items-center">
                    <div className="navbar-brand portfolio" onClick={() => clickedSearch(false)}>
                        <Link className="nav-link" to="/"><h1 className='nav-title'>MADEINUZB</h1></Link>
                    </div>
                    <ul className='navbar-nav header-menu'>
                        <li className='nav-item' onClick={() => openCategory(true)}>
                            <div className='category-menu'>
                                <span>Categories</span> <i className={`fa fa-bars d-block mx-2 ${catBar && "d-none"}`}></i> <Close className={`times d-block mx-2 ${!catBar && "d-none"}`} />
                                <div className={`category-tools ${!catBar && "d-none"}`}>
                                    {dataProducts.map((data) => (
                                        <p className='result' onClick={() => clickedSearch(false)}>{data.name_en}</p>
                                    ))}                                    
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className="search-bar">
                                <input type="search" className={`${searchBar && "active"}`} value={inputValue} onChange={(e) => filterData(e)} placeholder='Search...' onClick={() => clickedSearch(true, false)} />
                                <i className='fa fa-search'></i>
                                <div className={`search-filter ${!searchBar && "d-none"}`}>
                                    {dataProducts.map((data) => (
                                        <p className='result' onClick={() => clickedSearch(false)}>{data.name_en}</p>
                                    ))}                                    
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className={`navbar-nav main-menu ${show && "show"}`} onClick={() => clickedSearch(false)}>
                        <li className='nav-item'>
                            <Link to="/aboutus" className='nav-link'>About us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/chat" className="nav-link"><img src={Img1} className="call" /></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/saved" className="nav-link"><i className='fa fa-heart'><span>{numberLikes.length > 0 ? numberLikes.length : 0}</span></i></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/cart" className="nav-link"><i className='fa fa-shopping-cart'><span>{addedProds.length > 0 ? addedProds.length : 0}</span></i></Link>
                        </li>    
                        <Close className="fa fa-times" onClick={() => setShow(false)} />
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="language d-flex align-items-center justify-content-between">
                            {english &&
                                <div className={`change-language`} onClick={() => clickedSearch(false)}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language'><Language className='icon' /> {langTitle}</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1()}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2()}><a><a className='nav-link'>ENG</a></a></li>
                                        <li onClick={() => changeHandle3()}><a><a className='nav-link'>UZ</a></a></li>
                                    </ul>
                                </div>
                            }
                            {russian &&
                                <div className={`change-language`} onClick={() => clickedSearch(false)}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language'><Language className='icon' /> {langTitle}</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1()}><a><a className='nav-link'>РУ</a></a></li>
                                        <li onClick={() => changeHandle2()}><a><a className='nav-link'>АНГ</a></a></li>
                                        <li onClick={() => changeHandle3()}><a><a className='nav-link'>УЗ</a></a></li>
                                    </ul>
                                </div>
                            }
                            {uzbek &&
                                <div className={`change-language`} onClick={() => clickedSearch(false)}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language'><Language className='icon' /> {langTitle}</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1()}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2()}><a><a className='nav-link'>ING</a></a></li>
                                        <li onClick={() => changeHandle3()}><a><a className='nav-link'>O'Z</a></a></li>
                                    </ul>
                                </div>
                            }
                            <i className={`fa fa-bars`} onClick={() => setShow(true)}></i>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={`contr-nav ${!show && "d-none"}`} onClick={() => setShow(false)}></div>
            <div className={`contr-search ${!searchBar && "d-none"}`} onClick={() => clickedSearch(false, false)}></div>
            <div className={`contr-category ${!catBar && "d-none"}`} onClick={() => openCategory(true)}></div>
        </>
    );
};

export default Navbar;