import React from 'react'
// import { Link } from 'react-router-dom';
import myImage from "./images/image1.png"
import TypingEffect from '../TypingEffect';
// import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

const Home = (props) => {
  // const { showAlert } = props;
  return (
    <div >
      <section id="home">
        <div className="content-container">
          <div className="typing-container">
            <p>Welcome to NoteSafe <br />Your Personal Digital Notebook</p>
            <TypingEffect />
          </div>
          <div className="image-container">
            <img src={myImage} alt="Description of the image" />
          </div>
        </div>
      </section>

      {/* <footer>
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
     */}

    </div>
  )

}


export default Home
