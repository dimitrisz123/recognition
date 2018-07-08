import React, { Component } from 'react';
import Form from './components/Form/Form'
import Image from './components/Image/Image'
// import Results from './components/Results/Results'


class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <Image />
        {/*<Results />*/}
      </div>
    );
  }
}

export default App;
