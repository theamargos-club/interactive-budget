import React, { useContext } from 'react';

import { AppContext } from '../../storage/reducers';
import { updateOption } from '../../storage/actions';

const OptionMenu = () => {
  const { state, dispatch } = useContext(AppContext);

  const onCheck = value => {
    dispatch(updateOption(value))
  }

  return (
    <div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 1 && true} 
          onClick={() => {onCheck(1)}}
        />
        <label className="form-check-label">Control de Iluminación</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 2 && true} 
          onClick={() => {onCheck(2)}}
        />
        <label className="form-check-label">Audio Multizonas (ej. Sala, Comedor, Balcón)</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 3 && true} 
          onClick={() => {onCheck(3)}}
        />
        <label className="form-check-label">Audio en habitaciones y control de TV</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 4 && true} 
          onClick={() => {onCheck(4)}}
        />
        <label className="form-check-label">Sala Multimedia o Cine en casa</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 5 && true} 
          onClick={() => {onCheck(5)}}
        />
        <label className="form-check-label">Sistema WiFi y Redes</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" name="radio" 
          defaultChecked={state.option === 6 && true} 
          onClick={() => {onCheck(6)}}
        />
        <label className="form-check-label">Cortinas Automatizadas</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 7 && true} 
          onClick={() => {onCheck(7)}}
        />
        <label className="form-check-label">Cámaras de seguridad</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio" 
          defaultChecked={state.option === 8 && true} 
          onClick={() => {onCheck(8)}}
        />
        <label className="form-check-label">Servicio de diseño y preinstalación domótica</label>
      </div>
    </div>
  );
}

export default OptionMenu;

