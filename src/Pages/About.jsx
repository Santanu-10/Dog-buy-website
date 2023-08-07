import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
    <div className="main">
    <Navbar/>
      <div className="main-body">
        <div className="div4">
          <div className="left1" data-aos="fade-right" data-aos-duration="800">
            <img src="./assets/Images/IMG_2685 1 (2).png" alt="dog" />
          </div>
          <div className="right1" data-aos="fade-right" data-aos-duration="800">
            <h2>Your Dog is our Priority</h2>
            <br />
            <p>
              At Paw Brigade, we value your pets and your relationship with
              them. The safety and <br />
              well being of your pets and home are our top priority.Going out of
              town can be stressful when you have a furry friend at home. But
              with Paw Brigade, you can enjoy your travels with peace of mind
              knowing your dog is in good hands.
            </p>
          </div>
        </div>
        <div className="div1">
          <div className="right" data-aos="fade-left" data-aos-duration="800">
            <h2>All our walkers are certified</h2>
            <br />
            <p>
              All of our walkers are certified, which guarantees their expertise
              and knowledge in handling dogs. We prioritize the safety and
              welfare of the dogs in our care, and our certification requirement
              helps us to achieve that goal.
            </p>
          </div>
          <div className="left" data-aos="fade-left" data-aos-duration="800">
            <img src="./assets/Images/IMG_0809 1 (5).png" alt="dog" />
          </div>
        </div>
        <div className="div4">
          <div className="left1" data-aos="fade-right" data-aos-duration="800">
            <img src="./assets/Images/IMG_2685 1 (3).png" alt="dog" />
          </div>
          <div className="right1" data-aos="fade-right" data-aos-duration="800">
            <h2>Your Dog and Home are safe</h2>
            <br />
            <p>
              We provide insurance coverage for all of our dog sitters to ensure
              the safety of your home and the well-being of the dogs entrusted
              to us. Our insurance policy covers accidents, illnesses, and other
              unforeseen events, giving you the peace of mind knowing that your
              furry companions are in good hands.
            </p>
          </div>
        </div>
        <div className="meet" data-aos="zoom-in" data-aos-duration="800">
          <div className="meet-heading">
            <p>Meet your dog's new best friend today!</p>
          </div>
          <div className="meet-subheading">
            <p>Schedule your meet and greet</p>
          </div>
          <button>
            <span>
              <img className="pets" src="./assets/Images/pets.png" alt="" />
            </span>
            <span>SCHEDULE</span>
          </button>
        </div>
        <div className="footer">
          <div className="heading">
            <img src="./assets/Images/copyright.png" alt="" />
            2023 Paw Brigade
          </div>
          <div className="footer-logo">
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default About;
