/**
 * Ejemplo de uso del ciclo de vida en componente clase
 * y el hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log("comportamiento antes de que se renderize")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMount = () => {

    useEffect(() => {
        console.log("comportamiento antes de que el componente sea añadido al DOOM")
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}



