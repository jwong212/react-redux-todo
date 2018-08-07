import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux" 
import { createStore } from "redux"
import todoApp from './state/reducers'
import App from './App';

const store = createStore(todoApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
