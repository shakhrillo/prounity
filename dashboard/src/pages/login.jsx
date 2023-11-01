import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleRoll = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.163:8000/v1/api/user_profiles_views/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      if (jsonData?.groups[0]?.name === "Admin") {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    try {
      const response = await fetch(
        "http://192.168.1.163:8000/v1/api/user_sign_in_views/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      localStorage.setItem("token", data?.token?.access);
      handleRoll();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="h-100 w-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center align-items-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title text-center fw-bold mb-4">
                  Login
                </h1>
                <form
                  method="POST"
                  className="needs-validation"
                  autoComplete="off"
                  onSubmit={handleLogin}
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="text">
                      Usename
                    </label>
                    <input
                      id="text"
                      type="text"
                      placeholder=" Enter Username..."
                      className="form-control"
                      name="text"
                      required
                      autoFocus
                      ref={usernameRef}
                    />
                    <div className="invalid-feedback">Username is invalid</div>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <input
                      placeholder="Enter Password..."
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      ref={passwordRef}
                    />
                    <div className="invalid-feedback">Password is required</div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="form-check-input"
                      />
                      <label htmlFor="remember" className="form-check-label">
                        Remember Me
                      </label>
                    </div>
                    <a href="forgot.html" className="float-end ms-auto">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="btn mt-4 w-100 btn-primary ">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright © 2017-2021 — Pro Unity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
