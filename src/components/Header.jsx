import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import Menu from "./Menu";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Logo = styled.img`
  padding: 0;
  margin: 0;
  margin-left: 20px;
  height: auto;
  width: 80px;

`;

const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <Logo src={logo} />
      </a>
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
