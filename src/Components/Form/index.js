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
            <div className="form-group">
                <label>Nombre y Apellido</label>
                <input type="text" className="form-control" id="name" placeholder="Ingrese su Nombre y Apellido" onChange={onChange} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onChange={onChange} />
            </div>
            <div className="form-group">
                <label>Telefono</label>
                <input type="text" className="form-control" id="phone" placeholder="Ingrese su Telefono" onChange={onChange} />
            </div>
        </div>
    );
}

export default Form;
