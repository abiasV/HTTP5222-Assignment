import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'antd/dist/reset.css';

import { legacy_createStore as createStore } from 'redux';
import { Provider} from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducers';

import { BrowserRouter } from "react-router-dom"

const store = createStore(rootReducer,composeWithDevTools());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
