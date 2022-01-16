import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MusicCard.css'

function MusicCard({ data}) {
  let { img, title, desc } =  data 

  return (
    <Card sx={{ width: 280 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img}
          alt="vibrant-playlist"
        />
        <CardContent className="playlistCardImg" >
          <Typography 
            gutterBottom variant="h6"
            component="div" 
            sx={{ fontFamily: 'Lato', fontWeight: 700, fontSize: 16}}>
            {title}
          </Typography>
          <Typography 
            variant="body2"
            color="text.secondary" 
            sx={{ fontFamily: 'Lato'}}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MusicCard
