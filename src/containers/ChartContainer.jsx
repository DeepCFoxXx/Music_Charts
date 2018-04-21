import React, {Component} from 'react';
import Chart from '../components/Chart.jsx';
import TitleBar from '../components/TitleBar.jsx';

class ChartContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }
}

export default ChartContainer;
