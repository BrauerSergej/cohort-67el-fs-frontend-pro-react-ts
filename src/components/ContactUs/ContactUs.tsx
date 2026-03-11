import {
  ContactUsFormContainer,
  Title,
  InputsContainer,
  ButtonControl,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { useFormik } from "formik";
import { CONTACT_US_VALUES } from "./types";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  [CONTACT_US_VALUES.FULLNAME]: Yup.string()
    .required("Full name field is required")
    .min(3, "Full name field should contain min 3 characters")
    .max(50, "Full name field should contain max 50 characters"),
  [CONTACT_US_VALUES.PHONE]: Yup.string()
    .required("Phone field is required")
    .min(4, "Phone field should contain min 4 characters")
    .max(20, "Phone field should contain max 20 characters"),
  [CONTACT_US_VALUES.EMAIL]: Yup.string()
    .email("This field should be in email format")
    .min(6, "Email field should contain min 6 characters")
    .max(60, "Email field should contain max 20 characters"),
});

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_VALUES.FULLNAME]: "",
      [CONTACT_US_VALUES.PHONE]: "",
      [CONTACT_US_VALUES.EMAIL]: "",
    },

    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      console.log("Formik submit event works!!!");
      console.log(values);
      console.log(helpers);
      helpers.resetForm();
    },
  });

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Title>ContactUs</Title>
        <Input
          id="fullname-id"
          name={CONTACT_US_VALUES.FULLNAME}
          placeholder="Your full name"
          value={formik.values[CONTACT_US_VALUES.FULLNAME]}
          label="Full name*"
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.FULLNAME]}
        />
        <Input
          id="phone-id"
          name={CONTACT_US_VALUES.PHONE}
          placeholder="Your phone number"
          value={formik.values[CONTACT_US_VALUES.PHONE]}
          label="Phone*"
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.PHONE]}
        />
        <Input
          id="email-id"
          name={CONTACT_US_VALUES.EMAIL}
          placeholder="Your email"
          value={formik.values[CONTACT_US_VALUES.EMAIL]}
          label="Email"
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.EMAIL]}
        />
      </InputsContainer>
      <ButtonControl>
        <Button name="SEND REQUEST" type="submit" />
      </ButtonControl>
    </ContactUsFormContainer>
  );
}

export default ContactUs;
