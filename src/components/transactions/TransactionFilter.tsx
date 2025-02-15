'use client'

import { getSalesByDate } from "@/api/api"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import { TransactionSummary } from "./TransactionSummary"
import { formatCurrency } from "@/utils/formatCurrency"


type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export const TransactionFilter = () => {

  const [date, setDate] = useState<Value>(new Date())

  const formattedDate = date instanceof Date
    ? format(date, 'yyyy-MM-dd')
    : format(new Date(), 'yyyy-MM-dd')

  const { data, isLoading } = useQuery({
    queryKey: ['sales', formattedDate],
    queryFn: () => getSalesByDate(formattedDate)
  })

  const total = data?.reduce((total, transaction) => {
    if (transaction.coupon) {
      return total + transaction.total - (transaction.discount ?? 0)
    }
    return total + transaction.total
  }, 0) ?? 0


  if (data) return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
      <div>
        <Calendar
          value={date}
          onChange={setDate}
        />
      </div>
      <div>

        {isLoading && <p className="text-lg text-center">Cargando...</p>}
        {
          data ? data.length ?
            data.map(transaction => (
              <TransactionSummary key={transaction.id} transaction={transaction} />
            )) : <p className="text-lg text-center">No hay ventas en esta fecha</p> : null
        }
        <p className="my-5 text-lg font-bold text-right">Total del dia: {''}
          <span className="font-normal">{formatCurrency(total)}</span>
        </p>
      </div>
    </div>
  )
}
