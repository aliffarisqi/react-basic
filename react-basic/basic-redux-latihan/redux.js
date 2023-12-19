const redux = require("redux");
const createStore = redux.createStore;

const initalState = {
  value: 0,
  age: 17,
};

//membuat Reducer(agen)
//untuk mengupdate store atau state
const rootReducer = (state = initalState, action) => {
  return state;
};

//Membuat Store untuk menyimpan Value
//Store
const store = createStore(rootReducer);
console.log(store.getState());

//dispatching action(task list agen)
// proses pemanggilan reducer

//subscription
//proses pemanggilam store yang diinginkan
