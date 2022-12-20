/**
 * Ejemplo de uso en componente clase y 
 * hook en componente funcional
 */

import React, { Component } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("comportamiento cuando el componente recibe nuevos props o cambio en sus estados")
    }

  render() {
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
  }
}

export const DidUpdate = () => {

    useEffect(() => {
        console.log("comportamiento cuando el componente recibe nuevos props o cambio en sus estados")
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


