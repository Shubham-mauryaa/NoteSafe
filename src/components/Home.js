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


    </div>
  )

}


export default Home
