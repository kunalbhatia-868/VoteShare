import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <div className="main-container">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex signup-image"></div>
            <div className="col-md-6 bg-light">
              <div className="signup d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="text-center display-5 mb-3">Signup</h3>
                      <form>
                        <div className="mb-3">
                          <input
                            id="inputEmail"
                            type="text"
                            placeholder="Username"
                            required=""
                            autofocus=""
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
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
                        <div className="mb-3">
                          <input
                            id="inputPassword"
                            type="password"
                            placeholder="Confirm Password"
                            required=""
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          >
                            Create Account
                          </button>
                          <div class="text-center col-md-12">
                            Already have an account?
                            <a className="link" href="/login">
                              {" "}
                              Login
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
    </div>
  );
}
