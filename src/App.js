import Header from './Header';
import Item_Add from './Item_Add';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items,set_items] = useState([{id: 1, checked: true, item: "One half pound of Cocoa Covered Almonds Unsalted"},{id: 2, checked: false, item: "Item 2"},{id: 3, checked: false, item: "Item 3"}])

  function handle_check_id(id)
    {
        // console.log(`Key: ${id}`)
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

  return (
    <div className="App">
        <Header title={"Grocery List"}/>
        <Item_Add/>
        <Content items = {items} handle_check_id = {handle_check_id} handle_delete = {handle_delete}/>
        <Footer length = {items.length}/>
    </div>
  );
}

export default App;
