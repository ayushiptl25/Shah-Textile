import {
  useEffect,
  useState,
} from "react";

function EditProductModal({
  product,
  onClose,
  onUpdate,
}) {
  const [formData, setFormData] =
    useState(product);

  const [imagePreview, setImagePreview] =
    useState(product.image);

  useEffect(() => {
    setFormData(product);
    setImagePreview(product.image);
  }, [product]);

  /* HANDLE INPUT CHANGE */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /* HANDLE IMAGE */

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl =
        URL.createObjectURL(file);

      setImagePreview(imageUrl);

      setFormData({
        ...formData,
        image: imageUrl,
      });
    }
  };

  /* SUBMIT */

  const handleSubmit = () => {
    onUpdate(formData);

    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* HEADER */}

        <div style={headerStyle}>
          <h2>Edit Product</h2>

          <button
            onClick={onClose}
            style={closeButton}
          >
            ✕
          </button>
        </div>

        {/* FORM */}

        <div style={formGrid}>
          {/* IMAGE */}

          <div
            style={{
              gridColumn: "1 / -1",
            }}
          >
            <label
              style={{
                fontWeight: "600",
                marginBottom: "10px",
                display: "block",
              }}
            >
              Upload Product Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginTop: "15px",
                  border:
                    "1px solid #E2E8F0",
                }}
              />
            )}
          </div>

          {/* FABRIC NAME */}

          <input
            type="text"
            name="fabricName"
            placeholder="Fabric Name"
            value={
              formData.fabricName
            }
            onChange={handleChange}
          />

          {/* FABRIC TYPE */}

          <input
            type="text"
            name="fabricType"
            placeholder="Fabric Type"
            value={
              formData.fabricType
            }
            onChange={handleChange}
          />

          {/* WIDTH */}

          <input
            type="text"
            name="width"
            placeholder="Width"
            value={formData.width}
            onChange={handleChange}
          />

          {/* COMPOSITION */}

          <input
            type="text"
            name="composition"
            placeholder="Composition"
            value={
              formData.composition
            }
            onChange={handleChange}
          />

          {/* QUANTITY */}

          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={
              formData.quantity
            }
            onChange={handleChange}
          />

          {/* DELIVERY TIME */}

          <input
            type="text"
            name="deliveryTime"
            placeholder="Delivery Time"
            value={
              formData.deliveryTime
            }
            onChange={handleChange}
          />

          {/* COLORS */}

          <input
            type="text"
            name="colors"
            placeholder="Available Colors"
            value={formData.colors}
            onChange={handleChange}
          />

          {/* STATUS */}

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>
              Active
            </option>

            <option>
              Draft
            </option>
          </select>
        </div>

        {/* BUTTONS */}

        <div style={buttonContainer}>
          <button
            onClick={onClose}
            style={cancelButton}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            style={saveButton}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "rgba(0,0,0,0.45)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  width: "700px",
  maxHeight: "90vh",
  overflowY: "auto",
  background: "white",
  borderRadius: "16px",
  padding: "30px",
  border: "1px solid #E2E8F0",
};

const headerStyle = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  marginBottom: "25px",
};

const closeButton = {
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(2, 1fr)",
  gap: "18px",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  marginTop: "30px",
};

const cancelButton = {
  padding: "12px 18px",
  background: "#E2E8F0",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const saveButton = {
  padding: "12px 18px",
  background: "#2563EB",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

export default EditProductModal;