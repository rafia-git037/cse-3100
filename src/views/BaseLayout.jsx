import { Link, Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header Section */}
      <header className="d-flex align-items-center bg-light p-3">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        {/* Navigation Section */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main id="content" className="p-4">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-light text-center p-3">
        <p>© Copyright 2024 Purrfect Adoption</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
