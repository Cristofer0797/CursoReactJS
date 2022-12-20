import React, { useState } from 'react';

const CompCtoCompF = () => {

    const fechaInicial = [
        {
            fecha: new Date(),
            edad: 0,
            nombre: 'Cristian',
            apellidos: 'Hernandez'
        }
    ]

    const [fecha, setFecha] = useState(fechaInicial);

    componentDidMount();
    componentWillUnmount();

    const componentDidMount = () => {
        timerID = setInterval (
            () => actualizar(), 1000
        );
    }

    const componentWillUnmount = () => {
        clearInterval(timerID)
    }

    const actualizar = () => {
        setFecha(fecha.edad + 1)
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {fechaInicial.fecha.toLocaleTimeString()}
            </h2>
            <h3>{fechaInicial.nombre} {fechaInicial.apellidos}</h3>
            <h1>Edad: {fechaInicial.edad}</h1>
        </div>
    );

}

export default CompCtoCompF;
