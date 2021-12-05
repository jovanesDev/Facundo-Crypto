import React from "react";
import { useForm } from "react-hook-form";
import { AuthConsumer } from "../Context/Auth/AuthProvider";
import { checkfilledIsEmpty, existUser, userName } from "../helper";


const Profile = () => {
  const { user, updateUser } = AuthConsumer();
  const {name, lastName} =  userName( user && user.displayName);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues:{ name , lastName  , email: existUser(user, 'email')}
  });

  const handleUpdateSubmit = ( data ) =>{
    updateUser(data);
    // console.log(checkfilledIsEmpty(password) ? 'No se va a cambiar el password ' : 'Si se va a cambiar');
  }
  return (
    <form className="my-5 w-50 mx-auto" onSubmit={handleSubmit(handleUpdateSubmit)}>
      <div className="form-group">
        <label for="exampleInputEmail1">Name</label>
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
        <label for="exampleInputEmail1">Last Name</label>
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
          {...register("password")}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 my-4">
        Update Profile
      </button>
    </form>
  );
};

export default Profile;
