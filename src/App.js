import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/Scrolls/ScrollToTop';
import axios from 'axios'; 
import Footer from './components/Footer/Footer';
import RouterHeader from './components/RouterHeader/RouterHeader';
import RouterProducts from './components/RouterProducts/RouterProducts';
import { useTranslation } from 'react-i18next';
import About from './components/About/About';
import Products from './components/Product';
import Categories from './components/Category';


const App = () => {

  //Products  API
     
  const [dataProducts, setDataProducts] = useState([]);
  const urlProducts = `http://93.189.40.27:8100/products/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlProducts);
      setDataProducts(request.data);
      return request;
    };
    fetchData()
  }, [urlProducts]);


   // i18nexus

   const {t, i18n} = useTranslation()


  // Language components

  const [english, setEnglish] = useState(true);
  const [russian, setRussian] = useState(false);
  const [uzbek, setUzbek] = useState(false);
  const [arabian, setArabian] = useState(false);
  const [home, setHome] = useState(true)  
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "") 

  function change1(item) {  
    i18n.changeLanguage("ru") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setRussian(item)
    setEnglish(!item)
    setUzbek(!item)
    setArabian(!item)
    setHome(false)    
  }
  function change2(item) {
    i18n.changeLanguage("en") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item)
    setArabian(!item)
    setHome(false)    
  }
  function change3(item) { 
    i18n.changeLanguage("uz") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
    setArabian(!item)
    setHome(false)    
  }
  function change4(item) {
    setArabian(item)
    setEnglish(!item)
    setRussian(!item)
    setUzbek(!item)
    setHome(false)    
  }

window.addEventListener("load", () => {    
  setRussian(true)
  setEnglish(false) 
  localStorage.setItem("i18nextLng", "en") 
  setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  console.log("ALI")   
})
console.log(localStorage.getItem('i18nextLng')) 



  // Modal methods

  const [modalOk, setModalOk] = useState(true)

  function changeModal(){
    setModalOk(false)
  }


  // scrolls

  const scrollToLocation = () => {
    const { hash } = window.location;
    if (hash !== '') {
      let retries = 0;
      const id = hash.replace('#', '');
      const scroll = () => {
        retries += 0;
        if (retries > 50) return;
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0);
        } else {
          setTimeout(scroll, 100);
        }
      };
      scroll();
    }
  } 

  scrollToLocation()

  // search filter

  const [inputValue, setInputValue] = useState("")

    function filterData(e){
        setInputValue(e.target.value)
    }

    const search = (data) => {
        return data.filter(post => post.name_en.toLowerCase().includes(inputValue.toLowerCase()))
    }



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar langTitle={langTitle} english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} dataProducts={search(dataProducts)} filterData={filterData} inputValue={inputValue} />
      <Switch>  
        <Route exact path="/">
          <RouterHeader dataProducts={dataProducts} english={english} russian={russian} uzbek={uzbek} arabian={arabian} white={false} />
        </Route> 
        <Route path={`/aboutus`}>
          <About english={english} russian={russian} uzbek={uzbek} />
        </Route>
        <Route path="/saved">
          <Products all={false} saved={true} top={false} />
        </Route>
        <Route path="/products">
          <Products all={true} saved={false} top={false} />
        </Route>
        <Route path="/categories">
          <Categories english={english} russian={russian} uzbek={uzbek} main={false} all={true} />
        </Route>
        {dataProducts.map((data) => {
          return(
            <Route path={`/product/${data.id}`}>
              {english && 
                <RouterProducts dataProducts={dataProducts} changeModal={changeModal} english={english} russian={russian} uzbek={uzbek} arabian={arabian} id={data.id} name={data.name_en} img={data.image} descript={data.description_en} />
              }
              {russian && 
                <RouterProducts dataProducts={dataProducts} changeModal={changeModal} english={english} russian={russian} uzbek={uzbek} arabian={arabian} id={data.id} name={data.name_ru} img={data.image} descript={data.description_ru} />
              }
              {uzbek && 
                <RouterProducts dataProducts={dataProducts} changeModal={changeModal} english={english} russian={russian} uzbek={uzbek} arabian={arabian} id={data.id} name={data.name_uz} img={data.image} descript={data.description_uz} />
              }
              {arabian && 
                <RouterProducts dataProducts={dataProducts} changeModal={changeModal} english={english} russian={russian} uzbek={uzbek} arabian={arabian} id={data.id} name={data.name_ar} img={data.image} descript={data.description_ar} />
              }
            </Route>                    
          )
        })}               
      </Switch>
      <Footer english={english} russian={russian} uzbek={uzbek} arabian={arabian} />     

      <div className={`contrast ${modalOk && "d-none"}`} onClick={() => setModalOk(true)}></div>
      <div className={`col-md-6 offset-md-3 buy-ok row ${!modalOk && "show-modal"}`}>
        <i className='fa fa-times' onClick={() => setModalOk(true)} ></i> 
        {english &&
          <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1> 
        } 
        {russian &&
          <h1>СПАСИБО ЗА ОБРАЩЕНИЕ &#128522;</h1> 
        } 
        {uzbek &&
          <h1>MUROJAATINGIZ UCHUN TASHAKKUR &#128522;</h1> 
        } 
        {arabian &&
          <h1>شكرًا لك على مناشدتك &#128522;</h1> 
        }                         
        <div className='col-md-4 offset-md-2'>                    
          {english && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }
          {russian && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }
          {uzbek && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }
          {arabian && 
              <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
          }
        </div>
      </div> 
    </BrowserRouter>
  );
};

export default App;
