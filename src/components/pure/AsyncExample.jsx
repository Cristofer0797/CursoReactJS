import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value) {
       sessionStorage.setItem(key, value);

       return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage() {
        saveSessionStorage('name', 'Cristian')
        .then((response) => {
            let value = response;
            alert(`Saved Name: ${value}`);
        }).catch((error) => {
            alert(`Something went wrong: ${error}`)
        }).finally(() => alert('Name saved and retreived sucessfuly'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        });
        let message = await promise;
        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Ooops!'))
    }

    const consumeError = () => {
        returnError()
        .then((response) => alert(`Everithing OK: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
        .finally(() => alert('Finally Executed'))
    }

    const urlNotFound = async() => {
        try {
            let response = await fetch('https://invalidURL');
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Somenthing went wrong with your URL: ${error} (check Your console)`)
        }
    }

    const multiplePromise = async() => {
        let results = await Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Somenthing went wrong with your URL: ${error} (check Your console)`))
    }

    return (
        <div>
            <h1>Ejemplos Asincronos</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Number Promise</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Send Message</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknow URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
