import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      //save the authtoken and redirect
      localStorage.setItem('token', json.authtoken)
      props.showAlert("login sucessfully", "success")
      navigate('/Userdata')
    }
    else {
      props.showAlert("Invalid credentias", "danger")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
    <div className='login-container'>
      <h2>Login and enjoy your notes</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 fields">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 fields">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary" >Login</button>
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

export default Login
