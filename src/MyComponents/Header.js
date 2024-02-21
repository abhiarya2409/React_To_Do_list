import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import to_do_list from './to-do-list.png';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={to_do_list} alt="logo" style={{ width: '40px', marginRight: '10px' }} />
          <span style={{ fontFamily: 'cursive', fontSize: '1.5em' }}>
            {props.title}
          </span>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sections
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/">
                    Daily
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Weekly
                  </Link>
                </li>
                {/* Add more sections as needed */}
              </ul>
            </li>
          </ul>
          {props.searchbar ? (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: 'Your title here',
  searchbar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired,
};
