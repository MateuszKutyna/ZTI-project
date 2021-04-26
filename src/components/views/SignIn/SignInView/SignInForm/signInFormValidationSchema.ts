import { object, SchemaOf, string } from "yup";

import SignInFormState from "./SignInFormState";

export default <SchemaOf<SignInFormState>>object({
  email: string()
    .required("Email is a required field")
    .email("Invalid email address"),
  password: string().required("Password is a required field"),
});
