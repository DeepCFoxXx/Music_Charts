import React from 'react';

const TitleBar = (props) => {
  return (
    <div>
      <h1>Top 20 Apple Music Charts</h1>
      <select onChange={props.handleSelectChange}>
        {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}
      </select>
    </div>
  );
};

export default TitleBar;
