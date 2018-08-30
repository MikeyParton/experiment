import React from 'react'
import ExperimentContext from './ExperimentContext'
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const randomWeightedElement = (choices, weights, input) => {
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i]
    if (input < sum || i === weights.count - 1) {
      return choices[i]
    }
  }
}

class ExperimentProvider extends React.Component {
  getCookie = (key) => {
    if (this.props.cookies) return this.props.cookies[key]
    return cookie.get(key)
  }

  setCookie = (key, value) => {
    cookie.set(key, value)
  }

  choose = (id, variations) => {
    const key = `--experiment--${id}`
    let input = this.getCookie(key)
    if (!input) {
      input = Math.random()
      this.setCookie(key, input)
    }

    const weights = variations.map(variation => variation.weight)
    return randomWeightedElement(variations, weights, input)
  }

  render() {
    return (
      <ExperimentContext.Provider value={{ choose: this.choose }}>
        {this.props.children}
      </ExperimentContext.Provider>
    )
  }
}

export default ExperimentProvider
