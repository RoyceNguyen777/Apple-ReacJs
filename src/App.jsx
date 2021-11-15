import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import Notfound from './components/pages/auth/notfound';
import Register from './components/pages/auth/register';
import Homepage from './components/pages/homepage';
import Memberlist from './components/pages/memberlist';
import Productdetail from './components/pages/productdetail';
import Shopcart from './components/pages/shopcart';
import Storepage from './components/pages/storepage';


class App extends Component {

  render() {
    return (
      <div className='App-Class'>
        <Switch>

          <Route path='/register' component={Register} exact />
          <Route path='/' >

            <HeaderComponent />

            <Switch>
              <Route path='/' component={Homepage} exact />
              <Route path='/category/:id' component={Homepage} exact />
              <Route path='/product/:id' component={Productdetail} exact />
              <Route path='/employee' component={Memberlist} exact />
              <Route path='/store' component={Storepage}/>
              <Route path='/cart' component={Shopcart}/> 
 
              <Route component={Notfound} />
            </Switch>
         
            <FooterComponent />
          </Route>

        </Switch>
      </div>
    )
  }
}
export default App;


