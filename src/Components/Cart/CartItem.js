import dataDishes from "../../data/dataDishes";
import icontrash from "../../trash.png";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";



const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return(
        <div className="centre">
        <div className="column padding">
       <p>{dishes.name} - {cartItem.quantity } portion(s)</p>  
       <p>Price: $ {dishes.price * cartItem.quantity}
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className="icon" src={icontrash} alt="icons"/> 
       </span></p>
        </div>
        </div>
    )
}

export default CartItem;