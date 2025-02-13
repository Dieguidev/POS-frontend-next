'use client'

import { useStore } from "@/store/store"
import { ShoppingCartItem } from "./ShoppingCartItem"

export const ShoppingCart = () => {

  const contents = useStore(state => state.contents)

  return (
    <>
      {
        contents.length ? (
          <>
            <h2 className="text-4xl font-bold text-gray-900">Resumen de Ventas</h2>
            <ul role="list" className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">
              {
                contents.map(item => (
                  <ShoppingCartItem
                    key={item.productId}
                    item={item}
                  />
                ))
              }
            </ul>
          </>
        )
          : (
            <p className="text-xl text-center text-gray-900">El carrito esta vacío</p>
          )
      }
    </>
  )
}
