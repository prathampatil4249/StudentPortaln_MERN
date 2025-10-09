import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddStudent() {

    const [formdata,setFormData] = useState({
        name:"",
        email:"",
        age:""
    })

    const navigate =useNavigate()
        let apiurl="http://localhost:5000/addNewUser"

    function handleChange(e){
        setFormData({...formdata,[e.target.name]:e.target.value})
    }

    function handleSubmit(e)
    {
      
        e.preventDefault()
        axios.post(apiurl,formdata)
        .then((res) => {
          alert(res.data.message)
          navigate("/allstudent")
          console.log(res.data.u);
      
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: "fantasy" }}>Add Student</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center">
                <h4>Fill Your Details</h4>
              </div>
              <div className="card-body">
                <form   onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className='form-label'>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
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
                      placeholder="Enter Your Age"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block"  >
                    Submit
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

export default AddStudent;















































// import React, { useState } from 'react';
// import axios from 'axios';

// function AddStudent() {
//   const [formdata, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const apiurl =  "http://localhost:5000/addNewUser";

//   function handleChange(e) {
//     setFormData({ ...formdata, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsSubmitting(true);
//     axios.post(apiurl, formdata)
//       .then((res) => {
//         console.log(res);
//         alert("Student added successfully!");
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to add student. Please try again.");
//       })
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   }

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Add Student</h1>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card shadow-lg">
//               <div className="card-header bg-primary text-white text-center">
//                 <h4>Fill Your Details</h4>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       name="name"
//                       value={formdata.name}
//                       placeholder="Enter your name"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={formdata.email}
//                       placeholder="Enter your email"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="age">Age</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="age"
//                       name="age"
//                       value={formdata.age}
//                       placeholder="Enter your age"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="btn btn-primary btn-block"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddStudent;
