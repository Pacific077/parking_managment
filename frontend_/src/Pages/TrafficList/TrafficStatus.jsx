import React, { useContext, useEffect, useState } from 'react'
import "../ParkingList/ParkingList.css";
import TrafficListCard from './TrafficListCard/TrafficListCard'
import CatContext from '../../context/CategoryContext'
import { GetAllTrafficList } from '../../Apis/TrafficApis'
const TrafficStatus = () => {
    const cont = useContext(CatContext)
    const [TrafficAreas,setTrafficAreas] = useState([])
    const {latitude,longitude,district} = cont;

    useEffect(()=>{
        const fetchData = async()=>{
            const resp = await GetAllTrafficList({
                latitude,longitude
            })
            console.log("i reavhed here")
            console.log("Resp",resp);
            setTrafficAreas(resp.data.businesses)
        };
        fetchData()
    },[])
  return (
    <div className='ParkingListPage'>
                <h1>Know your nearby Streets Traffic</h1>
             <div className="ListContainer">
        {TrafficAreas.map((bus,ind) => (
          <TrafficListCard
          key={ind}
            name={bus.Name}
            pinCode={bus.pinCode}
            length={bus.length}
          />
        ))}
        {/* <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/> */}
      </div>
    </div>
  )
}

export default TrafficStatus