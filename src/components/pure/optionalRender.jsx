import React, { useState } from 'react';

const loggedStyle = {
    backgroundColor: 'green',
    color: 'white'
}

const unloggedStyle = {
    backgroundColor: 'red',
    color: 'white'
}
// Login y Logout

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optButton;

    // if(access) {
    //     optButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optButton = <button onClick={updateAccess}>Login</button>
    // }


    if(access) {
        optButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // Unread message
    let addMessage = () => {
        setNMessage(nMessage + 1)
    }

    return (
        <div>
            { optButton }

            {/* { nMessage == 1 && <p>You have {nMessage} a new message</p> }
            { nMessage > 1 && <p>You have {nMessage} new messages</p> }
            { nMessage == 0 && <p>No have new messages</p> } */}
            

            {/* Operador ternario */}
            {access ? (
                <div>
                    { nMessage > 0 ? <p>You have {nMessage} new message{nMessage > 1? 's' : null}</p> : 
                    <p>No have new messages</p> }
                    <button onClick={addMessage}>{nMessage == 0? 'Add you first mesaage' : 'Add more messages'}</button>
                </div>) : null}

            

        </div>
    );
}

export default OptionalRender;
