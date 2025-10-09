import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

 let apiUrl ="http://localhost:5000/login"
 const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiUrl,formData)
    .then((res) => {
        
     localStorage.setItem("token",JSON.stringify(res.data.token))
    
   
      navigate("/allstudent")
    })
    .catch((err) => {
       alert(err.response.data.message)
    
    })
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
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
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-4">
                  Login
                </button>
              </form>

              <div className="text-center mt-3">
                <a href="#" className="d-block mb-2">Forgot Password?</a>
                <Link to="/register" className="d-block">Create New Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
