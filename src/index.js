import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './components/Redux/store/store';
import './index.css';
import reportWebVitals from './reportWebVitals';


// console.log(store.getState());

// store.dispatch({ type: 'Add_Ward' })
// console.log(store.getState());

// store.dispatch({ type: 'Add_District' })
// console.log(store.getState());

// store.dispatch({
//   type: 'Default', payload: {
//     newaddress: '22/27/30 '
//   }
// })
// console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
