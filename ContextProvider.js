import React, { createContext, useState } from 'react';

// Step 1: Create a context
const Context = createContext();

// Step 2: Create a provider component
const ContextProvider = ({ children }) => {
  // Step 3: Define the state and any functions you want to share
  const [myState, setMyState] = useState('Initial State');

  const updateState = (newState) => {
    setMyState(newState);
  };

  // Step 4: Provide the state and functions to the context
  const contextValue = {
    state: myState,
    updateState: updateState,
  };

  // Step 5: Return the provider with the provided values
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
