
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route  }from "react-router-dom"
import NotFound from './pages/NotFound';
import About from './pages/About';
 
function App() {
   return(
<BrowserRouter> 
<Switch> 
   <Route  path="/"  exact component={Home}/> 
   <Route  path="/about"  exact component={About}/> 
   <Route   exact component={NotFound}/>
</Switch>
</BrowserRouter>
   );
};

export default App;