import React, { Component } from 'react'
import { Route } from 'react-router';
import { Header, Footer, Layout } from './Components/Common';
import { Home } from './Components/Home';

export default class App extends Component {
  render() {    
    return (
      <div>
        <Header />
        <Layout>
          <Route exact path='/' component={Home} />
        </Layout>
        <Footer />
      </div>
    )
  }
}
