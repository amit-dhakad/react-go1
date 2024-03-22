import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import './Navbar.scss';

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 6.5rem;

  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  font-size: 2rem;
  color: #505763;
  background: #fff;
  font-family: 'Hackman-Bold';

  & #styled-navbar-content {
    position: relative;
    width: 1400px;
    margin: 0 auto;
    padding: 1rem;
    line-height: 4.5rem;
    display: flex;

    & #styled-navbar-content-icon {
      width: 4.5rem;
      height: 4.5rem;
      background: rgb(136, 82, 82);
      mask: ${(props) => `url(${props.svgicon}) no-repeat center`};
    }

    & #styled-navbar-content-title {
      margin-left: 1rem;
      margin-right: 1.5rem;
    }
  }
`;
const Navbar = () => {
  return (
    <StyledNavbar svgicon="/icons/16px/code.svg">
      <div id="styled-navbar-content">
        <div id="styled-navbar-content-icon"></div>
        <div id="styled-navbar-content-title"> Foo Demy</div>

        <Button
          text="Resources"
          svgicon="/icons/20px/box.svg"
          btype="icon-btn"
        />
      </div>
      <span> Testing git name</span>
    </StyledNavbar>
  );
};

export default Navbar;