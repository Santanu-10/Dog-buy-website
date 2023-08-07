import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <>
    <div className="main">
    <Navbar/>
      <div className="div4">
        <div className="left1" data-aos="fade-right" data-aos-duration="800">
          <img src="./assets/Images/IMG_2685 1 (4).png" alt="dog" />
        </div>
        <div className="right1" data-aos="fade-left" data-aos-duration="800">
          <h2>Contact Us</h2>
          <br />
          <p>Our friendly team would love to hear from you!</p>
          <br />
          <div className="phone">
            <a
              href="tel:6123 5123"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>6123 5123</span>
            </a>
          </div>
          <br />
          <div className="email1">
            <a
              href="mailto:hello@pawbrigade.com"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>hello@pawbrigade.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="people1">
        <div className="contact" data-aos="zoom-in" data-aos-duration="800">
          <form>
            <div className="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>
            <div className="email">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="message">
              <textarea placeholder="Mesage" required></textarea>
            </div>
          </form>
        </div>
      </div>

      <div className="submit-button">
        <button type="submit">SUBMIT</button>
      </div>

      <Footer />
      </div>
    </>
  );
}

export default Contact;
