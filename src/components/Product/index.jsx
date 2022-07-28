import React, { useEffect, useState } from "react";
import { CardData, Electronics, ProdName } from "../../utils/electronics";
import {
  Button,
  Card,
  CardCont,
  CategoryTitles,
  Container,
  Icon,
  ProductTitles,
  Show,
  Wrap,
} from "./style";
import './Scss/Prod.scss'
import CardSimple from '../Card/Card';
import { Link } from "react-router-dom";

// import tv from "../../assets/imgs/tv.png";

export const Products = ({all, saved, top}) => {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(true);

  // const getHide = () => {
  //   return hide ? setHide(false) : setHide(true);
  // };

  // categories

  const [allCat, setAllCat] = useState(false)

  let radio = document.querySelectorAll(".radio")  
    
  for (let i = 0; i < radio.length; i++) {
      radio[0].setAttribute("checked", "true")
  }    

  // tips of products

  const [allSub, setAllSub] = useState(false)

  const [subTips, setSubTips] = useState(1)

  function changeTips(item){          // categoriyalardan birortasini tanlaganda subCategoriyalar o'zgarishi
      setSubTips(item)
  }

  let tipology = document.querySelectorAll(".tipology")  
  
  for (let i = 0; i < tipology.length; i++) {
      tipology[0].setAttribute("checked", "true")
  }

  // products 

  const [prods, setProds] = useState(1)

  function changeProducts(item){          // subcategoriyalardan birortasini tanlaganda productlar o'zgarishi
      setProds(item)
  }

  // like algorithms

  const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)  
  const [like, setLike] = useState(false)
  let likesArray = []
  let checkbox = document.querySelectorAll(".checkbox")

  function getLike(){
      setLike(!like)         
  }
  
  checkbox.forEach((c) => {               // like bosilganda localStoragega saqlash (avtomatik tarzda bo'lishi uchun hech qanday funksiya yozilmasdan to'g'ridan-to'g'ri bajarilmoqda)
      if(c.checked && c.id - 1 != likesArray){
          let cgl = {id: c.id-1, like: true}
          likesArray.push(cgl)
          if(likesArray.length > 0){
              localStorage.setItem("like", likesArray.map((p) => p.id))   
          }
      }if(likesArray.length == 0){
          localStorage.removeItem("like", likesArray) 
      }
  })         
  
  function unLike(item){                   // likeni qaytarib olish funksiyasi  
      const arr = likesArray.filter((inc) => inc.id != item) 
      localStorage.setItem("like", arr)     
      setNumberLikes(arr.map((c) => c.id))
  }

  window.addEventListener("load", () => {
      setNumberLikes(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)
  })

  // add to card

  const [addedProds, setAddedProds] = useState(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : 0) 
  let cardsArray = []
  let addedProduct = document.querySelectorAll(".addedProduct")

  addedProduct.forEach((c) => {               // add to card bosilganda localStoragega saqlash (avtomatik tarzda bo'lishi uchun hech qanday funksiya yozilmasdan to'g'ridan-to'g'ri bajarilmoqda)
    if(c.checked){
        let nft = {id: 1-c.id, add: true}
        cardsArray.push(nft)
        if(cardsArray.length > 0){
            localStorage.setItem("added", cardsArray.map((p) => p.id))   
        }
    }if(cardsArray.length == 0){
        localStorage.removeItem("added", cardsArray) 
    }
  }) 

  console.log(cardsArray)

  window.addEventListener("load", () => {
    setAddedProds(localStorage.getItem("added") ? localStorage.getItem("added").split(',') : 0)
})  

// carousel for top products

const [carousel, setCarousel] = useState(0)
const [activeCar, setActiveCar] = useState(false)

function increment(item){
  if(carousel < 0){
    setCarousel(carousel + 4)
    setActiveCar(true)
  }
}

