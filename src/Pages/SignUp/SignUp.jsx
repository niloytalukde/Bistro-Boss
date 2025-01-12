import { Link } from 'react-router-dom';
import img from '../../assets/menu/authentication2.png'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser,googleLogin}=useContext(AuthContext)
  const handelSubmit =(e)=>{
e.preventDefault()
const from =e.target 
const name =from.name.value
const email =from.email.value
const password=from.password.value
createUser(email,password)
.then(res=>{
  console.log(res.user);
  from.reset()
})
  }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('././assets/menu/authentication.png')]">
      {/* Outer Container */}
      <div className="w-full max-w-4xl bg-[url('././assets/menu/authentication.png')] rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Type here"
                name='name'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password" 
                name='password'
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already registered?{" "}
            <Link to={"/login"} className="text-yellow-500 font-semibold">
              Go to log in
            </Link>
          </p>
          <div className="mt-4 text-center">
            <p>Or sign up with</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <i className="fab fa-facebook text-blue-600"><FaFacebook></FaFacebook></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <i className="fab fa-google text-red-500"><FaGithub></FaGithub></i>
              </button>
              <button onClick={googleLogin} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="fab fa-github text-gray-800"><FaGoogle></FaGoogle></span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-1/2 bg-cover bg-center items-center flex "
        
        > <img src={img} alt="" /></div>
      </div>
    </div>
    );
};

export default SignUp;