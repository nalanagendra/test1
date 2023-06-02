import React, { useState } from 'react';
import {
    Box,
    Tab,
    Tabs,
} from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import SwipeableViews from "react-swipeable-views";

import MenuItemlg from '../MenuItemCard/MenuItemlg';
import { categories, products } from './SampleProducts';
import compare from '../../utils/compare';

const useStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        height: '88vh',
    },
    tabs: {
        flex: '1 0 auto',
    },
    tab: {
        paddingTop: theme.spacing(.1),
        paddingBottom: theme.spacing(.1),
        minWidth: '25vw',
        alignItems: 'end',
    }
}));

const SwipableTabsLg = () => {
    const sortedCategory = categories.sort(compare);
    const [category, setCategory] = useState({
        index: 0,
        filter: sortedCategory[0]?.name,
    });
    const { classes } = useStyles();

    const onChange = (e, category) => {
        const [filter, index] = category.split('~');
        setCategory({
            filter,
            index: Number(index),
        });
    }

    const onChangeIndex = (index) => {
        const { name } = sortedCategory[index];
        setCategory({
            filter: name,
            index: index,
        });
    }

    return (
        <Box className={classes.container}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={`${category.filter}~${category.index}`}
                onChange={onChange}
                scrollButtons
                className={classes.tabs}
            >
                {sortedCategory.map((item, index) => (
                    <Tab
                        key={item.name}
                        label={item.name}
                        value={`${item.name}~${index}`}
                        className={classes.tab}
                    />
                ))}
            </Tabs>

            <SwipeableViews
                index={category.index}
                onChangeIndex={onChangeIndex}
                enableMouseEvents
                animateHeight
            >
                {
                    sortedCategory.map((item, index) => (
                        <div
                            value={item.name}
                            key={item.name}
                        >
                            {
                                products
                                    .filter((product) => product.category === item.name)
                                    .map((item) => <MenuItemlg {...item} />)
                            }
                        </div>
                    ))
                }
            </SwipeableViews>
        </Box>

    )
}

export default SwipableTabsLg;
