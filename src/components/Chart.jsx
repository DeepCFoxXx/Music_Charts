import React from 'react';
import Song from './Song.jsx';

const Chart = (props) => {
  if (props.songs == null || props.songs.length === 0) {
    return <p>Loading...</p>;
  }
}

export default Chart;
