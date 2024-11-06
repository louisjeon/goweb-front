import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuWrapper = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0px 10px 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a {
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: inherit;
  }

  a:hover {
    color: gray;
  }
`;

const Hamburger = styled(GiHamburgerMenu)`
  
`

const Menu = () => {
  return (
    <MenuWrapper>
      <a href="/about">
        <h5>회사 소개</h5>
      </a>

      <a href="/products">
        <h5>제품 소개</h5>
      </a>

      <a href="/stores">
        <h5>대여점</h5>
      </a>

      <a href="/news">
        <h5>뉴스 및 이벤트</h5>
      </a>

      <a href="/support">
        <h5>고객 지원</h5>
      </a>

      <a href="/login">
        <h5>로그인/회원가입</h5>
      </a>
    </MenuWrapper>
    
  );
};

export default Menu;
