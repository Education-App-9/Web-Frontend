import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { Box, CardHeader } from '@mui/material';

const ReviewCard = ({ avatar, name, title, review, rating }) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        title={name}
        subheader={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {review}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 16,
            width: '100%',
          }}
        >
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
