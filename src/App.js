import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import DarkModeToggle from './Components/DarkModeToggle';
import { DarkModeProvider } from './Components/DarkModeContext';

import NavBar from "./Components/NavigationBar"
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/about" element={<About/>}/>  
        <Route exact path = "/catalog" element={<Catalog/>}/>  
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
    </div>
  );
  
}

export default App;
