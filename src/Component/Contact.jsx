import React from "react";
import { Formik } from "formik";

const Contact = () => {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-center font-Poppins font-bold text-5xl">
          Contact{" "}
        </h1>
        <p className="text-center font-Poppins font-semibold">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="flex justify-center w-[70%] max-md:w-full mx-auto mt-5 ">
          <Formik
            initialValues={{
              email: "",
              YourName: "",
              subject: "",
              message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Enter your Email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              } else if (!values.YourName) {
                errors.YourName = "Please enter your Name";
              } else if (!values.message) {
                errors.message = "Message required";
              } else if (!values.subject) {
                errors.subject = "please define your subject";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                className="border shadow-lg shadow-cyan-500/50 border-[#854ce6] py-5 rounded-lg px-4 w-[80%] "
                onSubmit={handleSubmit}
              >
                <h1 className="my-2 font-Poppins font-bold text-3xl ">
                  Email Me 🚀
                </h1>
                <input
                  className="block border w-[100%] rounded-md pl-3 py-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Your Email"
                />
                {errors.email && touched.email && errors.email}
                <input
                  className="block border w-[100%] rounded-md mt-2 pl-3 py-2"
                  type="text"
                  name="YourName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.YourName}
                  placeholder="Your Name"
                />
                {errors.YourName && touched.YourName && errors.YourName}
                <input
                  className="block border w-[100%] rounded-md mt-2 pl-3 py-2"
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  placeholder="Subject"
                />
                {errors.subject && touched.subject && errors.subject}
                <textarea
                  className="block border w-[100%] rounded-md pl-3 mt-2"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  cols="30"
                  rows="10"
                  value={values.message}
                  placeholder="Message"
                ></textarea>
                {errors.message && touched.message && errors.message}
                <button
                  className="btn font-bold font-Poppins border w-full mt-2 py-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
