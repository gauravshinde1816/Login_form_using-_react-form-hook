import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import login from "./login.jpg";
const AuthLogin = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6 d-none d-lg-block">
          <img className="img-fluid" src={login} />
        </div>
        <div className="col-lg-6">
          <form style={{ marginTop: 50 }} onSubmit={handleSubmit(onSubmit)}>
            <h1
              style={{ textTransform: "uppercase", letterSpacing: 2 }}
              className="text-center mb-5 font-weight-bold"
            >
              Welcome Back
            </h1>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  ref={register({
                    validate: (value) => value !== "admin" || "Nice try!",
                    required: "Username is required",
                    minLength: {
                      value: 5,
                      message:
                        "Please enter the username with minimum 6 chars ",
                    },
                  })}
                />
              </div>
            </div>
            <span className="mt-4">
              {errors.username && (
                <div className="alert alert-danger" role="alert">
                  {errors.username.message}
                </div>
              )}
            </span>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  ref={register({
                    required: "Email are Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
              </div>
            </div>

            <span className="mt-4">
              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  {errors.email.message}
                </div>
              )}
            </span>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={register({
                    required: "Password are required",
                    minLength: {
                      value: 6,
                      message: "Password should be greater than 6 chars",
                    },
                  })}
                />
              </div>
            </div>
            <span className="mt-4">
              {errors.password && (
                <div className="alert alert-danger" role="alert">
                  {errors.password.message}
                </div>
              )}
            </span>

            <button className="btn btn-outline-success btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
