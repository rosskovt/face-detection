import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'tachyons';

const root = createRoot(document.getElementById('root'));

root.render(<App />)

// If using React version lower than 18:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
