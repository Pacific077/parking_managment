import React, { useContext, useEffect, useState } from 'react'
import "./ParkingList.css"
import ParkingListCard from './ParkingListCard/ParkingListCard'
import CatContext from '../../context/CategoryContext'
import { GetAllParkingList } from '../../Apis/ParkingApis'
const ParkingList = () => {
    const cont = useContext(CatContext)
    const [parkingAreasArr,setParkingareasArr] = useState([])
    const {latitude,longitude,district} = cont;

    useEffect(()=>{
        const fetchData = async()=>{
          try {
            const resp = await GetAllParkingList({
              latitude,longitude,district
          })
          console.log("i reavhed here")
          console.log("Resp",resp);
          setParkingareasArr(resp.data.businesses)
          } catch (error) {
            console.log("er",error)
          }
          
        };
        fetchData()
    },[])
  return (
    <div className='ParkingListPage'>
                <h1>Top Parking List in your areas</h1>
             <div className="ListContainer">
        {parkingAreasArr.map((bus,ind) => (
          <ParkingListCard
          key={ind}
            id={bus._id}
            name={bus.Name}
            pinCode={bus.pinCode}
            ratingCnt={bus.ratingCount}
            ratersCount={bus.reviews}
            FourWheelerCapcity={bus.FourWheelerCapcity}
            TwoWheelerCapcity={bus.TwoWheelerCapcity}
            TwoWheelerFilled={bus.TwoWheelerFilled}
            FourWheelerFilled={bus.FourWheelerFilled}
            address={bus.address}
            district={bus.district}
            state={bus.state}
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

export default ParkingList