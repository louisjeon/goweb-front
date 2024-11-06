import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("https://bike-web-back.vercel.app/login", {
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form action="/login" method="post">
        <div>
          <label for="email">이메일</label>
          <input
            name="email"
            type="email"
            required
            onChange={(val) => {
              setEmail(val);
            }}
          />
        </div>
        <div>
          비밀번호
          <input
            name="password"
            type="password"
            required
            onChange={(val) => setPassword(val)}
          />
        </div>
        <button type="submit" onClick={login}>
          로그인
        </button>
        <button type="button" onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default Login;
