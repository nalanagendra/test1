import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Input = (props) => {
  const {
    label,
    name,
    validations,
    defaultValue,
    disabled,
    autoFocus,
    InputExtraProps = {},
    type = 'text',
    password = undefined,
    onPaste,
  } = props;

  const { register, formState: { errors } } = useFormContext();
  const [visible, setVisibility] = useState(false);
  const handleClickShowPassword = () => {
    setVisibility((visiblity) => !visiblity);
  };
  const passwordType = visible ? 'text' : 'password';
  return (
    <TextField
      autoFocus={autoFocus}
      fullWidth
      label={label}
      defaultValue={defaultValue}
      {...register(name, validations)}
      error={errors[name]}
      helperText={errors[name]?.message}
      disabled={disabled}
      onPaste={onPaste}
      type={password ? passwordType : type}
      InputProps={
        password ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {visible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          ),
        } : InputExtraProps
      }

    />
  );
};

Input.defaultProps = {

};

Input.propTypes = {

};
export default Input;
