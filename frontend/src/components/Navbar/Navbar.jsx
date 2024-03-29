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

  & input[type='text'] {
    color: #686f7a;
    background: #f2f3f5;
    border: 0px solid transparent !important;

    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;

    width: 46rem;
    margin-left: 3rem;
    text-indent: 1.5rem;
  }

  & #styled-navbar-content-input-submit {
    width: 4.5rem;
    height: 4.7rem;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background: #f2f3f5;
  }

  & #styled-navbar-content-input-submit:hover {
    cursor: pointer;
    background: # rgb(236,82,82);

  }

  & #styled-navbar-content-input-submit:hover svg {
    fill: #fff;
  }

  & #styled-navbar-content-input-submit svg {
    width: 3rem;
    height: 3rem;
    fill rgb(236,82,82);
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & .styled-navbar-vertical-divider {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-left: 1px solid #dedfe0;
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

        <input type="text" />
        <div id="styled-navbar-content-input-submit">
          <svg focus="false" viewBox="0 0 24 24">

            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </div>
        <Button text="GoTo Udemy Course" btype="grey" />
        <div className="styled-navbar-vertical-divider"></div>

        <>
          <Button text="Log In" btype="white"></Button>
          {/* onClick={(e) => {setModalShowing(true); setModalDisplay('login')}} */}
          <Button text="Sign Up" btype="red"></Button>
          {/* onClick={(e) => {setModalShowing(true); setModalDisplay('signup')}} */}
        </>

        <div id="styled-navbar-profile-icon"></div>
        {/* onMoudeEnter={(e) => {e.stopPropagation(); getNavPosition(e, 'profile', true);}} */}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;