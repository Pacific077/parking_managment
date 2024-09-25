import axios from 'axios'

export const GetAllParkingList = async ({district,latitude,longitude}) => {
    const response = await axios.post("http://127.0.0.1:5000/api/v1/Parkings/findAll",
    {district,latitude,longitude},
    {
      withCredentials: true,
    });
    return response;
};

export const getparkingByid = async ({ id }) => {

      const resp = await axios.get(`http://localhost:5000/api/v1/Parkings/findById?id=${id}`,{
        withCredentials:true
      });
      return resp.data; 
  
};

export const BookCarparking =async ({id,startTime,endTime,index})=>{
  const response = await axios.post("http://localhost:5000/api/v1/Parkings/bookParking",
  {id,startTime,endTime,index},
  {
    withCredentials: true,
  });
  return response;
}