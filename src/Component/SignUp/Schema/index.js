import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(4, "Please enter a name more than 4 character")
    .max(20)
    .required("Please enter you name"),

  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter valid password"),
  number: Yup.number()
    .typeError("that doesn't look like number")
    .positive("A number can't start with minus")
    .integer("A number can't include decimal")
    .min(8, "Please enter atleast 8 character")
    .required("A phone number is required"),
});
