import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
function EditStudent() {

    const [formdata,setFormData] = useState({
        name:"",
        email:"",
        age:""
    })
    const {_id} = useParams()
    const navigate =useNavigate()
        let apiurl="http://localhost:5000/getUserById"

        let apiurl1="http://localhost:5000/updateUser"

    function handleChange(e){
        setFormData({...formdata,[e.target.name]:e.target.value})
    }
      
    useEffect(()=>{

        fetchStudent()
    },[])

    function fetchStudent(){
      axios.get(`${apiurl}/${_id}`).then((res)=>{
        // console.log(res.data)
        setFormData(res.data)
        
        
    }).catch((error)=>{
      console.log(error)
    })
    }
    function handleSubmit(e)
    {
      
        e.preventDefault()
        axios.put(`${apiurl1}/${_id}`,formdata)
        .then((res) => {
          alert(res.data.message)
          navigate("/allstudent")
          console.log(res);
      
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'fantasy' }}> Edit Student</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center">
                <h4>Edit Your Details</h4>
              </div>
              <div className="card-body">
                <form   onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className='form-label'>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                     value={formdata.name}
                      placeholder="Enter your name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className='form-label'>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formdata.email}
                      placeholder="Enter your email"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className='form-label'>Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={formdata.age}
                      placeholder="Enter Your Age"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block"  >
                   Update Student
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;










































