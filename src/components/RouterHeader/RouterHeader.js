import React from 'react';
import Advertising from '../Advertising/Advertising';
import CardSimple from '../Card/Card';
import Categories from '../Category';
import Header from '../Header/Header';
import Products from '../Product';

const RouterHeader = ({dataProducts, english, arabian, uzbek, russian}) => {
    return (
        <div className='RouterHeader'>
            <Header english={english} russian={russian} uzbek={uzbek} arabian={arabian} />            
            <Categories english={english} russian={russian} uzbek={uzbek} main={true} all={false} />
            <Advertising english={english} russian={russian} uzbek={uzbek} />
            <Products top={true} saved={false} all={false} />
            <CardSimple english={english} russian={russian} uzbek={uzbek} />
        </div>
    );
};

export default RouterHeader;