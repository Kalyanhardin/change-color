import './App.css'
const Square = ({colorvalue, setcolorvalue, hexvalue, isDarktext}) => {
    return(
        <section className="square" style={{backgroundColor : colorvalue, color:isDarktext ? "#000" : "#FFF"}}>
            <p>{(colorvalue) ? colorvalue : "no color"}</p>
            <p>{(hexvalue) ? hexvalue : null}</p>

        </section>
    )
}

Square.defaultProps = {
    colorvalue : "empty color value"
}

export default Square