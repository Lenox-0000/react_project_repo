import { FaPlus } from "react-icons/fa"

function Item_Add()
{
    return( <form className="addForm">
        <label htmlFor="item_add">Add Item</label> <input autoFocus id="item_add" type="text" placeholder="Add Item" required/>
        <button type="submit" aria-label="Add Item"> <FaPlus/> </button>
        </form>)
}

export default Item_Add