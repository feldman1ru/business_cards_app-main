import { Divider, Typography, Box, Chip } from '@mui/material'

// const MuiDivider = () => {
//   return
//    <>
//    <Typography variant='body1' color="initial" >item One </Typography>
//    <Divider />
//    <Typography variant='body1' color="initial">item Two</Typography>
//    <Typography variant='body1' color="initial">item Three</Typography>
//   </>;
// }
// const MuiDivider = () => {
//   return( 
//   <Box display="flex">
//    <Typography variant='body1' color="initial" >item One </Typography>
//    <Divider orientation='vertical' flexItem/>
//    <Typography p={1} variant='body1' color="initial">item Two</Typography>
  
//   </Box>
//   );
// }

const MuiDivider = () => {
  return (
    <Box>
      <Typography p={1} variant="body1" color="initial">
        item one
      </Typography>
      <Divider>CENTER</Divider>
      <Typography p={1} variant="body1" color="initial">
        item two
      </Typography>
      <Divider textAlign="left">LEFT</Divider>
      <Typography p={1} variant="body1" color="initial">
        item two
      </Typography>
      <Divider textAlign="right">RIGHT</Divider>
      <Typography p={1} variant="body1" color="initial">
        item two
      </Typography>
      <Divider>
        <Chip label="miro" />
      </Divider>
      <Typography p={1} variant="body1" color="initial">
        item two
      </Typography>
    </Box>
  );
};
export default MuiDivider;