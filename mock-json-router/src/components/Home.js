import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import User from "./User";
import "../App.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setData(json));
    };
    wrapper().catch(console.error);
  }, []);

  const handleList = data.map((user) => {
    return (
      <li key={`${user.name} + ${Math.floor(Math.random() * 1000)}`}>
        <User user={user} />
        {/* <h2>
          <Link
            to={`/users/${user.id}`}
            state={{ user: user }}
            // to={{
            //   pathname: `/users/${user.id}`,
            //   state: { string: "string from home" },
            // }}
          >
            {user.name}{" "}
          </Link>
        </h2>

        <p>
          <span>Username:</span> {user.username}
        </p> */}
        <div className="divider center" />
      </li>
    );
  });

  return (
    <div>
      <ul>{handleList}</ul>
    </div>
  );
};

export default Home;
