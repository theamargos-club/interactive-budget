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
            <div className="center-css">
                <div className="container">
                    <ul className="progressbar">
                        <li className={state.page === 1 ? "active" : undefined}>Datos Personales</li>
                        <li className={state.page === 2 ? "active" : undefined}>Servicios</li>
                        <li className={state.page >= 3 ? "active" : undefined}>Presupuesto</li>
                    </ul>
                </div>
            </div>
            <div className="center-css">
                {buildOptions()}
            </div>
        </div>
    );
}

export default Wizzard;
