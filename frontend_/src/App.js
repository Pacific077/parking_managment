import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ParkingList from './Pages/ParkingList/ParkingList';
import ParkingListSpecific from './Pages/ParkingListSpecific/ParkingListSpecific';
import TrafficStatus from './Pages/TrafficList/TrafficStatus'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/parking-list" element={<ParkingList/>} />
      <Route path="/parking-list/:id" element={<ParkingListSpecific/>} />
      <Route path="/TrafficStatus" element={<TrafficStatus/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App