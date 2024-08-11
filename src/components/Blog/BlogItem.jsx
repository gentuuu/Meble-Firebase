import { Link } from 'react-router-dom'

const BlogItem = ({ blog }) => {
  return (
    <>
        <Link to='#' className="main-blog-item">
            <div className="main-blog-item__img">
                <img src={blog.imgUrl} alt="" />
            </div>
            <div className="main-blog-item__text">
                {blog.productName}
            </div>
        </Link>
    </>
  

  )
}



export default BlogItem