  import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootsrap/dist/js/bootrap.bundle';
import '../node_modules/bootstrap/dist/js/bootrap.bundle.min.js'

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route exact path="/" element={<Home/>}>
            
          </Route>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
