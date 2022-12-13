import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, reset } = useForm();
  const { login, googleSignIn } = useContext(AuthContext);
  const handelLogin = (data) => {
    console.log(data);
    login(data.email, data.password).then(() => {
      toast.success("Login successful");
      navigate(from, { replace: true });
    });
    reset();
  };

  const handelGoogleLogin = () => {
    googleSignIn().then(() => {
      toast.success("Login Successfully");
    });
  };
  return (
    <div className="border border-green-500 shadow-xl py-12 w-96 mx-auto mt-10">
      <form
        className=" flex flex-col gap-4 items-center justify-center "
        onSubmit={handleSubmit(handelLogin)}
      >
        <input
          className="border border-green-400 p-2 w-80"
          {...register("email", { required: "Email is Required" })}
          placeholder="email"
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
          Don't Have an Account ?
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
      </form>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handelGoogleLogin}
          className="btn rounded-md p-2 w-80 bg-green-500 text-black font-bold hover:bg-green-400"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
