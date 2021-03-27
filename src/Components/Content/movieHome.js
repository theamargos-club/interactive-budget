import * as Constants from '../../utils/constants';
import * as Json from '../../utils/jsonMaps'

import React, { useContext } from 'react';

import { AppContext } from '../../storage/reducers';
import InputCustom from './inputCustom';
import _ from 'lodash';
import { updateBudget } from '../../storage/actions';

const MovieHome = () => {

    const { dispatch } = useContext(AppContext);

    const showInputImg = () => {
        return { id: 1, title: "Seleccione el tipo de sala multimedia o cine en casa que desee:", isHidden: false}
    }

    const onClick = e => {
        dispatch(updateBudget(e.target.id))
    }

    return (
        <div className="inputs-container">
            <div className="title-center"><h3>{Constants.titleMovieHome}</h3></div>
            <InputCustom key="1" item={showInputImg()} jsonImg={Json.jsonImgMovieHome} fnEvent={onClick} type="img" checkBoxImg={true}/>
        </div>
    );
}

export default MovieHome;
