import React from 'react';
import ReactDOM from 'react-dom';
// import AppFunctional from './AppFunctional';
import App from './App';
import './styles.css';

// 这里采用了两种不同的实现方式
// ReactDOM.render(<AppFunctional />, document.getElementById('root'));
// 用useEffect的方式更加简单
ReactDOM.render(<App />, document.getElementById('root'));
