import React from 'react'
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

const MuiCard = () => {
  return ( 
    <Box sx={{ backgroundImage: `url(${Image})` }} >
    <Card sx={{ maxWidth: 345, border: 6, borderColor: '#cfe8fc' }}>
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
        alt="Bussiness card"
      />
      <CardContent>
      <Typography fontWeight={700} variant={"h5"} color={"success"}>forth</Typography>
        <Typography fontWeight={500}  color={"text.secondary"} mb={2}>subtitle</Typography>
        <Divider></Divider>
        <Typography mt={1} variant={"body2"} color={"text.secondary"} display="flex" sx={{ alignItems: 'center' }}> <Typography fontWeight={600} mr={2}>Phone:</Typography> 050-0000000</Typography>
        <Typography variant={"body2"} color={"text.secondary"} display="flex" sx={{ alignItems: 'center' }}> <Typography fontWeight={600} mr={2}>Adress:</Typography> Sninkin 3 tel-aviv</Typography>
        <Typography variant={"body2"} color={"text.secondary"} display="flex" sx={{ alignItems: 'center' }}> <Typography fontWeight={600} mr={2}>Card Number:</Typography> 40000000</Typography>
      </CardContent>

    <Box display="flex" sx={{ justifyContent: 'space-between' }}>
      <Box>
        <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <CreateIcon />
        </IconButton>
        </Box>
        <Box>
        <IconButton aria-label="add to favorites" >
          <LocalPhoneIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton>
        </Box>

        </Box>
        </Card>
       </Box>
)
}

export default MuiCard