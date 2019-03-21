import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props) {
  //   // Where to do one-time setup
  //   super(props); // Need this line to override parent constructor function
  //   // initialize the state object
  //   this.state = {
  //     lat: null, //null is the default for numbers
  //     errorMessage: ''
  //   };
  // }
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // Good place to do data loading
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        // Because geolocation is blocked
        this.setState({ lat: 37.774929 });
        // this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    // Good place to do more data loading, when state/props change
  }

  componentWillUnmount() {
    // Good place to do cleanup (especially non React stuff)
  }

  // If we have conditional logic in render(), put it in a helper method instead
  renderContent() {
    // Avoid doing anything besides returning JSX
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please Accept Location Request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
