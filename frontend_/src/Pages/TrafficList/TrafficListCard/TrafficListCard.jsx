import React from 'react'
import img from "../../../Assets/card1.jpg"
import "../../ParkingList/ParkingListCard/ParkingListCard.css"
import { useNavigate } from "react-router-dom"
// import ParkingRating from '../ParkingRating/ParkingRating'
const TrafficListCard = ({name,pincode,length}) => {
  const navigate = useNavigate();
  return (
    <div className='BussinessListCardContainer' onClick={()=>navigate(`/parking-list/`)}>
        <div className='BussinessListCardLeft'><img src={img} alt='bussinesspic'/></div>
        <div className='BussinessListCardRight'>
            <h2>{name} </h2>
            {/* <ParkingRating ratingCnt={5} ratersCnt={4}/> */}
            <p className='address'>{length},{pincode}</p>    
            
        </div>        
    </div>
  )
}

export default TrafficListCard