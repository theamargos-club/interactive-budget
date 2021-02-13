import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../storage/reducers';
import { updateBudget } from '../../storage/actions';

const Ilumination = () => {

    const { dispatch } = useContext(AppContext);
    
    useEffect(() => {
        {dispatch(updateBudget({"presupuesto": "pruebaaa"}))}
    }, [])

    return (
        <div>
            <h1>Ilumination</h1>
        </div>
    );
}

export default Ilumination;
