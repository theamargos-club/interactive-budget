import React, { useState } from 'react';

import ImageCustom from './ImageCustom';
import InputCustom from './InputCustom';
import _ from 'lodash';

const Ilumination = () => {

    const [numberZones, setNumberZones] = useState(0)
    const [json, setJson] = useState([])


    const onChange2 = e => {
        let value = e.target.value
        let jsonBuild = json
        let jsonUpdate = []
        if (e.target.id.toString() === "1") {
            setNumberZones(value)
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
        setJson(jsonUpdate)
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
            } else if (check && i !== 0){
                data.push({ id: count, title: "Nombre de Zona " + numZone, isHidden: true, value: "", type: "input" })
                check = false;
            } else if (!check){
                data.push({ id: count, title: "Cantidad de Circuitos", isHidden: true, value: "", type: "input" })
                check = true;
            }
            count++;
            numZone++;
        }
        data.push({ id: count, title: "Seleccione el tipo de interruptor que desee:", isHidden: true, value: "", type: "image" })
        return data;
    }

    const onClick = e => {
        console.log(e.target.value)
    }

    const buildJsonImage = () => {
        let jsonResponse = []
        jsonResponse.push({title: "Entry Level US$50.00-US$100.00 x interruptor", imgSrc: "../../utils/images/src1.png", onClick: {onClick}})
        jsonResponse.push({title: "Mid Level US$100-US$150 x interruptor", imgSrc: "../../utils/images/src2.png", onClick: {onClick}})
        jsonResponse.push({title: "Mid Level US$150.00-US$350.00 x interruptor", imgSrc: "../../utils/images/src3.png", onClick: {onClick}})
        return jsonResponse;
    }


    const renderOptions = () => {
        return json.map((item) => {
            if (!item.isHidden && item.type === "input") {
                return <InputCustom title={item.title} id={item.id} onChange={onChange2} />
            }
            if (!item.isHidden && item.type === "image") {
                return <ImageCustom title={item.title} id={item.id} json={buildJsonImage()}/>
            }
        })
    }

    return (
        <div>
            <InputCustom title="Cantidad de zonas" id={1} onChange={onChange2} />
            {numberZones > 0 && renderOptions()}
        </div>
    );
}

export default Ilumination;
