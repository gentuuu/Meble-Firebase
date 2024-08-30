import './Pages.scss'
import marker from '../assets/images/marker.png'
import lampa from '../assets/images/lampa.png'
import arrangment from '../assets/data/arrangment'
import products from '../assets/data/products';
import blogs from '../assets/data/blogs'

import ProductsItem from '../components/Product/ProductsItem';
import BlogItem from '../components/Blog/BlogItem';
import ArrangmentItem from '../components/Arrangment/ArrangmentItem';
import CommonSection from '../components/CommonSection/CommonSection';

import { useParams } from 'react-router-dom';

const ArragmentDetails = () => {

const { id } = useParams();
const test = arrangment.find(item=>item.id === id);

const {imgUrl, productName, category, shortDesc, description} = test;


return (
    <div className="arrangment-details">
        <div className="container">
            <div className="arragment-row">
                <div className="arrangment-details-content">
                    <div className="arrangment-details-item">
                        <div className="arrangment-details-item__img">
                            <img src={imgUrl} alt="" />
                        </div>
                        <div className="arrangment-details-item__name"><span>Kuchania</span> Lorem ipsum</div>
                        <div className="arrangment-details-item__text">
                            ASTOR to przykład mebla ponadczasowego, ale o bardzo nowoczesnym, współczesnym charakterze.
                            ASTOR ze względu na swoje zdobnictwo i design z pewnością odnajdzie się w jadalniach czy
                            salonach urządzonych na styl skandynawski lub modernistyczny. Będzie się też wspaniale
                            prezentować jako krzesło w domowym kąciku do pracy twórczej, lub w pokoju nastolatka, ale i w
                            stylowej poczekalni lub gabinecie. Wszechstronność zastosowań krzesła to zasługa gustownej,
                            szarej tapicerki tkaninowej oraz prostych nóg w kolorze drewna. Siedzenie składa się z prostego,
                            równego siedziska oraz
                        </div>
                        <div className="arrangment-details-item__marker" style={{left: '990px', top: '300px' }}>
                            <div className="arrangment-details-item__marker-content">
                                <div className="arrangment-details-item__marker-img">
                                    <img src={lampa} alt="" />
                                </div>
                                <div className="arrangment-details-item__marker-text">
                                    <div className="arrangment-details-item__marker-name">Lampa lorem ipsum dolor sit amet
                                        lore...</div>
                                    <div className="arrangment-details-item__marker-price">458.44 PLN</div>
                                    <div className="arrangment-details-item__marker-btn"><a href="">kup w sklepie</a></div>
                                </div>
                            </div>
                            <span><img src={marker} alt="" /></span>
                        </div>
                        <div className="arrangment-details-item__marker" style={{left: '380px', top: '520px' }}>
                            <div className="arrangment-details-item__marker-content">
                                <div className="arrangment-details-item__marker-img">
                                    <img src={lampa} alt="" />
                                </div>
                                <div className="arrangment-details-item__marker-text">
                                    <div className="arrangment-details-item__marker-name">Lampa lorem ipsum dolor sit amet
                                        lore...</div>
                                    <div className="arrangment-details-item__marker-price">458.44 PLN</div>
                                    <div className="arrangment-details-item__marker-btn"><a href="">kup w sklepie</a></div>
                                </div>
                            </div>
                            <span><img src={marker} alt="" /></span>
                        </div>
                        <div className="arrangment-details-item__marker" style={{left: '300px', top: '300px' }}>
                            <div className="arrangment-details-item__marker-content">
                                <div className="arrangment-details-item__marker-img">
                                    <img src={lampa} alt="" />
                                </div>
                                <div className="arrangment-details-item__marker-text">
                                    <div className="arrangment-details-item__marker-name">Lampa lorem ipsum dolor sit amet
                                        lore...</div>
                                    <div className="arrangment-details-item__marker-price">458.44 PLN</div>
                                    <div className="arrangment-details-item__marker-btn"><a href="">kup w sklepie</a></div>
                                </div>
                            </div>
                            <span><img src={marker} alt="" /></span>
                        </div>
                    </div>


                </div>

                <div className="main-popular" style={{marginTop: '150px'}}>
                    <div className="main-product-content">
                        <CommonSection title='Polecane produkty' />
                        <div className="main-product-items">
                            {products?.slice(0, 4).map((product) =>(
                            <ProductsItem key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="main-popular" style={{marginTop: '150px'}}>
                    <div className="main-product-content">
                        <CommonSection title='Najczęściej kupowane' />
                        <div className="main-product-items">
                            {products?.slice(0, 4).map((product) =>(
                            <ProductsItem key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="arrangment-info">
                    <div className="container">
                        <div className="arrangment-info-content">
                            <div className="arrangment-info-title">{productName}</div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
        
                <div className="page-arrangment">
                    <CommonSection title='Anamżacje wnętrz' />
                    <div className="page-arrangment-content">
                        <div className="page-arrangment-items">
                            {arrangment?.map((arrangment) => (
                                <ArrangmentItem key={arrangment.id} arrangment={arrangment} />
                            ))}
                        </div>
                        <a href="/aranzacje" className="page-arrangment-all">zobacz wszystkie aranżacje</a>
                    </div>
                </div>

                <div className="main-blog">
                    <div className="main-blog-content">
                        <CommonSection title="BLOG" />
                        <div className="main-blog-items">
                            {blogs?.slice(0,3).map((blog)=>(
                                <BlogItem key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
)
}

export default ArragmentDetails