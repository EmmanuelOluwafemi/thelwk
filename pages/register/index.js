import React, { useState } from "react";
import Link from "next/link";

import AuthLayout from "../../layout/authLayout/AuthLayout";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Register = () => {
  // Component States
  const [showPassword, setShowPassword] = useState(false);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState("1970");
  // Values for Date of Birth Dropdown
  const days = [];
  for (let num = 1; num < 32; num++) {
    days.push({
      value: num,
      label: num,
    });
  }

  const months = [
    {
      value: "Jan",
      label: "January",
    },
    {
      value: "Feb",
      label: "February",
    },
    {
      value: "Mar",
      label: "March",
    },
    {
      value: "Apr",
      label: "April",
    },
    {
      value: "May",
      label: "May",
    },
    {
      value: "Jun",
      label: "June",
    },
    {
      value: "Jul",
      label: "July",
    },
    {
      value: "Aug",
      label: "August",
    },
    {
      value: "Sep",
      label: "September",
    },
    {
      value: "Oct",
      label: "October",
    },
    {
      value: "Nov",
      label: "November",
    },
    {
      value: "Dec",
      label: "December",
    },
  ];

  const years = [];
  const currentYear = new Date().getFullYear() - 15;
  for (let num = 1940; num <= currentYear; num++) {
    years.push({
      value: num,
      label: num,
    });
  }

  return (
    <AuthLayout>
      <form>
        <h1>Create Account</h1>
        <div className="input reg">
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className="input reg">
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className="input reg">
          <label htmlFor="password">Password</label>
          <input type={showPassword ? "text" : "password"} />
          <span className="show" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </span>
        </div>
        <div className="input reg">
          <label htmlFor="date_of_birth">Date of Birth</label>
          <div className="group">
            <select>
              {days.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select>
              {months.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select>
              {years.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input reg">
          <label htmlFor="gender">Gender</label>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <button>Register</button>
        <small className="cta">
          Already have an account? <Link href="/login"> Login. </Link>
        </small>
      </form>
    </AuthLayout>
  );
};

export default Register;
