import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { db } from "../../firebase";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const CustomTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="inputContainer">
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

const CustomTextArea = ({ ...props }) => {
  const [field] = useField(props, "textarea");
  return (
    <>
      <textarea
        className="text-area"
        style={{ resize: "none" }}
        {...field}
        {...props}
      >
        Your message
      </textarea>
    </>
  );
};

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleErrorClick = () => {
    setError(true);
  };

  const handleErrorClose = () => {
    setError(false);
  };

  const handleLoadingClick = () => {
    setLoading(true);
  };

  const handleLoadingClose = () => {
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-100%" }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        {error ? (
          <Alert onClose={handleClose} severity="error">
            An error occured please try again.
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            Thank you for your response!
          </Alert>
        )}
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={loading}
        autoHideDuration={6000}
        onClose={handleLoadingClose}
      >
        <Alert onClose={handleLoadingClose} severity="info">
          Please wait...
        </Alert>
      </Snackbar>
      <div className="headerDiv">
        <span className="headerText">Contact me</span>
      </div>{" "}
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.2 }}
          className="logoDiv"
        >
          <div className="logo"></div>
          <span className="contactMessage">
            Apart from my academic commitments, I'm focusing on improving my JS
            toolkit, so I'm looking for an{" "}
            <b>
              <i>Intern Opportunity in the Software Developer</i>
            </b>{" "}
            realm that will assist me with this. Do hit me up if you find my
            work interesting!
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ delay: 0.4 }}
          className="FormDiv"
        >
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(3, "Must be of at least 3 characters")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required")
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleLoadingClick();
              db.collection("responses")
                .add(values)
                .then(() => {
                  console.log("Sucess");
                  handleErrorClose();
                  handleClick();
                  handleLoadingClose();
                  resetForm();
                })
                .catch(error => {
                  console.log(error.message);
                  handleErrorClick();
                  handleClick();
                  handleLoadingClose();
                });
              // console.log(values);

              // setSubmitting(false);
            }}
          >
            {props => (
              <Form className="form">
                <CustomTextInput
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                />
                <CustomTextInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomTextArea name="message" />
                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
      <div className="copyRight">Copyright ©2021 All rights reserved</div>
    </motion.div>
  );
}
