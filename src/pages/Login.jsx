import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.png";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div style={container}>
      {/* LEFT SIDE */}
      <div style={leftSide}>
        <div style={logoBox}>
          <div style={logoCircle}>S</div>
          <h1 style={brandName}>Shah Fabric</h1>
        </div>

        <h2 style={headline}>Precision in Every Thread.</h2>

        <p style={subText}>
          Access the global standard in fabric inventory management.
          Professional workflows for the modern textile industry.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={rightSide}>
        <form style={card} onSubmit={handleLogin}>
          <h2 style={title}>Log in</h2>

          <label style={label}>E-mail Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={input}
            required
          />

          <label style={label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={input}
            required
          />

          <div style={row}>
            <label style={remember}>
              <input type="checkbox" /> Remember Me
            </label>

            <span style={forgot}>Forgot Password?</span>
          </div>

          <button type="submit" style={button}>
            Log in
          </button>

          <p style={signup}>
            Don’t Have An Account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

/* STYLES */

const container = {
  display: "flex",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
};

/* LEFT */
const leftSide = {
  flex: 1,
  backgroundImage:
    `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${loginImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const logoBox = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "40px",
};

const logoCircle = {
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "white",
};

const brandName = {
  fontSize: "28px",
  fontWeight: "700",
  color: "white",
};

const headline = {
  fontSize: "36px",
  fontWeight: "700",
  marginBottom: "15px",
  color: "white",
};

const subText = {
  maxWidth: "420px",
  lineHeight: "1.6",
  opacity: 0.85,
  color: "white",
};

/* RIGHT */
const rightSide = {
  flex: 1,
  background: "#F5F7FB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const card = {
  width: "360px",
  background: "#0F172A",
  padding: "40px",
  borderRadius: "20px",
  color: "white",
  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
};

const title = {
  fontSize: "28px",
  marginBottom: "25px",
};

const label = {
  fontSize: "13px",
  display: "block",
  marginTop: "15px",
  marginBottom: "6px",
  opacity: 0.8,
};

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "12px",
  fontSize: "12px",
};

const remember = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

const forgot = {
  textDecoration: "underline",
  cursor: "pointer",
};

const button = {
  width: "100%",
  marginTop: "25px",
  padding: "12px",
  borderRadius: "10px",
  background: "#2563EB",
  color: "white",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
};

const signup = {
  marginTop: "18px",
  fontSize: "12px",
  textAlign: "center",
  opacity: 0.8,
};

export default Login;