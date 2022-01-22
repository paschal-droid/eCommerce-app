import React, { useState, memo } from "react";
import { IconButton, Badge, Typography } from "@material-ui/core";
import * as RiIcons from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

import useStyles from "./navbarSyles";
import PopupDetails from "./PopupDetails";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        {" "}
        <Link to="/">Home</Link>{" "}
      </p>
      <p>
        {" "}
        <Link to="/cart">Cart</Link>{" "}
      </p>
      <p>
        {" "}
        <Link to="/products">Products</Link>{" "}
      </p>
      <p>
        {" "}
        <Link to="/categories">Categories</Link>{" "}
      </p>
    </>
  );
};

const PopupCart = ({ cart, totalItems, setPopup }) => {
  const navigate = useNavigate();
  if(!cart.line_items) return (
    <div className="cart_popup tilt-in-tr">
    <div className="cart_popup-caption">
      <span>
        <RiIcons.RiCheckDoubleLine color="green" /> Added To cart{" "}
      </span>
      <span style={{ cursor: "pointer" }} onClick={() => setPopup(false)}>
        <RiIcons.RiCloseLine fontSize={20} />{" "}
      </span>
    </div>
    <p style={{ fontSize: "12px", fontWeight: "500", marginLeft: "20px" }}>
        Try refreshing the page
    </p>
    </div>
  )


  return (
    
    <div className="cart_popup tilt-in-tr">
      <div className="cart_popup-caption">
        <span>
          <RiIcons.RiCheckDoubleLine color="green" /> Added To cart{" "}
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => setPopup(false)}>
          <RiIcons.RiCloseLine fontSize={20} />{" "}
        </span>
      </div>
      {!cart.line_items.length ? (
        <p style={{ fontSize: "12px", fontWeight: "500", marginLeft: "20px" }}>
          You have no items added to your cart
        </p>
      ) : (
        <>
          {cart.line_items.map((item, i) => (
            <PopupDetails key={item.name + i} item={item} />
          ))}
          <div className="cart_popup-buttons">
            <button onClick={() => navigate("/cart")} type="button">
              View Cart ({totalItems || "1"})
            </button>
            <button onClick={() => navigate("/checkout")} type="button">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const Navbar = ({ totalItems, cart }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [popup, setPopup] = useState(false);
  const items = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/products" },
    { name: "My Items", url: "/cart" },
    { name: "Categories", url: "#" },
  ];

  return (
    <>
      <div className={`navbar ${classes.navbar}`}>
        <div className={` ${classes.navLogo}`}>
          <div style={{ position: "relative" }}>
            <img
              className={` ${classes.image}`}
              width="32"
              src={logo}
              alt="store-logo"
            />
          </div>
          <Typography
            component="p"
            gutterBottom
            style={{ color: "rgb(0, 161, 157)", fontWeight: "bold" }}
            variant="body1"
          >
            Quale's Store
          </Typography>
        </div>
        <div>
          <ul className={` ${classes.navItems}`}>
            {items.map((item, i) => (
              <Link
                key={item.name + i}
                className={` ${classes.item}`}
                to={item.url}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="navbar_button-group">
          <div>
            <IconButton
              component="button"
              onClick={() => setPopup(true)}
              aria-label="show cart items"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <RiIcons.RiShoppingCart2Fill />
              </Badge>
            </IconButton>
            {popup && (
              <PopupCart
                cart={cart}
                totalItems={totalItems}
                setPopup={setPopup}
              />
            )}
          </div>
          <div className="navbar_nav-menu">
            <IconButton onClick={() => setToggle(!toggle)}>
              {toggle ? <RiIcons.RiCloseLine /> : <RiIcons.RiMenu2Fill />}
            </IconButton>
            {toggle && (
              <div className="navbar_nav-menu">
                <div className="navbar_nav-menu_container tilt-in-tr">
                  <div className="navbar_nav-menu_container-links">
                    <Menu />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
