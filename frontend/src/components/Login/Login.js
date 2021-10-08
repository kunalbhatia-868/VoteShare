import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="text-center display-5 mb-3">
                      Login to continue
                    </h3>
                    <form>
                      <div className="mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required=""
                          autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label for="customCheck1" className="form-check-label">
                          Remember password
                        </label>
                      </div>

                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                        <div class="text-center">
                          <a className="small link" href="/">
                            Forgot password?
                          </a>
                        </div>
                        <div class="text-center col-md-12">
                          Don't have an account to vote yet?
                          <a className="link" href="/signup">
                            {" "}
                            Create Account
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
