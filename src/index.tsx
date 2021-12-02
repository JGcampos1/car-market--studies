import React from 'react';
import ReactDOM from 'react-dom';
import Router from './main/router/router';
import GlobalStyle  from './presentation/styles/globalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <GlobalStyle/>
    <Router />
  </>
  ,
 
  document.getElementById('root')
);


reportWebVitals();
