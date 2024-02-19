import {
    useState,
    useRef
  } from "react"; 
  import "./index.css";
  
 const  App = ()=>{ 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }
   
    function minus(e) { 
        e.preventDefault(); 
        setResult((result) => result - Number(inputRef.current.value)); 
    }
   
    function times(e) { 
      e.preventDefault(); 
      setResult((result) => result * Number(inputRef.current.value)); 
    }
   
    function divide(e) { 
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current.value)); 
    }

    function resetInput(e) { 
        e.preventDefault(); 
        setResult((result) => result * 0); 
    }
   
    function resetResult(e) { 
        e.preventDefault(); 
        setResult((result) => result * result); 
    }
   
    return ( 
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
          <h1>Result: {result}</h1>
        </div> 
        <form> 
          <p ref={resultRef}> 
            {/* add the value of the current total */} 
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button>
          <button onClick={ times}>multiply</button> 
          <button onClick={divide}>divide</button> 
          <button onClick={resetInput}>reset input</button> 
          <button onClick={resetResult}>reset result</button> 
        </form> 
      </div> 
    ); 
  } 
  export default App; 
  