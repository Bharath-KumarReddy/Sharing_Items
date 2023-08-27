import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });


    

  const handleSubmit = async (event) => {
   event.preventDefault();
    try {

      const validation = () => {
        const {email , password} = values;

        if(email===''){
          toast.error('email should not be empty',{
            position : "bottom-right"
          })
        }else if(password === ''){
          toast.error('password should not be empty',{
            position:"bottom-right"
          })
        }
      }

      validation();
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
            toast.success('Registered successfully', {
                position: "bottom-right",
              });
          navigate("/login");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="card mt-5">
          <div className="card-header text-center">
            <h2>Register</h2>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="mt-3 text-center">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Register;
