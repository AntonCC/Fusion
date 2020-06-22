import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Header from './components/header/header.component'
import Home from './pages/home/home.component'

const routes = [
  {path: '/', name: 'Home', component: Home}
]

function App() {
  return (
    <div className="App">
      <Header />
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component}/>
      ))}
    </div>
  );
}

export default App;
