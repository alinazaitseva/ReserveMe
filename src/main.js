console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './main.css'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
