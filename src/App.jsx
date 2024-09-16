import { useState } from 'react'

import './App.css'


import Square from './square';
import Input from './input';
import './index.css';

function App() {
  
const [colorvalue, setcolorvalue] = useState('');
const [hexvalue, sethexvalue] = useState('');
const [isDarktext, setisDarktext] = useState(true);
  return (
    <div className='App'>
      
      <Square colorvalue={colorvalue} hexvalue={hexvalue} isDarktext = {isDarktext} setisDarktext = {setisDarktext}/>
      <Input colorvalue={colorvalue} setcolorvalue={setcolorvalue} sethexvalue={sethexvalue} isDarktext = {isDarktext} setisDarktext = {setisDarktext}/>

      
    </div>
  )
}

export default App
