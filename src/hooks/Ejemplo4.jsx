/**
 * Ejemplo del uso de props.chlidren
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>** Ejemplo de prop.children **</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {props.children}
        </div>
    );
}

export default Ejemplo4;
