const registerUserSchema = {
  type: "object",
  properties: {
    firstname: { type: "string" },
    lastname: { type: "string" },
    phone: { type: "integer" },
    email: { type: "string", format: "email" },
    password: { type: "string" },
    rePassword: { type: "string" },
    photoURL: { type: "string" },
  },
  required: [
    "firstname",
    "lastname",
    "phone",
    "email",
    "password",
    "rePassword",
  ],
};

module.exports = registerUserSchema;
