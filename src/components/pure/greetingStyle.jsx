import React, { useState } from 'react';

// Definiendo estilos en constantes

// Estilo para usuario logeado
const loggedStyle = {
    color: 'white'
};

// Estilo para usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyle = (props) => {

    // Generamos un estado para controlar si el usuario
    // esta conectado

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>Please loggin</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? greetingUser() : pleaseLogin()}
            
            <button onClick={() => {
                setLogged(!logged)
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyle;
