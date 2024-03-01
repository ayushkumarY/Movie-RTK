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
      <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-70 ">
        <div className="flex flex-col max-w-[850px] mx-3">
          <div className="flex justify-end">
            <button className="font-bold w-8 m-2 bg-black text-white hover:bg-red-500 p-1 rounded-[50%] ">
              <Link to="/">
                <X />
              </Link>
            </button>
          </div>

          <div className="flex items-center justify-center rounded-md bg-gradient-to-r from-white opacity-100 to-lotus-950 text-xl md:px-[18px] py-4 px-2">
            <form
              action=""
              className="flex flex-col md:items-start items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-center w-full mb-4">
                <h1 className="font-bold tracking-wide md:text-3xl text-2xl">
                  MOVIES
                </h1>
              </div>
              <div className="flex flex-col items-start h-24">
                <label htmlFor="Email">Email Or Username :</label>
                <input
                  type="text"
                  placeholder="Email Or Username"
                  autoComplete="off"
                  name="Email"
                  id="Email"
                  className="px-2 py-1 my-1 rounded-lg md:w-72 w-[100%] "
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Email && touched.Email ? (
                  <p className="text-red-600">{errors.Email}</p>
                ) : null}
              </div>
              <div className="flex flex-col items-start mt-2 h-24 mb-10 md:mb-0">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  className="px-2 py-1 my-1 rounded-lg md:w-72 w-[100%]"
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
                  <Link to="/signup" className="text-red-700 ml-1 ">
                    Sign up
                  </Link>
                </p>
                <button
                  type="submit"
                  className="bg-red-700 text-white font-bold md:w-24 w-20 py-1 mt-3 hover:bg-red-600 rounded-3xl"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <img
                className="md:w-[600px] md:h-[600px] md:block hidden"
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
