import * as Yup from "Yup";

export const LoginSchema = Yup.object({
  Email: Yup.string()
    .required("Email is required")
    .test("email", "Invalid email format", (value) => {
      // Check if it's a valid email
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(value);
    }),
  password: Yup.string().min(7).required("Please enter your password"),
});

export const signupSchema = Yup.object({
  Email: Yup.string()
    .required("Email is required")
    .test("email", "Invalid email format", (value) => {
      // Check if it's a valid email
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(value);
    }),
  password: Yup.string().min(7).required("Please enter your password"),
  Name: Yup.string().min(3).required("Please enter your name"),
  Confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
