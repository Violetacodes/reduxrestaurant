import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>What kind of food do you like?</h1>
            {["Appetizers", "Italian", "Salads", "Seafood","All"].map((category, id) => <Filter key={id} category = {category} />)
    }
        </div>
    )
}

export default AllCategories;