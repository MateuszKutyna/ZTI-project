import React from "react";

import { Control, FieldValues, Path } from "react-hook-form";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { InputAdornment } from "@material-ui/core";

import FormTextInputField from "../FormTextInputField";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error: string | undefined;
  required?: boolean;
}

const PhoneNumberField = <T extends FieldValues>({
  name,
  error,
  control,
  required,
}: Props<T>): JSX.Element => (
  <FormTextInputField
    name={name}
    control={control}
    error={!!error}
    helperText={error}
    autoComplete="tel"
    label="Mobile phone"
    placeHolder="Mobile phone"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <PhoneAndroidIcon color="primary" />
        </InputAdornment>
      ),
    }}
    required={required}
  />
);

export default PhoneNumberField;
