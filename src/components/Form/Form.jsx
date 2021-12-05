import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthConsumer } from "../../Context/Auth/AuthProvider";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const { loginUser, user } = AuthConsumer();

  const loguearUsario = (data) => {
    const { email, password } = data;
    loginUser({ email, password });
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <form className="my-5 w-50 mx-auto" onSubmit={handleSubmit(loguearUsario)}>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className={`form-control ${errors.email && "is-invalid"}`}
          aria-describedby="emailHelp"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <small id="emailHelp" className="form-text text-danger">
            Email is required
          </small>
        )}
      </div>
      <div className="form-group mt-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className={`form-control ${errors.password && "is-invalid"}`}
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <small id="emailHelp" className="form-text text-danger">
            Password is required
          </small>
        )}
      </div>
      <button type="submit" className="btn btn-primary w-100 my-4">
        Submit
      </button>
      <p>
        You do not have an account? <Link to="/registro">Click here!</Link>
      </p>
    </form>
  );
};

export default Form;
