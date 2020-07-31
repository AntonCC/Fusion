import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Sidebar from './components/sidebar/sidebar.component'
import Backdrop from './components/backdrop/backdrop.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Home from './pages/home/home.component'
import About from './pages/about/about.component'
import Contact from './pages/contact/contact.component'
import Buy from './pages/buy/buy.component'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: "About", component: About},
  {path: '/contact', name: "Contact", component: Contact},
  {path: '/buy', name: "Buy Now", component: Buy}
]

const App = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  let openBackdrop;
  if(sidebar) {
    openBackdrop = <Backdrop handleSidebar={handleSidebar}/>
  }

  return (
    <div className="App">
      <Sidebar open={sidebar} handleSidebar={handleSidebar}/>
      {openBackdrop}
      <div className={`App-inner ${sidebar ? 'blur' : ''}`}>
        <Header handleSidebar={handleSidebar}/>
        {routes.map(({ path, component }) => (
          <Route exact path={path} component={component}/>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
