import React, { useState } from 'react';

import Form from '../Form';
import OptionMenu from '../OptionMenu';
import SectionWizzard from './sectionWizzard';

const SectionWizard = () => {

    const [page, setPage] = useState(1);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {page === 1 && <SectionWizzard content={<Form />} page={page} previousPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)} />}
            {page === 2 && <SectionWizzard content={<OptionMenu />} page={page} previousPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)} />}
            {page === 3 && <SectionWizzard content="asdasdsd" page={page} previousPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)} />}
            {page === 4 && <SectionWizzard content="asdasdsd" page={page} previousPage={() => setPage(page - 1)} nextPage={() => setPage(page + 1)} />}
        </div>
    );
}

export default SectionWizard;
