import { createTheme } from '@mui/material/styles';
import palette from './palette';
import dimensions from './dimensions';
import components from './components';

const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: '"Poppins", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette,
  dimensions,
  components,
});

export default theme;
