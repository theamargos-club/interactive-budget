import './index.scss'

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
    let jsonRender = []
    if (state.options.length === 0 && state.jsonOptions.length === 0) {
      dispatch(setJsonOptions(jsonRender))
      dispatch(updateOptions([]))
    }
    if (!_.includes(state.options, value)) {
      newOptions = [...state.options, value]
      numberLastPage = (Number(newOptions.length) + Number(state.page))
      dispatch(updateOptions(newOptions))
      dispatch(updateLastPage(newOptions.length > 1 ? numberLastPage : 3))
      jsonRender = [...state.jsonOptions, setDynamicPages(value, numberLastPage)]
      dispatch(setJsonOptions(jsonRender))
    } else {
      newOptions = state.options.filter(item => item !== value)
      let removeIndex = state.jsonOptions.filter(item => item.id !== value)
      numberLastPage = (Number(newOptions.length) + Number(state.page))
      dispatch(updateOptions(newOptions))
      dispatch(updateLastPage(newOptions.length > 1 ? numberLastPage : 3))
      dispatch(setJsonOptions(removeIndex))
    }
  }

  const setDynamicPages = (value, numberLastPage) => {
    let findObj = Json.jsonComponents.find(item => item.id === value);
    findObj.page = numberLastPage;
    return findObj;
  }

  return (
    <div>
      <div className="content-service center-sv">
        <div className="width-service" onClick={() => { onCheck(1) }}>
          <div className="center-logo">
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-08.png?189db0&amp;189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 1) ? 'title-logo active' : 'title-logo'}>Control de iluminación</p>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(2) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-10.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 2) ? 'title-logo active' : 'title-logo'}>Audio Multizonas</p>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(3) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-10.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 3) ? 'title-logo active' : 'title-logo'}>Audio habitaciones y control TV</p>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(4) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-09.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 4) ? 'title-logo active' : 'title-logo'}>Cine en Casa</p>
          </div>
        </div>
      </div>
      <div className="content-service center-sv">
        <div className="width-service" onClick={() => { onCheck(5) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-11.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 5) ? 'title-logo active' : 'title-logo'}>Sistema Wifi y Redes</p>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(6) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/F-icon-16.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 6) ? 'title-logo active' : 'title-logo'}>Cortinas Automatizadas</p>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(7) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-13.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 7) ? 'title-logo active' : 'title-logo'}>Camaras de Seguridad</p>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(8) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-14.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 8) ? 'title-logo active' : 'title-logo'}>Alarmas</p>
          </div>
        </div>
      </div>
      <div className="content-service center-sv">
        <div className="width-service" onClick={() => { onCheck(9) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-14.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div>
            <p className={_.includes(state.options, 9) ? 'title-logo active' : 'title-logo'}>Servicio de diseño y preinstalación domótica</p>
          </div>
        </div>
      </div>



      {/* <div className="form-check">
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
      </div> */}
    </div>
  );
}

export default OptionMenu;

