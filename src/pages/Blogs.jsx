import './Pages.scss'
import { Link } from 'react-router-dom';

import blogs from '../assets/data/blogs'
import arrangments from '../assets/data/arrangment';

import CommonSection from '../components/CommonSection/CommonSection'
import BlogItem from '../components/Blog/BlogItem'
import ArrangmentItem from '../components/Arrangment/ArrangmentItem'
import Pagination from '../components/Pagination/Pagination';

const Blogs = () => {
  return (
    <>
        <div className="main-blog">
            <div className="container">
                <div className="main-blog-content">
                    <CommonSection title='Blog' />
                    <div className="main-blog-items">
                        {blogs?.map((blog, index) => (
                                <BlogItem key={index} blog={blog} />
                        ))}
                    </div>
                    
                    <Pagination />

                </div>
            </div>
        </div>

        <div className="page-arrangment">
            <div className="container">
                <CommonSection title='Aranżacje Wnętrz' />
                <div className="page-arrangment-content">
                    <div className="page-arrangment-items">
                        {arrangments?.map((arrangment) => (
                            <ArrangmentItem key={arrangment.id} arrangment={arrangment} />
                        ))}
                    </div>
                    <Link to="/aranzacje" className="page-arrangment-all">zobacz wszystkie aranżacje</Link>
                </div>
            </div>
        </div>


    
    </>

    
  )
}

export default Blogs