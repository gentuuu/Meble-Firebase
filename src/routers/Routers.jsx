import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import Arragments from "../pages/Arragments"

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/aranzacje" element={<Arragments/>} />
    </Routes>
 
  )
}

export default Routers