import React, {memo} from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "./cart.css";
import visa from "../../assets/visa.png";
import emptyCart from "../../assets/empty-cart.png";
import CartItem from "./cartItem/CartItem";
import Pending from "../Pending";

const EmptyCart = () => {
  return (
    <div className="cart_empty-cart section-padding">
      <div className="cart_empty-cart_container">
        <img src={emptyCart} alt="Empty Cart" />
      </div>
      <h1>Oops! Seems like you have an empty cart</h1>
      <Link className="cart_empty-cart_button" to="/products">
        Click Here to Add items to Cart
      </Link>
    </div>
  );
};

const FilledCart = ({
  cart,
  handleRemoveFromCart,
  handleUpdateCartQty,
  handleEmptyCart,
}) => {
  return (
    <div className="cart section-padding">
      <div className="cart_cart-header">
        <span>
          <AiIcons.AiOutlineShopping fontSize={50} />
          <h3>My Cart</h3>
        </span>
      </div>

      <div className="cart_cart-container">
        <div className="cart_cart-container-group">
          {cart.line_items.map((item, i) => (
            <CartItem
              key={item.name + i}
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveCart={handleRemoveFromCart}
            />
          ))}
        </div>

        <div className="cart_cart-checkout">
          <div className="cart_cart-checkout_promo">
            <p className="cart_cart-checkout_promo-text">Enter promo code</p>
            <form>
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </form>
            <table className="cart_cart-checkout-promo_stats">
              <th>Shipping Cost</th>
              <tbody>TBD</tbody>
              <th>Discount</th>
              <tbody>-$0</tbody>
              <th>Tax</th>
              <tbody>TBD</tbody>
              <th>Estimated Total</th>
              <tbody>{cart.subtotal.formatted_with_symbol}</tbody>
            </table>
            <p className="cart_cart-checkout_promo-text2">
              or 4 interest-free payments of $10.00 with{" "}
              <img width={60} height={30} src={visa} alt="visa" />
            </p>
            <div className="cart_cart-checkout_button">
              <p>
                You're{" "}
                <span style={{ color: "rgb(0, 161, 157)", fontWeight: "700 " }}>
                  $10.01
                </span>{" "}
                away from free Shipping!
              </p>
              <button>
                <Link to="/checkout">
                  <AiIcons.AiFillLock
                    fontSize={30}
                    style={{ marginRight: "5px" }}
                  />
                  Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({
  cart,
  handleRemoveFromCart,
  handleUpdateCartQty,
  handleEmptyCart,
}) => {
  if (!cart.line_items) return <Pending error='Please Refresh the page ...' />;
  return (
    <>
      {!cart.line_items.length ? (
        <EmptyCart />
      ) : (
        <FilledCart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleEmptyCart={handleEmptyCart}
        />
      )}
    </>
  );
};

export default memo(Cart);
