import React, { useContext } from 'react';

import { AppContext } from '../../storage/reducers';
import { updateOption } from '../../storage/actions';

const OptionMenu = () => {
    const { dispatch } = useContext(AppContext);

    const onCheck = value => {
        dispatch(updateOption(value))
    }

    return (
        <div>
            <div><input type="radio" name="radio" onClick={() => {console.log(1)}} defaultChecked/> Control de Iluminación </div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(2)}}/> Audio Multizonas (ej. Sala, Comedor, Balcón)</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(3)}}/> Audio en habitaciones y control de TV</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(4)}}/> Sala Multimedia o Cine en casa</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(5)}}/> Sistema WiFi y Redes</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(6)}}/> Cortinas Automatizadas</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(7)}}/> Cámaras de seguridad</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(8)}}/> Alarma</div>
            <div><input type="radio" name="radio" onClick={() => {onCheck(9)}}/> Servicio de diseño y preinstalación domótica</div>
        </div>
    );
}

export default OptionMenu;

