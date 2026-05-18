import { useContext } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { ProductContext } from "../context/ProductContext";

function Dashboard() {
  const { products } = useContext(ProductContext);

  const enquiries = [
    {
      id: 1,
      company: "ABC Textiles",
      fabric: "Premium Cotton",
      quantity: "500 Meters",
      status: "New",
    },
    {
      id: 2,
      company: "Skyline Fashion",
      fabric: "Denim Fabric",
      quantity: "200 Kg",
      status: "Pending",
    },
    {
      id: 3,
      company: "Urban Threads",
      fabric: "Polyester Blend",
      quantity: "350 Rolls",
      status: "Reviewed",
    },
  ];

  return (
    <AdminLayout>
      {/* HEADER */}

      <div style={{ marginBottom: "30px" }}>
        <h1>Dashboard</h1>

        <p style={{ marginTop: "6px" }}>
          Manage textile catalogue and enquiries
        </p>
      </div>

      {/* STATS */}

      <div style={statsContainer}>
        <div style={cardStyle}>
          <p>Total Products</p>

          <h2 style={{ marginTop: "10px" }}>
            {products.length}
          </h2>
        </div>

        <div style={cardStyle}>
          <p>Total Enquiries</p>

          <h2 style={{ marginTop: "10px" }}>
            {enquiries.length}
          </h2>
        </div>

        <div style={cardStyle}>
          <p>Active Fabrics</p>

          <h2 style={{ marginTop: "10px" }}>
            {
              products.filter(
                (item) =>
                  item.status === "Active"
              ).length
            }
          </h2>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div style={contentContainer}>
        {/* RECENT PRODUCTS */}

        <div style={sectionStyle}>
          <div style={sectionHeader}>
            <h3>Recent Products</h3>
          </div>

          {products
            .slice(-4)
            .reverse()
            .map((product) => (
              <div
                key={product.id}
                style={listItem}
              >
                <div>
                  <h4>
                    {product.fabricName}
                  </h4>

                  <p>
                    {product.fabricType}
                  </p>
                </div>

                <span
                  style={{
                    ...badgeStyle,
                    background:
                      product.status ===
                      "Active"
                        ? "#DCFCE7"
                        : "#FEF3C7",
                    color:
                      product.status ===
                      "Active"
                        ? "#166534"
                        : "#92400E",
                  }}
                >
                  {product.status}
                </span>
              </div>
            ))}
        </div>

        {/* RECENT ENQUIRIES */}

        <div style={sectionStyle}>
          <div style={sectionHeader}>
            <h3>Recent Enquiries</h3>
          </div>

          {enquiries.map((item) => (
            <div
              key={item.id}
              style={listItem}
            >
              <div>
                <h4>{item.company}</h4>

                <p>
                  {item.fabric}
                </p>
              </div>

              <span
                style={{
                  ...badgeStyle,
                  background: "#DBEAFE",
                  color: "#1D4ED8",
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

/* STYLES */

const statsContainer = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const cardStyle = {
  background: "white",
  padding: "22px",
  borderRadius: "12px",
  border: "1px solid #E2E8F0",
};

const contentContainer = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "20px",
};

const sectionStyle = {
  background: "white",
  borderRadius: "12px",
  border: "1px solid #E2E8F0",
  padding: "20px",
};

const sectionHeader = {
  marginBottom: "20px",
};

const listItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 0",
  borderBottom: "1px solid #F1F5F9",
};

const badgeStyle = {
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
};

export default Dashboard;