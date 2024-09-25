import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="home-card">
        <img
          src={props.Img}
          className="home-card-img"
          alt=""
        />
        <div className="home-card-body">
          <h5 className="home-card-title">{props.Name}</h5>
          <p className="home-card-text">{props.Details}</p>
          <a href="/" className="btn" style={{ backgroundColor: "#0F6292" }}>
            Click here
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;

//         <div className="col">
//           <div className="card">
//   <img src={img2} className="card-img-top" height="250" alt=""/>
//   <div className="card-body" >
//     <h5 className="card-title">Stores</h5>
//     <p className="card-text">Access a comprehensive selection of locally-sourced produce and supplies at our farmer's store.</p>
//     <a href="/storeSection" className="btn btn-primary" style={{backgroundColor:"#0F6292"}}>Click here</a>
//   </div>
// </div>
//         </div>
//         <div className="col">
//           <div className="card">
//   <img src={img3} className="card-img-top" height="250" alt=""/>
//   <div className="card-body" >
//     <h5 className="card-title">Major Crops</h5>
//     <p className="card-text">Gain valuable insights into major crop cultivation techniques and market trends to optimize your yields.</p>
//     <a href="/localcrops" className="btn btn-primary" style={{backgroundColor:"#0F6292"}}>Click here</a>
//   </div>
