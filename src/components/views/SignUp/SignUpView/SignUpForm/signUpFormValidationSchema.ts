import { object, SchemaOf, string } from "yup";

import SignUpFormState from "./SignUpFormState";

export default <SchemaOf<SignUpFormState>>object({
  email: string()
    .required("Email is a required field")
    .email("Invalid email address"),
  phone: string().required("Mobile phone is a required field"),

  password: string()
    .required("Password is a required field")
    .test(
      "Contains lowercase",
      "Your password should contain lower case letters",
      (value) => typeof value !== "undefined" && /[a-z]/.test(value)
    )
    .test(
      "Contains uppercase",
      "Your password should contain lower case letters",
      (value) => typeof value !== "undefined" && /[A-Z]/.test(value)
    )
    .test(
      "Contains digits",
      "Your password should contain digits",
      (value) => typeof value !== "undefined" && /\d/.test(value)
    )
    .test(
      "Minimum length",
      "Your password should contain at least 10 characters",
      (value) => typeof value !== "undefined" && value.length >= 10
    ),
});
