import React, {PropTypes, Component} from 'react';
import styles from './styles.scss';

class State extends Component {
  render() {
    const {
      ImmigrantPopulation,
      TotalPopulation,
      ShareOfPopulation,
      Taxes,
      SpendingPower
    } = this.props;

    return (
      <div>
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
