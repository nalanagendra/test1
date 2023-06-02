import React, { useRef } from 'react';
import {
    Box,
    Typography,
} from "@mui/material";
import { makeStyles } from 'tss-react/mui';

import MenuItemlg from '../MenuItemCard/MenuItemlg';

const useStyles = makeStyles()((theme) => ({
    titleContainer: {
        color: '#3e4152',
        margin: theme.spacing(0, 0, 0, 3),
        fontWeight: 600,
    },
    title: {
        margin: 0,
        fontSize: '15px',
    },
    subTitle: {
        margin: 0,
        fontSize: '10px',
    },
}));

const Section = (props) => {
    const {
        products,
        category,
    } = props;
    const { classes } = useStyles();

    return (
        <>
            {
                products.length > 0 ? (
                    <Box className={classes.titleContainer}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            className={classes.title}
                        >
                            {category}
                        </Typography>
                        <Typography
                            gutterBottom
                            className={classes.subTitle}
                        >
                            {products.length} ITEMS
                        </Typography>
                    </Box>
                ) : null
            }
            {
                products.map((item) => <MenuItemlg key={item.name} {...item} />)
            }
        </>
    );
};

export default Section;
