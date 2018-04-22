import React, {Component} from 'react';

class Song extends Component {

  render(){
    const altTag = `${this.props.title} by ${this.props.artist}`;

    return (
      <div id="main">
        <img
          alt={"Play " + altTag}
          id={this.props.position}
          className='audio-control'
          src='https://i.pinimg.com/originals/75/7c/dd/757cdd2b437b993d4462d1a2f7ac20ba.png'
          onClick={() => {this.props.handlePlayPause(this.audio)}}
        />

        <img
          src={this.props.image}
          alt={altTag} />

        <div>
          <h3>{this.props.position}. {this.props.title}</h3>
          <h4>{this.props.artist}</h4>
        </div>

        <audio
          ref={(audio) => this.audio = audio}
          id={'audio' + this.props.position}
          src={this.props.audio} />
      </div>
    );
  }
};

export default Song;
