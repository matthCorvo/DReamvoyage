import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './pages';
import Register from './pages/Register';
function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Register" component={Register} exact />
        </Switch>
    </Router>
    </>
  );
}

export default App;
