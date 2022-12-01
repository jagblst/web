import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state * action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState()
};

store.subscribe(update);

const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const rnd = (value) => ({type: "RND", payload: value});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value))
});

// let state = reducer(initialState, {type: 'INC'});
//  state = reducer(state, {type: 'INC'});
//  state = reducer(state, {type: 'INC'});
//  state = reducer(state, {type: 'INC'});
// console.log(state)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>
);
