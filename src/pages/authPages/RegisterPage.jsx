import { IoPersonOutline } from "react-icons/io5";
import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";

const RegisterPage = () => {
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

      {/* Full Name */}
      <div className="relative mb-5">
        <IoPersonOutline
          size={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
        />

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Email */}
      <div className="relative mb-5">
        <MdOutlineEmail
          size={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full border rounded-lg py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="relative mb-5">
        <MdOutlineLock
          size={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <MdOutlineRemoveRedEye
          size={24}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      </div>

      {/* Confirm Password */}
      <div className="relative mb-5">
        <MdOutlineLock
          size={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7C3AED]"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-lg py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <MdOutlineRemoveRedEye
          size={24}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
        />
      </div>

      {/* Sign In Button */}
      <button className="w-full py-4 border rounded-lg font-semibold text-lg bg-[#7C3AED] text-white cursor-pointer hover:bg-[#5e2db3]  transition">
        Create Account
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 border-t"></div>
        <span className="text-gray-500">OR</span>
        <div className="flex-1 border-t"></div>
      </div>

      {/* Google Button */}
      <button className="w-full border rounded-lg py-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-6 h-6"
        />

        <span className="font-medium">Continue with Google</span>
      </button>

      <p className="text-center mt-8 text-gray-600">
        Already have an account?{" "}
        <button className="font-semibold text-[#7C3AED] hover:underline">
         Log In
        </button>
      </p>
    </>
  );
};
export default RegisterPage;
