import { FaTrashAlt } from "react-icons/fa";


function Item_Line({item, handle_check_id, handle_delete})
{
    return (<li className="item" key={item.id} onChange={ ()=>handle_check_id(item.id) }>
             <input type="checkbox" checked={item.checked}/>
             <label onDoubleClick={()=>handle_check_id(item.id)} style={(item.checked) ? { textDecoration:'line-through'}:null}>{item.item}</label>
             <FaTrashAlt onClick={() => handle_delete(item.id)} role="button" tabIndex="0" aria-label={`Delete ${item.item}`}/> </li>)
    
}

export default Item_Line