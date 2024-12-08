import React from "react";
import styled from "styled-components";

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

const Menu = () => {
  return (
    <MenuWrapper>
      <a href="/about">
        <h5>회사 소개</h5>
      </a>

      <a href="/products">
        <h5>제품 소개</h5>
      </a>

      <a href="/bikemap">
        <h5>자전거 맵</h5>
      </a>

      <a href="/news">
        <h5>뉴스 및 이벤트</h5>
      </a>

      <a href="/board">
        <h5>게시판</h5>
      </a>

      <a href="/login">
        <h5>로그인/회원가입</h5>
      </a>
    </MenuWrapper>
  );
};

export default Menu;
