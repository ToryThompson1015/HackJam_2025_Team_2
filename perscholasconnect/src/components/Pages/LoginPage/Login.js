import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import sideImg from "../../../assets/images/form.png";
import logo from "../../../assets/images/form.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const {
  //   createUser,
  //   signInWithGoogle,
  //   updateUserProfile,
  //   loading,
  //   setLoading,
  // } = useAuth();

  const slides = [
    {
      title: "Connecting Talent to Opportunities",
      text: "Discover endless opportunities on FreelanceHu, where talented freelancers and businesses unite. Jump right in with us!",
      subtext: "Upload samples of your work to impress potential clients",
    },
    {
      title: "Grow Your Freelance Business",
      text: "Access top-tier clients and grow your career by showcasing your portfolio and skills.",
      subtext: "Quality work attracts quality clients",
    },
    {
      title: "Hire Smarter, Hire Better",
      text: "Find skilled freelancers for your projects quickly and efficiently through our smart-matching system.",
      subtext: "Your dream team is just a click away",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const image = form.image.files[0];

  //   try {
  //     setLoading(true);
  //     // 1. Upload image and get image url
  //     const image_url = await imageUpload(image);
  //     console.log(image_url);
  //     //2. User Registration
  //     const result = await createUser(email, password);
  //     console.log(result);

  //     // 3. Save username and photo in firebase
  //     await updateUserProfile(name, image_url);
  //     navigate("/");
  //     toast.success("Signup Successful");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.message);
  //   }
  // };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={sideImg}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-purple-900/60"></div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 w-[65%] h-[90%] bg-white/90 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-md">
        {/* Left Slider Panel */}
        <div className="w-1/2 relative flex items-center justify-center p-10 text-center text-white">
          <div className="absolute inset-0 bg-purple-900/60 z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="mb-10 text-sm">{slides[currentSlide].text}</p>
            <p className="text-xs">{slides[currentSlide].subtext}</p>
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-1/2 bg-white flex items-center justify-center px-12">
          <div className="w-full max-w-md">
            <img src={logo} alt="Logo" className="h-10 mb-6 mx-auto" />
            <h2 className="text-2xl font-bold mb-1">
              Welcome to <span className="text-purple-600">FreelanceHu</span>👋
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Kindly fill in your details below to create an account
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="Daphne Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-left">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition"
              >
                Register with us
              </button>
            </form>

            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <a href="#" className="text-purple-600 font-semibold">
                Login
              </a>
            </p>

            <div className="flex items-center justify-center my-4">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase mx-2">
                Or
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            <div className="flex justify-center gap-4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                className="w-5 h-5"
                alt="Google"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                className="w-5 h-5"
                alt="Apple"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                className="w-5 h-5"
                alt="Facebook"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                className="w-5 h-5"
                alt="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
