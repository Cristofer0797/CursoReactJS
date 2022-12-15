import React from 'react';
import PropTypes from 'prop-types';
import { Conect } from '../../models/conect.class';


const Online = ({conect}) => {
    return (
        <div>
            <h2>
                Nombre: { conect.nombre }
            </h2>
            <h2>
                Apellido: { conect.apellido }
            </h2>
            <h2>
                Email: { conect.email }
            </h2>
            <h2>
                Conectado: { conect.conectado ? 'Contacto en linea': 'Contacto no disponible'}
            </h2>
        </div>
    );
};


Online.propTypes = {
    conect: PropTypes.instanceOf(Conect)
};


export default Online;
