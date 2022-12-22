import React from 'react';
import PropTypes from 'prop-types';
import { Conect } from '../../models/conect.class';


const Online = ({ conect, enlinea, remover}) => {
    return (
        <tr>
            <th>
                <span>{ conect.nombre }</span>
            </th>
            <td>
                <span>{ conect.apellido }</span>
            </td>
            <td>
                <span>{ conect.email }</span>
            </td>
            <td>
                { conect.conectado ? 
                (<img onClick={() => enlinea(conect)} className='icon1' src='https://png.monster/wp-content/uploads/2021/06/png.monster-9-370x370.png'></img>) : (<img onClick={() => enlinea(conect)} className='icon1' src='https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/red-alert-icon.png'></img>)
                }

                <img onClick={() => remover(conect)} className='papelera' src='https://static.vecteezy.com/system/resources/previews/010/161/272/non_2x/trash-can-recycle-bin-icon-free-png.png'></img>
            </td>
        </tr>
        
    );
};


Online.propTypes = {
    conect: PropTypes.instanceOf(Conect).isRequired,
    enlinea: PropTypes.func.isRequired,
    remover: PropTypes.func.isRequired
};


export default Online;
