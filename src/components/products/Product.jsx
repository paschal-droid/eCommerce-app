import React, {memo} from 'react'
import * as FaIcons from "react-icons/fa"
import './products.css'


const Product = ({product, onAddToCart}) => {
    return (
        <div>
        <div className="products_card-item">
          <div className="products_card-image">
            <span>-41%</span>
            <img src={product.image.url} alt="product" />
          </div>
          <div className="products_card-details">
            <h4>{product.name}</h4>
            <div className="products_card-details_discount">
              <span>Starting from {product.price.formatted_with_symbol}</span>
              <span>
                <FaIcons.FaStar color="rgb(255, 179, 68)" size={10} fontSize={13} />
                4.5 ({product.inventory.available === 0 ? 'SOLD OUT': product.inventory.available})
              </span>
            </div>
          </div>
          <div className='products_cart-button'>
            <button type="button" aria-label="Add to Cart" onClick={()=> onAddToCart(product.id, 1)} >
              <FaIcons.FaCartPlus  size={20} />
              Add Item to cart
            </button>
          </div>
        </div>
      </div>
    )
}

export default memo(Product)

