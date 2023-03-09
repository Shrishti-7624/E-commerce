import * as Yup from "yup";
export const checkOutSchema = Yup.object({
  firstname: Yup.string()
    .min(4, "Please enter a name more than 4 character")
    .max(20)
    .required("Please enter you first name"),
  lastname: Yup.string()
    .min(4, "Please enter a name more than 4 character")
    .max(20)
    .required("Please enter you  last name"),
  username: Yup.string()
    .min(4, "Please enter a name more than 4 character")
    .max(20)
    .required("Please enter you user name"),
  address: Yup.string()
    .min(5, "Please address more than 5")
    .max(50)
    .required("Please fill your address"),

  email: Yup.string().email().required("Please enter your email"),

  country: Yup.string().required("Please choose country"),
  state: Yup.string().required("Please choose state"),
  zip: Yup.number()
    .min(4, " Please provide code more than 4")
    .required("Please enter your zip code"),
});
