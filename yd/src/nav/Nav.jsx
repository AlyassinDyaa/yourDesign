import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Nav.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
         <input type="checkbox" id="active"/>
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>

    <div class="wrapper">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#canvas">Canvases</a></li>
                    <li><a href="#foter">Contact</a></li>
                </ul>
    </div>

    </nav>
  );
};

export default Navbar;
