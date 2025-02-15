'use client'

import { format } from "date-fns"
import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export const TransactionFilter = () => {

  const [date, setDate] = useState<Value>(new Date())

  const formattedDate = date instanceof Date
    ? format(date, 'yyyy-MM-dd')
    : format(new Date(), 'yyyy-MM-dd')

  console.log(formattedDate);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
      <div>
        <Calendar
        value={date}
        onChange={setDate}
        />
      </div>
      <div>

      </div>
    </div>
  )
}
