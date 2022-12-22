import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Conect } from '../../../models/conect.class';


const OnlineForm = ({ addC }) => {

    const nameRc = useRef('');
    const lastName = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newConect = new Conect(
            nameRc.current.value,
            lastName.current.value,
            emailRef.current.value,
            false
        );
        addC(newConect)
    }

    return (
        <form onSubmit={addContact}>
            <div>
                <input type="text"  ref={nameRc} placeholder='Name' required/>
                <input type="text" ref={lastName} placeholder='LastName' required/>
                <input type="email" ref={emailRef} placeholder='Email' required/>
            </div>
            <button type='submit'>Add</button>
        </form>
    );
};


OnlineForm.propTypes = {
    addC: PropTypes.func.isRequired
};


export default OnlineForm;
