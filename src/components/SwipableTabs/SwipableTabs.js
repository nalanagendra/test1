import React, { useState } from 'react';
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    Modal,
    Paper,
    Tab,
    Tabs,
} from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import SwipeableViews from "react-swipeable-views";

import MenuItem from '../MenuItemCard/MenuItem';
import { categories, products } from './SampleProducts';
import compare from '../../utils/compare';

const useStyles = makeStyles()((theme) => ({
    tab: {
        minWidth: "fit-content",
        flex: 1,
    },
    tabView: {
        height: '84vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    categoryMenu: {
        width: '85vw',
        maxWidth: 320,
        position: 'absolute',
        left: '50%',
        top: '70%',
        transform: 'translate(-50%, -50%)',
        height: '65vh',
        maxHeight: 320,
        overflow: 'auto',
        borderRadius: '5px',
    },
    categoryText: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textTransform: 'capitalize',
        fontSize: '12px',
    },
}));

const SwipableTabs = (props) => {
    const {
        displayCategory,
        closeCategory,
    } = props;
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

    const closeModal = () => {
        closeCategory();
    }

    const handleListItemClick = (event, index) => {
        const { name } = sortedCategory[index];
        setCategory({
            filter: name,
            index: index,
        });
        closeCategory();
    }

    return (
        <Box>
            <Tabs
                variant="scrollable"
                value={`${category.filter}~${category.index}`}
                onChange={onChange}
                scrollButtons={false}
            >
                {sortedCategory.map((item, index) => (
                    <Tab
                        key={item.name}
                        label={item.name}
                        value={`${item.name}~${index}`}
                        className={classes.Tab}
                    />
                ))}
            </Tabs>

            <SwipeableViews
                index={category.index}
                onChangeIndex={onChangeIndex}
                enableMouseEvents
                animateHeight
                style={{margin: '0 auto'}}
            >
                {
                    sortedCategory.map((item, index) => (
                        <div
                            value={item.name}
                            key={item.name}
                            className={classes.tabView}
                        >
                            {
                                products
                                    .filter((product) => product.category === item.name)
                                    .map((item) => <MenuItem {...item} />)
                            }
                        </div>
                    ))
                }
            </SwipeableViews>

            <Modal
                open={displayCategory}
                onClose={closeModal}
                aria-labelledby="Categories"
                aria-describedby="Categories Selection"
            >
                <Box>
                    <List
                        className={classes.categoryMenu}
                        sx={{ bgcolor: 'background.paper' }}
                    >
                        {sortedCategory.map((value, index) => (
                            <ListItemButton
                                key={value}
                                selected={category.index === index}
                                onClick={(event) => handleListItemClick(event, index)}
                            >
                                <ListItemText
                                    primary={value.name}
                                    className={classes.categoryText}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Modal>
        </Box>
    )
}

export default SwipableTabs;
