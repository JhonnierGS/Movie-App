import React from 'react';
import {render} from 'react-dom';
import data from './api.json';
import Home from './pages/containers/home';
// import reportWebVitals from './reportWebVitals';

render(<Home data={data} />,document.getElementById('root'));

// reportWebVitals();
