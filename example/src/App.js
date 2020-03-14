import React, { Component } from 'react'
import { Route, withRouter, Switch } from "react-router-dom";
import { Header, Footer, Layout } from './Components/Common';
import { Home } from './Components/Home';
import { Module } from './Components/Module';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <div className='main-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/module/:id' component={Module} />
            </Switch>
            <div className='bottom-div'></div>
          </div>
        </Layout>
        <Footer />
      </div >
    )
  }
}

export default withRouter(App);
