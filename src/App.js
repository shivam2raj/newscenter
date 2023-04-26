import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Promheader from './Components/Promheader';
import Footer from './Components/Footer';

function App() {
  return (
   
   <div>
    <Promheader />
    <Router>
  <NavBar />

 
  <Routes>
  <Route exact path="/" element = {<News key="general" pageSize={12} country="in"/>} />
  <Route exact path="/ch" element = {<News key="sports" pageSize={12} country="ch"/> } />
  <Route exact path="/jp" element = {<News key="health" pageSize={12} country="jp"/> } />
  <Route exact path="/sk" element= { <News key="business" pageSize={12} country="sk"/> } />
  <Route exact path="/in" element= {<News key="technology" pageSize={12} country="in"/> } />
  <Route exact path="/fr" element= { <News key="science" pageSize={12} country="fr"/> } />
  <Route exact path="/de" element= { <News key="general" pageSize={12} country="de"/> } />
  <Route exact path="/it" element= { <News key="entertainment" pageSize={12} country="it"/> } />


  <Route exact path="/" element = {<News key="general" pageSize={12} category="general"/>} />
  <Route exact path="/sports" element = {<News key="sports" pageSize={12} category="sports"/> } />
  <Route exact path="/health" element = {<News key="health" pageSize={12} category="health"/> } />
  <Route exact path="/business" element= { <News key="business" pageSize={12} category="business"/> } />
  <Route exact path="/technology" element= {<News key="technology" pageSize={12} category="technology"/> } />
  <Route exact path="/science" element= { <News key="science" pageSize={12} category="science"/> } />
  <Route exact path="/general" element= { <News key="general" pageSize={12} category="general"/> } />
  <Route exact path="/entertainment" element= { <News key="entertainment" pageSize={12} category="entertainment"/> } />

  </Routes>
  
  </Router>
  <Footer />
  </div>

  
  );
}

export default App;
