import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.components';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
        <Footer/>
    </div>
    
  );
}

export default App;
