import React, { useState } from 'react';

import Form from '../Form';
import Ilumination from '../Content/ilumination';
import OptionMenu from '../OptionMenu';
import SectionWizzard from './sectionWizzard';

const SectionWizard = () => {

    const [page, setPage] = useState(1);
    const [option, setOption] = useState(0);

    const onCheck = value => {
        setOption(value)
    }

    const onPreviousPage = () => {
        setPage(page - 1)
        setOption(0)
    }

    const onNextPage = () => {
        setPage(page + 1)
    }

    const onFinish = () => {
        console.log("asdasdasd")
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {page === 1 && <SectionWizzard content={<Form />} page={page} previousPage={onPreviousPage} nextPage={onNextPage} finishPage={onFinish}/>}
            {page === 2 && <SectionWizzard content={<OptionMenu check={onCheck}/>} page={page} previousPage={onPreviousPage} nextPage={onNextPage} finishPage={onFinish}/>}

            {page === 3 && option === 1 && <SectionWizzard content={<Ilumination />}  page={page} previousPage={onPreviousPage} nextPage={onNextPage} finishPage={onFinish}/>}
            {page === 3 && option === 2 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 3 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 4 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 5 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 6 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 7 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 8 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
            {page === 3 && option === 9 && <SectionWizzard content="asdasdsd" page={page} previousPage={onPreviousPage} nextPage={onNextPage} />}
        </div>
    );
}

export default SectionWizard;
