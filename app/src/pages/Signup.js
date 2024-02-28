import React from 'react';
import signupImg from "../assets/signup.png"
import Template from '../components/Template';

const Signup = ({setIsLoggedIn}) => {
  return (
     <Template
    title="join the millions learning to code with studyNotion for free."
    desc1="Build Skills for today , tomorrow, and beyond."
    desc2="Education to Future-proof your career."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
