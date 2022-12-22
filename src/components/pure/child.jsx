import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value
        alert(`text in imput: ${text}`)
    }

    function pressButtomParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div>
            <p onMouseOver={() => console.log('On Mouse over')}>Hello, {name}</p>
            <button onClick={() => console.log('Boton uno pulsado')}>Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            <button onClick={() => pressButtomParams('Boton tres pulsado')}>Boton 3</button>
            <input placeholder='Insert a text' onFocus={()=> console.log('Input focus')}
             ref = {messageRef} />
            <button onClick={() => send(messageRef.current.value)}>Send message</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
