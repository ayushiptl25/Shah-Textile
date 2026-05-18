import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

function Enquiries() {
  const [selectedEnquiry, setSelectedEnquiry] =
    useState(null);

  const [enquiries, setEnquiries] =
    useState([
      {
        id: 1,
        company: "ABC Textiles",
        customer: "Rohit Sharma",
        phone: "+91 9876543210",
        fabric: "Premium Cotton",
        quantity: "500 Meters",
        color: "Black",
        address: "Surat, Gujarat",
        status: "New",
      },

      {
        id: 2,
        company: "Skyline Fashion",
        customer: "Amit Patel",
        phone: "+91 9988776655",
        fabric: "Denim Fabric",
        quantity: "200 Kg",
        color: "Dark Blue",
        address: "Ahmedabad, Gujarat",
        status: "Completed",
      },
    ]);

  /* MARK AS COMPLETED */

  const markAsCompleted = (
    enquiryId
  ) => {
    const updatedEnquiries =
      enquiries.map((item) =>
        item.id === enquiryId
          ? {
              ...item,
              status:
                "Completed",
            }
          : item
      );

    setEnquiries(
      updatedEnquiries
    );

    if (
      selectedEnquiry &&
      selectedEnquiry.id ===
        enquiryId
    ) {
      setSelectedEnquiry({
        ...selectedEnquiry,
        status: "Completed",
      });
    }
  };

  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        Customer Enquiries
      </h1>

      {/* TABLE */}

      <div
        style={{
          background: "white",
          borderRadius: "16px",
          overflow: "hidden",
          border:
            "1px solid #E2E8F0",
        }}
      >
        <table
          width="100%"
          style={{
            borderCollapse:
              "collapse",
          }}
        >
          <thead
            style={{
              background: "#F8FAFC",
            }}
          >
            <tr>
              <th style={tableHead}>
                Company
              </th>

              <th style={tableHead}>
                Customer
              </th>

              <th style={tableHead}>
                Fabric
              </th>

              <th style={tableHead}>
                Quantity
              </th>

              <th style={tableHead}>
                Status
              </th>

              <th style={tableHead}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map(
              (item) => (
                <tr key={item.id}>
                  <td style={tableCell}>
                    {item.company}
                  </td>

                  <td style={tableCell}>
                    {item.customer}
                  </td>

                  <td style={tableCell}>
                    {item.fabric}
                  </td>

                  <td style={tableCell}>
                    {item.quantity}
                  </td>

                  <td style={tableCell}>
                    <span
                      style={{
                        padding:
                          "6px 12px",
                        borderRadius:
                          "20px",
                        background:
                          item.status ===
                          "Completed"
                            ? "#DCFCE7"
                            : "#DBEAFE",

                        color:
                          item.status ===
                          "Completed"
                            ? "#166534"
                            : "#1D4ED8",

                        fontSize:
                          "13px",

                        fontWeight:
                          "600",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td style={tableCell}>
                    <button
                      onClick={() =>
                        setSelectedEnquiry(
                          item
                        )
                      }
                      style={{
                        padding:
                          "8px 14px",
                        background:
                          "#2563EB",
                        color:
                          "white",
                        borderRadius:
                          "8px",
                        border: "none",
                        cursor:
                          "pointer",
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* DETAILS */}

      {selectedEnquiry && (
        <div
          style={{
            marginTop: "30px",
            background: "white",
            borderRadius: "16px",
            padding: "25px",
            border:
              "1px solid #E2E8F0",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",

              alignItems:
                "center",

              marginBottom: "25px",
            }}
          >
            <h2>
              Enquiry Details
            </h2>

            <button
              onClick={() =>
                setSelectedEnquiry(
                  null
                )
              }
              style={{
                background:
                  "transparent",
                border: "none",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* DETAILS GRID */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2,1fr)",

              gap: "18px",
            }}
          >
            <DetailItem
              label="Company"
              value={
                selectedEnquiry.company
              }
            />

            <DetailItem
              label="Customer"
              value={
                selectedEnquiry.customer
              }
            />

            <DetailItem
              label="Phone"
              value={
                selectedEnquiry.phone
              }
            />

            <DetailItem
              label="Fabric"
              value={
                selectedEnquiry.fabric
              }
            />

            <DetailItem
              label="Quantity"
              value={
                selectedEnquiry.quantity
              }
            />

            <DetailItem
              label="Color"
              value={
                selectedEnquiry.color
              }
            />

            <DetailItem
              label="Address"
              value={
                selectedEnquiry.address
              }
            />

            <DetailItem
              label="Status"
              value={
                selectedEnquiry.status
              }
            />
          </div>

          {/* BUTTON */}

          {selectedEnquiry.status !==
            "Completed" && (
            <button
              onClick={() =>
                markAsCompleted(
                  selectedEnquiry.id
                )
              }
              style={{
                marginTop: "25px",
                padding:
                  "12px 18px",
                background:
                  "#16A34A",
                color: "white",
                border: "none",
                borderRadius:
                  "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Mark As Completed
            </button>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

/* DETAIL ITEM */

function DetailItem({
  label,
  value,
}) {
  return (
    <div
      style={{
        background: "#F8FAFC",
        padding: "16px",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          color: "#64748B",
          marginBottom: "6px",
        }}
      >
        {label}
      </p>

      <h4>{value}</h4>
    </div>
  );
}

/* TABLE */

const tableHead = {
  padding: "18px",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "600",
};

const tableCell = {
  padding: "18px",
  borderTop: "1px solid #E2E8F0",
};

export default Enquiries;