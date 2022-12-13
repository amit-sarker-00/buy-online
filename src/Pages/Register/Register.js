import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelRegister = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        toast.success("User registered successfully");
        navigate("/");
      })
      .catch((err) => console.error(err));

    reset();
  };
  const handelGoogleRegister = () => {
    googleSignIn().then(() => {
      toast.success("User registered successfully");
      navigate("/");
    });
  };
  return (
    <div className="border border-green-500 shadow-xl py-12 w-96 mx-auto mt-10 ">
      <form
        className=" flex flex-col gap-4 items-center justify-center "
        onSubmit={handleSubmit(handelRegister)}
      >
        <input
          className="border border-green-400 p-2 w-80"
          {...register("name", { required: "Name is Required" })}
          placeholder="name"
        />
        <input
          className="border border-green-400 p-2 w-80"
          {...register("email", { required: "Email is Required" })}
          placeholder="email"
        />
        <input
          className="border border-green-400 p-2 w-80 "
          {...register("phone", { required: "Number is Required" })}
          placeholder="phone number"
        />
        <input
          className="border border-green-400 p-2 w-80 "
          {...register("password", { required: "Password is Required" })}
          placeholder="password"
        />

        <button className="btn rounded-md p-2 w-80  bg-green-500 text-black font-bold hover:bg-green-400">
          Login
        </button>
        <p className="text-green-500 font-bold">
          Already Have an Account ?
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </form>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handelGoogleRegister}
          className="btn rounded-md p-2 w-80 bg-green-500 text-black font-bold hover:bg-green-400"
        >
          Register With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
