import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
    const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    
    // Log the action for debugging purposes
    console.log("User logged out");

    // Redirect to the login page
    alert("User Logged out sure")
    
    navigate("");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Crud Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link className="nav-link" to="">Homes</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="addstudent">
                Add New Student
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="allstudent">
                Show All Students
              </a>
            </li>
           <li className="nav-item">
              <button className="btn btn-outline-light nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;


 



// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const handleLogout = () => {
//     // Add your logout logic here
//     console.log("User logged out");
//   };

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <a className="navbar-brand" href="#">
//           Crud Application
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="">
//                 Homes
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="addstudent">
//                 Add New Student
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="allstudent">
//                 Show All Students
//               </a>
//             </li>
//             <li className="nav-item">
//               <button className="btn btn-outline-light nav-link" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
