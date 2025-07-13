// import { useEffect } from "react";
import { motion } from "framer-motion";
import formImage from "../../../assets/images/form.png";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-[65%] h-[90%] rounded-xl overflow-hidden shadow-2xl">
        {/* Left Side Image with Animation */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="w-1/2 h-full overflow-hidden"
        >
          <img
            src={formImage}
            alt="Animated Visual"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/60 to-blue-800/40"></div>
        </motion.div>

        {/* Right Side Form */}
        <div className="w-1/2 h-full flex items-center justify-center bg-white px-12 relative rounded-l-3xl">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Create an account
            </h2>

            <button className="w-full flex items-center justify-center py-2 mb-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Create account with Google
            </button>

            <div className="flex items-center justify-between mb-6">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">
                or
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="Create your password"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition"
              >
                Create an account
              </button>
            </form>

            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <a href="#" className="text-purple-600 font-semibold">
                Login
              </a>
            </p>

            <div className="flex justify-center gap-4 mt-6 text-gray-500">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
