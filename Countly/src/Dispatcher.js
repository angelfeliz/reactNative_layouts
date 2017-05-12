class Dispatcher {  
  constructor() {
     this.isDispatching = false;
     this.actionHandlers = [];
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error('Cannot dispatch in the middle of a dispatch');
    }
    this.isDispatching = true;
    this.actionHandlers.forEach(handler => handler(action));
    this.isDispatching = false;
  }

  register(actionHandler) {
     this.actinoHandlers.push(actionHandler);
  }
}

export default new Dispatcher();
