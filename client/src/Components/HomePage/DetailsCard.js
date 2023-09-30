import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useNavigate } from 'react'

function DetailsCard({ authorId, authorName, heading }) {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ width: '200px' }}>
        <CardContent>
          <Typography variant='h3' noWrap
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              maxHeight: '3.6em',
            }}>
            {heading}
          </Typography>
        </CardContent>
        <CardContent>
          <Button variant='text' onClick={() => { navigate(`/profile/${authorId}`) }}>{authorName}</Button>
        </CardContent>
      </Card>
    </>
  )
}

export default DetailsCard