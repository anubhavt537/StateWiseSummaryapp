import React from 'react';
import TreeMap from '../src/component/TreeMap';
import './App.css'
import data from './myData.json'; 
import Navbar from './component/Navbar';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import DetailPage from './component/DetailPage';
function App() {
  return (
    
<div className="App">
  
<Router>
  <Navbar></Navbar>
        <h1>State summary</h1>
      <TreeMap data={data} />
      
        <Routes>
        
          <Route path="/details" element={<DetailPage/>} />
        </Routes>
      
      
    
     
      
    </Router>
    </div>
   
    
  );
}

export default App;
