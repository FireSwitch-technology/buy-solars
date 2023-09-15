import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsPersonDown} from 'react-icons/bs'
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center',}}>
    <div style={navbarStyle}>
      <div style={navListStyle}>
        <h2>BuySolar</h2>
      </div>
      <div style={menuIconStyle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul style={{ ...navListStyle }}>
        <Link href='/' style={links} ><li style={listItemStyle}>Home</li></Link>
       <Link href='/contact' style={links}> <li style={listItemStyle}>Contact</li></Link>
<Link href='/about' style={links}><li style={listItemStyle}>About</li></Link>       
<Link href='/register' style={links}><li style={listItemStyle}>Signup</li></Link>
      </ul>
      <div style={navListStyle2}>
        <div style={searchContainerStyle}>
          <input type="text" style={searchInputStyle} placeholder="What are you looking for?" />
          <FaSearch style={searchIconStyle} />
        </div>
        <GrFavorite style={iconStyle} />
      <Link href='/cart' style={links}> <AiOutlineShoppingCart style={iconStyle} /></Link> 
        <BsPersonDown style={iconStyle}/>
      </div>
    </div>
    </div>
    </div>
  );
};

const links={textDecoration: 'none', fontStyle: 'none'}

const navListStyle2 = {
    listStyle: 'none',
    display: 'flex',
    gap: '5px',
  };

const listItemStyle = {
  cursor: 'pointer',
  transition: 'background-color 0.5s, color 0.5s',
  color: 'black',
  //  boxShadow: '5px 2px 4px rgba(5, 2, 0, 0.2)',

  
};

listItemStyle[':hover'] = { // Corrected assignment
  backgroundColor: 'goldenrod',
  color: 'black',
  boxShadow: '5px 2px 4px rgba(5, 2, 0, 0.2)',
};

const searchContainerStyle = {
  position: 'relative',
};

const searchInputStyle = {
  padding: '5px 30px',
  border: '1px solid black',
  borderRadius: '5px',
backgroundColor: '#F5F5F5',
color: '#000'
 
};

const searchIconStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '10px',
  color: '#000',
  fontSize: '18px',
};

const iconStyle = {
  fontSize: '24px',
  marginLeft: '20px',
  cursor: 'pointer',
//   border: '1px solid black', // Add border style
};

const navbarStyle = {
  backgroundColor: '#fff',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 50px',
  boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.1)',
  width: '100%',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: ' 20px',
  gap: '50px',
  color: '#000'
};

const menuIconStyle = {
  fontSize: '24px',
  cursor: 'pointer',
  display: 'none',
};

const menuListStyle = (isMenuOpen) => ({
  flexDirection: isMenuOpen ? 'column' : 'row',
  position: 'absolute',
  top: '60px',
  right: '50px',
  display: isMenuOpen ? 'flex' : 'none',
  backgroundColor: 'white',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  zIndex: 1,
  width: '200px',
});

export default Navbar;
