import { actionTypes } from './actions';
import { createContext } from 'react';
export const AppContext = createContext({});

export const initialState = {
  name: undefined,
  lastname: undefined,
  email: undefined,
  phone: undefined,
  budget: undefined,
  page: 1,
  last_page: 2,
  options: [],
  jsonOptions: []
}

export const reducer = (state = {}, action) => {
  const { data, type } = action
  switch (type) {
    case actionTypes.UPDATE_NAME:
      return { ...state, name: data }

    case actionTypes.UPDATE_LAST_NAME:
      return { ...state, lastname: data }

    case actionTypes.UPDATE_EMAIL:
      return { ...state, email: data }

    case actionTypes.UPDATE_PHONE:
      return { ...state, phone: data }

    case actionTypes.UPDATE_BUDGET:
      return { ...state, budget: data }

    case actionTypes.UPDATE_PAGE:
      return { ...state, page: data }

    case actionTypes.UPDATE_LAST_PAGE:
      return { ...state, last_page: data }

    case actionTypes.UPDATE_OPTIONS:
      return { ...state, options: data }

    case actionTypes.SET_JSON_OPTIONS:
      return { ...state, jsonOptions: data }

    default:
      return state
  }
};
