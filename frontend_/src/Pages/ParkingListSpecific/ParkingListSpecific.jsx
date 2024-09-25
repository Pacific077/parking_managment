import React, { useEffect, useState } from "react";
import img1 from "../../Assets/card1.jpg";
import img2 from "../../Assets/card2.jpg";
import img3 from "../../Assets/card3.jpg";
import { IoCarSportOutline } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./ParkingListSpecific.css";
import { getparkingByid } from "../../Apis/ParkingApis";
import CarBookingModals from "../../components/Modals/CarBookingModals/CarBookingModals.jsx";
const ParkingListSpecific = () => {
  const [ParkingDetails, setParkingdetails] = useState("");
  const [iscarModalVis, setIsCarModalVis] = useState(false);
  const [selectedCarInd, setselectedCarInd] = useState(0);
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const resp = await getparkingByid({ id });
      console.log("res", resp.parkings);
      setParkingdetails(resp.parkings);
    } catch (error) {
      console.log("ere", error);
    }
  };
  useEffect(() => {
   
    fetchData();
  }, []);

  const CarIconClick = (index) => {
    setIsCarModalVis(true);
    setselectedCarInd(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const BikeIconClick = (ind) => {
    alert(ind);
  };
  return (
    <>
      {ParkingDetails._id ? (
        <div className="ParkingListSpecific">
          {iscarModalVis && (
            <CarBookingModals
            selectedCarInd={selectedCarInd}
              iscarModalVis={iscarModalVis}
              setIsCarModalVis={setIsCarModalVis}
              fetchData={fetchData}
              setParkingdetails={setParkingdetails}
            />
          )}
          <div className="ParkingListSpecificContHolder">
            <div className="ParkingListImgCOnt">
              <img src={img1} alt="" />
            </div>
            <div className="ParkingListImgCOnt">
              <img src={img2} alt="" />
            </div>
            <div className="ParkingListImgCOnt">
              <img src={img3} alt="" />
            </div>
          </div>
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="parkingListnameAndaddress">
              <h1>My name </h1>
              <p>Park avenue street, District , State</p>
            </div>
            <div className="parkingCountDescription">
              <p>
                Total Car Capacity :{" "}
                <span style={{ marginLeft: "27vh" }}>Total Car Occupied :</span>{" "}
              </p>
              <p>
                Total Bike Capacity :
                <span style={{ marginLeft: "27vh" }}>
                  Total Bike Occupied :
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="TotalCarMapDisplay">
            <h1>Available Spaces for Cars</h1>
            <div className="totalCarDisplayCont">
              {[...Array(ParkingDetails.FourWheelerCapcity)].map((_, index) => {
                const isBooked = ParkingDetails.FourWheelerFilled.some(
                  (item) => item.index === index
                );
                return (
                  <IoCarSportOutline
                    key={index}
                    className={isBooked ? "CarIcons redcolor" : "CarIcons"}
                    onClick={() => CarIconClick(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="TotalCarMapDisplay">
            <h1>Available Spaces in Bike</h1>
            <div className="totalCarDisplayCont">
              {[...Array(ParkingDetails.TwoWheelerCapcity)].map((_, index) => {
                // Check if the index exists in the TwoWheelerFilled array
                const isBooked = ParkingDetails.TwoWheelerFilled.some(
                  (item) => item.index === index
                );
                return (
                  <FaMotorcycle
                    key={index}
                    className={isBooked ? "CarIcons redcolor" : "CarIcons"}
                    onClick={() => BikeIconClick(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ParkingListSpecific;
