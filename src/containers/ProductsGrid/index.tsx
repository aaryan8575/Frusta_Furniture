"use client"
import ProductCard from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

const ProductsGrid = () => {
  const { products } = useProducts({})

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <>
          {products.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard product={product} />
            </ProductProvider>
          ))}
        </>
      )}
    </section>
  )
}

export default ProductsGrid
