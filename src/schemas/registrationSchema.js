import * as Yup from "yup"

const registrationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must contain at least 2 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Last name must contain at least 2 characters")
    .required("Last name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
})

export default registrationSchema