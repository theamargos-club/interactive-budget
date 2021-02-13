import React, { useContext } from 'react';
import { updateEmail, updateName, updatePhone } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';

const Form = () => {

    const { dispatch } = useContext(AppContext);


    const onChange = e => {

        if (e.target.id === "name")
            dispatch(updateName(e.target.value))

        if (e.target.id === "email")
            dispatch(updateEmail(e.target.value))

        if (e.target.id === "phone")
            dispatch(updatePhone(e.target.value))

    };

    return (
        <div>
            <h1>Logo</h1>
            <h2>Bienvenidos a nuestro cotizador interactivo</h2>
            <h3>Datos Personales</h3>
            <div>
                <div style={{ margin: "1%" }}><input type="text" placeholder="Nombre" id="name" onChange={onChange} /></div>
                <div style={{ margin: "1%" }}><input type="text" placeholder="Email" id="email" onChange={onChange} /></div>
                <div style={{ margin: "1%" }}><input type="text" placeholder="Telefono" id="phone" onChange={onChange} /></div>
            </div>
        </div>
    );
}

export default Form;
