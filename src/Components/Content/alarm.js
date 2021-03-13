import * as Json from '../../utils/jsonMaps'

import React, { useContext, useState } from 'react';

import { AppContext } from '../../storage/reducers';
import InputCustom from './inputCustom';
import _ from 'lodash';
import { updateBudget } from '../../storage/actions';

const Alarm = () => {

    const { dispatch } = useContext(AppContext);

    const [jsonInputs, setJsonInputs] = useState([])
    const [showImg, setShowImg] = useState(false)

    const onChange = e => {
        let value = e.target.value
        let jsonUpdate = []
        let next = Number(e.target.id) + 1
        if (e.target.id.toString() === "1") {
            if (value !== null && value !== "")
                jsonUpdate = setValue(buildJson(value), next, value)
            else
                jsonUpdate = []
            setShowImg(false)
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

    const showInputImg = () =>
        setShowImg(true)


    const buildJson = () => {
        let data = []
        let autoIndex = 2;
        data.push({ id: autoIndex, title: "Cantidad de areas communes (sala, comedor, balcon, pasillo, studio, etc)  ", isHidden: false, value: "" })
        autoIndex = autoIndex + 1;
        data.push({ id: autoIndex, title: "Metraje de la propiedad (puede ser estimado sino lo conce) ", isHidden: true, value: "" })
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
        <div>
            <InputCustom item={Json.headerNetworksWifi} fnEvent={onChange} type="input" />
            {jsonInputs.length !== 0 && mapInputs()}
            {showImg && <InputCustom jsonImg={Json.jsonImgNetworksWifi} fnEvent={onClick} type="img" checkBoxImg={false} />}
        </div>
    );
}

export default Alarm;
