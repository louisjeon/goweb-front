import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../customAxios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = () => {
    customAxios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate("/");
        }
      })
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          비밀번호
          <input
            name="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={login}>
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
