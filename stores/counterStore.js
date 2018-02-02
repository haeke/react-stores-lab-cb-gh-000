import Store from './Store';

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor() {
    //initial state of 0
    super(0);
  }

  increment() {
    let counter = this.getState();
    this.setState(++counter);
  }

  decrement() {
    let counter = this.getState();
    this.setState(--counter);
  }
}

const counterStore = new CounterStore();

export default counterStore;
