import * as React from 'react';
import { styled } from '@mui/material/styles';


interface YouTubeVideoProps {
  url:string;
  width?:number;
  height?:number;
}

export default function YouTubeVideo({url, width=560, height=315}:YouTubeVideoProps) {
  const Iframe = styled('iframe')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      width:560,
      height:315,
    },
    [theme.breakpoints.up('md')]: {
      width:700,
      height:394,
    },
    [theme.breakpoints.up('lg')]: {
      width,
      height,
    },
  }));
  return (
      <Iframe
        src={`${url}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        >
        </Iframe>
  )
}
