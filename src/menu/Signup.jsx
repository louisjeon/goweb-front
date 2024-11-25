import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../customAxios";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const signup = () => {
    if (emailRegex.test(email)) {
      if (password.length >= 8) {
        if (password === password2) {
          setError(null);
          customAxios
            .post("/signup", {
              email,
              password,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        } else {
          setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }
      } else {
        setError("패스워드는 8자 이상이어야 합니다.");
      }
    } else {
      setError("이메일 형식이 맞지 않습니다.");
    }
  };

  return (
    <>
      <form action="/signup" method="post">
        <div>
          이메일
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
        <div>
          비밀번호확인
          <input
            name="password"
            type="password"
            required
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="button" onClick={() => navigate("/login")}>
          뒤로
        </button>
        <button type="button" onClick={signup}>
          회원가입
        </button>
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </>
  );
};

export default Signup;
