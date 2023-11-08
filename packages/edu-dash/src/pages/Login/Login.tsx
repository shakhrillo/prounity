import { PuButton, PuCard, PuInput } from "react-library";
import "./Login.css";
import { BaseURL } from "../../utils/Base-url";
import { useRef } from "react";
const Login = () => {
  const userNameRef = useRef();
  const paswordRef = useRef();

  const handleLogin = () => {
    fetch(`${BaseURL}authen/api/user_sig_in_views/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userNameRef.current?.value,
        password: paswordRef.current?.value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP xato, so'rov bajarilmadi");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
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
            <PuInput label="Username" ref={userNameRef}></PuInput>
            <PuInput
              label="password"
              ref={paswordRef}
              type="password"
            ></PuInput>
          </div>
          <PuButton className="login-btn" onClick={handleLogin}>
            Login
          </PuButton>
        </form>
      </PuCard>
    </div>
  );
};

export default Login;
