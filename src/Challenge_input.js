

function Challenge_input({background_color_value, set_background_color_value})
{
    return(
    <form onSubmit={(event) => event.preventDefault()}>
        <input autoFocus type="text" placeholder="Change color" required value={background_color_value} onChange={(event) => set_background_color_value(event.target.value)}/>
    </form>)
}
export default Challenge_input