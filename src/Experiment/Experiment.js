import React from 'react';
import ExperimentContext from './ExperimentContext'

const Experiment = (props) => (
  <ExperimentContext.Consumer>
    {({ choose }) => {
      const { id, variations, children } = props
      const variation = choose(id, variations)
      return children(variation)
    }}
  </ExperimentContext.Consumer>
)

export default Experiment
