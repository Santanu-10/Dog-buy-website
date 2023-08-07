import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Login() {
  return (
    <>
    <div className="main">
    <Navbar/>
          <div className="login-form">
        <div className="icon"data-aos="fade-right" data-aos-duration="800">
          <img src="./assets/Images/g104.png" alt="Logo" />
          <div className="heading">
            <h1>Welcome back to the Paw Brigade!</h1>
          </div>
          <form>
            <div className="name">
                <label for="Username" className="name">User Name *</label><br/>
                <input type="text" id="Username" name="Username"placeholder="Jhon"required/>
            </div>
            <div className="password">
                <label for="password" className="password">Password *</label><br/>
                <input type="password" id="password" name="password"placeholder="**********"required />
            </div>
            <div className="create-account">
                <a href="/">Create a new account</a>
            </div><br/>
            <button type="submit" className="button1">LOG IN</button>
          </form>
        </div>
        <div className="rimage"data-aos="fade-left" data-aos-duration="800">
            <img src="./assets/Images/Vector.png" alt="Dogs"/>
        </div>
        
      </div>

      <Footer/>
      </div>
    </>
  )
}

export default Login