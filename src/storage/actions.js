export const actionTypes = {
  UPDATE_PAGE: "UPDATE_PAGE",
  UPDATE_LAST_PAGE: "UPDATE_LAST_PAGE",
  UPDATE_OPTIONS: "UPDATE_OPTIONS",
  SET_JSON_OPTIONS: "SET_JSON_OPTIONS",
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PHONE: "UPDATE_PHONE",
  UPDATE_BUDGET: "UPDATE_BUDGET",
}

export const updatePage = data => ({
  type: actionTypes.UPDATE_PAGE,
  data
})

export const updateLastPage = data => ({
  type: actionTypes.UPDATE_LAST_PAGE,
  data
})

export const updateOptions = data => ({
  type: actionTypes.UPDATE_OPTIONS,
  data
})

export const setJsonOptions = data => ({
  type: actionTypes.SET_JSON_OPTIONS,
  data
})

export const updateName = data => ({
  type: actionTypes.UPDATE_NAME,
  data
})

export const updateEmail = data => ({
  type: actionTypes.UPDATE_EMAIL,
  data
})

export const updatePhone = data => ({
  type: actionTypes.UPDATE_PHONE,
  data
})

export const updateBudget = data => ({
  type: actionTypes.UPDATE_BUDGET,
  data
})
