import React from 'react';
import { Container, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function LikedArticles(articles) {
  // const {articleId,articleName,articleAuthor}

  return (
    <>
      <Container>
        <Box>
          <Typography variant='h2'>
            Liked Content <FavoriteIcon sx={{ height: 'auto', width: 'auto' }} />
          </Typography>
        </Box>
        <Box>

        </Box>
      </Container>
    </>
  )
}

export default LikedArticles