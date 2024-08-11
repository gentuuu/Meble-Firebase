import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Routers from './routers/Routers';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Router>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
