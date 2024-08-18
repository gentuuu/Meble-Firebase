import './Footer.scss'
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="main-footer-top">
            <div className="container">
            <div className="navigation-footer-wrapper"><Link className="logo" to=""><img className="menu-logo" src="" alt="" /></Link>
                <div className="navigation-footer-content">
                <div className="navigation-footer-menu">                    
                    <nav className="navigation-footer__nav">
                    <ul className="navigation-footer__list">
                        <li className="navigation_-footer_item"><Link to='/' className="navigation-footer__link">O nas </Link></li>
                        <li className="navigation-footer__item"><Link to='/' className="navigation-footer__link">Reklama</Link></li>
                        <li className="navigation-footer__item"><Link to='/' className="navigation-footer__link">Dla sklepów </Link></li> 
                        <li className="navigation-footer__item"><Link to='/' className="navigation-footer__link">Regulamin</Link></li>  
                        <li className="navigation-footer__item"><Link to='/kontakt' className="navigation-footer__link">Kontakt</Link></li>                     
                    </ul>
                    </nav>
                    <div className="navigation-footer-social">
                    <div className="navigation-footer-social-content">
                        <div className="navigation-footer-social-img">
                            <Link href=""><GrFacebookOption /></Link>
                            <Link href=""><AiFillInstagram /></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="main-footer-copyright">
            <div className="container">
                <div className="main-footer-copyright-text">Wszelkie prawa zastrzeżone</div>
            </div>
        </div>

    </footer>
  )
}

export default Footer