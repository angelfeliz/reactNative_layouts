import Dispatcher from './Dispatcher';

export const increment = () => {
  const action = {
    type: 'INCREMENT'
  };
  Dispatcher.dispatch(action);
};

export const descrement = () => {
  const action = {
    type: 'DECREMENT'
  };
  Dispatcher.dispatch(action);
};

export const zero = () => {
  const action = {
    type: 'ZERO'    
  };
  Dispatcher.dispatch(action);
};
