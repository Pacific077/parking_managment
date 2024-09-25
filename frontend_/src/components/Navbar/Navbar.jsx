import React, { useContext, useState,useEffect,useRef } from "react";
import dp from "../../Assets/DefaultDp.png";
import logo from "../../Assets/Logo.jpg";
import { MdMyLocation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import Districts from "../../Assets/Districts.js";
import "./Navbar.css";
import CatContext from "../../context/CategoryContext.jsx";
const Navbar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [locinputValue, setlocInputValue] = useState("");
  const suggestionRef = useRef(null);
  const CatCon = useContext(CatContext);
  const {
    setLatitude,
    setLongitude,
    setDistrict,
  } = CatCon;

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // useEffect(()=>{
  //   setlocallylocation()
  // },[latitude,longitude,district])
  const handleClickOutside = (e) => {
    if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };
  const filterSuggestions = (arr, input, i) => {
    const filtered = arr.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    if (i === 1) setSuggestions(filtered);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setlocInputValue(value);
    filterSuggestions(Districts, value, 1);
  };
  const handleLocationSelect = async (e) => {
    try {
      const resp = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.innerText},IN&limit=5&appid=ffcdd1abf435afb68672874babf1d07a`
      );
      console.log("resp",resp.data)
      setDistrict(resp.data[0].name);
      setLatitude(resp.data[0].lat);
      setLongitude(resp.data[0].lon);
      console.log(resp.data[0]);
    } catch (error) {
      console.log(error);
    }
    setlocInputValue(e.target.innerText);
    setSuggestions([]);
  };
  return (
    <div className="NavbarCont">
      <div className="navbarleft">
        <div className="navLogo">
          <img src={logo}></img>
        </div>
        <a href='/#SERVICES' className="navItems">Our services</a>
        <p className="navItems">Home</p>
      </div>
      <div className="NavCenter">
        <div className="DetectLocationAutomatically">
          <p>Detect Location</p>
          <MdMyLocation className="locationIcon" />
        </div>
        <div className="NavbarLocation" ref={suggestionRef}>
          <input
            type="text"
            placeholder="Search your District"
            value={locinputValue}
            onChange={handleInputChange}
          />
          <FaSearch className="SearchIcon" />
          <div className="locationSuggestCont">
            {suggestions.map((district, index) => {
              return (
                <p onClick={handleLocationSelect} key={index}>
                  {district}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="navbarright">
        <div className="navbtn">Post your parking space</div>
        <div className="navloginbtn">
          <img src={dp} alt="" />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
