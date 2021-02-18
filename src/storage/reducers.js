import { actionTypes } from './actions';
import { createContext } from 'react';
export const AppContext = createContext({});

export const initialState = {
    name: undefined,
    email: undefined,
    phone: undefined,
    budget: undefined,
    page: 1,
    option: 1
}

export const reducer = (state = {}, action) => {
    let response
    switch (action.type) {

        case actionTypes.UPDATE_NAME:
            response = Object.assign({}, state, {
                name: action.data,
            });
            return response;

        case actionTypes.UPDATE_EMAIL:
            response = Object.assign({}, state, {
                email: action.data,
            });
            return response;

        case actionTypes.UPDATE_PHONE:
            response = Object.assign({}, state, {
                phone: action.data,
            });
            return response;

        case actionTypes.UPDATE_BUDGET:
            response = Object.assign({}, state, {
                budget: action.data,
            });
            return response;

        case actionTypes.UPDATE_PAGE:
            response = Object.assign({}, state, {
                page: action.data,
            });
            return response;

        case actionTypes.UPDATE_OPTION:
            response = Object.assign({}, state, {
                option: action.data,
            });
            return response




    }
};