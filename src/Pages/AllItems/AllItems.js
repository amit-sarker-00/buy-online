import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const role = items.filter((item) => item.status === "unsold");

  //for unsold items
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handelMyOrder = (data) => {
    console.log(data);
    const order = {
      name: data.name,
      price: data.price,
      status: data.status,
      image: data.image,
      email: user.email,
    };
    fetch("http://localhost:5000/myorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("item added successfully");
      });
  };
  return (
    <div>
      <h1 className="text-xl md:text-3xl my-10 lg:text-5xl text-green-500 text-center">
        Unsold items
      </h1>
      <div className="overflow-x-auto md:mx-10 mx-2 border-2 border-green-500 shadow-md">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Status</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {item?.map((unsolditem, i) => (
              <tr
                className="hover hover:border-green-500 hover:border"
                key={unsolditem._id}
              >
                <th>{i + 1}</th>
                <td>{unsolditem.name}</td>
                <td>
                  <img className="w-10" src={unsolditem.image} alt="" />
                </td>
                <td>{unsolditem.status}</td>
                <td>
                  <button
                    onClick={() => handelMyOrder(unsolditem)}
                    className="bg-green-500 hover:bg-green-300 text-black font-bold py-1 px-3"
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
