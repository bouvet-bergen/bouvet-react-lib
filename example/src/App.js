import React, { Component } from 'react'
import { Demo, Test } from 'bouvet-react-lib'
import Data from './data/components.json'

export default class App extends Component {
  render () {
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
