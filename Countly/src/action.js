import Dispatcher from './Dispatcher';

export const increment = () => {
  const action = {
    type: 'INCREMENT'
  };
  return action;
};

export const descrement = () => {
  const action = {
    type: 'DECREMENT'
  };
  return action;
};

export const zero = () => {
  const action = {
    type: 'ZERO'
  };
  return action;
};
