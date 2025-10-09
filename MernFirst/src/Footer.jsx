import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 fixed-bottom">
      <div className="container text-center">
        <p>&copy; 2025 Crud Application. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Terms of Service
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
