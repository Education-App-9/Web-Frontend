import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import Icon from '@mui/material/Icon';
const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        
        <Icon>add_circle</Icon>

        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default FeatureCard;
