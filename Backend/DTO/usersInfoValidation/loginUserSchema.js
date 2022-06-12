const Yup = require("yup");

const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(2, "Minimum 2 characters")
    .max(16, "Maximum 16 characters"),
});

module.exports = loginUserSchema;
