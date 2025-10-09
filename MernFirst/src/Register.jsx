import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate()
  
  let apiUrl ="http://localhost:5000/register"
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiUrl,formData)
        .then((res) => {
            alert(res.data.message)
          navigate("/login")
          console.log(res)
         
        })
        .catch((err) => {
          console.log(err)
        })


  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Create Account</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="uname">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    name="uname"
                    placeholder="Enter username"
                    value={formData.uname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success btn-block mt-4">
                  Register
                </button>
              </form>

              <div className="text-center mt-3">
                <a href="login">Already have an account? Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
