/**
 * Ejemplo de componente de tipo clase
 * que dispone de los ciclos de vida
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LyfeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log("Constructor: cuando se instancia el componente");
    }

    componentWillMount(){
        console.log("WillMount: antes del montaje del componente");
    }

    componentDidMount(){
        console.log("DidMount: justo en el montaje del componente");
    }

    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps: si va a recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState){
        // Controla si el componente debe actualizarse
        // return true/false
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: justo antes de actualizarse");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: justo despues de actualizarse");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount: justo antes de desaparecer");
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {
    
}