// YoutubeVideoStyles.js

import styled from 'styled-components';

export const YoutubeVideoContainer = styled.div`
  width: 50%;
  height: 350px;
  margin-bottom: 40px;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const YoutubeVideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
