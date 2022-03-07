import {useState, useEffect} from 'react'
import Products from 'api/product.json'
import ProductItem from 'components/ui/ProductItem'
export default function Favorites() {

  const [products , setProducts] = useState([]);

  useEffect(()=>{
    setProducts(Products);
  },[])
  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className="overflow-hidden rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1">
        {products.length && products.map((product,index)=> <ProductItem key={index} product={product} />)}
      </div>
    </div>
  )
}
