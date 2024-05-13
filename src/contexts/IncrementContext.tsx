import { createContext, ReactNode, useReducer } from 'react';

interface IncrementState {
  value: number;
}

interface AddAction {
  type: 'ADD';
  payload: number;
}

interface ResetAction {
  type: 'RESET';
}

type IncrementAction = AddAction | ResetAction;

interface IncrementContextProps extends IncrementState {
  dispatch: React.Dispatch<IncrementAction>;
}

function incrementReducer(state: IncrementState, action: IncrementAction) {
  switch (action.type) {
  case 'ADD':
    return {...state, value: state.value + action.payload};
  case 'RESET':
    return {...state, value: 0};
  default:
    return state;
  }
}

export const IncrementContext = createContext<IncrementContextProps>({} as IncrementContextProps);

export function IncrementContextProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(incrementReducer, {value: 0});

  return (
    <IncrementContext.Provider value={{...state, dispatch}}>
      {children}
    </IncrementContext.Provider>
  );
}