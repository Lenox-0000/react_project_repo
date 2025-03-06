function Item_Search({search, set_search})
{
    return (
        <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" role="searchbox" placeholder="Search Items" value={search} onChange={(event) => set_search(event.target.value)}/>


        </form>
    )   
}

export default Item_Search