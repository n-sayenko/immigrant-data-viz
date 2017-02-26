
import React, {Component} from 'react';
import * as d3 from "d3";
import styles from './styles.scss';
import popData from "../../../dataScrape/RealData_goodData.json";
import mapData from "../../../dataScrape/us.json";
import UsMap from "../Map";


class Home extends Component {
  render() {
    return (
      <section className={styles.svgHolder}>
      <UsMap
        width={960}
        height={500}
        mapUrl={"../../../dataScrape/us.json"}
      />
      </section>
    )
  };
}

export default Home;
