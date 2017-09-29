import React, { Component } from 'react';
import uuid from 'uuid4';

import DayTimeCanvas from './canvas';
import { WIDTH, HEIGHT } from './constants';

class ReactDaytime extends Component {

  constructor(props) {
    super(props);
    this.canvasId = 'react-daytime-' + uuid();
  }

  componentWillMount() {
    this.canvas = new DayTimeCanvas(this.props.onChange, this.props.defaultValue, this.props.theme);
  }

  componentDidMount() {
    this.canvas.render(this.canvasId);
  }

	render () {
		return <canvas id={this.canvasId} width={WIDTH} height={HEIGHT}></canvas>;
	}

}

//ReactDaytime.propTypes = {
//    defaultValue: React.PropTypes.object,
//    onChange: React.PropTypes.func,
//    theme: React.PropTypes.object
//};

export default ReactDaytime;
