import React from 'react';

const InputText = ({title, id, onChange}) => {

    
    return (
        <div>
            <label>{id + ' - ' + title}</label>
            <input type="text" name={id} id={id} onChange={onChange}/>
        </div>
    );
}

export default InputText;
