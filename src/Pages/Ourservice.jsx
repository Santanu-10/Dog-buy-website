import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Ourservice() {
  return (
    <><div className="main">
    <Navbar/>
      <div className="div4">
        <div className="left1" data-aos="fade-right" data-aos-duration="800">
          <img src="./assets/Images/IMG_0809 1 (1).png" alt="dog" />
        </div>
        <div className="right1" data-aos="fade-left" data-aos-duration="800">
          <h2>Not your usual dog walk</h2>
          <br />
          <p>Welcome to the Paw Brigade, where adventure meets dog walking!</p>
          <br />
          <p>
            {" "}
            At Paw Brigade, we understand that dogs need more than just a walk
            around the block to thrive. That's why we offer a specialized dog
            walking service that focuses on adventure, mental stimulation, and
            exercise.
          </p>
          <br />
          <button>
            <span>
              <img className="pets" src="./assets/Images/pets.png" alt="" />
            </span>
            <span>SCHEDULE</span>
          </button>
        </div>
      </div>

      <div className="div1">
        <div className="right" data-aos="fade-right" data-aos-duration="800">
          <h2>Your dog is going to enjoy this</h2>
          <br />
          <p>
            Our experienced dog walkers will take your furry friend on exciting
            adventures through local parks, hiking trails, and other scenic
            locations. Whether it's a leisurely walk through the woods or a
            challenging hike up a mountain, we'll tailor the adventure to your
            dog's specific needs and abilities.
          </p>
        </div>
        <div className="left" data-aos="fade-left" data-aos-duration="800">
          <img src="./assets/Images/IMG_0809 1 (2).png" alt="dog" />
        </div>
      </div>

      <div className="div4">
        <div className="left1" data-aos="fade-right" data-aos-duration="800">
          <img src="./assets/Images/IMG_0809 1 (3).png" alt="dog" />
        </div>
        <div className="right1" data-aos="fade-left" data-aos-duration="800">
          <h2>Peace of mind travelling</h2>
          <br />
          <p>
            Going out of town can be stressful when you have a furry friend at
            home. But with Paw Brigade, you can enjoy your travels with peace of
            mind knowing your dog is in good hands.
          </p>
          <br />
          <p>
            {" "}
            Our experienced dog sitters will provide personalized care for your
            furry friend in the comfort of your own home. Whether you need a
            one-time dog sitter or regular pet care, we'll work with you to
            create a customized plan that meets your dog's specific needs.
          </p>
          <br />
          <button>
            <span>
              <img className="pets" src="./assets/Images/pets.png" alt="" />
            </span>
            <span>SCHEDULE</span>
          </button>
        </div>
      </div>

      <div className="div1">
        <div className="right" data-aos="fade-right" data-aos-duration="800">
          <h2>Full range of services</h2>
          <br />
          <p>
            Our dog sitting service includes:
            <br />
            <ul>
              <li style={{ padding: "5px 15px;" }}>
                In-home care: We'll come to your home and provide care for your
                dog in their familiar surroundings. This minimizes stress for
                your furry friend and ensures they feel comfortable and safe.
              </li>
              <li style={{ padding: "5px 15px;" }}>
                Feeding and medication: Our dog sitters will ensure your dog
                receives their meals and medication on time and in the correct
                dosage.
              </li>
              <li style={{ padding: "5px 15px;" }}>
                Exercise and playtime: We'll provide plenty of exercise and
                playtime to keep your dog happy and healthy. We'll take them on
                walks, play fetch, and give them plenty of cuddles and
                attention.
              </li>
            </ul>
          </p>
        </div>
        <div className="left" data-aos="fade-left" data-aos-duration="800">
          <img src="./assets/Images\IMG_0809 1 (4).png" alt="dog" />
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
      <Footer />
      </div>
    </>
  );
}

export default Ourservice;
