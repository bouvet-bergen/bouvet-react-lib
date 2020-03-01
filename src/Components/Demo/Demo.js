import React, { Component } from 'react'
import PropTypes from 'prop-types';

/**
 * Dette er beskrivelsen av en demo komponent.
 */
class Demo extends Component {   

  render() {
    return (
      <div>
        Dette er demo. Legger til litt mer tekst. {this.props.text}
      </div>
    )
  }
}

Demo.propTypes = {
  /**
   * Description of prop "foo".
   */
  foo: PropTypes.number.isRequired,
  /**
   * Dette er teksten
   */
  text: PropTypes.string.isRequired
};

Demo.defaultProps = {
  foo: 21
};

export default Demo;
