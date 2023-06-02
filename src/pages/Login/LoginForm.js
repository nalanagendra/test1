import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { FormProvider, useForm } from 'react-hook-form';

import strings from '../../globalization';
import Input from '../../components/elements/Input'

const useStyles = makeStyles()((muiTheme) => ({
    options: {
        position: 'fixed',
        top: muiTheme.spacing(1),
        right: muiTheme.spacing(1),
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: muiTheme.spacing(2),
        marginBottom: muiTheme.spacing(2),
        padding: '10px',
    },
    extraContainer: {
        display: 'flex',
        gap: muiTheme.spacing(2),
    },
    registerButton: {
        minWidth: 'unset',
    },
    resetPassword: {
        cursor: 'pointer',
        textAlign: 'center',
        marginTop: muiTheme.spacing(2),
    },
    form: {
        maxWidth: muiTheme.spacing(52),
        padding: muiTheme.spacing(5),
        width: '100%',
    },
}));

function LoginForm(props) {
    const { processing, onLogin } = props;
    const { classes } = useStyles();
    const methods = useForm();
    return (
        <>
            <div className={classes.container}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onLogin)}>
                        <Grid container direction="column" minWidth={300} spacing={2}>
                            <Grid item width="100%" md={12}>
                                <Input
                                    name="email"
                                    validations={{ required: true }}
                                    label={strings.userEmail}
                                />
                            </Grid>
                            <Grid item width="100%" md={12}>
                                <Input
                                    name="passwordHash"
                                    type="password"
                                    label={strings.userPassword}
                                    validations={{ required: true }}
                                    password
                                />
                            </Grid>
                            <Grid item width="100%" md={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    disabled={processing}
                                >
                                    {strings.loginLogin}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </FormProvider>
            </div>
        </>
    );
}

export default LoginForm;