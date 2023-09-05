import React, { useState } from "react";
import { Link } from "react-router-dom";

const Animations = () => {
  const [dropdown_visible, setdropdown_visible] = useState(false);
  return (
    <>
      {/*Page Heading*/}
      <h1 class="h3 mb-1 text-gray-800 d-sm-flex">Animation Utilities</h1>
      <p class="mb-4">
        Bootstrap's default utility classes can be found on the official
        <Link to="https://getbootstrap.com/docs">Bootstrap Documentation</Link>
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      {/* ---------------------------------------------------------------- */}
      {/* Content Row*/}
      <div class="row">
        {/*Grow In Utility*/}
        <div class="col-lg-6">
          <div class="card position-relative">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Grow In Animation Utilty
              </h6>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <code>.animated--grow-in</code>
              </div>
              <div class="small mb-1">Navbar Dropdown Example:</div>
              <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                <a class="navbar-brand" href="#">
                  Navbar
                </a>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right animated--grow-in"
                      aria-labelledby="navbarDropdown"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <p class="mb-0 small">
                Note: This utility animates the CSS transform property, meaning
                it will override any existing transforms on an element being
                animated! In this theme, the grow in animation is only being
                used on dropdowns within the navbar.
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        {/*Fade In Utility*/}
        <div class="col-lg-6">
          <div class="card position-relative">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Fade In Animation Utilty
              </h6>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <code>.animated--fade-in</code>
              </div>
              <div class="small mb-1">Navbar Dropdown Example:</div>
              <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                <a class="navbar-brand" href="#">
                  Navbar
                </a>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right animated--fade-in"
                      aria-labelledby="navbarDropdown"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div class="small mb-1">Dropdown Button Example:</div>
              <div class="dropdown mb-4">
                <button
                  onClick={() => setdropdown_visible(!dropdown_visible)}
                  class={
                    dropdown_visible
                      ? "btn btn-primary dropdown-toggle d-sm-flex"
                      : "btn btn-primary dropdown-toggle d-sm-flex"
                  }
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup={dropdown_visible}
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div
                  class={
                    dropdown_visible
                      ? "dropdown-menu animated--fade-in show"
                      : "dropdown-menu animated--fade-in"
                  }
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <p class="mb-0 small">
                Note: This utility animates the CSS opacity property, meaning it
                will override any existing opacity on an element being animated!
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        {/* End of Row... */}
      </div>
    </>
  );
};

export default Animations;
