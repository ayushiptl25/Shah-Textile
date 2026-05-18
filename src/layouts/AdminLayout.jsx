import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div
          style={{
            padding: "25px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;