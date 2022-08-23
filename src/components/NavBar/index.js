import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-fgi.svg";
import styles from "./Navbar.module.css";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("session")
    navigate("/login");
  };

  return (
    <nav>
      <div className={styles["navbar-brand"]}>
        <Link to="/">
          <img className={styles["logo"]} src={logo} alt="" />
        </Link>
      </div>
      <div className={styles["nav-link"]}>
        <Link to="/">Home</Link>
        {/* <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Experience
        </NavLink> */}
        {localStorage.getItem("session") && (
          <span onClick={handleLogout}>Logout</span>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
