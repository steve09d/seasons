import React from 'react';

import SeasonDisplay from './components/season/SeasonDisplay';
import Spinner from './components/util/Spinner';

class App extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = { lat: null, errorMsg: '' };
  } */

  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    this.getLat();
    console.log('Component rendered');
  }

  componentDidUpdate() {
    console.log('Component updated - rerendered');
  }

  getLat = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  };

  render() {
    return (
      <div>
        {this.state.lat !== null && <SeasonDisplay lat={this.state.lat} />}

        {this.state.errorMsg && (
          <p>
            <br />
            ErrorMsg: {this.state.errorMsg}
          </p>
        )}

        {this.state.lat === null && this.state.errorMsg === '' && (
          <Spinner text='Please accept location request' />
        )}
      </div>
    );
  }
}

export default App;
