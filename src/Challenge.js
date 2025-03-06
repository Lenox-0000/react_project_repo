function Challenge({background_color_value})
{
    return(
    <div style={{backgroundColor: background_color_value}}>
        <p>{background_color_value ? background_color_value : "No color value"}</p>
    </div>)    
}

Challenge.default_props = { color_value: "No color value"}
export default Challenge