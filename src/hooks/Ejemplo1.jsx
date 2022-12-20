// Ejemplo de uso de useState()

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Cristian',
        email: 'cristian@gmail.com'
    }

    /**
     * Queremos que el valorInicial y personaInicial sean
     * parte del estado del componente para poder gestionar su cambio
     * y que se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador + 1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>** Ejemplo de useState() **</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>

            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
