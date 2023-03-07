import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Municipal } from './pages/Municipal';
import { Education } from './pages/Education';

declare global {
	interface Window{
		tableau: any;
	}
}
const App = () =>{
	return (
		<Education />
	)
}

export default App;

    