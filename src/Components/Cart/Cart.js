import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import icon from "./icons8.png";
const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const result = ((totalPrice * 0.13) + totalPrice)

    return(
        <div className="centre">
            <div className="column">
           <img className="cartIcon" src={icon} alt="cartpicture"/> 
           <h3>TOTAL: $ {result}</h3>
           {cartItems.map(cartItem => <CartItem cartItem={cartItem} /> )}
           </div>
    
        </div>
    )
}

export default Cart;