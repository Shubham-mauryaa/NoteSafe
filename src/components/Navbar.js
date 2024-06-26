import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname)
  // }, [location]);
  let navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  const handlesignup=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiar " style={{backgroundColor:'#fc0303', }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="#">NoteSafe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-white ${ location.pathname === "/" ? "active" : "" }`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${ location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className="btn text-white mx-2" to='/login'  role="button">Login</Link>
              <Link className="btn text-white mx-2" to='/signup' role="button" onClick={handlesignup}>SignUp</Link>
            </form> : <button className='btn btn-danger' onClick={handleLogout}>Logout</button>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

