import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import './index.css';

import App from './pages/login/App';
import Adm from './pages/adm/adm';
import Medico from './pages/medico/medico';
import Paciente from './pages/paciente/paciente';
import NotFound from './pages/notFound/notfound';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} /> {/* Login */}
        <Route path="/Adm" component={Adm} />
        <Route path="/Medico" component={Medico} />
        <Route path="/Paciente" component={Paciente} />
        <Route exact path="/NotFound" component={NotFound} />
        <Redirect to = "/NotFound" />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
