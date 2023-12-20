const redux = require("redux");
const membuatStore = require("redux").legacy_createStore;

const createStore = membuatStore;

const initalState = {
  value: 0,
  age: 17,
};

//2. membuat Reducer(agen)
//untuk mengupdate store atau state
const rootReducer = (state = initalState, action) => {
  console.log(action);
  // if (action.type === "ADD_AGE") {
  //   return {
  //     ...state,
  //     age: state.age + 1,
  //   };
  // }
  // if (action.type === "CHANGE_VALUE") {
  //   return {
  //     ...state,
  //     value: state.value + action.newvalue,
  //   };
  // }

  // menggunakan switch
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newvalue,
      };
    default:
      return state;
  }
};

//Membuat Store untuk menyimpan Value
//1. Store (wadah besar)
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
//proses pemanggilam store yang diinginkan
store.subscribe(() => {
  console.log("store change : ", store.getState());
});

//dispatching action(task list agen)
// proses pemanggilan reducer
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newvalue: 16 });
console.log(store.getState());
