import React, { useState } from "react";
import './Scss/Categories.scss';
import { Category } from "../../utils/category";
import { CardCont, Container, Wrap, Wrapper, Card, Info } from "./style";
import CardSimple from "../Card/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

export const Categories = ({all, main}) => {

// carousel for categories in mainPage

const [carousel, setCarousel] = useState(0)
const [activeCar, setActiveCar] = useState(false)

function decrement(item){
  if(carousel > 0){
    setCarousel(carousel - 9)
    setActiveCar(true)
  }
}

function increment(){
  if(carousel + 9 <= Category.length ){
    setCarousel(carousel + 9)
    setActiveCar(false)
  }
}

  return (
    <Container className="Categories">
      {/* <Container.BG /> */}
      <Wrap className="wrapper">
        {all &&
          <Wrap.Title>
            <Wrap.Burger />
            Categories
          </Wrap.Title>
        }
        <Wrapper>
          {main &&
            <div className="col-md-12 slide-tools">
              <div className="d-flex">
                <h1>Browse Our Categories</h1>
                <Link className="nav-link" to="/categories">All Categories <i className="fa fa-angle-right mx-2"></i></Link>
              </div>
              <div className="d-flex c2">
                <i className={`fa fa-angle-left ${activeCar && "active"}`} onClick={() => decrement()}></i>
                <i className={`fa fa-angle-right mx-3 ${!activeCar && "active"}`} onClick={() => increment()}></i>
              </div>
            </div>
          }
          <CardCont className="row categories">
            {Category.slice(carousel, carousel+9).map((value) => {
              return (
                <div className="col-3 categ">
                  <Card key={value.id} className="body">
                    <Card.Title className="title">{value.title}</Card.Title>
                    <Card.Img src={value.img} alt="cardImg" />
                  </Card>
                </div>
              );
            })}
          </CardCont>
        </Wrapper> 
        {all &&
          <div className="col-md-12 prod-pagination">
            <Stack spacing={2}>          
              <Pagination count={5} variant="outlined" shape="rounded" />
            </Stack>      
          </div>
        } 
      </Wrap>
      {all &&
        <CardSimple />
      }
    </Container>
  );
};

export default Categories;
