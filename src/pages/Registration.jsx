import { Formik, Form } from "formik"
import { Link } from "react-router-dom";
import Input from "../components/Input"
import Button from "../components/Button"
import Card from "../components/Card"

import registrationSchema from "../schemas/registrationSchema"
import { registerUser } from "../services/api"

function Registration() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const userData = {
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
      }

      const response = await registerUser(userData)

      console.log("Registration successful:", response)

      alert("Registration successful!")

      resetForm()
    } catch (error) {
      console.error("Registration failed:", error)

      alert("Registration failed. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <Card>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Register your account
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form>
              <Input
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
                touched={touched.firstName}
              />

              <Input
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                touched={touched.lastName}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />

              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />

              <Button type="submit" loading={isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
  to="/login"
  className="font-semibold text-blue-600 hover:text-blue-800"
>
  Login
</Link>
        </p>
      </Card>
    </div>
  )
}

export default Registration