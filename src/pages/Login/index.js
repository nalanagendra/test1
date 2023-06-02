import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';

import API from '../../network';
import LoginForm from './LoginForm';
import { userActions } from '../../store/index'

const useStyles = makeStyles()((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    sidebar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.primary.main,
        paddingBottom: theme.spacing(5),
        width: theme.dimensions.sidebarWidth,
        [theme.breakpoints.down('lg')]: {
            width: theme.dimensions.sidebarWidthTablet,
        },
        [theme.breakpoints.down('sm')]: {
            width: '0px',
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
        // [theme.breakpoints.up('lg')]: {
        //   padding: theme.spacing(0, 25, 0, 0),
        // },
    },
}));

const Login = () => {
    const [processing, setProcessing] = useState(false);
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = async (formData) => {
        const { email, password } = formData;
        try {
            const response = await API.getInstance().login(email, password);
            if (response.status === 200) {
                dispatch(userActions.login(response.data));
                navigate('/');
            }
        } catch (e) {
            if (e?.response?.status === 401) {
                // toast.error(strings.loginFailed);
            } else {
                // toast.error(e?.response?.message || e?.message);
            }
        }
    }

    const getProps = () => {
        return {
            processing,
            onLogin,
        };
    }
    const viewProps = getProps();

    return (
        <main className={classes.root}>
            <Paper className={classes.paper}>
                <LoginForm {...viewProps} />
            </Paper>
        </main>
    );
};

export default Login;
