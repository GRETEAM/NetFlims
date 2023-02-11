import * as emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Can't be empty."),
    }),
    onSubmit: (values) => {
      console.log("Submit : ", values);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          values,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("email sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
      formik.resetForm({ values: "" });
    },
  });

  return (
    <main className="container">
      <h1>Contact Us !</h1>

      <section className="contact">
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="messasge">Your Message</label>
          <textarea
            type="text"
            id="messasge"
            placeholder="Give us your best feedback"
            autoComplete="off"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="contact-form-error">{formik.errors.message}</p>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
