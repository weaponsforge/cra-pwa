import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PublicRoute from './components/PublicRoute'
import Navigation from './components/Navigation'
import logo from './logo.svg'
import './App.css'

import routes from './routes'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />

        <Router>
          <Navigation />

          <Routes>
            {routes.map(({ path, isProtected, component: Component }, index) => {
              const FinalRoute = <PublicRoute idx={index} Component={Component} path={path} {...props} />
              return <Route key={index} path={path} element={FinalRoute} />
            }
            )}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
