import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo">Logo</CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="/nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="/nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;