import * as Json from "../../utils/jsonMaps";

import React, { useContext } from 'react';
import { setJsonOptions, updateLastPage, updateOptions } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';
import _ from 'lodash';

const OptionMenu = () => {
  const { state, dispatch } = useContext(AppContext);

  const onCheck = value => {
    let newOptions = []
    let numberLastPage = undefined
    if (!_.includes(state.options, value)) {
      newOptions = [...state.options, value]
      numberLastPage = (Number(newOptions.length) + Number(state.page))
      dispatch(updateOptions(newOptions))
      dispatch(updateLastPage(newOptions.length > 1 ? numberLastPage : 3))
    } else {
      newOptions = state.options.filter(item => item !== value)
      numberLastPage = (Number(newOptions.length) + Number(state.page))
      dispatch(updateOptions(newOptions))
      dispatch(updateLastPage(newOptions.length > 1 ? numberLastPage : 3))
    }
    let jsonRender = [...state.jsonOptions, setDynamicPages(value, numberLastPage)]
    dispatch(setJsonOptions(jsonRender))
  }

  const setDynamicPages = (value, numberLastPage) => {
    let findObj = Json.jsonComponents.find(item => item.id === value);
    findObj.page = numberLastPage;
    return findObj;
  }

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(1) }}
          defaultChecked={_.includes(state.options, 1)}
        />
        <label className="form-check-label">Control de Iluminación</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(2) }}
          defaultChecked={_.includes(state.options, 2)}
        />
        <label className="form-check-label">Audio Multizonas (ej. Sala, Comedor, Balcón)</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(3) }}
          defaultChecked={_.includes(state.options, 3)}
        />
        <label className="form-check-label">Audio en habitaciones y control de TV</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(4) }}
          defaultChecked={_.includes(state.options, 4)}
        />
        <label className="form-check-label">Sala Multimedia o Cine en casa</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(5) }}
          defaultChecked={_.includes(state.options, 5)}
        />
        <label className="form-check-label">Sistema WiFi y Redes</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(6) }}
          defaultChecked={_.includes(state.options, 6)}
        />
        <label className="form-check-label">Cortinas Automatizadas</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(7) }}
          defaultChecked={_.includes(state.options, 7)}
        />
        <label className="form-check-label">Cámaras de seguridad</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(8) }}
          defaultChecked={_.includes(state.options, 8)}
        />
        <label className="form-check-label">Alarmas</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="checkbox"
          onClick={() => { onCheck(9) }}
          defaultChecked={_.includes(state.options, 9)}
        />
        <label className="form-check-label">Servicio de diseño y preinstalación domótica</label>
      </div>
    </div>
  );
}

export default OptionMenu;

