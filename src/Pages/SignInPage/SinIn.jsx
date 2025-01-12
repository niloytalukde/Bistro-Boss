import login from "../../assets/menu/authentication2.png";
import bg from "../../assets/menu/authentication.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const SinIn = () => {
  const {googleLogin,signIn}=useContext(AuthContext)
  const navigate =useNavigate()
  const handelSubmit =(e)=>{
   
    e.preventDefault()
    const from =e.target 
    const name =from.name.value
    const email =from.email.value
    const password=from.password.value
    signIn(email,password)
    .then(res=>{
      console.log(res.user);
      from.reset()
      navigate('/')
    })
      }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('././assets/menu/authentication.png')] ">
      <div className="bg-[url('././assets/menu/authentication.png')] shadow-lg rounded-lg overflow-hidden items-center  flex w-[90%] max-w-4xl">
        {/* Left Section - Illustration */}
        <div className=" md:block w-1/2 bg-cover items-center ss justify-center bg-center">
          <img src={login} alt="" />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Login
          </h2>

          <form onSubmit={handelSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Type here"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label
                htmlFor="captcha"
                className="block text-sm font-medium text-gray-600"
              >
                Captcha
              </label>
              <div className="flex items-center space-x-4">
                <button className="text-sm text-blue-600">
                  Reload Captcha
                </button> <br />
                <input
                  type="text"
                  id="captcha"
                  className="flex-1 px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Type here"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-[#dbb984] rounded-md hover:bg-[#dbb984] focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-[#dbb984]">
              New here?{" "}
              <Link to={'/signUp'} className="text-[#dbb984]">
                Create a New Account
              </Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">Or login with</p>

            <div className="flex justify-center space-x-4 mt-4">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <span className="fab fa-google text-lg text-gray-700"><FaFacebook></FaFacebook></span>
              </button>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <span className="fab fa-facebook text-lg text-gray-700"><FaGithub></FaGithub></span>
              </button>
              <button onClick={googleLogin} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <span className="fab fa-github text-lg text-gray-700"><FaGoogle></FaGoogle></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinIn;
