import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function AllStudent() {
  const [student, setStudent] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
  let apiurl = "http://localhost:5000/getAllStudents";

const navigate = useNavigate()

  useEffect(() => {
    fetchStudent();
  }, []);

  function fetchStudent() {
    axios
      .get(apiurl)
      .then((res) => {
        console.log(res.data.u);
        setStudent(res.data.u);
      })
      .catch((err) => {
        console.log(err);
      });
  } 

const deleteHandler=async(obj) =>{
  
    setStudent(student.filter((e)=>e._id!==obj._id))
  await axios.delete(`http://localhost:5000/deleteUser/${obj._id}`)
}


  return (
    <div className="container " style={{height:'900px'}}>
      <h1 className="text-center" style={{ fontFamily: "fantasy" }}>
        All Students
      </h1>
      <hr />
      <div className="row">
        {student.map((e, index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card m-auto">
                <div className="card-body ">
                  <h5 className="card-title"><strong>Name:-</strong>{e.name}</h5>
                  <h5 className="card-title"><strong>Email:-</strong>{e.email}</h5>
                  <h5 className="card-title"><strong>Age:-</strong>{e.age}</h5>
                  <button className='btn btn-primary'onClick={()=>navigate(`/editstudent/${e._id}`)} >Edit </button>&nbsp;
                  <button className='btn btn-danger' onClick={()=>{ if(window.confirm("Are i Sure u Want To Delete this record?")) deleteHandler(e)}}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllStudent;
