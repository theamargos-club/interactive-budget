import React from 'react';

const InputText = ({ title, id, onChange }) => {


    return (
        <div className="form-group">
            <label>{id + ' - ' + title}</label>
            <input type="text" className="form-control" placeholder={"Ingrese " + title} name={id} id={id} onChange={onChange} />
        </div>
    );
}

export default InputText;
