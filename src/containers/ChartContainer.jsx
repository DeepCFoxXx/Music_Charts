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

  componentDidMount() {
    this.loadSongs(this.props.genres[0].url)
  }

  loadSongs(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const songsList = JSON.parse(jsonString);
        this.setState({songs: songsList.feed.entry});
      }
    };
    request.send();
  }

  handlePlayPause(audio) {
    audio.paused ? audio.play() : audio.pause();
    audio.classList.toggle('playing');
  }

  handleSelectChange(event) {
    this.loadSongs(event.target.value);
  }

}

export default ChartContainer;
