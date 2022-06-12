const Yup = require("yup");

const registerUserSchema = Yup.object({
  photoURL: Yup.string(),
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(10, "Must be at least 10 digitals"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(2, "Minimum 2 characters")
    .max(16, "Maximum 16 characters"),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("must enter the confirmation password"),
});

module.exports = registerUserSchema;
