
import React, {Component} from 'react';
import * as d3 from "d3";
import styles from './styles.scss';
//import topojson from "topojson";


class Home extends Component {
  componentDidMount() {
    this.svg();
  }

  svg() {
    const svg = d3.select('svg');
    const path = d3.geoPath();

    d3.json("https://d3js.org/us-10m.v1.json", (error, us) => {
      if (error) throw error;
      console.log(svg)
      svg.append("g")
        .attr("class", "states")
          .selectAll("path")
          .data(topojson.feature(us, us.objects.states).features)
          .enter().append("path")
            .attr("d", path);

      svg.append("path")
          .attr("class", "state-borders")
          .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => { return a !== b; })));
    });
  }

    render() {
      return (
        <section className="svg-holder">
          <svg></svg>
        </section>
      )
    };
}

export default Home;
