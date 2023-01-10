import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider }  from 'react-redux';
import { App } from 'components/app/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>  
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider> 
  // {/* </React.StrictMode> */}
);
