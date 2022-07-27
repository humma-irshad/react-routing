import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={classes.section}>
      <div>
        <ul className={classes["list-main"]}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              Sign-Up
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Navbar;
