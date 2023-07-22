import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import React from 'react';

const Trailer = () => {

  let params = useParams();
  let key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {(key != null) ? <ReactPlayer playing={true} url={`https://www.youtube.com/watch?v=${key}`}
        width='100%' height='100%' /> : null}
    </div>
  )
}

export default Trailer