import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content()
{

    const [items,set_items] = useState([{id: 1, checked: true, item: "One half pound of Cocoa Covered Almonds Unsalted"},{id: 2, checked: false, item: "Item 2"},{id: 3, checked: false, item: "Item 3"}])

    function handle_checkid(id)
    {
        // console.log(`Key: ${id}`)
        const list_items = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item)
        set_items(list_items)
        localStorage.setItem('shopping list', JSON.stringify(list_items))
    }
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
            <ul>
                {items.map((item)=>( <li className="item" key={item.id} onChange={ ()=>handle_checkid(item.id) }> <input type="checkbox" checked={item.checked}/> <label onDoubleClick={()=>handle_checkid(item.id)}>{item.item}</label> <FaTrashAlt role="button" tabIndex="0"/> </li>))}
            </ul>
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