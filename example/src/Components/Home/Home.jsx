import React, { Component } from 'react'
import { Demo, Test } from 'bouvet-react-lib'
import Data from './../../Data/components.json'

class Home extends Component {   

  render() {
    var testDoc = Data.filter(x => x.displayName === 'Demo');
    console.log(testDoc[0]);
    return (
      <div>
        <Demo text={testDoc[0].description} />
        <Test />
      </div>
    )
  }
}

export default Home;
