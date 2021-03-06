import React from 'react';
import ReactDOM from 'react-dom';
import { FaGithub,FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import './text.css';

function Text() {
  return (
    <div className="text">

      <h1 className='header'> Surbir Sandhu </h1>
      <p className ='p'> Software Developer </p>
      <p>
      <a className="linkedin social" href=" https://www.linkedin.com/in/surbir-sandhu"> <FaLinkedin size="2em"/> </a>
     <a className="instagram social" href=" https://www.instagram.com/surbir__/"> <FaInstagram size="2em" /> </a>
     <a className="github social" href=" https://github.com/surbir101" > <FaGithub size="2em"/> </a>
     <a className="facebook social" href=" https://www.facebook.com/surbir.sandhu/"> <FaFacebook size="2em" /> </a>
     </p>

    </div>

      );
    }

    export default Text;
