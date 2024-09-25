import React from "react"
import './Footer.css'
function Footer(){
    return (
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section about">
      <h3>About Us</h3>
      <p>Your text about the traffic and parking management company.</p>
    </div>
    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: info@example.com</p>
      <p>Phone: +123456789</p>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2024 Traffic & Parking Management. All rights reserved.
  </div>
</footer>);
}

export default Footer;