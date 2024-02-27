import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
// import { LoginSchema } from "../schemas";
import { LoginSchema } from "../schemas";
import { X } from "lucide-react";

const initialValues = {
  Email: "",
  password: "",
};

function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });

  // console.log(
  //   "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ errors",
  //   errors
  // );

  useEffect(() => {
    // Set overflowY to "hidden" when the component mounts
    document.body.style.overflowY = "hidden";
    // Cleanup function to reset overflowY when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-70">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button className=" font-bold w-8 m-2 bg-black text-white hover:bg-red-500 p-1 rounded-[50%] ">
              <Link to="/">
                <X />
              </Link>
            </button>
          </div>

          <div className="flex items-center justify-center  rounded-md bg-gradient-to-r from-white opacity-100 to-lotus-950 text-xl">
            <form
              action=""
              className="flex flex-col items-start justify-center m-7 w-[350px]"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-center w-full mb-10">
                <h1 className="font-bold tracking-wide text-3xl">MOVIES</h1>
              </div>
              <div className="flex flex-col items-start h-24 ">
                <label htmlFor="Email">Email Or Username :</label>
                <input
                  type="text"
                  placeholder="Email Or Username"
                  autoComplete="off"
                  name="Email"
                  id="Email"
                  className="px-2 py-1 my-1 rounded-lg w-72 "
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Email && touched.Email ? (
                  <p className="text-red-600">{errors.Email}</p>
                ) : null}
              </div>
              <div className="flex flex-col items-start my-2 h-24 ">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  className="px-2 py-1 my-1 rounded-lg w-72"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-600">{errors.password}</p>
                ) : null}
              </div>
              <div className="flex flex-col mt-1">
                <p>
                  Don't have an account ?
                  <Link to="/signup" className="text-red-700 ml-1">
                    Sign up
                  </Link>
                </p>
                <button
                  type="submit"
                  className="bg-red-700 text-white font-bold w-24 py-1 mt-3 hover:bg-red-600 rounded-3xl"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <img
                className="w-[600px] h-[600px] rounded-lg"
                src="../Images/LoginImage.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
