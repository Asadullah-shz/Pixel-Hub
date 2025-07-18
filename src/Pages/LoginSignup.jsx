import React, { useState } from 'react';
import LoginForm from '../Components/LoginSignup/LoginForm';
import SignupForm from '../Components/LoginSignup/SignupForm';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        {isLogin ? <LoginForm /> : <SignupForm />}
        <p className="loginsignup-switch">
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
