/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VideoSize } from './YoutubePlayer'

export const videoPlayer = (size: VideoSize) => css`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:6px;

  iframe {
    width: 100%;
    height: 100%;
  }
`
