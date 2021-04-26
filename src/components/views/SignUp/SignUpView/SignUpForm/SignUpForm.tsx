import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Link,
  Typography,
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import EmailInputField from "../../../EmialInputField";
import PasswordField from "../../../PasswordField";
import PhoneNumberField from "../../../PhoneNumberField";

import SignUpFormState from "./SignUpFormState";
import signUpFormValidationSchema from "./signUpFormValidationSchema";
import useStyles from "./styles";

const defaultValues: SignUpFormState = {
  email: "",
  phone: "+44",
  password: "",
};

interface Props {
  loading: boolean;
  onSubmit(formData: SignUpFormState): void;
}

const SignUpForm: React.FC<Props> = ({ loading, onSubmit }) => {
  const classes = useStyles();

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormState>({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues,
  });

  const watchPassword = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInputField
        name="email"
        autoComplete="email"
        control={control}
        error={errors.email?.message}
        autoFocus
      />
      <PhoneNumberField
        name="phone"
        control={control}
        error={errors.phone?.message}
        required
      />
      <PasswordField
        id="password"
        name="password"
        control={control}
        error={errors.password?.message}
        label="Password"
        placeholder="Password"
        autoComplete="new-password"
      />
      <Box display="flex" flexDirection="row" alignItems="center" mt={2}>
        <Box mr={2} position="relative">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={loading}>
            Sign up
          </Button>
          {loading && (
            <CircularProgress size={20} className={classes.buttonProgress} />
          )}
        </Box>
      </Box>
    </form>
  );
};

export default SignUpForm;
