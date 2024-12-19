import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../customAxios";
import { useAuth } from "../AuthContext";

const StyledLogin = styled.div`
  @import url('https://cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css');

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'GmarketSansMedium', sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f7fc;
  }

  .login {
    width: 400px;
    padding: 40px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #2c2c2c;
    font-size: 16px;
    line-height: 1.6;
    margin: 20px auto;

    h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
      font-weight: bold;
    }

    #login {
      display: flex;
      flex-direction: column;

      input {
        width: 93%;
        height: 48px;
        padding: 0 10px;
        margin-bottom: 20px;
        border-radius: 12px;
        background-color: #f2f2f2;
        border: 1px solid #e0e0e0;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: border 0.3s;

        &:focus {
          border: 1px solid #5882fa;
          outline: none;
        }

        &::placeholder {
          color: #b0b0b0;
        }

        &[type='button'] {
          color: #fff;
          font-size: 16px;
          background-color: #819ff7;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
          padding: 10px;

          &:hover {
            background-color: #5882fa;
          }

          &:active {
            background-color: #5882fa;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }

    .option {
      margin-top: 5px;

      ul {
        padding: 0;
        margin: 0;
        display: inline-flex;
        justify-content: center;

        li {
          margin: 0 10px;

          a {
            font-size: 14px;
            text-decoration: none;
            color: #5882fa;
            transition: color 0.3s;

            &:hover {
              color: #819ff7; //색 확인
            }
          }

          list-style: none;
        }
      }
    }
  }
`;



const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { login } = useAuth();

  const handleLogin = () => {
    if (emailRegex.test(email)) {
      if (password.length >= 8) {
        setError(null);
        customAxios
          .post("/users/login", {
            email,
            password,
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              login(res.data);
              navigate("/");
            }
          })
          .catch((err) => {
            setError("유저를 찾을 수 없습니다.");
            console.log(err);
          });
      } else {
        setError("패스워드는 8자 이상이어야 합니다.");
      }
    } else {
      setError("이메일 형식이 맞지 않습니다.");
    }
  };

  return (
    <StyledLogin>
  <div className="login">
    <h2>로그인</h2>
    <form id="login" action="/login" method="post">
      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="이메일"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="button"
          value="로그인"
          onClick={handleLogin}
        />
      </div>
      <div className="option">
        <ul>
          <li>
            <a onClick={() => navigate("/signup")}>회원가입</a>
          </li>
        </ul>
      </div>
      <div style={{ color: "red", textAlign: "center" }}>{error}</div>
    </form>
  </div>
</StyledLogin>
  );
};

export default Login;
