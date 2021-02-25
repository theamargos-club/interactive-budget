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
  const { data, type } = action
  switch (type) {
    case actionTypes.UPDATE_NAME:
      return {...state, name: data}

    case actionTypes.UPDATE_EMAIL:
      return {...state, email: data}

    case actionTypes.UPDATE_PHONE:
      return {...state, phone: data}

    case actionTypes.UPDATE_BUDGET:
      return {...state, budget: data}

    case actionTypes.UPDATE_PAGE:
      return {...state, page: data}

    case actionTypes.UPDATE_OPTION:
      return {...state, option: data}
    default: 
      return state
  }
};
