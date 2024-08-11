import './Arrangment.scss'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ArrangmentItem = ({ arrangment }) => {
  return (
    <>
        <Link to="#" className="main-arrangment-item">
            <div className="main-arrangment-item__img">
                <img src={arrangment.imgUrl} alt="" />
            </div>
            <div className="main-arrangment-item__text">
                <span>{arrangment.category}</span> {arrangment.productName}
                <div className="main-arrangment-item__more">zobacz wiecej</div>
            </div>
        </Link>

    </>
  )
}

export default ArrangmentItem