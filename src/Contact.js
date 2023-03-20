
import { useFormik } from "formik";
import React from "react";
import { Config } from "./Config";

function Contact() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Message: "",
      PhNo: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.Name) {
        error.Name = "Please enter your Name";
      }

      if (!values.Email) {
        error.Email = "Please enter the email id";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
      ) {
        error.Email = "Invalid email address";
      }

      if (!values.Message) {
        error.Message = "Please enter your Message";
      }

      if (values.PhNo.toString().length !== 10) {
        error.PhNo = "Please enter the valid Phone number";
      }

      return error;
    },
    onSubmit: async (values) => {
      let contact = await fetch.post(`${Config.api}/Contacts`, values);
      alert("Thanks for contacting us,We'll call you Soon");
      formik.resetForm();
    },
  });
  return (
    <div id="contact">
      <div className="container">
        <h3 className="text-center" style={{ color: "black"}}>
          <h1>Contact with me</h1>
        </h3>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM="
              alt="image"
              width={"40px"}
              height="400px"
            />
          </div>
          <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit} className="col-lg-8">
              <label>Name</label>
              <input
                type="text"
                name="Name"
                className={`form-control form-control-user ${
                  formik.touched.Name && formik.errors.Name ? "error-box" : ""
                } ${
                  formik.touched.Name && !formik.errors.Name
                    ? "success-box"
                    : null
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
                placeholder="Enter your name"
              />
              {formik.touched.Name && formik.errors.Name ? (
                <span style={{ color: "red" }}>{formik.errors.Name}</span>
              ) : null}
              <br /> <label>Email</label>
              <input
                type="email"
                name="Email"
                className={`form-control form-control-user ${
                  formik.touched.Email && formik.errors.Email ? "error-box" : ""
                } ${
                  formik.touched.Email && !formik.errors.Email
                    ? "success-box"
                    : null
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
                placeholder="Enter your email Id"
              />
              {formik.touched.Email && formik.errors.Email ? (
                <span style={{ color: "red" }}>{formik.errors.Email}</span>
              ) : null}
              <br />
              <label>Message</label>
              <textarea
                name="Message"
                rows="4"
                cols="50"
                className={`form-control form-control-user ${
                  formik.touched.Message && formik.errors.Message
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.Message && !formik.errors.Message
                    ? "success-box"
                    : null
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Message}
                placeholder="Enter your Message"
              >
              </textarea>
              {formik.touched.Message && formik.errors.Message ? (
                  <span style={{ color: "red" }}>{formik.errors.Message}</span>
                ) : null}
              <br />
              <label>Phone No</label>
              <input
                type="text"
                name="PhNo"
                className={`form-control form-control-user ${
                  formik.touched.PhNo && formik.errors.PhNo ? "error-box" : ""
                } ${
                  formik.touched.PhNo && !formik.errors.PhNo
                    ? "success-box"
                    : null
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.PhNo}
                placeholder="Enter your Phone number"
              />
              {formik.touched.PhNo && formik.errors.PhNo ? (
                <span style={{ color: "red" }}>{formik.errors.PhNo}</span>
              ) : null}
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;