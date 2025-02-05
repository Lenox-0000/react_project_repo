function Content()
{
    function handle_name_change()
    {
        const names = ['Bob','Kevin','Dave']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }

    function handle_click()
    {
        console.log('You clicked it');
    }

    function handle_click_v2(name)
    {
        console.log(name);
    }

    function handle_click_v3(a)
    {
        console.log(a.target.innerText);
    }
    return(
        <main>
            <p>
                Hello {handle_name_change()}!
            </p>
            <button onClick={handle_click}>Click Here</button>
            <button onClick={() => handle_click_v2('Dave')}>Click Here Too</button>
            <button onClick={(a) => handle_click_v3(a)}>Click Here Too</button>
        </main>
    )    
}

export default Content