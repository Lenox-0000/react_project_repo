import Item_List from "./Item_List";

function Content({items, handle_check_id, handle_delete})
{
    return(
        <main>
            {items.length ? (<Item_List items={items} handle_check_id={handle_check_id} handle_delete={handle_delete}/>) : ( <p style={{marginTop: '2rem'}}> Your list is empty</p>) }
        </main>
    )    
}

export default Content