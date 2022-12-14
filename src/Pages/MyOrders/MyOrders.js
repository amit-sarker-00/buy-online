import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myorders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://buy-online-server.vercel.app/myorder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);
  return (
    <div>
      <div className="my-10 overflow-x-auto md:mx-10 mx-2 border-2 border-green-500 shadow-md">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {myorders?.map((order, i) => (
              <tr
                className="hover hover:border-green-500 hover:border"
                key={order._id}
              >
                <th>{i + 1}</th>
                <td>{order.name}</td>
                <td>
                  <img className="w-10" src={order.image} alt="" />
                </td>
                <td>{order.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
