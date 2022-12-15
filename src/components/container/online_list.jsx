import React from 'react';
import { Conect } from '../../models/conect.class';
import Online from '../pure/online';


const OnlineList = () => {

    const defaultConect = new Conect('Cristian', 'Hernandez', 'xcristfer@gmail.com', false)

    return (
        <div>
            <div>
                <h1>Usuario</h1>
            </div>
            <Online conect = {defaultConect}></Online>
        </div>
    );
};


export default OnlineList;
