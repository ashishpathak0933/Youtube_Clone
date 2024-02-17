import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelResponse = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(channelResponse?.items[0]);
  
        const videosResponse = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
        setVideos(videosResponse?.items);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., display an error message)
      }
    };
  
    fetchData();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
       <Box sx={{mr : {sm : "100px"}}} />
        <Videos videos={videos}/>
       </Box>
      
    </Box>
  )
}

export default ChannelDetail
