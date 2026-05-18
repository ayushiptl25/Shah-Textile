import {
  useContext,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import { ProductContext }
from "../context/ProductContext";

function AddProduct() {
  const { addProduct } =
    useContext(ProductContext);

  const [imagePreview, setImagePreview] =
    useState("");

  const [formData, setFormData] =
    useState({
      fabricName: "",
      fabricType: "",
      width: "",
      composition: "",
      minOrder: "",
      deliveryTime: "",
      colors: "",
      status: "Active",
      image: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

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

  const handleSubmit = () => {
    addProduct(formData);

    alert(
      "Product Added Successfully"
    );

    setFormData({
      fabricName: "",
      fabricType: "",
      width: "",
      composition: "",
      minOrder: "",
      deliveryTime: "",
      colors: "",
      status: "Active",
      image: "",
    });

    setImagePreview("");
  };

  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        Add Product
      </h1>

      <div
        className="card"
        style={{
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2,1fr)",
            gap: "20px",
          }}
        >
          {/* IMAGE */}

          <div
            style={{
              gridColumn: "1/-1",
            }}
          >
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
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginTop: "20px",
                }}
              />
            )}
          </div>

          <input
            type="text"
            name="fabricName"
            placeholder="Fabric Name"
            value={
              formData.fabricName
            }
            onChange={handleChange}
          />

          <input
            type="text"
            name="fabricType"
            placeholder="Fabric Type"
            value={
              formData.fabricType
            }
            onChange={handleChange}
          />

          <input
            type="text"
            name="width"
            placeholder="Width"
            value={formData.width}
            onChange={handleChange}
          />

          <input
            type="text"
            name="composition"
            placeholder="Composition"
            value={
              formData.composition
            }
            onChange={handleChange}
          />

          <input
            type="text"
            name="minOrder"
            placeholder="Min Order"
            value={
              formData.minOrder
            }
            onChange={handleChange}
          />

          <input
            type="text"
            name="deliveryTime"
            placeholder="Delivery Time"
            value={
              formData.deliveryTime
            }
            onChange={handleChange}
          />

          <input
            type="text"
            name="colors"
            placeholder="Available Colors"
            value={formData.colors}
            onChange={handleChange}
          />

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

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "25px",
            padding:
              "14px 24px",
            background: "#2563EB",
            color: "white",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Add Product
        </button>
      </div>
    </AdminLayout>
  );
}

export default AddProduct;