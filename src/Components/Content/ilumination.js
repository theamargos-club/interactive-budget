import * as Json from '../../utils/jsonMaps'

import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../storage/reducers';
import ImageCustom from './ImageCustom';
import InputCustom from './InputCustom';
import _ from 'lodash';
import { updateBudget } from '../../storage/actions';

const Ilumination = () => {

    const { state, dispatch } = useContext(AppContext);

    const [numberZones, setNumberZones] = useState(0)
    const [jsonInputs, setJsonInputs] = useState([])
    const [jsonImg, setJsonImg] = useState([])

    useEffect(() => {
        setJsonImg(Json.jsonImg)
    }, [])

    const onChange = e => {
        let value = e.target.value
        let jsonBuild = jsonInputs
        let jsonUpdate = []
        if (e.target.id.toString() === "1") {
            setNumberZones(value)
            setJsonInputs([])
            jsonBuild = buildJson(value)
        }
        
        let next = Number(e.target.id) + 1
        jsonBuild.map((item) => {
            if(item.id === next){
                jsonUpdate.push({ id: item.id, title: item.title, isHidden: false, value: e.target.value, type: item.type })
            } else {
                jsonUpdate.push(item)
            }
        })
        setJsonInputs(jsonUpdate)
    }

    const buildJson = numberZones => {
        let check = true
        let data = []
        let count = 2;
        let numZone = 1;
        for (let i = 0; i < numberZones * 2; i++) {
            if (check && i === 0){
                data.push({ id: count, title: "Nombre de Zona " + numZone, isHidden: false, value: "", type: "input" })
                check = false;
                numZone++;
            } else if (check && i !== 0){
                data.push({ id: count, title: "Nombre de Zona " + numZone, isHidden: true, value: "", type: "input" })
                check = false;
                numZone++;
            } else if (!check){
                data.push({ id: count, title: "Cantidad de Circuitos", isHidden: true, value: "", type: "input" })
                check = true;
            }
            count++;
        }
        data.push({ id: count, title: "Seleccione el tipo de interruptor que desee:", isHidden: true, value: "", type: "image" })
        return data;
    }

    const onClick = e => {
        dispatch(updateBudget(e.target.id))
    }

    const renderOptions = () => {
        return jsonInputs.map((item) => {
            if (!item.isHidden && item.type === "input") {
                return <InputCustom key={item.id} title={item.title} id={item.id} onChange={onChange} />
            }
            if (!item.isHidden && item.type === "image") {
                return <ImageCustom key={item.id} title={item.title} id={item.id} json={jsonImg} onClick={onClick}/>
            }
        })
    }

    return (
        <div>
            <InputCustom title="Cantidad de zonas" id={1} onChange={onChange} />
            {numberZones > 0 && renderOptions()}
        </div>
    );
}

export default Ilumination;
