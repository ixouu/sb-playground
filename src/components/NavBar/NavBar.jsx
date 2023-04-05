import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Li = ({ hoverColor , menu}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
            <li 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => console.log('click')}
              style={{
                background : isHovered ? hoverColor : 'transparent'
              }}
            >{menu}</li>)

}

const NavBar = ({
  backgroundColor = '#3F46EB',
  hoverColor = '#B0AEF5',
  navMenus = ['HOME', 'ABOUT', 'LEARN MORE', 'CONTACT'],
}) => {

  
  return (
    <nav style={{
      background : backgroundColor,
    }}>
      <ul>
        {navMenus.map((menu, index) => {
            return <Li key={index} menu={menu} hoverColor={hoverColor} />
        })}
      </ul>
      <ul>
        <li>LOG-IN</li>
        <li>SALES</li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
    backgroundColor : PropTypes.string,
    hoverColor : PropTypes.string,
   navMenus :PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavBar