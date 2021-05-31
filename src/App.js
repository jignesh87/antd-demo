import './css/custom.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Layout';


function App() {
  let token = false;
 
  return (
    <div className="App">
      <Router>
        {
          token
          ? 
            <Home />
          :
            <Login /> 
        }
      </Router> 
    </div>
  );
}

export default App;
