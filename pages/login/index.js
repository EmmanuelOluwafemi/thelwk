import React, { useState } from "react";
import Link from "next/link";

import AuthLayout from "../../layout/authLayout/AuthLayout";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  // Component States
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <form>
        <h1>Login</h1>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className="input">
          <label htmlFor="password">
            Password <Link href="/register"> Create account. </Link>
          </label>
          <input type={showPassword ? "text" : "password"} />
          <span className="show" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </span>
        </div>
        <button>Login</button>
        <small className="cta">
          Don’t have an account? <Link href="/register"> Create account. </Link>
        </small>
      </form>
    </AuthLayout>
  );
};

export default Login;
