import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthConsumer } from "../../Context/Auth/AuthProvider";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const { userRegister, user } = AuthConsumer();
  const correctPass = watch("password", "");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, [user]);

  const registerUser = (data) => {
    const { name, lastName, email, password } = data;
    userRegister({ name, lastName, email, password });
    reset();
  };
  return (
    <form className="my-5 w-50 mx-auto" onSubmit={handleSubmit(registerUser)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="name"
          className={`form-control ${errors.name && "is-invalid"}`}
          aria-describedby="nombrelHelp"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <small id="namelHelp" className="form-text text-danger">
            Name is required
          </small>
        )}
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputEmail1">Last Name</label>
        <input
          type="lastName"
          className={`form-control ${errors.lastName && "is-invalid"}`}
          aria-describedby="apellidolHelp"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <small id="lastNamelHelp" className="form-text text-danger">
            Last Name is required
          </small>
        )}
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
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
        <label htmlFor="exampleInputPassword1">Password</label>
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
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1"> Repeat Password</label>
        <input
          type="password"
          className={`form-control ${errors.repeatPass && "is-invalid"}`}
          placeholder="Password"
          {...register("repeatPass", {
            required: true,
            validate: (value) => value === correctPass,
          })}
        />
        {errors.repeatPass && (
          <small id="emailHelp" className="form-text text-danger">
            Password incorrect
          </small>
        )}
      </div>
      <button type="submit" className="btn btn-primary w-100 my-4">
        Submit
      </button>
      <p>
        Are you registered <Link to="/">Click here! </Link>
      </p>
    </form>
  );
};

export default FormRegister;
