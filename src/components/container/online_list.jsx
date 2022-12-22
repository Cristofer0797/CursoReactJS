import React, { useState, useEffect } from 'react';
import { Conect } from '../../models/conect.class';
import Online from '../pure/online';
import OnlineForm from '../pure/forms/onlineForm'

const OnlineList = () => {

    const defaultConect = new Conect('Cristian', 'Hernandez', 'xcristfer@gmail.com', false);
    const defaultConect2 = new Conect('Mafer', 'Hernandez', 'maferfer@gmail.com', true);

    const [users, setUser] = useState([defaultConect, defaultConect2]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Modificacion de tareas");
        setLoading(false);
        return () => {
            console.log("Componente a punto de desaparecer")
        };
    }, [users]);

    function onlineUser(conect){
        const index = users.indexOf(conect);
        const tempUser = [...users];
        tempUser[index].conectado = !tempUser[index].conectado;
        setUser(tempUser);
    }

    function deleteUser(conect){
        const index = users.indexOf(conect);
        const tempUser = [...users];
        tempUser.splice(index, 1);
        setUser(tempUser);
    }

    function addUser(conect){
        const index = users.indexOf(conect);
        const tempUser = [...users];
        tempUser.push(conect);
        setUser(tempUser);
    }

    return (
        <div>
            <div>
                <h1>Usuarios</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Conectado</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((conect, index) => {
                return(
                    <Online
                    key = {index}
                    conect = {conect}
                    enlinea = {onlineUser}
                    remover = {deleteUser}>
                    </Online>
                )
            })}
                </tbody>
            </table>
            
            

            <OnlineForm addC={addUser}></OnlineForm>
        </div>
    );
};


export default OnlineList;
