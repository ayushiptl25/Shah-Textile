function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
      }}
    >
      <h3>Admin Dashboard</h3>

      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#2563EB",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        A
      </div>
    </div>
  );
}

export default Navbar;