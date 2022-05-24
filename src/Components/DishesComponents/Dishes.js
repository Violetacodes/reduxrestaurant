import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {

const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
{dataDishes
.filter(dish => {
    if(selectedCategory === "All") return true;
return selectedCategory === dish.category;
})
.map((dish, index) => {
    return(
        <div key={index}>
 <Dish dish={dish}/>
        </div>
    )
})}
        </div>
    )
}

export default Dishes;