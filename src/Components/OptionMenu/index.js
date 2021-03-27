import './index.scss'

import * as Json from "../../utils/jsonMaps";

import React, { useContext } from 'react';
import { setJsonOptions, updateLastPage, updateOptions } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from 'lodash';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

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
      if (jsonRender.length === 1)
        setLastComponentPage(jsonRender)
      else
        dispatch(setJsonOptions(jsonRender))
    } else {
      newOptions = state.options.filter(item => item !== value)
      let removeIndex = state.jsonOptions.filter(item => item.id !== value)
      numberLastPage = (Number(newOptions.length) + Number(state.page))
      dispatch(updateOptions(newOptions))
      dispatch(updateLastPage(newOptions.length > 1 ? numberLastPage : 3))
      if (removeIndex.length === 1)
        setLastComponentPage(removeIndex)
      else
        dispatch(setJsonOptions(removeIndex))

    }
  }

  const setLastComponentPage = (options) => {
    if (options.length === 1) {
      dispatch(setJsonOptions([{
        id: options[0].id,
        component: options[0].component,
        page: 3
      }]))
    }
  }

  const setDynamicPages = (value, numberLastPage) => {
    let findObj = Json.jsonComponents.find(item => item.id === value);
    findObj.page = numberLastPage;
    return findObj;
  }

  return (
    <div>
      <div className="title-center"><h3>Seleccione categorias que desea cotizar: </h3></div>
      <div className="content-service center-sv">
        <div className="width-service" onClick={() => { onCheck(1) }}>
          <div className="center-logo">
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-08.png?189db0&amp;189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 1) ? 'title-logo active' : 'title-logo'}>Control de iluminación</p><span>{_.includes(state.options, 1) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(2) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-10.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 2) ? 'title-logo active' : 'title-logo'}>Audio Multizonas</p><span>{_.includes(state.options, 2) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(3) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-10.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 3) ? 'title-logo active' : 'title-logo'}>Audio habitaciones y control TV</p><span>{_.includes(state.options, 3) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(4) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-09.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 4) ? 'title-logo active' : 'title-logo'}>Cine en Casa</p><span>{_.includes(state.options, 4) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
      </div>
      <div className="content-service center-sv">
        <div className="width-service" onClick={() => { onCheck(5) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-11.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 5) ? 'title-logo active' : 'title-logo'}>Sistema Wifi y Redes</p><span>{_.includes(state.options, 5) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(6) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/F-icon-16.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 6) ? 'title-logo active' : 'title-logo'}>Cortinas Automatizadas</p><span>{_.includes(state.options, 6) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(7) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-13.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 7) ? 'title-logo active' : 'title-logo'}>Camaras de Seguridad</p><span>{_.includes(state.options, 7) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
        <div className="width-service" onClick={() => { onCheck(8) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-14.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 8) ? 'title-logo active' : 'title-logo'}>Alarmas</p><span>{_.includes(state.options, 8) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
      </div>
      <div className="content-service center-sv">
        <div className="width-service" onClick={() => { onCheck(9) }}>
          <div>
            <img className="img-animation" src="https://automatiza.do/wp-content/uploads/2016/08/Iconos-14.png?189db0&189db0" alt="" height="120" width="120" />
          </div>
          <div className="box">
            <p className={_.includes(state.options, 9) ? 'title-logo active' : 'title-logo'}>Servicio de diseño y preinstalación domótica</p><span>{_.includes(state.options, 9) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionMenu;

