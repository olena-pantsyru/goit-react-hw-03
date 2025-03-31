import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Ім'я обов'язкове"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Формат: XXX-XX-XX")
    .required("Номер обов'язковий"),
});

const formatPhoneNumber = (value) => {
  if (!value) return "";
  const cleaned = value.replace(/\D/g, "");
  return cleaned
    .slice(0, 7)
    .replace(/(\d{3})(\d{0,2})(\d{0,2})/, (_, g1, g2, g3) =>
      [g1, g2, g3].filter(Boolean).join("-")
    );
};

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <Field className={css.input} type="text" name="name" placeholder="Ім'я" />
          <ErrorMessage className={css.error} name="name" component="p" />

          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="Номер (XXX-XX-XX)"
            value={values.number}
            onChange={(e) => setFieldValue("number", formatPhoneNumber(e.target.value))}
          />
          <ErrorMessage className={css.error} name="number" component="p" />

          <button className={css.button} type="submit">Додати контакт</button>
        </Form>
      )}
    </Formik>
  );
}