import * as Yup from "yup";

// Register Schema

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name not exceed more than 30 characters")
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "First name can contain only letters"),

  lastName: Yup.string()
    .trim()
    .min(2, "Name must be at least 3 characters")
    .max(30, "Name not exceed more than 30 characters")
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Last name can contain only letters"),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    )
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

// Login Schema

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
