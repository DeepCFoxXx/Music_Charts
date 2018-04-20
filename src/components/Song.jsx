import React, {Component} from 'react';

class Song extends Component {

  render(){
    const altTag = `${this.props.title} by ${this.props.artist}`;

    return (
      <div className="song">
        <img
          alt={"Play " + altTag}
          id={this.props.position}
          className='audio-control'
          src='https://www.mariowiki.com/images/thumb/f/f5/StarMK8.png/200px-StarMK8.png'
          onClick={() => {this.props.handlePlayPause(this.audio)}}
        />

      </div>
    );
  }
};


export default Song;
