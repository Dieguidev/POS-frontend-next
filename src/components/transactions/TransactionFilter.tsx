'use client'

import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export const TransactionFilter = () => {

  const [date, setDate] = useState<Value>(new Date())

  console.log(date);


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
