import Item_Line from "./Item_Line";

function Item_List({items, handle_check_id, handle_delete})
{
    return(<ul>
        {items.map((item)=> (<Item_Line key={item.id} item={item} handle_check_id={handle_check_id} handle_delete={handle_delete}/> ))}
    </ul>)    
}
export default Item_List