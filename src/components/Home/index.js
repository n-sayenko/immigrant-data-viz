
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
    const sampleData ={};

    d3.json("https://d3js.org/us-10m.v1.json", (error, us) => {
      if (error) throw error;
      svg.append("g")
        .attr("class", "states")
          .selectAll("path")
          .data(topojson.feature(us, us.objects.states).features)
          .enter().append("path")
            .attr("class", `${styles.states}`)
            .attr("d", path)
            .attr('fill', function(d) { 
              const low = Math.round(100*Math.random());
              const mid = Math.round(100*Math.random());
              const high=Math.round(100*Math.random());

              sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
                avg:Math.round((low+mid+high)/3), color:d3.interpolate("#7D69EF", "#1A1633")(low/100)}; 
                return sampleData[d].color;
            });
           // .on("click", this.clicked);

      svg.append("path")
          .attr("class", `${styles.stateBorders}`)
          .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => { return a !== b; })));
    });
  }

  // clicked(d) {
  //   let x, y, k, centered;
  //   console.log(d)

  //   if (d && centered !== d) {
  //     const centroid = path.centroid(d);
  //     x = centroid[0];
  //     y = centroid[1];
  //     k = 4;
  //     centered = d;
  //   } else {
  //     x = width / 2;
  //     y = height / 2;
  //     k = 1;
  //     centered = null;
  //   }

  //   g.selectAll("path")
  //       .classed("active", centered && function(d) { return d === centered; });

  //   g.transition()
  //       .duration(750)
  //       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
  //       .style("stroke-width", 1.5 / k + "px");
  // }

    render() {
      return (
        <section className={styles.svgHolder}>
          <svg className={styles.svg}></svg>
        </section>
      )
    };
}

export default Home;
