import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      //save the authtoken and redirect
      // localStorage.setItem('token', json.authtoken)---made it commentes so my signup and login button show instead of logout after signup
      navigate('/login')
      props.showAlert("Account created suucessfully", "success")
    }
    else {
      props.showAlert("Invalid credentials", "danger")
    }

  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='login-container'>
        <h2>Become a part of our family just by signing in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 fields">
            <label htmlFor="name" className="form-label">Enter your Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} minLength={3} />
          </div>
          {/* <div className="mb-3">
          <label htmlFor="uname" className="form-label">Enter your Username</label>
          <input type="text" className="form-control" id="uname" name="uname" onChange={onChange} minLength={3}  />
        </div> */}
          <div className="mb-3 fields">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 fields">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder='password should be minimum length of 5' onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3 fields">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>

      <footer>
        <div className="footer-content">
          <span className="footer-text">Created by @ Shubham Maurya</span>
          <div className="social-icons">
            <Link to="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://github.com/Shubham-mauryaa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Signup
