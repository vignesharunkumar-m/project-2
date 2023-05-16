import React from 'react'
import "./signup.css"

import line67 from "../images/Line 67.png"
import img183 from "../images/Rectangle 183(1).png"

import Header from '../header/header'
import Footer from '../footer/footer'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (event) => {

      event.preventDefault();
      // Send data to server using POST method
      fetch("/api/submit-form", {

        method: "POST",
        body: {name:'santhosh'},
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    const navigate = useNavigate()

  return (
    <div>
        <Header/>
        <div className='section'>
            <form onSubmit={handleSubmit}>
            <div className='sec_left'>
                <div className='sec_heading'>Sign up your Account</div>
                <div><img src={line67} alt='line67'></img></div>
                <label>Name</label>
                <br></br>
                <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />                <hr></hr>
                <label>Email Address</label>
                <br></br>
                <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />                <hr></hr>
                <label>Phone number</label>
                <br></br>
                {/* <input placeholder='phone number' maxLength={10} onKeyDown={(e) => {
                    if(e.key==="0" || parseInt(e.key)){

                    }else{
                        e.preventDefault()
                    }
                }}></input> */}
                <input placeholder='phone number' type='phonenumber' maxLength={10}></input>
                <hr></hr>
                <label>Address</label>
                <br></br>
                <input placeholder='enter a address'></input> 
                <hr></hr>
                <label>Password</label>
                <br></br>
                <input className='eye' placeholder='*****'></input>
                <hr></hr>
                <label>Repeat Password</label>
                <br></br>
                <input className='eye' placeholder='*****'></input>
                <hr></hr>
                <div className='forgrt_div'>Forget password</div>
                <div className='signin_btn'><button type='submit' onClick={() => navigate("/login")}>Sign up to Your Account</button></div>
                {/* <div className='signin_btn'><button type='submit' >Sign up to Your Account</button></div> */}
                <div className='sec_left_bottom'>
                    <a href='alredy account'>Alerdy Have An Account?</a>
                    <a href='sigin'>Sign in</a>
                </div>
            </div>
            </form>
            <div className='sec_right'>
                <div><img src={img183} alt='img183'></img></div>   
            </div>
        </div>
        <div><Footer></Footer></div>
    </div>
  )
}

export default Signup