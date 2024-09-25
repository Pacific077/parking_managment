import React from 'react'
import img from "../../../Assets/card1.jpg"
import "./ParkingListCard.css"
import { useNavigate } from "react-router-dom"
import ParkingRating from '../ParkingRating/ParkingRating'
const ParkingListCard = ({name,address,district,state,id}) => {
  const navigate = useNavigate();
  return (
    <div className='BussinessListCardContainer' onClick={()=>navigate(`/parking-list/${id}`)}>
        <div className='BussinessListCardLeft'><img src={img} alt='bussinesspic'/></div>
        <div className='BussinessListCardRight'>
            <h2>{name} </h2>
            <ParkingRating ratingCnt={5} ratersCnt={4}/>
            <p className='address'>{address}, {district} ,{state}</p>    
            
        </div>        
    </div>
  )
}

export default ParkingListCard