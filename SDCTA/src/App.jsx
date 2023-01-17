import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
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
