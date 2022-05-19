import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <Link to="/auth">
            SignIn
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
