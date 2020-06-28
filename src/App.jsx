import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Home from './pages/home/home.component'
import About from './pages/about/about.component'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: "About", component: About}
]

function App() {
  return (
    <div className="App">
      <Header />
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
