import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado")

        const intervaloID = setInterval(() => {
            console.log("Actualizacion del componente");
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer");   
            clearInterval(intervaloID) 
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
