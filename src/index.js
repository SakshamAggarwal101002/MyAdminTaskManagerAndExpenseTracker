import React from 'react';
import ReactDOM  from 'react-dom';
import './Index.css';
import App from './App.js';
import {ContextProvider}  from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
<App/>
</ContextProvider>
,document.getElementById('root'));



