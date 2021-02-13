import React, { useContext } from 'react';

import { AppContext } from '../../storage/reducers';
import Form from '../Form';
import Ilumination from '../Content/ilumination';
import OptionMenu from '../OptionMenu';
import SectionWizzard from './sectionWizzard';

const SectionWizard = () => {
    const { state } = useContext(AppContext);
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {state.page === 1 && <SectionWizzard content={<Form />}/>}
            {state.page === 2 && <SectionWizzard content={<OptionMenu />}/>}

            {state.page === 3 && state.option === 1 && <SectionWizzard content={<Ilumination />} />}
            {state.page === 3 && state.option === 2 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 3 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 4 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 5 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 6 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 7 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 8 && <SectionWizzard content="asdasdsd" />}
            {state.page === 3 && state.option === 9 && <SectionWizzard content="asdasdsd" />}
        </div>
    );
}

export default SectionWizard;
