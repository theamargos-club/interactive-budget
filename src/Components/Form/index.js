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
            <div style={{ margin: "1%" }}><input type="text" placeholder="Nombre" id="name" onChange={onChange} /></div>
            <div style={{ margin: "1%" }}><input type="text" placeholder="Email" id="email" onChange={onChange} /></div>
            <div style={{ margin: "1%" }}><input type="text" placeholder="Telefono" id="phone" onChange={onChange} /></div>
        </div>
    );
}

export default Form;
