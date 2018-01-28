import React from 'react';
import ReactDOM from 'react-dom';
import './css/Flex.css';
import './css/Index.css';
import 'semantic-ui-css/semantic.min.css';
import Index from './components/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
