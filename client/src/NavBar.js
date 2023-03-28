import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login/Logout</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
