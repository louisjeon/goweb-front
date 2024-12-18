import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../AuthContext";

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

  h5:hover {
    cursor: pointer;
  }
`;

const Menu = () => {
  const { user, logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

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
      {user ? (
        <>
          <h5 onClick={() => setShowLogout(!showLogout)}>{user.email}님</h5>
          {showLogout && (
            <a href="/login">
              <h5 id="logout" onClick={logout}>
                로그아웃
              </h5>
            </a>
          )}
        </>
      ) : (
        <a href="/login">
          <h5>로그인/회원가입</h5>
        </a>
      )}
    </MenuWrapper>
  );
};

export default Menu;
