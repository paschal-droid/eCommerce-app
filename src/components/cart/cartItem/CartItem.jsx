import React, {memo} from "react";
import "../cart.css";
import {IconButton, Button} from "@material-ui/core"
import * as AiIcons from "react-icons/ai";



const CartItem = ({item, onUpdateCartQty, onRemoveCart}) => {

    return (  
      <>
      <div className="cart_cart-container_item">
        <div className="cart_cart-container_item-image">
          <img src={item.image.url} alt={item.name} />
        </div>
        <div className="cart_cart-container_item-details">
          <div className="cart_cart-container_item-details_stats">
            <div>
              <h4>{item.name}</h4>
              <p>
                Color: <span>N/A</span>
              </p>
              <p>
                Size: <span>N/A</span>
              </p>
              <p>In Stock</p>
            </div>
            <div className="cart-item-option">
              <Button style={{fontSize: "10px", textTransform: "capitalize", padding: '0', margin: '0', }} type="button" onClick={() => onRemoveCart(item.id)}>Remove From List</Button>
              <Button style={{fontSize: "10px", textTransform: "capitalize", padding: '0', margin: '0', }} type="button">Edit</Button>
            </div>
          </div>
          <div className="cart_cart-container_item-details_price">
            <h4>Price</h4>
            <p>{item.price.formatted_with_symbol}</p>
          </div>
          <div className="cart_cart-container_item-details_quantity">
            <h4>Quantity</h4>
            <div className='cart_cart-container_item-details_quantity-cartQty'>
              <IconButton type="button" onClick={() =>onUpdateCartQty(item.id, item.quantity - 1)}>
                  <AiIcons.AiOutlineMinus className='cart_cart-container_item-details_quantity-cartQty-button' />
              </IconButton>
              <span>{item.quantity || '1'}</span>
              <IconButton  type='button' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
                <AiIcons.AiOutlinePlus className='cart_cart-container_item-details_quantity-cartQty-button' />
              </IconButton>
            </div>
          </div>
          <div className="cart_cart-container_item-details_amount">
            <h4>Total</h4>
            <p>{item.line_total.formatted_with_symbol}</p>
          </div>
        </div>
        </div>
      </>
    );
}

export default memo(CartItem)
