import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-5xl h-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden flex">

        {/* LEFT PANEL */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center text-white px-10 bg-[#3bb19b]">
          <h2 className="text-3xl font-bold mb-4">
            {isLogin ? "Hello, Friend!" : "Welcome Back!"}
          </h2>

          <p className="text-center mb-6">
            {isLogin
              ? "Enter your personal details and start your journey with us"
              : "To keep connected with us please login with your personal info"}
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-[#3bb19b] transition"
          >
            {isLogin ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10">
              <h2 className="text-3xl font-bold text-[#1d3c3c] mb-4">
            GLAM & GLOW
          </h2>
          <h2 className="text-3xl font-bold text-[#3bb19b] mb-4">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mb-4">
            {[FaFacebookF, FaGooglePlusG, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                <Icon />
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-4">
            or use your email {isLogin ? "to login" : "for registration"}
          </p>

          {/* FORM */}
          <form className="w-full space-y-4">
            {!isLogin && (
              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <HiOutlineUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            )}

            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
              <HiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
              <HiOutlineLockClosed className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3bb19b] text-white py-3 rounded-full hover:opacity-90 transition"
            >
              {isLogin ? "SIGN IN" : "SIGN UP"}
            </button>
          </form>

          {/* MOBILE TOGGLE */}
          <p className="md:hidden text-sm mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-[#3bb19b] font-semibold cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
