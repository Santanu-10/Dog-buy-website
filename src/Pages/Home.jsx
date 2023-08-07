import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <>
    <div className="main">
    <Navbar/>
        <div className="div1">
        <div className="right" data-aos="fade-right" data-aos-duration="800">
          <h2>The best walks start here</h2>
          <br />
          <p>
            Highly trained, and reliable. 100% loving dog walkers and sitters.
            Schedule a meet and greet today!
          </p>
          <br />
          <button>
            <span><img className="pets" src="/Images/pets.png" alt=''/></span>
            <span>SCHEDULE</span>
          </button>
        </div>
        <div className="left" data-aos="fade-left" data-aos-duration="800">
          <img src="./assets/Images\IMG_2562 2.png" alt="dog" />
        </div>
      </div>
      <div className="div2" data-aos="fade-right" data-aos-duration="800">
        <div className="works-heading">
          <p>
            Paw Brigade is a full-service private dog-walking company providing
            adventures and loving care to all dogs in Singapore. From the
            largest to the smallest dogs, we provide the mental stimulation and
            exercise that your dog needs.
          </p>
        </div>
        <div className="works-title">
          <p>How It Works :</p>
        </div>
        <div className="works">
          <div className="works-dividion">
            <h4>Tell us about your dog</h4>
            <p>
              Contact us through our form or contact us through email or phone
            </p>
          </div>
          <div className="works-dividion">
            <h4>Meet and Greet</h4>
            <p>We’ll schedule a time to stop by to meet you and your dog</p>
          </div>
          <div className="works-dividion">
            <h4>Adventure Time!</h4>
            <p>
              Book our services and let us bring your dog for the time of its
              life!
            </p>
          </div>
        </div>
      </div>
      <div className="div3">
        <div className="left1" data-aos="fade-right" data-aos-duration="800">
          <img src="./assets/Images/IMG_2685 1.png" alt="dog" />
        </div>
        <div className="right1" data-aos="fade-left" data-aos-duration="800">
          <h2>The best walks start here</h2>
          <br />
          <p>
            Highly trained, and reliable. 100% loving dog walkers and sitters.
            Schedule a meet and greet today!
          </p>
          <br />
          <button>
            <span>MEET THE TEAM</span>
          </button>
        </div>
      </div>
      <div className="div1">
        <div className="right" data-aos="fade-right" data-aos-duration="800">
          <h2>The best walks start here</h2>
          <br />
          <p>
            Highly trained, and reliable. 100% loving dog walkers and sitters.
            Schedule a meet and greet today!
          </p>
          <br />
          <button>
            <span>TELL US YOUR NEEDS</span>
          </button>
        </div>
        <div className="left" data-aos="fade-left" data-aos-duration="800">
          <img src="./assets/Images/IMG_0809 1.png" alt="dog" />
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
          <span><img className="pets" src="./assets/Images/pets.png" alt=''/></span>
          <span>SCHEDULE</span>
        </button>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Home