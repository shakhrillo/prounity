/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PuButton, PuCard, PuInput, PuText } from "react-library";
import "./Login.css";
import { BaseURL } from "../../utils/Base-url";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const userNameRef = useRef();
  const paswordRef = useRef();
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRoll = () => {
    fetch(`${BaseURL}authen/api/user_profiles_views/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        if (data?.groups[0]?.name === "admin") {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
  };

  const handleLogin = () => {
    fetch(`${BaseURL}authen/api/user_sig_in_views/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //  @ts-ignore
        username: userNameRef.current?.value,
        //  @ts-ignore
        password: paswordRef.current?.value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data?.token?.access);
        handleRoll();
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
  };

  return (
    <div className="login">
      <PuCard className="login-box">
        <h1>Login</h1>
        <form>
          <div className="login-inputs">
            {/* @ts-ignore */}
            <PuInput label="Username" ref={userNameRef}></PuInput>
            <PuInput
              label="password"
              //  @ts-ignore
              ref={paswordRef}
              type="password"
            ></PuInput>
          </div>
          <PuButton className="login-btn" onClick={handleLogin}>
            Login
          </PuButton>
          {error && <PuText color="danger">Lorem ipsum dolor sit amet</PuText>}
        </form>
      </PuCard>
    </div>
  );
};

export default Login;
