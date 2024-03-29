import * as Yup from "yup";

export const validations = {
  name: (paramName) =>
    Yup.string().min(
      3,
      paramName
        ? `${paramName} must be 3 or more characters`
        : "Must be 3 or more characters"
    ),
  number: (paramName, min = -1e20, max = 1e20) =>
    Yup.number()
      .min(
        min,
        paramName
          ? `${paramName} must be greater than ${min}`
          : `Must be greater than ${min}`
      )
      .max(
        max,
        paramName
          ? `${paramName} must be less than ${max}`
          : `Must be less than ${max}`
      ),
  email: (paramName) => Yup.string().email(),
  password: (paramName, min = 8, max = 24) =>
    Yup.string()
      .min(
        min,
        paramName
          ? `${paramName} must be ${min} or more characters`
          : "Must be 8 or more characters"
      )
      .max(max, paramName ? `${paramName} is too long` : "Too long"),
  date: (paramName) =>
    Yup.string().matches(
      /(\d{4}(-|\/|\\)\d{1,2}(-|\/|\\)\d{1,2})|(\d{1,2}(-|\/|\\)\d{1,2}(-|\/|\\)\d{4})/gi
    ),
  mobile: (paramName) => Yup.string().matches(/[0-9)(+]/gi, "Invalid number"),
  bvn: (paramName) =>
    Yup.string()
      .matches(/\d{11}/g, "Invalid BVN")
      .length(11, "BVN must be 11 digits long"),
  blank: () => Yup.string(),
};
