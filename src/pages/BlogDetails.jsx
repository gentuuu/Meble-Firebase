import './Pages.scss'
import blogs from '../assets/data/blogs'
import products from '../assets/data/products'; 
import arrangments from '../assets/data/arrangment'; 

import { useParams } from 'react-router-dom'
import ProductsItem from '../components/Product/ProductsItem';
import CommonSection from '../components/CommonSection/CommonSection';
import BlogItem from '../components/Blog/BlogItem';
import ArrangmentItem from '../components/Arrangment/ArrangmentItem';




const BlogDetails = () => {

    const { id } = useParams();
    const blog = blogs.find(item=>item.id === id);

    const {imgUrl, productName, category, shortDesc, description, avgRating, reviews} = blog;

    return (
    <div className="page-blog">
        <div className="container">
            <div className="page-blog-content">

                <div className="page-blog-title">
                    <div className="page-blog-title__img">
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="page-blog-title__text">
                        {productName}
                    </div>
                </div>

                <div className="page-blog-text">
                    {shortDesc}
                </div>

                <div className="page-blog-text">
                    {description}
                </div>

                <div className="main-popular">
                    <div className="main-product-content">
                        <CommonSection title='Polecane produkty'/>
                        <div className="main-product-items">
                            {products?.slice(0, 4).map((product) =>(
                                <ProductsItem key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="main-comments">
                    <CommonSection title='Komentarze' />
                    <div className="main-comments-content">
                        <div className="main-comments-left">
                            <div className="main-comments-items">
                                {reviews?.map((item, index)=>(
                                    <div key={index} className="main-comments-item">
                                        <div className="main-comments-item-details">
                                            <div className="main-comments-item-details__name">Joanna</div>
                                            <div className="main-comments-item-details__ip">45664@asda.pl</div>
                                            <div className="main-comments-item-details__date">data: 2020-12-25 09:12:14</div>
                                            <div className="main-comments-item-details__stars">
                                                Ocena: {item.rating}
                                                
                                            </div>
                                        </div>
                                        <div className="main-comments-item-text">
                                            {item.text}
                                        </div>
                                    </div>
                                ))}
                                
                
                            </div>
                        </div>

                    </div>
                </div> 


                <div className="comment-add">
                    <form action="" method="POST" className="comment-add-form">
                        <div className="comment-add-top">
                            <div className="comment-add-title">Dodaj komentarz</div>
                            <div className='comment-add-stars'>
                                <img src="img/star.png" alt=""/>
                                <img src="img/star.png" alt=""/>
                                <img src="img/star.png" alt=""/>
                                <img src="img/star.png" alt=""/>
                                <img src="img/star.png" alt=""/>
                            </div>
                        </div>
                        <textarea className="comment-add-textarea" name="message" id="message"
                            placeholder="Treść wiadomości" required></textarea>
                        <div className="comment-add-row">
                            <input className="comment-add-input" name="name" id="name" type="text" placeholder="Imię"
                                required />
                            <button type="submit" className="comment-add-btn">Wyślij</button>
                        </div>
                    </form>
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


                <div className="page-arrangment">
                    <CommonSection title='Anamżacje wnętrz' />
                    <div className="page-arrangment-content">
                        <div className="page-arrangment-items">
                            {arrangments?.map((arrangment) => (
                                <ArrangmentItem key={arrangment.id} arrangment={arrangment} />
                            ))}
                        </div>
                        <a href="/aranzacje" className="page-arrangment-all">zobacz wszystkie aranżacje</a>
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}

export default BlogDetails