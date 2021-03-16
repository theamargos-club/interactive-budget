import "./index.scss"

import * as Json from "../../utils/jsonMaps";

import React, { useContext } from 'react';

import { AppContext } from '../../storage/reducers';
import SectionWizzard from './sectionWizzard';
import _ from 'lodash';

const Wizzard = () => {
    const { state } = useContext(AppContext);

    const buildOptions = () => {
        if (state.page < 3) {
            return Json.jsonOptions.map(item => {
                if (state.page === item.page) {
                    return <SectionWizzard key={item.page} content={item.component} />
                }
            })
        } else {
            return state.jsonOptions.map(item => {
                if (state.page === item.page && item.page !== undefined && _.includes(state.options, item.id)) {
                    return <SectionWizzard key={item.page} content={item.component} />
                }
            })
        }
    }

    return (
        <div>
            <div className="center-css logo">
                <img src="https://automatiza.do/wp-content/uploads/2020/03/automatizado_logo_web-.png?189db0&amp;189db0" alt="Automatiza.do" id="logo" height="100" width="220" />
            </div>
            {state.page === 1 && <div>
                <div className="text-center padding-btn padding-top"><h3>Cotiza tu proyecto con nosotros</h3></div>
                <div className="text-center subtitle padding-btn">Cotiza tu proyecto con nosotros Sistemas WiFi / Cines en Casa / Automatización de Casas y Oficinas / Control de Iluminación / Audio Multizonas / Controles Remotos Maestros / Termostatos Inteligentes / Cortinas y Shades Motorizadas / Alarmas y Cámaras de Seguridad / Control de Acceso</div>
            </div>}
            <div className="center-css">
                {buildOptions()}
            </div>
        </div>
    );
}

export default Wizzard;
