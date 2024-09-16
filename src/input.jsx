import './App.css'
import colorNames from 'colornames';
const Input = ({colorvalue, setcolorvalue, sethexvalue, isDarktext, setisDarktext}) => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            
            <input autoFocus type="text" placeholder="enter color name" required
             value = {colorvalue} onChange={(e) => {
                setcolorvalue(e.target.value);
                sethexvalue(colorNames(e.target.value));
                }} />
            <button type="button" onClick={() => setisDarktext(!isDarktext)}>
                Toggle text color
            </button>
        </form>
    )
}

export default Input