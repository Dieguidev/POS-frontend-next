import { Transaction } from '@/schemas/schemas'
import { formatCurrency } from '@/utils/formatCurrency'
import Image from 'next/image'
import React from 'react'


type TransactionSummaryProps = {
  transaction: Transaction
}

export const TransactionSummary = ({ transaction }: TransactionSummaryProps) => {


  return (
    <>
      <div className='mb-6  text-sm font-medium text-gray-500 border border-gray-200'>
        <p className='text-sm font-black text-gray-900 p-2 bg-gray-200 '>ID: {transaction.id} </p>
        <ul
          role="list"
          className="divide-y divide-gray-200 border-t border-gray-200 border-b"
        >
          {transaction.contents.map((item) => (
            <li className="p-5 " key={item.id}>
              <div className='flex items-center space-x-6 '>
                <div className='relative w-32 h-32'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/img/${item.product.image}`}
                    alt={`Imagen de Producto ${item.product.name}`}
                    className='object-contain'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>
                <div className="flex-auto space-y-1 ">
                  <h3 className="text-gray-900">{item.product.name}</h3>
                  <p className="text-lg font-extrabold  text-gray-900">{formatCurrency(item.price)}</p>
                  <p className="text-lg  text-gray-900">Cantidad: {item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <dl className="space-y-6  text-sm font-medium text-gray-500 p-5">
          {
            transaction.coupon && (
              <>
                <div className="flex justify-between">
                  <dt>Cupón Utilizado</dt>
                  <dd className="text-gray-900">{transaction.coupon}</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Descuento</dt>
                  <dd className="text-gray-900">-{formatCurrency(transaction.discount ?? 0)}</dd>
                </div>
              </>
            )
          }
          <div className="flex justify-between">
            <dt className="text-lg text-black font-black">Total </dt>
            <dd className="text-lg text-black font-black">{formatCurrency(transaction.total - (transaction.discount ?? 0))}</dd>
          </div>
        </dl>
      </div>
    </>
  )
}
