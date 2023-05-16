import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "../Login/login.css";
import img183 from "../images/Rectangle 183(1).png";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup'
import { loginService } from "../Services/Services";
// import classes from './login.css'

function Login() {
  const navigate = useNavigate();
  // navigate("/login mobile")

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:Yup.object({
      email:Yup.string().required("Email is required"),
      password:Yup.string().required('Password is required')
    }),
    onSubmit:values => {
      handleLogin(values)
    }
  });

  console.log(errors,'errors');

  const handleLogin = (data) => {
    console.log(data,'data');
    let requestData = {
      otp:data.otp,
      reset_key:'reset key'
    }
    let formData = new FormData();
    formData.append("username",data.email);
    formData.append('password',data.password);
    loginService(formData).then((res) => {
      console.log(res.data,'response');
      if(res.data.status===1){
        navigate('mobile_login')
      }
    }).catch((err) => {
      console.log(err,'error');
    })
  };

  return (
    <div>
      <Header />
      <div>
        <div className="login">
          <div className="login_left">
            <h1>login to your Account</h1>
            <div className="hor_line"></div>
            <br></br>
            <label>Email Address</label>
            <br></br>
            <input placeholder="enter a email address" type="text" value={values.email} onChange={handleChange} name="email" ></input>
            <hr></hr>
            <label>Password</label>
            <br></br>
            <input className="eyesympol" value={values.password} type="password" onChange={handleChange} name="password" placeholder="*****"></input>
            <hr></hr>
            <div className="login_txt">
              <p className="txt1">Login with Mobile Number</p>
              <p>Forget Password</p>
            </div>
            <div className="login_btn">
              <button onClick={handleSubmit}>Login to Your Account</button>
            </div>
            <div className="btn_after_txt">
              <a className="txt1" href="alredy account">
                Don'tHave An Account?
              </a>
              <a href="sigin">Sign Up</a>
            </div>
          </div>
          <div className="sec_right">
            <div>
              <img src={img183} alt="img183"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
