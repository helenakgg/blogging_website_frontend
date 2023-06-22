import * as Yup from "yup"

// @define register validation schema
export const registerValidationSchema = Yup.object({
    username : Yup.string()
        .required("username is required.")
        .min(6, "username must be at least 6 characters.")
        .max(20, "username must be less than 20 characters."),
    email : Yup.string()
        .required("email is required")
        .email("email must be a valid email."),
    phone : Yup.string()
        .required("phone number is required.")
        .matches(/08[0-9]/, "phone number must start with '08'")
        .matches(/[0-9]/, "phone number must be a number")
        .min(10, "phone number must has at least 10 digits"),
    password : Yup.string()
        .required("password is required.")
        .min(6, "password must be at least 6 characters, 1 symbol, 1 uppercase.")
        .minUppercase(1, "password must has at least 1 uppercase letter")
        .minSymbols(1, "password must has at least 1 symbol"),
    rePassword : Yup.string()
        .required("confirm password is required.")
        .oneOf([Yup.ref("password"), null], "password must match.")
});

// @login validation
export const loginValidationSchema = Yup.object({
    username : Yup.string()
       .required("username is required."),
    password : Yup.string()
        .required("password is required.")
});

// @forgot password validation
export const forgotPasswordValidationSchema = Yup.object({
    email : Yup.string()
        .required("email is required")
        .email("email must be a valid email."),
});
  
// @reset password validation
export const resetPasswordValidationSchema = Yup.object({
    password : Yup.string()
        .required("password is required.")
        .min(6, "password must be at least 6 characters, 1 symbol, 1 uppercase.")
        .minUppercase(1, "password must has at least 1 uppercase letter")
        .minSymbols(1, "password must has at least 1 symbol"),
    rePassword : Yup.string()
        .required("confirm password is required.")
        .oneOf([Yup.ref("password"), null], "password must match.")
});
  
// @change password validation
export const changePasswordSchema = Yup.object({
    oldPassword: Yup.string()
      .required("password is required"),
    password: Yup.string()
      .required("password is required.")
      .notOneOf([Yup.ref('oldPassword')],"New and Old Password can't be the same")
      .min(6, "password must be at least 6 characters, 1 symbol, 1 uppercase.")
      .minUppercase(1, "password must has at least 1 uppercase letter")
      .minSymbols(1, "password must has at least 1 symbol"),
    rePassword : Yup.string()
      .required("confirm password is required.")
      .oneOf([Yup.ref("password"), null], "password must match.")
}); 

// @create blog schema
export const createBlogSchema = Yup.object({
    title: Yup.string()
        .required("title is required"),
    date: Yup.string()
        .required("date is required"),
    picture: Yup.string()
        .required("picture is required"),
    category: Yup.string()
        .required("category is required"),
    content: Yup.string()
        .required("content is required"),
    keywords: Yup.string()
        .required("keyword is required")
});  
  
// @edit profile schema
export const editProfileSchema = Yup.object().shape({
    username : Yup.string(),
    email: Yup.string().email(),
    phone: Yup.string()
        .matches(/08[0-9]/, "phone number must start with '08'")
        .matches(/[0-9]/, "phone number must be a number")
        .min(10, "phone number must has at least 10 digits"),
});  