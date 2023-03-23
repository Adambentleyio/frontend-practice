import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="user_list">
      <header>
        <h2>{user.name}</h2>
        <h3>
          <span className="info">Employer:</span> {user.company.name}
        </h3>
      </header>
      <Link className="un" to={`/users/${user.id}`} state={{ user: user }}>
        User Details
      </Link>
    </div>
  );
};

export default User;
