import React from 'react';

import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const Trailer = () => {

  let params = useParams();
  let key = params.ytTrailerId;

  return (
    <div className="h-[90vh]">
      {
        (key != null) ? <ReactPlayer playing={true} url={`https://www.youtube.com/watch?v=${key}`}
          width='100%' height='100%' /> : null
      }
    </div>
  )
}

export default Trailer