import * as Constants from '../../utils/constants'
import * as Json from '../../utils/jsonMaps'

import React, { useContext, useState } from 'react';

import { AppContext } from '../../storage/reducers';
import InputCustom from './inputCustom';
import _ from 'lodash';
import { updateBudget } from '../../storage/actions';

const Ilumination = () => {

    const { dispatch } = useContext(AppContext);

    const [jsonInputs, setJsonInputs] = useState([])
    const [inputImg, setInputImg] = useState([])

    const onChange = e => {
        let value = e.target.value
        let jsonUpdate = []
        let next = Number(e.target.id) + 1
        if (e.target.id.toString() === "1") {
            if (value !== null && value !== "")
                jsonUpdate = setValue(buildJson(value), next, value)
            else
                jsonUpdate = []
            setInputImg([])
        } else
            jsonUpdate = setValue(jsonInputs, next, value)
        setJsonInputs(jsonUpdate)
    }

    const setValue = (json, next, value) => {
        let jsonUpdate = []
        let last = false;
        json.length !== 0 && json.map((item) => {
            if (next.toString() === item.id.toString())
                jsonUpdate.push({ id: item.id, title: item.title, isHidden: false, value: value })
            else
                jsonUpdate.push(item)
            last = (_.last(json).id.toString() === item.id.toString() && item.value !== "") ? true : false;
        })
        last && showInputImg(Number(_.last(json).id))
        return jsonUpdate
    }

    const showInputImg = (length) => {
        setInputImg({ id: (length + 1), title: "Seleccione el tipo de interruptor que desee:", isHidden: false })
    }


    const buildJson = numberZones => {
        let numZone = 1;
        let autoIndex = 1;
        let data = [];
        for (let i = 0; i < numberZones; i++) {
            autoIndex = autoIndex + 1;
            data.push({ id: autoIndex, title: "Nombre de Zona " + numZone, isHidden: i === 0 ? false : true, value: "" })
            autoIndex = autoIndex + 1;
            data.push({ id: autoIndex, title: "Cantidad de Circuitos", isHidden: true, value: "" })
            numZone++;
        }
        return data;
    }

    const mapInputs = () => {
        return jsonInputs.map((item) => {
            return !item.isHidden && <InputCustom key={item.id} item={item} fnEvent={onChange} type="input" />
        })
    }

    const onClick = e => {
        dispatch(updateBudget(e.target.id))
    }

    return (
        <div className="inputs-container">
            <div className="title-center"><h3>{Constants.titleIlumination}</h3></div>
            <div>
                <InputCustom item={Json.headerIlumination} fnEvent={onChange} type="input" />
                {jsonInputs.length !== 0 && mapInputs()}
            </div>
            <div>{inputImg.length !== 0 && <InputCustom item={inputImg} jsonImg={Json.jsonImgIlumination} fnEvent={onClick} type="img" checkBoxImg={true} />}</div>
        </div>
    );
}

export default Ilumination;
