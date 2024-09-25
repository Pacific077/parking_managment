import React, { useState } from 'react';
import Features from '../../components/Feature';
import {useNavigate} from "react-router-dom"
import "./Home.css";

const Home = () => {
  const [val, setVal] = useState(0);
  const navigate = useNavigate();
  if(!val)
  return (
    <div>
    <div className="farm-container">
      <h2 className='headline'>Find <span className='special'>Parking</span> in one click</h2>
      <button className='parkingListDiplaybtn' onClick={()=>navigate('/parking-list')}>Get List of Nearby Parking Areas</button>
      <p className="agro-para">SIMPLE SECURE & SMART</p>

      <div className="button-options">
        <button
          onClick={() => {
            // Handle button 1 click
          }}
          className="btn-option"
        >
          Option 1
        </button>
        <button
          onClick={() => {
            // Handle button 2 click
          }}
          className="btn-option"
        >
          Option 2
        </button>
      </div>
      
      </div>
      <Features/></div>
    
  );
};

export default Home;
