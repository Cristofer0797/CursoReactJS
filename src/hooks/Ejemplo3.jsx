/**
 * Ejemplo de hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El Token es: {state.token}</h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}

export default function MiComponenteContexto() {
    const estadoInicial = {
        token: '123456',
        sesion: 1
    }

    // Creamos el estado
    const [sesionData, setSesion] = useState(estadoInicial)

    function actualizarSesion(){
        setSesion(
            {
                token: 'dfgd548',
                sesion: sesionData.sesion + 1
            }
        )
    }
  return (
    <miContexto.Provider value={sesionData}>
        <h1>Ejemplo de useState() y useContext()</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}


