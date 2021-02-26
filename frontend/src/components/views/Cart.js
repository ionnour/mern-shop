import './Cart.css';
import CartItemList from '../CartItemList';

const Cart = () => {
  return (
    <div className="cart" >
      <div className="cart-left">
          <h2>Shopping Cart</h2>

          <CartItemList />
          <CartItemList />
          <CartItemList />
        </div>

        <div className="cart-right">
          <div className="cart-info">
            <p>Subtotal 5 items</p>
            <p>$5</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
    
    </div>
  )
}

export default Cart
