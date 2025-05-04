

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background:rgba(43, 5, 233, 0.89);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 32px;
          z-index: 999;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .navbar .logo {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .nav-links {
           display: flex;
  justify-content: space-around; /* Spreads links across the navbar */
  align-items: center;
  gap: 24px;
  width: 100%; /* Makes links span the full width of the navbar */
  padding: 0 32px;
        }

        .nav-links a {
          color: black;
          text-decoration: none;
          font-weight: 600;
           padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
        }
  .nav-links a:hover,
.nav-links a.active {
  background: linear-gradient(135deg, #4f46e5,rgb(247, 82, 82));
  color: white;
}

        .nav-toggle {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${open ? "flex" : "none"};
            flex-direction: column;
            background:rgb(70, 157, 229);
            position: absolute;
            top: 60px;
            right: 0;
            width: 200px;
            padding: 16px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }

          .nav-toggle {
            display: block;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo" style={{color:'red'}}>VIBE STAY HOSTEL</div>
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
