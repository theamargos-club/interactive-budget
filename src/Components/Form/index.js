import './index.scss';

import React, { useContext } from 'react';
import { updateEmail, updateLastName, updateName, updatePhone } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';

const Form = () => {

    const { dispatch } = useContext(AppContext);


    const onChange = e => {

        if (e.target.id === "name")
            dispatch(updateName(e.target.value))

        if (e.target.id === "lastname")
            dispatch(updateLastName(e.target.value))

        if (e.target.id === "email")
            dispatch(updateEmail(e.target.value))

        if (e.target.id === "phone")
            dispatch(updatePhone(e.target.value))

    };

    return (
        <div>
            <div className="form-content">
                <div className="form-group input-form">
                    <label>Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Ingrese su Nombre" onChange={onChange} />
                </div>
                <div className="form-group input-form">
                    <label>Apellido</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Ingrese su Apellido" onChange={onChange} />
                </div>
            </div>
            <div className="form-content">
                <div className="form-group input-form">
                    <label>Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onChange={onChange} />
                </div>
                <div className="form-group input-form">
                    <label>Telefono</label>
                    <input type="text" className="form-control" id="phone" placeholder="Ingrese su Telefono" onChange={onChange} />
                </div>
            </div>
        </div>
    );
}

export default Form;
