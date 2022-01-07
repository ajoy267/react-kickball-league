import { NavLink, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Team from './views/Team/Team';
import Players from './views/Players/Players';
import Player from './views/Player/Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/teams" exact>
            Teams
          </NavLink>
          <NavLink to="/players" exact>
            Players
          </NavLink>
        </header>
        <Switch>
          <Route path="/teams" exact component={Teams} />
          <Route path="/teams/:id" exact component={Team} />
          <Route path="/players" exact component={Players} />
          <Route path="/players/:id" exact component={Player} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
