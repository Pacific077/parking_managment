import React, { useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import  "./CarBookingModals.css"
import { useParams } from "react-router-dom";
import {toast} from "react-toastify"
import { BookCarparking } from '../../../Apis/ParkingApis';
const CarBookingModals = ({setIsCarModalVis,selectedCarInd,fetchData,setParkingdetails}) => {
    const { id } = useParams();
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const handleBookClick = async () => {
        try {
            const resp = await BookCarparking({
                id,
                startTime: `${startDate}T${startTime}`,
                endTime: `${endDate}T${endTime}`,
                index: selectedCarInd
            });
            console.log(resp.data);
            if(resp.status===200){
                toast.success("booked")
                setIsCarModalVis(false)
                fetchData();
            } // Handle the response as needed
        } catch (error) {
            console.log("facing errro",error)
            setIsCarModalVis(false)
            toast.error(error.response.data.message);
        }
    };
  return (
    <div className='CarBookingModalsCont'>
        <GiTireIronCross className='CrossIcon' onClick={()=>setIsCarModalVis(false)}/>
        <div className='StartDateAndtime'>
            <p>Start Date and Time</p>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div className='StartDateAndtime'>
            <p>End Date and Time</p>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
        </div>
        <button className='CnfrmBook' onClick={handleBookClick}>Book</button>
    </div>
  )
}

export default CarBookingModals