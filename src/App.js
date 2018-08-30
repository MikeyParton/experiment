import React, { Component } from 'react';
import { Experiment, ExperimentProvider } from './Experiment';

class App extends Component {
  render() {
    return (
      <ExperimentProvider>
        <Experiment
          id='OF-xxxx'
          variations={[
            { id: 'a', weight: 0.5, meta: {} },
            { id: 'b', weight: 0.5, meta: {} }
          ]}>
          {({ id, meta }) => (
            <div>
              {id === 'a' && <div>test a</div>}
              {id === 'b' && <div>test b</div>}
            </div>
          )}
        </Experiment>
      </ExperimentProvider>
    );
  }
};

export default App;
