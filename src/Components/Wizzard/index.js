import './index.scss';

import React, { useContext, useState } from 'react';
import { updateOption, updatePage } from '../../storage/actions';

import { AppContext } from '../../storage/reducers';
import Form from '../Form';
import Ilumination from '../Content/ilumination';
import OptionMenu from '../OptionMenu';
import SectionWizzard from './sectionWizzard';

const SectionWizard = () => {
    const { state, dispatch } = useContext(AppContext);
    const [page, setPage] = useState(1)

    const onNextPage = () => {
        setPage(page + 1)
    }

    const onPreviousPage = () => {
        setPage(page - 1)
    }

    const onFinish = () => {
        const data = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            budget: state.budget
        }

        console.log(data)
    }


    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="stepper">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a className={page === 1 ? "persistant-disabled active show" : "persistant-disabled"} href="#stepper-step-1" data-toggle="tab" aria-controls="stepper-step-1" role="tab" title="Step 1">
                                    <span className="round-tab">1</span>
                                </a>
                            </li>
                            <li role="presentation" className="disabled">
                                <a className={page === 2 ? "persistant-disabled active show" : "persistant-disabled"} href="#stepper-step-2" data-toggle="tab" aria-controls="stepper-step-2" role="tab" title="Step 2">
                                    <span className="round-tab">2</span>
                                </a>
                            </li>
                            <li role="presentation" className="disabled">
                                <a className={page === 3 ? "persistant-disabled active show" : "persistant-disabled"} href="#stepper-step-3" data-toggle="tab" aria-controls="stepper-step-3" role="tab" title="Step 3">
                                    <span className="round-tab">3</span>
                                </a>
                            </li>
                        </ul>
                        <form role="form">
                            <div className="tab-content">
                                <div className={page === 1 ? "tab-pane fade in active" : "tab-pane fade"} role="tabpanel" id="stepper-step-1">
                                    <h3 className="h2">Cotizador Interactivo</h3>
                                    <p>Datos Personales</p>
                                    <Form />
                                    <ul className="list-inline pull-right">
                                        <li>
                                            <a className="btn btn-primary next-step" onClick={onNextPage}>Siguiente</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={page === 2 ? "tab-pane fade in active" : "tab-pane fade"} role="tabpanel" id="stepper-step-2">
                                    <h3 className="h2">¿ Que productos o servicios desea ?</h3>
                                    <OptionMenu />
                                    <ul className="list-inline pull-right">
                                        <li>
                                            <a className="btn btn-default prev-step" onClick={onPreviousPage}>Atras</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-primary next-step" onClick={onNextPage}>Siguiente</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={page === 3 ? "tab-pane fade in active" : "tab-pane fade"} role="tabpanel" id="stepper-step-3">
                                    <h3 className="hs">Titulo</h3>
                                    {page === 3 && state.option === 1 && <Ilumination />}
                                    {page === 3 && state.option === 2 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 3 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 4 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 5 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 6 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 7 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 8 && <SectionWizzard content="asdasdsd" />}
                                    {page === 3 && state.option === 9 && <SectionWizzard content="asdasdsd" />}
                                    <ul className="list-inline pull-right">
                                        <li>
                                            <a className="btn btn-default prev-step" onClick={onPreviousPage}>Atras</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-primary next-step" onClick={onFinish}>Submit Payment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        // <div style={{ display: "flex", justifyContent: "center" }}>
        //     {state.page === 1 && <SectionWizzard content={<Form />}/>}
        //     {state.page === 2 && <SectionWizzard content={<OptionMenu />}/>}

        //     {state.page === 3 && state.option === 1 && <SectionWizzard content={<Ilumination />} />}
        //     {state.page === 3 && state.option === 2 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 3 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 4 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 5 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 6 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 7 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 8 && <SectionWizzard content="asdasdsd" />}
        //     {state.page === 3 && state.option === 9 && <SectionWizzard content="asdasdsd" />}
        // </div>
    );
}

export default SectionWizard;
