import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../App.css";

const Users = () => {
  const { id } = useParams();
  const location = useLocation();

  const [data, setData] = useState({});

  useEffect(() => {
    console.log("location from", location);

    const wrapper = async () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    };
    wrapper().catch(console.error);
  }, []);

  const user = location?.state?.user;

  return (
    <div className="content">
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
          <li>{user.username}</li>
        </div>
      ) : (
        <h3>I am fetched: {data.name}</h3>
      )}
    </div>
  );
};

export default Users;
