import React, {PropTypes, Component} from 'react';
import styles from './styles.scss';
import goodData from '../../../dataScrape/RealData_goodData.json';

class State extends Component {
  render() {
    const {
      ImmigrantPopulation,
      TotalPopulation,
      ShareOfPopulation,
      Taxes,
      SpendingPower
    } = this.props;

    const states = goodData.map((object, i) => {
      const state = Object.keys(object);
      console.log(object);
      return (
        <div>
          <ul key={i}>
            <li><b>{state[0]}</b></li>
            <li> state total population: {object[state].TotalPopulation} </li>
            <li> population: {object[state].Population} </li>
            <li> ShareOfPop: {object[state].ShareOfPop} </li>
            <li> SpendingPower: {object[state].SpendingPower} </li>
            <li> Taxes: {object[state].Taxes} </li>
          </ul>
          <br />
        </div>
      )
    })

    return (
      <div>
        {states}
        hihihi
        {ImmigrantPopulation}
        {TotalPopulation}
        {ShareOfPopulation}
        {Taxes}
        {SpendingPower}
      </div>
    );
  }
}

State.PropTypes = {
    ImmigrantPopulation: PropTypes.string,
    TotalPopulation: PropTypes.string,
    ShareOfPopulation: PropTypes.string,
    Taxes: PropTypes.string,
    SpendingPower : PropTypes.string
}

export default State;
