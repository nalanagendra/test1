import React, { useState, useMemo, useEffect } from 'react';
import {
    Box,
    Tab,
    Tabs,
} from "@mui/material";
import { makeStyles } from 'tss-react/mui';

import { categories, products } from '../SwipableTabs/SampleProducts';
import compare from '../../utils/compare';
import Section from './Section';

const useStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'center',
        },
    },
    tabsContainer: {
        height: '88vh',
        overflow: 'auto',
        flexBasis: '25vw',
        padding: theme.spacing(3, 0),
    },
    sectionsContainer: {
        height: '88vh',
        overflow: 'auto',
        '::-webkit-scrollbar': {
            display: 'none',
        }
    },
    tab: {
        minHeight: '30px',
        height: '30px',
        alignItems: 'flex-end'
    },
    categoryContainer: {
        padding: theme.spacing(3, 0, 0, 0),
    },
}));

const ScrollableTabsLg = (props) => {
    const sortedCategory = categories.sort(compare);
    const [category, setCategory] = useState({
        current: sortedCategory[0]?.name,
    });

    const refsByCategory = useMemo(() => {
        const refs = {}
        sortedCategory.forEach((item) => {
            refs[item.name] = React.createRef(null)
        })
        return refs
    }, [sortedCategory]);

    const { classes } = useStyles();

    const onChange = (e, category) => {
        const element = refsByCategory[category];
        element.current.scrollIntoView()
        setCategory({
            current: category,
        });
    }

    useEffect(() => {
        // automatically detect the current ref in viewport
        const observer = Object.keys(refsByCategory).map((ref) => {
            return new IntersectionObserver((entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setCategory({
                        current: ref,
                    });
                }
            }, { rootMargin: '80px 0px -80px 0px' });
        })

        Object.keys(refsByCategory).forEach((ref, index) => {
            if (refsByCategory[ref].current) {
                observer[index].observe(refsByCategory[ref].current);
            }
        });

        return (() => {
            Object.keys(refsByCategory).forEach((ref, index) => {
                if (refsByCategory[ref].current) {
                    observer[index].unobserve(refsByCategory[ref].current);
                }
            });
        });

    }, [sortedCategory, refsByCategory]);

    return (
        <Box className={classes.container}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={category.current}
                onChange={onChange}
                className={classes.tabsContainer}
                scrollButtons={false}
                TabIndicatorProps={{
                    style: { transition: 'none' }
                }}
            >
                {sortedCategory.map((item, index) => (
                    <Tab
                        key={item.name}
                        label={item.name}
                        value={item.name}
                        className={classes.tab}
                    />
                ))}
            </Tabs>
            <Box
                className={classes.sectionsContainer}
            >
                {
                    sortedCategory
                        .map((item) => (
                            <div
                                key={item.name}
                                className={classes.categoryContainer}
                                ref={refsByCategory[item.name]}
                            >
                                <Section
                                    products={
                                        products.filter((product) => item.name === product.category)
                                    }
                                    category={item.name}
                                />
                            </div>
                        ))
                }
            </Box>
        </Box>
    );
}

export default ScrollableTabsLg;
