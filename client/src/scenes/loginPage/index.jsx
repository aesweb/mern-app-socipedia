import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="1.5rem"
        m="1.5rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="300"
          variant="h5"
          sx={{ m: '1.5rem' }}
        >
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
      </Box>
      <Form></Form>
    </Box>
  );
};

export default LoginPage;
