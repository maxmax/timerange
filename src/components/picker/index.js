import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDaytime from '../daytime/ReactDaytime';
//import moment from 'moment';

class PickerWrapper extends Component {

  constructor() {
    super();
    this.state = {
      theme: {
        cell: {
          backgroundColor: [ '#f2f2f2', '#cccccc' ]
        },
        header: {
          color: [ '#000000', '#ffffff' ],
          backgroundColor: [ '#ffffff', '#cccccc' ]
        },
        border: {
          color: '#fff'
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(timeRange) {
    console.log('time: ', timeRange);
  }

  render() {

    const {items} = this.props;
    //const defData = GreetingRes(items[0]) || {};
    console.log("api:", items)

    const defaultValue = {
      'Mon': [4,5,6,7,8,9,10,11,12],
      'Tue': [],
      'Web': [],
      'Thu': [4,5,6,7,8,9,10,11,12,19,20,21],
      'Fri': [12,13,14,15],
      'Sat': [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
      'Sun': []};

    console.log("defaultValue:", defaultValue);

    return (
      <div>
        <ReactDaytime
          defaultValue={defaultValue}
          onChange={this.handleChange}
          theme={this.state.theme} />
      </div>
    );
  }
}

const GreetingRes = (el) => {
  //test
  //const bt = moment.unix(240*60).utc().format("H");
  //const et = moment.unix(779*60).utc().format("H");
  return el
}

const mapStateToProps = (state, ownProps) =>{
  return {
    items: state.days.get('items')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(PickerWrapper);
