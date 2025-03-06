import Header from './Header';
import Item_Add from './Item_Add';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import Item_Search from './Item_Search';
import Challenge from './Challenge';
import Challenge_input from './Challenge_input';

function App() {
  const [items,set_items] = useState([{id: 1, checked: true, item: "One half pound of Cocoa Covered Almonds Unsalted"},{id: 2, checked: false, item: "Item 2"},{id: 3, checked: false, item: "Item 3"}])

  const [new_item,set_new_item] = useState('')

  const [search, set_search] = useState('')

  function handle_check_id(id)
    {
        const list_items = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item)
        set_items(list_items)
        localStorage.setItem('shopping list', JSON.stringify(list_items))
    }

    function handle_delete(id)
    {
        const list_items = items.filter((item) => item.id !== id)
        set_items(list_items)
        localStorage.setItem('shopping list', JSON.stringify(list_items))
    }

    function add_item(item)
    {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const my_new_item = { id, checked:false, item }
      const list_items = [...items, my_new_item]
      set_items(list_items)
      localStorage.setItem('shopping list', JSON.stringify(list_items))
    }

    function handle_submit(event)
    {
      event.preventDefault()
      if (!new_item) return
      add_item(new_item)
      set_new_item('')

    }

    const [background_color_value, set_background_color_value] = useState('')

  return (
    <div className="App">
        <Header title={"Grocery List"}/>
        <Item_Search search={search} set_search={set_search}/>
        <Item_Add new_item={new_item} set_new_item={set_new_item} handle_submit={handle_submit}/>
        <Content items = {items.filter(item => ( (item.item).toLowerCase() ).includes( search.toLowerCase() ))} handle_check_id = {handle_check_id} handle_delete = {handle_delete}/>
        <Footer length = {items.length}/>
        {/* <Challenge background_color_value={background_color_value}/>
        <Challenge_input background_color_value={background_color_value} set_background_color_value={set_background_color_value}/> */}
    </div>
  );
}

export default App;
