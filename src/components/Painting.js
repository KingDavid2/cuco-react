import React from 'react';
const Painting = ({painting}) =>

      <div>
        <img alt={painting.title} src={painting.url} target="_blank" />
      </div>


export default Painting;
