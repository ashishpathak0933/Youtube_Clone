import { Box, Stack } from '@mui/material'
import React from 'react'
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos }) => {
  // Check if videos is null or undefined before calling map
  if (!videos) {
    return null; // Return null or a loading indicator if videos is not available yet
  }

  return (
    <Stack 
    direction="row"
    flexWrap="wrap" 
    justifyContent="start" 
    alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
