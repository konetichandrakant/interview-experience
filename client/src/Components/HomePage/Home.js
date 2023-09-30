import React, { useEffect, useState } from 'react'
import LikedArticles from './LikedArticles'
import ReadLaterArticles from './ReadLaterArticles'
import YourArticles from './YourArticles'
import { Box, createTheme } from '@mui/material';

function Home() {
  const [data, setData] = useState(null);
  const theme = createTheme({
    components: {

    }
  });

  useEffect(() => {

  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '200px' }}>
        <LikedArticles articles={data.LikedArticles} />
        <ReadLaterArticles articles={data.ReadLaterArticles} />
        <YourArticles articles={data.YourArticles} />
      </Box>
    </>
  )
}

export default Home