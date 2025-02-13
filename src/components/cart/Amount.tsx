import { formatCurrency } from "@/utils/formatCurrency"

type AmountProps = {
  label: string
  amount: number
  discount?: boolean
}

export const Amount = ({ amount, label, discount}: AmountProps) => {
  return (
    <div className={`${discount && 'bg-green-400 text-green-900'} flex justify-between p-1`}>
      <dt className="font-bold">{label}</dt>
      <dd className="text-gray-900">{discount && '-'}{formatCurrency(amount) }</dd>
    </div>
  )
}
