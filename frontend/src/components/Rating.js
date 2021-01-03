import React from 'react'
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaStarHalfAlt } from "@react-icons/all-files/fa/FaStarHalfAlt";
import {FaRegStar} from '@react-icons/all-files/fa/FaRegStar'


const Rating = props => {
    const {rating , numReviews} = props
    return (
        <div>
            {rating >=1 ? <FaStar /> : rating>=0.5 ? <FaStarHalfAlt/> : <FaRegStar />}
            {rating >=2 ? <FaStar /> : rating>=1.5 ? <FaStarHalfAlt/> : <FaRegStar />}
            {rating >=3 ? <FaStar /> : rating>=2.5 ? <FaStarHalfAlt/> : <FaRegStar />}
            {rating >=4 ? <FaStar /> : rating>=3.5 ? <FaStarHalfAlt/> : <FaRegStar />}
            {rating >=5 ? <FaStar /> : rating>=4.5 ? <FaStarHalfAlt/> : <FaRegStar />}
            
        </div>
    )
}



export default Rating
