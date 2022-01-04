import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/teams" exact>
            Teams
          </NavLink>
          <NavLink to="/players" exact>
            Players
          </NavLink>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
