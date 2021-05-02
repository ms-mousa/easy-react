import * as Yup from "yup";

const schemaFactory = (shape: { [key: string]: any }) =>
  Yup.object().shape(shape);

export const newsletterSchema = schemaFactory({
  email: Yup.string().email().required("Please enter your email"),
  firstName: Yup.string().required("Please enter your first name "),
});
