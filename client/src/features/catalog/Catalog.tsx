import { useState, useEffect } from "react";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import agent from "../../app/api/agent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<ProductList products={products} />} />
        <Route path=":id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
