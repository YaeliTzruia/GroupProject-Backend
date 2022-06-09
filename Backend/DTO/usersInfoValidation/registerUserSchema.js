const registerUserSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    phone: { type: "integer" },
    email: { type: "string", format: "email" },
    password: { type: "string" },
    rePassword: { type: "string" },
    photoURL: { type: "string" },
  },
  required: [
    "firstName",
    "lastName",
    "phone",
    "email",
    "password",
    "rePassword",
  ],
};

module.exports = registerUserSchema;
