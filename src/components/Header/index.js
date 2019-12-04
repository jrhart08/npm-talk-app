import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  display: flex;
  height: 50px;
`;

const HeaderDiv = styled.div`
  background-color: #282c34;
  padding: 1em;
  
  display: flex;
  
  & > ul {
    list-style-type: none;
    overflow: hidden;

    & > li {

      & > a {
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
      }
    }
  }
`;

const Header = () => (
  <HeaderDiv>
    <Logo />
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/example">Example</Link>
      </li>
    </ul>
  </HeaderDiv>
);

export default Header;
