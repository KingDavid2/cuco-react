import React from 'react';
const Painting = ({painting}) =>

      <div key={painting.id}>
        <img alt={painting.title} src={painting.url} target="_blank" />
      </div>


export default Painting;
