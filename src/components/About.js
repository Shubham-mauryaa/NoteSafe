import React from 'react'
import { Link } from 'react-router-dom';
import aboutimage from "./images/aboutimage.png"
import TypingEffect from '../TypingEffect';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <section id="about">
        <h2>About NoteSafe</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={aboutimage} alt="Description of the image" />
          </div>
          <p>At NoteSafe, we provide a secure and intuitive platform for all your note-taking needs. Whether you're jotting down ideas, organizing your to-do lists, or keeping track of important information, NoteSafe makes it easy and convenient. <br />Join NoteSafe today and experience the simplicity and security of our digital notebook. Organize your thoughts, projects, and tasks effortlessly, knowing that your information is safe with us.
          </p>
        </div>

        <hr className="divider" />
        <h3>Features of the Website</h3>
        <div className="features-container">
          <div className="card">
            <h4>Create Account</h4>
            <p>New to NoteSafe? Sign up in just a few steps and start managing your notes right away..</p>
          </div>
          <div className="card">
            <h4>Manage Your Notes</h4>
            <p>Once logged in, you can add new notes, update existing ones, view your entire collection, or delete notes you no longer need.</p>
          </div>
          <div className="card">
            <h4>Robust Security</h4>
            <p> We take your privacy seriously. Your account is protected with state-of-the-art security measures, ensuring that your notes remain private and secure.</p>
          </div>

          <div className="card">
            <h4>CRUD Operations </h4>
            <p>You can create, read, update, and delete your notes anytime. We try to Provide best service and comfort to our users </p>
          </div>
        </div>
        <hr className="divider" />

        <h3>Technologies Used</h3>
        <div className="technologies-container">
          <div className="tech-icon">
            <FaReact size={40} />
            <span>React</span>
          </div>
          <div className="tech-icon">
            <FaJsSquare size={40} />
            <span>JavaScript</span>
          </div>
          <div className="tech-icon">
            <FaCss3Alt size={40} />
            <span>CSS</span>
          </div>
          <div className="tech-icon">
            <FaHtml5 size={40} />
            <span>HTML</span>
          </div>
        </div>
      </section>

      {/* foooter */}
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
    </div>
  )
}


export default About
