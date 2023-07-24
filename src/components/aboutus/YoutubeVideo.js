// YoutubeVideo.js

import React from 'react';
import { YoutubeVideoContainer, YoutubeVideoFrame } from './YoutubeVideoStyles';

const YoutubeVideo = ({ videoId }) => {
  const youtubeEmbedURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <YoutubeVideoContainer>
      <YoutubeVideoFrame
        src={youtubeEmbedURL}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </YoutubeVideoContainer>
  );
};

export default YoutubeVideo;
