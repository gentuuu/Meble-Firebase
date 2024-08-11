import { Link } from 'react-router-dom'
import Headerbg from '../assets/images/header-bg.png'
import About from '../assets/images/main-about-bg.png'
import CommonSection from '../components/CommonSection/CommonSection'
import ProductList from '../components/Product/ProductList'

import './Home.scss'
import ArrangmentList from '../components/Arrangment/ArrangmentList'
import BlogList from '../components/Blog/BlogList'



const Home = () => {
  return (
    <>
      <div className="main-header">
        <div className="main-header-content">
            <div className="main-header__img"><img src={Headerbg} alt="" /></div>
            <div className="main-header__title"><span>LREM IPSUM</span> DOLAR SIT AMET</div>
        </div>
      </div>

      <div className="main-product">
        <div className="container">
          <div className="main-product-content">
            <CommonSection title='Najnowsze produkty' />
            <div className="main-product-items">
              <ProductList />
            </div>
          </div>
        </div>
      </div>

      <div className="main-about">
        <div className="container">
          <div className="main-about-content">
            <div className="main-about__img"><img src={About} alt="" /></div>
            <div className="main-about__text"><span>WYPRZEDAŻ </span>LOREM IPSUM
              <div className="main-about__more"><Link href="">zobacz więcej</Link></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-most-bought">
        <div className="container">
          <div className="main-most-bought-content">
            <CommonSection title='Najczęściej kupowane' />
            <div className="main-product-items">
              <ProductList />
            </div>
          </div>
        </div>
      </div>

      <ArrangmentList />

      <div className="main-most-bought">
        <div className="container">
          <div className="main-most-bought-content">
            <CommonSection title='Ostatio odane' />
            <div className="main-product-items">
              <ProductList />
            </div>
          </div>
        </div>
      </div>

      <BlogList />

    </>
  
  )
}

export default Home