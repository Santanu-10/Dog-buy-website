import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Ourpeople() {
  return (
   <>
   <div className="main">
   <Navbar/>
           <div className="div4">
          <div className="left1" data-aos="fade-right" data-aos-duration="800">
            <img src="./assets/Images/IMG_2685 1 (1).png" alt="dog" />
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
        <div className="people" data-aos="zoom-in" data-aos-duration="800">
          <div className="people-img">
            <img src="./assets/Images/image 1.png" alt="people" />
          </div>
          <div className="people-desc">
            <div className="people-intro">
              <h3 style={{color: "#007067"}}>Dean Mak</h3>

              <p style={{fontweight: "800"}}>Dog Walker in Chief</p>
              <br />
              <h4 style={{color: "#007067"}}>Skills</h4>

              <p>Handling Big Dogs</p>
              <p>Canine Behavior</p>
              <p>Canine First Aid</p>
              <p>Good Communication</p>
              <p>Positive Attitude</p>
            </div>
            <div className="people-describe">
              <p>
                Meet Dean, your trusted neighborhood dog walker. With 10 years
                of experience working with dogs of all sizes and temperaments,
                Dean has a passion for providing top-notch care and attention to
                every furry friend he meets.<br /><br />
                Dean's love for dogs started at a young age, and he has been
                working with them ever since. Whether it's taking them on long
                walks, playing fetch at the park, or just providing some
                much-needed cuddles, Dean knows how to keep your pet happy and
                healthy.<br /><br />
                When you entrust your furry friend to Dean's care, you can rest
                assured that they're in good hands. Dean is fully bonded and
                insured, and they treat every dog as if they were their own.
                They take the time to get to know each dog's unique personality
                and needs, and they're always happy to accommodate any special
                requests.<br /><br />
                Whether you need a regular dog walking service or just an
                occasional pet sitter, Dean is here to help. He pride himself on
                his reliability, flexibility, and attention to detail, and he’ll
                go above and beyond to make sure your pet feels loved and cared
                for. Get in touch with Dean today to schedule a meet-and-greet
                and see why he is the best dog walker in town!
              </p>
            </div>
          </div>
        </div>
        <div className="people" data-aos="zoom-in" data-aos-duration="800">
          <div className="people-img">
            <img src="./assets/Images/image 1 (1).png" alt="people" />
          </div>
          <div className="people-desc">
            <div className="people-intro">
              <h3 style={{color: "#007067"}}>Priya</h3>

              <p style={{fontweight: "800"}}>Dog Walker</p>
              <br />
              <h4 style={{color: "#007067"}}>Skills</h4>

              <p>Handling Big Dogs</p>
              <p>Canine Behavior</p>
              <p>Canine First Aid</p>
              <p>Good Communication</p>
              <p>Positive Attitude</p>
            </div>
            <div className="people-describe">
              <p>
                Meet Dean, your trusted neighborhood dog walker. With 10 years
                of experience working with dogs of all sizes and temperaments,
                Dean has a passion for providing top-notch care and attention to
                every furry friend he meets.<br /><br />
                Dean's love for dogs started at a young age, and he has been
                working with them ever since. Whether it's taking them on long
                walks, playing fetch at the park, or just providing some
                much-needed cuddles, Dean knows how to keep your pet happy and
                healthy.<br /><br />
                When you entrust your furry friend to Dean's care, you can rest
                assured that they're in good hands. Dean is fully bonded and
                insured, and they treat every dog as if they were their own.
                They take the time to get to know each dog's unique personality
                and needs, and they're always happy to accommodate any special
                requests.<br /><br />
                Whether you need a regular dog walking service or just an
                occasional pet sitter, Dean is here to help. He pride himself on
                his reliability, flexibility, and attention to detail, and he’ll
                go above and beyond to make sure your pet feels loved and cared
                for. Get in touch with Dean today to schedule a meet-and-greet
                and see why he is the best dog walker in town!
              </p>
            </div>
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

export default Ourpeople