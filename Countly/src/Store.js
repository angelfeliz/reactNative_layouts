import { createStore } from 'redux';

const initialState = {
  count: 0
};

class Store extends EventEmitter {

    getTally() {
      return  Object.assign({},tally);
    }

    addChangeListener(callback) {
      this.addListener('CHANGE', callback);
    }

    removeChangeListener(callback) {
      this.removeListener('CHANGE', callback);
    }

    emitChange() {
      this.emit('CHANGE');
    }
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count : state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'ZERO':
      return {
        count : 0
      }
    default:
      return state;
  }
};

export default createStore(countReducer);
