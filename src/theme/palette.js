import {
  amber, grey, green, cyan, red, common,
} from '@mui/material/colors';

const colors = {
  white: common.white,
  background: grey[50],
  primary: cyan[800],
  secondary: cyan[500],
  positive: green[500],
  medium: amber[700],
  negative: red[500],
  neutral: grey[500],
  geometry: '#3bb2d0',
};

const palette = {
  background: {
    default: colors.background,
  },
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
    contrastText: colors.white,
  },
  colors,
};

export default palette;
