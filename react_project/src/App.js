import Header from './Header';
import Item_Add from './Item_Add';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Item_Search from './Item_Search';

function App() {
  const API_URL = "http://localhost:3500/items"

  const [items,set_items] = useState([])

  const [new_item,set_new_item] = useState('')

  const [search, set_search] = useState('')

  const [fetch_error, set_fetch_error] = useState(null)

  const [is_loading, set_is_loading] = useState(true)

  useEffect( () => 
    {
      const fetch_items = async() => 
      {
        try 
        {
          const response = await fetch(API_URL)
          if (!response.ok) throw Error('ERROR')
          const list_items = await response.json()
          set_items(list_items)
          set_fetch_error(null)
        }
        catch (error) 
        {
          set_fetch_error(error.message)
        }
        finally
        {
          set_is_loading(false)
        }
      }
      setTimeout( () => { (async () => await fetch_items() )() }, 2000)
    }, [])

  function handle_check_id(id)
    {
        const list_items = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item)
        set_items(list_items)
    }

    function handle_delete(id)
    {
        const list_items = items.filter((item) => item.id !== id)
        set_items(list_items)
    }

    function add_item(item)
    {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const my_new_item = { id, checked:false, item }
      const list_items = [...items, my_new_item]
      set_items(list_items)
    }

    function handle_submit(event)
    {
      event.preventDefault()
      if (!new_item) return
      add_item(new_item)
      set_new_item('')
    }

  return (
    <div className="App">
        <Header title={"Grocery List"}/>
        <Item_Search search={search} set_search={set_search}/>
        <Item_Add new_item={new_item} set_new_item={set_new_item} handle_submit={handle_submit}/>
        <main>
        {is_loading && <p>Loading...</p>}
        {fetch_error && <p style={{color: "red"}}> {`Error: ${fetch_error}`} </p>}
        {!fetch_error && !is_loading && <Content 
        items = {items.filter(item => ( (item.item).toLowerCase() ).includes( search.toLowerCase() ))}
        handle_check_id = {handle_check_id}
        handle_delete = {handle_delete}/>}
        </main>
        <Footer length = {items.length}/>
    </div>
  );
}

export default App;
