import { IoPersonOutline } from "react-icons/io5";
import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";
import googleLogo from "../../assets/images/google-color.svg";
import { useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import { registerSchema } from "../../validation/authValidation";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      id:"",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: registerSchema,

    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.find((user) => user.email === values.email);

      if (userExists) {
        toast.error("Email already exists");
        return;
      }

      const newUser = {
        id:crypto.randomUUID(),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      console.log(newUser);
      

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      toast.success("Successfully registered!");
      navigate("/");
    },
  });

  return (
    <>
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <TfiReceipt size={32} color="#7C3AED" />
        <h2 className="text-2xl font-bold">ScanSpend</h2>
      </div>

      <h3 className="text-center text-4xl font-bold mb-3">
        Create Your Account
      </h3>

      <p className="text-center text-gray-500 mb-10">
        Sign up to start managing your expenses
      </p>

      <form onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <div className="mb-10">
          <div className="relative">
            <IoPersonOutline
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
            />

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className={`w-full rounded-lg py-4 pl-12 pr-12 outline-none shadow-sm border
                ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-[#7C3AED]"
                }`}
            />
          </div>
          <div className="absolute">
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 font-semibold text-sm mt-1 ml-1">
                {formik.errors.firstName}
              </p>
            )}
          </div>
        </div>

        {/* Last Name */}
        <div className="mb-10">
          <div className="relative">
            <IoPersonOutline
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className={`w-full rounded-lg py-4 pl-12 pr-12 outline-none shadow-sm border
                ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-[#7C3AED]"
                }`}
            />
          </div>
          <div className="absolute">
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 font-semibold text-sm mt-1 ml-1">
                {formik.errors.lastName}
              </p>
            )}
          </div>
        </div>

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
        <div className="mb-10">
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
              size={24}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
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

        {/* Confirm Password */}
        <div className="mb-10">
          <div className="relative">
            <MdOutlineLock
              size={24}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm Password"
              className={`w-full rounded-lg py-4 pl-12 pr-12 outline-none shadow-sm border
                ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-[#7C3AED]"
                }`}
            />

            <span
              size={24}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
             onClick={()=> setShowConfirmPassword(prev => !prev)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </span>
          </div>
          <div className="absolute">
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-4 border rounded-lg font-semibold text-lg bg-[#7C3AED] text-white cursor-pointer hover:bg-[#5e2db3]  transition"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 border-t"></div>
        <span className="text-gray-500">OR</span>
        <div className="flex-1 border-t"></div>
      </div>

   
      <p className="text-center mt-8 text-gray-600">
        Already have an account?{" "}
        <Link to={"/"}>
          <button className="font-semibold text-[#7C3AED] hover:underline cursor-pointer">
            Log In
          </button>
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
