import React from "react";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import EmailInputField from "../../../EmialInputField";
import PasswordField from "../../../PasswordField";

import SignInFormState from "./SignInFormState";
import signInFormValidationSchema from "./signInFormValidationSchema";

import useStyles from "./styles";

const defaultValues: SignInFormState = {
  email: "",
  password: "",
};

interface Props {
  loading: boolean;
  onSubmit(formData: SignInFormState): void;
}

const SignInForm: React.FC<Props> = ({ loading, onSubmit }) => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormState>({
    resolver: yupResolver(signInFormValidationSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInputField
        name="email"
        autoComplete="email"
        control={control}
        error={errors.email?.message}
        autoFocus
      />
      <PasswordField
        id="password"
        name="password"
        control={control}
        error={errors.password?.message}
        label="Password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <Box display="flex" flexDirection="row" alignItems="center" mt={2}>
        <Box width="50%" position="relative">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth>
            Sign in
          </Button>
          {loading && (
            <CircularProgress size={20} className={classes.buttonProgress} />
          )}
        </Box>
      </Box>
    </form>
  );
};

export default SignInForm;
