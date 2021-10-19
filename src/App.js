import { BrowserRouter, Route, Switch } from 'react-router-dom'
import landing  from './components/landing/landing';
import home from './components/home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path= '/' component={landing} />
    <Route exact path= '/home' component={home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
