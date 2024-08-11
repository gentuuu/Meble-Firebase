import './Blog.scss'
import blogs from '../../assets/data/blogs'; // Import danych produktów

import CommonSection from '../CommonSection/CommonSection'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
    <div className="main-blog">
        <div className="container">
            <div className="main-blog-content">
                <CommonSection title='Blog' />
                <div className="main-blog-items">
                    {blogs?.map((blog, index) => (
                        <BlogItem key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogList