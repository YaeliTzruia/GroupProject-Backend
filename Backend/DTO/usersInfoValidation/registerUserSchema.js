const Yup = require("yup");

const registerUserSchema = Yup.object({
  photoURL: Yup.string(),
  firstName: Yup.string().required("Firs tname is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(9, "Phone number must be at least 9 digits"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(2, "Password must be a minimum of 2 characters")
    .max(16, "Password can have a maximum of 16 characters"),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("must enter the confirmation password"),
});

module.exports = registerUserSchema;