function decrement(){
  if(carousel >= -CardData.length ){
    setCarousel(carousel - 4)
    setActiveCar(false)
  }
}

  // fetch API

  const getData = () => {
    fetch("http://93.189.40.27:3700/products/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className="Prod">
        <Wrap className="wrapper">
          {all &&
            <Wrap.Title>
              <Wrap.Burger /> Electronics
            </Wrap.Title>
          }
          {all &&
            <CategoryTitles>          
              <div className={`col-md-12 menu-catalog d-flex ${allCat && "all"}`}>
                <div className="line-menu">
                  {Electronics.map((value) => {
                      return(
                          <div className='catalog-menu'>
                              <input type="radio" className="form-check-input radio" onChange={() => changeTips(value.id)} name="flexRadioDefault" id={`radio${value.id+1}`} />
                              <label htmlFor={`radio${value.id+1}`}  >
                                <CategoryTitles.Card  key={value.id} className="tool" >
                                  {value.title}
                                </CategoryTitles.Card>
                              </label>
                          </div>
                      )
                  })}                    
                </div>
                <input type="checkbox" checked={allCat} onChange={() => setAllCat(!allCat)} className="down" id="categories" />
                <label htmlFor="categories"><i className="fa fa-angle-down"></i></label>
              </div>              
            </CategoryTitles>
          }
          {all &&
            <ProductTitles>
              <div className={`col-md-12 submenu d-flex ${allSub && "all-sub"}`}>
                <div className="line-sub">
                  {ProdName.map((value) => {
                      return(
                          <div className='catalog-menu'>
                              <input type="radio" className="form-check-input tipology" name="flexRadioDefault1" onChange={() => changeProducts(value.id)} id={`tip${value.id-1}`} />
                              <label htmlFor={`tip${value.id-1}`}  >
                                <CategoryTitles.Card  key={value.id} className="tool" >
                                  {value.title}
                                </CategoryTitles.Card>
                              </label>
                          </div>
                      )
                  })}                    
                </div>
                <input type="checkbox" checked={allSub} onChange={() => setAllSub(!allSub)} className="down-sub" id="subs" />
                <label htmlFor="subs"><i className="fa fa-angle-down"></i></label>
              </div>
            </ProductTitles>
          }

          {all &&
            <CardCont className="products row">
              {CardData.map((value) => {
                return (
                  <Card key={value.id} className="col-3 prod">
                    <Card.Header className="header">
                      <Card.Block>
                        <Card.Off className="percent">{value.discount} % Off</Card.Off>
                        {/* <Card.Heart /> */}
                        {numberLikes != 0 && numberLikes.map((item) => {
                          return(                                                        
                            item == value.id &&
                                <input type="checkbox" onChange={() => unLike(value.id)} className='checkbox' id={value.id+1} checked />                                                                                                                                                                                
                            )
                          })
                        }   
                        <input type="checkbox" onChange={() => getLike()} className='checkbox' id={value.id+1} />                                            
                        <label htmlFor={value.id+1}>                                                
                          <i className={`fa fa-heart-o`}></i> 
                          <i className={`fa fa-heart`}></i>                                                                                              
                        </label>
                      </Card.Block>
                      <Link to={`/product/${value.id}`} className="nav-link navigator">
                        <Card.Img src={value.img} alt="errCard" className="img" />
                      </Link>
                    </Card.Header>
                    <Card.Footer>
                      <p>{value.subTitle}</p>
                      <h2>{value.title}</h2>
                      <h3>$ {value.price}</h3>
                      {addedProds != 0 && addedProds.map((item) => {
                          return(                                                        
                              item == value.id &&
                              <input type="radio" className='addedProduct' id={1-value.id} onChange={() => getLike()} checked />                                                                                                                                                                            
                          )
                        })
                      }                      
                      <input type="radio" id={`${1-value.id}`} onChange={() => getLike()} className="addedProduct" />
                      <label htmlFor={`${1-value.id}`} className="add-btn" >Add to Card</label>
                      {/* <Button type="button" className="add" onClick={() => addCard(value.id)}>Add to Card</Button> */}
                    </Card.Footer>
                  </Card>
                );
              })}
            </CardCont>
          }

          {saved &&
            <h1><i className="fa fa-heart"></i> Saved</h1>
          }

            {saved &&
              <CardCont className="products row mb-5 pb-5">
                {CardData.map((value) => {
                  return (
                    numberLikes != 0 && numberLikes.map((item) => {
                      return(                                                        
                        item == value.id &&
                        <Card key={value.id} className="col-3 prod">
                          <Card.Header className="header">
                            <Card.Block>
                              <Card.Off className="percent">{value.discount} % Off</Card.Off>
                              {/* <Card.Heart /> */}                        
                              <input type="checkbox" onChange={() => unLike(value.id)} className='checkbox' id={value.id+1} checked />                                       
                              <label htmlFor={value.id+1}>                                                
                                <i className={`fa fa-heart-o`}></i> 
                                <i className={`fa fa-heart`}></i>                                                                                              
                              </label>
                            </Card.Block>
                            <Card.Img src={value.img} alt="errCard" className="img" />
                          </Card.Header>
                          <Card.Footer>
                            <p>{value.subTitle}</p>
                            <h2>{value.title}</h2>
                            <h3>$ {value.price}</h3>
                            <Button type="button" className="add">Add to Card</Button>
                          </Card.Footer>
                        </Card>
                      )
                    })   
                  );
                })}
              </CardCont>
            }

          {top &&
            <>
              <div className="col-12 slide-tools">
                <div className="d-flex">
                  <h1>Top Products</h1>
                  <Link className="nav-link" to="/prod">Fruits <i className="fa fa-angle-right mx-2"></i></Link>
                </div>
                <div className="d-flex c2">
                  <i className={`fa fa-angle-left ${activeCar && "active"}`} onClick={() => increment()}></i>
                  <i className={`fa fa-angle-right mx-3 ${!activeCar && "active"}`} onClick={() => decrement()}></i>
                </div>
              </div>
              <CardCont className="products top">
                {CardData.map((value) => {
                  return (
                    <Card key={value.id} className="col-3 prod" style={{transform: `translateX(${carousel * 50}%)`}}>
                      <Card.Header className="header">
                        <Card.Block>
                          <Card.Off className="percent">{value.discount} % Off</Card.Off>
                          {/* <Card.Heart /> */}
                          {numberLikes != 0 && numberLikes.map((item) => {
                              return(                                                        
                                  item == value.id &&
                                  <input type="checkbox" onChange={() => unLike(value.id)} className='checkbox' id={value.id+1} checked />                                                                                                                                                                                
                              )
                            })
                          }   
                          <input type="checkbox" onChange={() => getLike()} className='checkbox' id={value.id+1} />                                            
                          <label htmlFor={value.id+1}>                                                
                            <i className={`fa fa-heart-o`}></i> 
                            <i className={`fa fa-heart`}></i>                                                                                              
                          </label>
                        </Card.Block>
                        <Card.Img src={value.img} alt="errCard" className="img" />
                      </Card.Header>
                      <Card.Footer>
                        <p>{value.subTitle}</p>
                        <h2>{value.title}</h2>
                        <h3>$ {value.price}</h3>
                        <Button type="button" className="add">Add to Card</Button>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </CardCont>
            </>
          }

          {all &&
            <Show className="show-btn">
              <Show.Title className="show-title">Show all results</Show.Title>
              <Icon.ArrowHr className="show-icon" />
            </Show>
          }
        </Wrap>
      </Container>
      {all &&
        <CardSimple />
      }
    </>
  );
};

export default Products;
