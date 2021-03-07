import "./index.scss"

import * as Json from "../../utils/jsonMaps";

import React, { useContext } from 'react';

import { AppContext } from '../../storage/reducers';
import SectionWizzard from './sectionWizzard';

const SectionWizard = () => {
    const { state } = useContext(AppContext);

    const buildOptions = () => {
        return Json.jsonOptions.map(item => {
            if (state.page === item.page && item.option === null) {
                return <SectionWizzard key={item.page} content={item.component} />
            }
            if (state.page === item.page && item.option === state.option) {
                return <SectionWizzard key={item.page} content={item.component} />
            }
        })
    }

    return (
        <div>
            <div className="center-css">
                <div className="container">
                    <ul className="progressbar">
                        <li className={state.page === 1 ? "active" : undefined}>Datos Personales</li>
                        <li className={state.page === 2 ? "active" : undefined}>Servicios</li>
                        <li className={state.page === 3 ? "active" : undefined}>Presupuesto</li>
                    </ul>
                </div>
            </div>
            <div className="center-css">
                {buildOptions()}
            </div>
        </div>
    );
}

export default SectionWizard;
