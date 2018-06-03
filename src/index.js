import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('./css/bootstrap.min.css');
require('./css/bootstrap-reset.css');
require('./assets/font-awesome/css/font-awesome.css');
require('./assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css');
require('./css/owl.carousel.css');
require('./css/slidebars.css');
require('./css/style.css');
require('./css/style-responsive.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
