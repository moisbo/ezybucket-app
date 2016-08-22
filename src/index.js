import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes';

require('./styles.css');

ReactDOM.render(
    Routes,
    document.getElementById('app')
);