import React from 'react'
import Template from '../components/Template';
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
  <Template
  title="join the millions learning to code with studyNotion for free."
  desc1="Build Skills for today , tomorrow, and beyond."
  desc2="Education to Future-proof your career."
  image={loginImg}
  formType="login"
  setIsLoggedIn={setIsLoggedIn}
  />
  </div>

  )
}

export default Login
