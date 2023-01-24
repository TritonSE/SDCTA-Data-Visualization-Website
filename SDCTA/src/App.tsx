import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Body} from './components/Body';
import {NavBar} from './components/NavBar.jsx';
import {Footer} from './components/Footer';

import './App.css';

const App = () => {
  return (
   <div className="App">
	<NavBar />
	<Body />
	<Footer />
	</div>
  );
}


export default App;
