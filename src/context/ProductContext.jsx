import {
  createContext,
  useEffect,
  useState,
} from "react";

export const ProductContext =
  createContext();

function ProductProvider({ children }) {
  const defaultProducts = [
    {
      id: 1,
      fabricName: "Premium Cotton",
      fabricType: "Cotton",
      width: "58 Inches",
      composition: "100% Cotton",
      quantity: "500 Meters",
      deliveryTime: "5 Days",
      colors: "Black, White",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    },
  ];

  const [products, setProducts] =
    useState(() => {
      const savedProducts =
        localStorage.getItem(
          "textileProducts"
        );

      return savedProducts
        ? JSON.parse(savedProducts)
        : defaultProducts;
    });

  useEffect(() => {
    localStorage.setItem(
      "textileProducts",
      JSON.stringify(products)
    );
  }, [products]);

  const addProduct = (product) => {
    setProducts([
      ...products,
      {
        ...product,
        id: Date.now(),
      },
    ]);
  };

  const deleteProduct = (id) => {
    const updatedProducts =
      products.filter(
        (product) => product.id !== id
      );

    setProducts(updatedProducts);
  };

  const updateProduct = (
    updatedProduct
  ) => {
    const updatedProducts =
      products.map((product) =>
        product.id ===
        updatedProduct.id
          ? updatedProduct
          : product
      );

    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;