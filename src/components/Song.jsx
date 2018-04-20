import React, {Component} from 'react';

class Song extends Component {

  render(){
    const altTag = `${this.props.title} by ${this.props.artist}`;

    return (
      <div>
        <img
          alt={"Play " + altTag}
          id={this.props.position}
          className='audio-control'
          src='https://www.mariowiki.com/images/thumb/f/f5/StarMK8.png/200px-StarMK8.png'
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
