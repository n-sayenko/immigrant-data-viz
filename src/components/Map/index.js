
import React, {Component, PropTypes} from 'react';
import * as d3 from "d3";
import popData from "../../../dataScrape/RealData_goodData.json";
import mapData from "../../../dataScrape/us.json";


class UsMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	ch: null,
      	error: null
    };
  }
  componentDidMount() {
    // Artificially delay the loading, so the loading state stays visible for a while.
    const props = this.props;
    setTimeout((props) => this.loadData(props), 2000);
  }

  loadData(props) {
    // d3.json(props.mapUrl, this.dataLoaded);
    this.setState({data: mapData});
  }

  // dataLoaded(err, data) {
  //   if (err) return this.setState({error: err}).bind(this);
  //   this.setState({data: data}).bind(this);
  // }
  render() {
  	const {mapUrl, width, height} = this.props;
    if (this.state.error) return React.DOM.div({className: 'message message--error'}, 'Whoops! ' + this.props.mapUrl + ' does not exist. Reload the page to try again.');
    
   	if (!this.state.data) return React.DOM.div({className: 'message'}, 'Loading ' + this.props.mapUrl);
   	const ch = this.state.data[0];
   	const usState = topojson.feature(ch, ch.objects.usStates).features;
   	console.log("US STATE", usState)

   

    var path = d3.geoPath()
      .projection(null);

    return React.DOM.svg({width: this.props.width, height: this.props.height},
      React.DOM.path({
        className: 'state', 
        d: path(usState)
      })
    );
  }
}

UsMap.PropTypes = {
	mapUrl: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

export default UsMap;
