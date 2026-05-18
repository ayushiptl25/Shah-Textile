function ProductCard({
  product,
  onDelete,
  onEdit,
}) {
  return (
    <div
      className="card"
      style={{
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}

      <div
        style={{
          height: "220px",
        }}
      >
        <img
          src={product.image}
          alt={product.fabricName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* CONTENT */}

      <div style={{ padding: "20px" }}>
        <h3>{product.fabricName}</h3>

        <p
          style={{
            marginTop: "8px",
          }}
        >
          {product.fabricType}
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p>
            <strong>Width:</strong>
            {" "}
            {product.width}
          </p>

          <p>
            <strong>
              Composition:
            </strong>
            {" "}
            {
              product.composition
            }
          </p>

          <p>
            <strong>
              Min Order:
            </strong>
            {" "}
            {
              product.minOrder
            }
          </p>

          <p>
            <strong>
              Delivery:
            </strong>
            {" "}
            {
              product.deliveryTime
            }
          </p>

          <p>
            <strong>
              Colors:
            </strong>
            {" "}
            {product.colors}
          </p>
        </div>

        {/* STATUS */}

        <div
          style={{
            marginTop: "18px",
          }}
        >
          <span
            className={
              product.status ===
              "Active"
                ? "badge badge-success"
                : "badge badge-warning"
            }
          >
            {product.status}
          </span>
        </div>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "22px",
          }}
        >
          <button
            onClick={() =>
              onEdit(product)
            }
            style={{
              flex: 1,
              padding: "11px",
              background: "#2563EB",
              color: "white",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(product.id)
            }
            style={{
              flex: 1,
              padding: "11px",
              background: "#EF4444",
              color: "white",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;