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
            <div><input type="radio" name="radio" defaultChecked/> Control de Iluminación </div>
            <div><input type="radio" name="radio" /> Audio Multizonas (ej. Sala, Comedor, Balcón)</div>
            <div><input type="radio" name="radio" /> Audio en habitaciones y control de TV</div>
            <div><input type="radio" name="radio" /> Sala Multimedia o Cine en casa</div>
            <div><input type="radio" name="radio" /> Sistema WiFi y Redes</div>
            <div><input type="radio" name="radio" /> Cortinas Automatizadas</div>
            <div><input type="radio" name="radio" /> Cámaras de seguridad</div>
            <div><input type="radio" name="radio" /> Alarma</div>
            <div><input type="radio" name="radio" /> Servicio de diseño y preinstalación domótica</div>
        </div>
    );
}

export default OptionMenu;

