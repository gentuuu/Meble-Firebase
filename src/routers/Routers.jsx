import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
    </Routes>
 
  )
}

export default Routers