import {
  useContext,
  useState,
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import ProductCard from "../components/ProductCard";

import EditProductModal from "../components/EditProductModal";

import { ProductContext }
from "../context/ProductContext";

function Products() {
  const {
    products,
    deleteProduct,
    updateProduct,
  } = useContext(ProductContext);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  return (
    <AdminLayout>
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1>
          Textile Catalogue
        </h1>

        <p>
          Manage all textile products
        </p>
      </div>

      {/* PRODUCTS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct}
            onEdit={
              setSelectedProduct
            }
          />
        ))}
      </div>

      {/* MODAL */}

      {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
          onUpdate={updateProduct}
        />
      )}
    </AdminLayout>
  );
}

export default Products;