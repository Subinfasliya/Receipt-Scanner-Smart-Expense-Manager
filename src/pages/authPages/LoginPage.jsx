import {
  MdOutlineEmail,
  MdOutlineLock,
} from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import { loginSchema } from "../../validation/authValidation";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password,
      );

      if (!user) {
        toast.error("Invalid crendentials");
        return;
      }
           

      login({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });

      toast.success("Login successful");

      navigate("/app");
    },
  });

  return (
    <>
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <TfiReceipt size={32} color="#7C3AED" />
        <h2 className="text-2xl font-bold">ScanSpend</h2>
      </div>

      <h3 className="text-center text-4xl font-bold mb-3">Welcome Back</h3>

      <p className="text-center text-gray-500 mb-10">
        Sign in to manage your expenses
      </p>

      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <div className="mb-10">
          <div className="relative">
            <MdOutlineEmail
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
            />

            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email address"
              className={`w-full rounded-lg py-4 pl-12 pr-12 outline-none shadow-sm border
                ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-[#7C3AED]"
                }`}
            />
          </div>

          <div className="absolute">
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 font-semibold text-sm mt-1 ml-1">
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="mb-8">
          <div className="relative">
            <MdOutlineLock
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              className={`w-full rounded-lg py-4 pl-12 pr-12 outline-none shadow-sm border
                ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-[#7C3AED]"
                }`}
            />

            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash size={20}/> : <FaEye size={20}/>}
            </span>
          </div>
          <div className="absolute">
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">
                {formik.errors.password}
              </p>
            )}
          </div>
        </div>

        <div className="text-right mb-8">
          <Link
            to={"/forgot-password"}
            className="text-sm text-[#7C3AED] font-semibold hover:underline"
           
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-4 border rounded-lg font-semibold text-lg bg-[#7C3AED] text-white cursor-pointer hover:bg-[#5e2db3]  transition"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 border-t"></div>
        <span className="text-gray-500">OR</span>
        <div className="flex-1 border-t"></div>
      </div>


      <p className="text-center mt-8 text-gray-600">
        Don't have an account?{" "}
        <Link to={"/register"}>
          <button className="font-semibold text-[#7C3AED] hover:underline cursor-pointer">
            Sign Up
          </button>
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
