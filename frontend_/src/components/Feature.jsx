import React from "react"
import './Card.css'
import Card from "./Card";
import card1 from "../Assets/card1.jpg"
import card2 from "../Assets/card2.jpg"
import card3 from "../Assets/card3.jpg"
function Features(){
    const card_det ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
    return <div>
    
<section id='SERVICES'>
    <div className='cards'>
      <h1 className="feature-heading ">OUR SERVICES</h1>
      <div className="card-container">
        <Card Img={card1} Name={"Locate"} Details={card_det}></Card>
        <Card Img={card2} Name={"Book"} Details={card_det}></Card>
        <Card Img={card3} Name={"Park"} Details={card_det}></Card>
        
      </div>
    </div>
    </section>
    </div>
}

export default Features;