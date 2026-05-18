import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiBox,
  FiPlusSquare,
  FiMail,
} from "react-icons/fi";

function Sidebar() {
  const linkStyles = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    borderRadius: "8px",
    textDecoration: "none",
    background: isActive ? "#2563EB" : "transparent",
    color: "white",
    fontWeight: "500",
  });

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#0F172A",
        color: "white",
        padding: "20px",
        position: "sticky",
        top: 0,
      }}
    >
        <h2
  style={{
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "35px",
    letterSpacing: "-0.5px",
  }}
>
  Shah Fabric 
</h2>


      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <NavLink to="/dashboard" style={linkStyles}>
          <FiHome />
          Dashboard
        </NavLink>

        <NavLink to="/products" style={linkStyles}>
          <FiBox />
          Products
        </NavLink>

        <NavLink to="/add-product" style={linkStyles}>
          <FiPlusSquare />
          Add Product
        </NavLink>

        <NavLink to="/enquiries" style={linkStyles}>
          <FiMail />
          Enquiries
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;