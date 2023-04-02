import { Link, useNavigate } from "react-router-dom";
import { getSession } from "utils/auth/sessionHandler";
import logo from "../../assets/logo-fgi.svg";
import styles from "./Navbar.module.css";
import Button from "../Button";
import {useSelector} from "react-redux";
import {selectTotalCartItems} from "../../store/modules/storeSlice";
import Cart from "../Cart";
import {useState} from "react";

function NavBar() {
  const totalCartItems = useSelector(selectTotalCartItems)
  const navigate = useNavigate();
  const [isCartOpen, toggleOpenCart] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("session")
    navigate("/login");
  };

  const cartButton = <><span>Cart  | </span><i className="icon fa fa-shopping-basket"></i><span> {totalCartItems}</span></>
  const openCart = () => {
    toggleOpenCart(!isCartOpen)
  }

  return (
    <>
      <Cart isOpened={isCartOpen} />
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
          {!getSession().isExpired && (
            <>
              <span className={styles.logout} onClick={handleLogout}>Logout</span>
              <Button value={cartButton} type="btn-secondary" hover={true} onClick={openCart}/>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
