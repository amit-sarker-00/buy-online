import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handelAddProduct = (data) => {
    console.log(data);
    const item = {
      name: data.name,
      price: data.price,
      status: data.status,
      image: data.image,
      email: data.email,
    };
    fetch("https://buy-online-server.vercel.app/additem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("item added successfully");
        navigate("/allitems");
        reset();
      });
  };

  return (
    <div>
      <div>
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-green-500 my-8 text-center">
          Add Item
        </h1>
      </div>
      <div className="border border-green-500 shadow-xl py-12 w-96 mx-auto mt-10">
        <form
          className=" flex flex-col gap-4 items-center justify-center "
          onSubmit={handleSubmit(handelAddProduct)}
        >
          <input
            className="border border-green-400 p-2 w-80"
            {...register("name", { required: "name is Required" })}
            placeholder="name"
          />
          <input
            defaultValue={user?.email}
            readOnly
            className="border border-green-400 p-2 w-80"
            {...register("email", { required: "email is Required" })}
            placeholder="email"
          />

          <input
            className="border border-green-400 p-2 w-80 "
            {...register("price", { required: "price is Required" })}
            placeholder="price"
          />
          <input
            className="border border-green-400 p-2 w-80 "
            {...register("image", { required: "image is Required" })}
            placeholder="image"
          />
          <input
            className="border border-green-400 p-2 w-80 "
            defaultValue="unsold"
            readOnly
            {...register("status")}
          />

          <button className="btn rounded-md p-2 w-80  bg-green-500 text-black font-bold hover:bg-green-400">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
