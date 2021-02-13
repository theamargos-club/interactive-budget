import React, { useReducer } from 'react';

import Wizzard from './components/Wizzard';

const { initialState, reducer, AppContext } = require('./storage/reducers');

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      <Wizzard />
    </AppContext.Provider>
  );
}

export default App;
