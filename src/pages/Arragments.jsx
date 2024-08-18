import './Pages.scss'
import { Link } from 'react'

import arrangments from '../assets/data/arrangment';
import CommonSection from '../components/CommonSection/CommonSection';
import ArrangmentItem from '../components/Arrangment/ArrangmentItem';
import Pagination from '../components/Pagination/Pagination';
import BlogList from '../components/Blog/BlogList';

const Arragments = () => {
  return (
    <>
        <div className="arrangment">
            <div className="container">
                <CommonSection title='Anrażacje wnętrz' />
                <div className="arrangment-items">
                    {arrangments?.map((arrangment) =>(
                        <ArrangmentItem key={arrangment.id} arrangment={arrangment} />
                    ))}
                </div>

                <Pagination />

            </div>
        </div>

        <BlogList />
        
    </>
  )
}

export default Arragments