import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const about = [
  "Values",
  "Leadership",
  "Knowledge Hub",
  "Framework",
  "Testimonials",
  "Careers",
  "Blogs",
];

const support = ["Contact Us", "Careers", "Book A Call"];

function Footer() {
  return (
    <footer className='footer'>
      <div className='socials'>
        <h1>TEST+</h1>
        <div className='icons'>
          <FaLinkedin size={"2vw"} />
          <FaTwitter size={"2vw"} />
          <FaYoutube size={"2vw"} />
        </div>
      </div>
      <div className='about'>
        <p className='fhead'>About Us</p>
        {about.map((element, i) => (
          <p className='elem' key={i}>
            {element}
          </p>
        ))}
      </div>
      <div className='support'>
        <p className='fhead'>Support</p>
        {support.map((element, i) => (
          <p className='elem' key={i}>
            {element}
          </p>
        ))}
      </div>
      <div className='waiting'>
        <p className='elem w1'>So what are you waiting for?</p>
        <p className='elem'>Register by providing your phone number below</p>
        <input type='number' name='' id='' placeholder='+91-1234567890' />
        <button className='reg2'>Register</button>
      </div>
    </footer>
  );
}

export default Footer;
