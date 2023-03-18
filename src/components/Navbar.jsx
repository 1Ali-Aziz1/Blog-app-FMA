import { Link } from "react-router-dom";
import user_image from "../images/user.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link className="navbar-brand fs-2 me-5" to="/">
          FMA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-3 mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item ms-lg-5 ps-lg-5 pe-4">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item pe-4">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item pe-4">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item pe-5 me-5">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="me-2 mb-2 mb-lg-0">
              <Link className="btn btn-outline-dark pt-1 pb-1" to="/log_in">
                Log in
              </Link>
            </li>
            <li className="">
              <Link className="btn btn-dark pt-1 pb-1" to="/sign_up">
                Sign up
              </Link>
            </li>
          </ul>
          <div>
            <img src={user_image} alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
}
