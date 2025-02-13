import Item_List from "./Item_List";

function Content({items, handle_check_id, handle_delete})
{

    
    // const [name,set_name] = useState('Dave')

    // const [count,set_count] = useState(0)

    // function handle_name_change()
    // {
    //     const names = ['Bob','Kevin','Dave']
    //     const int = Math.floor(Math.random() * 3)
    //     set_name(names[int])
    // }

    // function handle_click()
    // {
    //     set_count(count+1)
    //     console.log(count);
    // }

    // function handle_click_v2(name)
    // {
    //     console.log(name);
    // }

    // function handle_click_v3(a)
    // {
    //     console.log(a.target.innerText);
    // }
    return(
        <main>
            {items.length ? (<Item_List items={items} handle_check_id={handle_check_id} handle_delete={handle_delete}/>) : ( <p style={{marginTop: '2rem'}}> Your list is empty</p>) }
            {/* <p>
                Hello {name}!
            </p>
            <button onClick={handle_name_change}>Click Here To Change Name</button>
            <button onClick={handle_click}>Click Here Too</button>
            <button onClick={(a) => handle_click_v3(a)}>Click Here Too</button> */}
         
            </main>
    )    
}

export default Content