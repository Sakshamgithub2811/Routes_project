import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import toast from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(true);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  } 

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");

  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>Email Address <sup>*</sup></p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Id"
          name="email"
        />
      </label>

      <label>
        <p>Password <sup>*</sup></p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password Id"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
      </label>

      <Link to="#">
        <p>
          Forgot Password
        </p>
      </Link>

      <button>
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
