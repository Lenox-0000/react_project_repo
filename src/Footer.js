function Footer({length})
{
    return(
        <footer>
            <p>{length} {length === 1 ? "item" : "items"} on the list</p>
        </footer>
    )
}
export default Footer