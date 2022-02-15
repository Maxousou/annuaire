import { useContext } from "react"
import AppContext from "../components/AppContext"
import * as yup from "yup"
import { useFormik } from "formik"
import Link from "next/link"

const NewEntryForm = () => {
  const { addOperation } = useContext(AppContext)

  const formik = useFormik({
    initialValues: {
      age: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: yup.object({
      age: yup
        .number()
        .test("The age must be different than 0", (value) => value !== 0)
        .required("Please give an age")
        .label("Age"),
      firstName: yup
        .string()
        .required("Please give a First Name")
        .label("First Name"),
      lastName: yup
        .string()
        .required("Please give a Last Name")
        .label("Last Name"),
      phoneNumber: yup
        .string()
        .required("please give a Phone Number")
        .label("Phone Number"),
    }),
    onSubmit: (values) => {
      addOperation(
        values.age,
        values.firstName,
        values.lastName,
        values.phoneNumber
      )
    },
  })

  //Je n'ai pas réussi à refaire avec la balise <Formik> j'ai donc suivi les docs pour de formik qui n'utilisent pas la balise Formik
  return (
    <>
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className="flex flex-col p-4"
      >
        <input
          className="block mt-4 border-2 border-slate-200 py-1 px-2 w-full px-4"
          id="age"
          placeholder="Enter an age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div className="text-red-600">{formik.errors.age}</div>
        ) : null}
        <input
          className="block mt-4 border-2 border-slate-200 py-1 px-2 w-full px-4"
          id="firstName"
          name="firstName"
          placeholder="Enter a firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-600">{formik.errors.firstName}</div>
        ) : null}
        <input
          className="block mt-4 border-2 border-slate-200 py-1 px-2 w-full px-4"
          id="lastName"
          name="lastName"
          placeholder="Enter a lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-600">{formik.errors.lastName}</div>
        ) : null}
        <input
          className="block mt-4 border-2 border-slate-200 py-1 px-2 w-full px-4"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter a phoneNumber"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-red-600">{formik.errors.phoneNumber}</div>
        ) : null}
        <button
          type="submit"
          className="bg-blue-600 font-bold text-white disabled:bg-blue-300 py-1 mt-8"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          SAVE
        </button>{" "}
      </form>
      <Link href="/">
        <a>
          <ul>tableau</ul>
        </a>
      </Link>
    </>
  )
}

export default NewEntryForm
