import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

function Item_Add({new_item, set_new_item, handle_submit})
{
    const inputRef = useRef()

    return( <form className="addForm" onSubmit={(event) => handle_submit(event)}>
        <label htmlFor="item_add">Add Item</label> <input autoFocus id="item_add" type="text" placeholder="Add Item" required value={new_item} onChange={(event) => set_new_item(event.target.value)}/>
        <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}> <FaPlus/> </button>
        </form>)
}

export default Item_Add