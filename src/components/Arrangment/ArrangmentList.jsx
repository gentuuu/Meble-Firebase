import './Arrangment.scss'
import arrangments from '../../assets/data/arrangment'; // Import danych produktów
import { Link } from 'react-router-dom'
import ArrangmentItem from './ArrangmentItem'

const ArrangmentList = () => {
  return (
    <div className="main-arrangment">
        <div className="container">
          <div className="main-arrangment-content">
            <div className="main-arrangment-title"><span>Aranżacje</span> wnętrz</div>
            <div className="main-arrangment-items">
                {arrangments?.map((arrangment) => (
                    <ArrangmentItem key={arrangment.id} arrangment={arrangment} />
                ))}
            </div>
            <Link to="" className="main-arrangment-all">zobacz wszystkie aranżacje</Link>
          </div>
        </div>
      </div>
  )
}

export default ArrangmentList