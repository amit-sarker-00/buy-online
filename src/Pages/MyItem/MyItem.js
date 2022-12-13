import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyItem = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [myitems, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/items/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user?.email]);
  console.log(myitems);
  return (
    <div className="my-20">
      <div className="overflow-x-auto md:mx-10 mx-2 border-2 border-green-500 shadow-md">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myitems?.map((myitem, i) => (
              <tr
                className="hover hover:border-green-500 hover:border"
                key={myitem._id}
              >
                <th>{i + 1}</th>
                <td>{myitem.name}</td>
                <td>
                  <img className="w-10" src={myitem.image} alt="" />
                </td>
                <td>{myitem.email}</td>

                <td>{myitem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItem;
