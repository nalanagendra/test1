import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import Image from 'mui-image';
import vegIcon from '../../assets/pngIcons/vegIcon.png';
import nonVegIcon from '../../assets/pngIcons/nonVegIcon.png';

const useStyles = makeStyles()((theme) => ({
  container: {
    margin: '20px 20px 20px 30px',
    paddingBottom: '20px',
    width: '90vw',
    maxWidth: '550px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    gap: '50px',
    '@media (max-width: 625px)': {
      gap: '30px',
      margin: '10px 10px 10px 15px',
    },
    '@media (max-width: 475px)': {
      gap: '15px',
      margin: '15px 5px 5px 8px',
    }
  },
  titleContainer: {
    display: 'flex',
    gap: '3px',
  },
  iconImage: {
    paddingTop: '3px',
    '@media (max-width: 475px)': {
      paddingTop: '2px',
    },
    '@media (max-width: 400px)': {
      paddingTop: '1.5px',
    }
  },
  title: {
    fontSize: '18px',
    fontWeight: 500,
    color: '#3e4152',
    wordBreak: 'break-word',
    '@media (max-width: 475px)': {
      fontSize: '4vw',
    },
  },
  price: {
    fontSize: '16px',
    color: '#3e4152;',
  },
  description: {
    marginTop: '2px',
    lineHeight: 1.3,
    color: 'rgba(40,44,63,.45)',
    letterSpacing: '-.3px',
    fontSize: '14px',
    paddingBottom: theme.spacing(2),
    '@media (max-width: 475px)': {
      fontSize: '3vw',
      paddingBottom: theme.spacing(1),
    }
  },
  addToCartBtn: {

  },
  btnGroup: {
  },
  leftBtn: {
    borderTopLeftRadius: '100px',
    borderBottomLeftRadius: '100px',
    borderRightColor: 'transparent',
  },
  centerBtn: {
    borderLeftColor: 'transparent !important',
    borderRightColor: 'transparent !important',
  },
  rightBtn: {
    borderTopRightRadius: '100px',
    borderBottomRightRadius: '100px',
    borderLeftColor: 'transparent',
  },
})
);

const MenuItemlg = (props) => {
  const {
    description,
    image,
    name,
    price,
    veg,
  } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <Image
          src={image}
          width="120px"
          height="103px"
        />
      </Box>
      <Box>
        <Box className={classes.titleContainer}>
          {
            veg ? (
              <Box className={classes.iconImage}>
                <Image
                  src={vegIcon}
                  width="20px"
                  height="20px"
                />
              </Box>
            ) : (
              <Box className={classes.iconImage}>
                <Image
                  src={nonVegIcon}
                  width="20px"
                  height="20px"
                />
              </Box>
            )
          }
          <Typography className={classes.title}>{name}</Typography>
        </Box>
        <Typography className={classes.price}><span>&#8377;</span>{price}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <ButtonGroup
          size="small"
          className={classes.btnGroup}
        >
          <Button
            className={classes.leftBtn}
          >
            <RemoveIcon />
          </Button>
          <Button
            className={classes.centerBtn}
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{ "&:hover": { backgroundColor: "transparent", } }}
          >
            1
          </Button>
          <Button
            className={classes.rightBtn}
          >
            <AddIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default MenuItemlg;
