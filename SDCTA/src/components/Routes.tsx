import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/tempHome';
import Page1 from '../pages/tempPage1';
import DataMuseum from '../pages/DataMuseum';
import Education from '../pages/Education';
import Homelessness from '../pages/Homelessness';
import Municipal from '../pages/Municipal';


export const Routes = () => {
   return (
    <Router>
        <Navbar />
        <ReactRoutes>
            <Route path="/" element={<DataMuseum />}/>
            <Route path="/Education" element={<Education />}/>
            <Route path="/Homelessness" element={<Homelessness />}/>
            <Route path="/Municipal" element={<Municipal />}/>

        </ReactRoutes>
    </Router>      
   );       
}