import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="centretwo">
           <img src={`./${dish.img}.jpg`} alt="pictura"/>
           <h2>{dish.name}</h2>
           <p>$ {dish.price} CAD</p>
          <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
           <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
    )
}

export default Dish;