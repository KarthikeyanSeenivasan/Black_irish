import React, { useState, useEffect } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import * as Yup from "yup"
import { Form, Formik, useField, Field } from "formik"
import { toast } from "react-toastify"

export const CustomField = ({ className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <input {...field} {...props} className={className} />
    </>
  )
}

const CustomForm = ({ status, message, onValidated }) => {
  const initialValues = {
    email: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("email is required"),
  })

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onValidated({
            EMAIL: values.email,
          })
          toast.info("Successfully Suscribed")
          resetForm()
        }}
      >
        {({ values, setFieldValue, setSubmitting, resetForm }) => (
          <>
            <Form className="subscribe">
              <CustomField
                type="email"
                placeholder="Email Address"
                name="email"
                value={values.email}
                onChange={e => setFieldValue("email", e.target.value)}
              />

              <button type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}

const MailchimpForm = props => {
  const url =
    "https://goblackirish.us5.list-manage.com/subscribe/post?u=32579cef70b89cbd7e4410032&amp;id=a3e5e90513"

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default MailchimpForm
