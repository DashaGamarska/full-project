'use client';
import { useState } from 'react';

type State = {
  isLoading: boolean;
  hasError: boolean;
  data?: any[];
};

// Custom hook for managing status state
export const useStatusState = (initialState: State) => {
  const [state, setState] = useState<State>(initialState);

  // Define a function to handle updating specific properties of the state
  const handleStatus = (
    propertyName: keyof State,
    propertyValue: State[keyof State]
  ) => {
    setState(prevState => ({ ...prevState, [propertyName]: propertyValue }));
  };

  return { state, handleStatus };
};
