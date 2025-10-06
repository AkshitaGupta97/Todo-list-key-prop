import { forwardRef, useRef, useState } from "react"

const MyInput = forwardRef(function InputComponent({type, placeholder}, ref) {
  return (
    <input type={type} placeholder={placeholder} ref={ref} />
  )
})
// we are using forwardRef to pass ref to functional component.

function InputRefs() {
    const [focus, setFocus] = useState(true)
    
    // by using plane js.
    /*function handleFocus(){
        document.getElementById('email').focus()
        setFocus(!focus)
    }*/

    const [x, setX] = useState(0)
    // by using useRefs.

     // use of refs
    const inputRef = useRef(null);

    //const customRef = useRef(0);
    function handleClick() {
      //customRef.current = customRef.current + 1;
      //console.log("Ref value:", customRef.current);
      setX(x + 1); // Trigger a re-render to see the updated ref value
      inputRef.current.focus();
    }

    const myInputRef = useRef(null);
    function myInputClick(){
        myInputRef.current.focus()
    }


  return (
    <form onSubmit={(e) => {e.preventDefault()}}>

        <input type="email" id="email"  autoFocus={true}
        placeholder='Enter something...' ref={inputRef}
        />
        <br />
        <input type="password"  />
        <br />
        <button type="submit" onClick={handleClick}>Submit</button>  {x} <br />
        <hr />

        myInput component:
        <br />
        <MyInput type="text" placeholder='Enter in MyInput' ref={myInputRef} />
        <br />
        <button onClick={myInputClick}>myInput</button>
    </form>
  )
}

export default InputRefs