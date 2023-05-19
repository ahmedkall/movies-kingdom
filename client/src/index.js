import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import ToggleDarkMode from './utils/ToggleDarkMode';
import store from './app/store'


ReactDOM.render(
    <Provider store={store}>
      <ToggleDarkMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </ToggleDarkMode>
    </Provider>,
    document.getElementById('root')
  );
  
