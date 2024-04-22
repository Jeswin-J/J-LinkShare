import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <p>Get in touch!</p>
            <NavLink className={"social-links"} to='https://www.linkedin.com/in/jeswinjosephj/'><i class="bi bi-linkedin"></i>&nbsp;&nbsp;Jeswin Joseph J</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink className={"social-links"} to='https://github.com/Jeswin-J'><i class="bi bi-github"></i>&nbsp;&nbsp;Jeswin-J</NavLink>
    </footer>
  )
}

export default Footer;
