import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import Arragments from "../pages/Arragments"
import BlogDetails from "../pages/BlogDetails"
import ArragmentDetails from "../pages/ArragmentDetails"

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />
        <Route path="/aranzacje" element={<Arragments/>} />
        <Route path="/aranzacje/:id" element={<ArragmentDetails />} />
    </Routes>
 
  )
}

export default Routers