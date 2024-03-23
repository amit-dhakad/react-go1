import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
  border-radius: 0.2rem;
  font-size: 1.5rem;
  color: #686f7a;
  border: 1px solid #686f7a;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: 0.5rem;

  ${({ btype }) =>
    btype == 'white' &&
    `   &:hover {
            color: #29303b;
            border-color: #29303b;
            cursor: pointer;
        }
    `}

  ${({ btype }) =>
    btype == 'red' &&
    `
        color: #fff;
        background-color: #ec5252;
        border: 1px solid transparent;
        border-color: transparent;

        &:hover {
            color: #fff;
            background-color: #992337;
            border-color: transparent;
            cursor: pointer;
        }
    `}

        ${({ btype }) =>
    btype == 'grey' &&
    `
        color: #505763;
        border-radius:3px;
        background-color: #fff;
        border: 1px solid transparent;

        &:hover {
            background-color: rgba(20, 23, 28, 0.5);
            border-color: transparent;
            cursor: pointer;
            border: 1px solid rgba(20, 23, 28, 0.5);
        }
    `}

    ${({ btype }) =>
    btype == 'blue' &&
    `
        color: #007791;
        border-radius: 3px;
        background-color: #fff;
        border: 1px solid #007791;

        &:hover {
            color:#003440;
            background-color:#fff;
            border-color:#003440;
        }

    `}

    ${({ btype, svgicon }) =>
    btype == 'icon-btn' &&
    `
        display: flex;
        border: 0px;
        & .icon-btn-icon {
            position: relative;
            display: inline-block;
            width: 2rem;
            // height: 2rem;
            // line-height: 2rem;
            background: #ccc;
            mask: url(${svgicon}) no-repeat center;
            // top: 4px;
            margin-right: 0.5rem;
        }

        &:hover{
            cursor:pointer;
        }
    `}
`;
const Button = ({ btype, text, onClick, svgicon, onMouseEnter }) => {
  return (
    <StyledButton
      btype={btype}
      onClick={onClick}
      svgicon={svgicon}
      onMouseEnter={onMouseEnter}
    >
      {svgicon && svgicon !== '' && <span className="icon-btn-icon"> </span>}
      <span> {text}</span>
    </StyledButton>
  );
};

export default Button;
