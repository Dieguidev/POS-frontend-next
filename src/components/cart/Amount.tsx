import { formatCurrency } from "@/utils/formatCurrency"

type AmountProps = {
  label: string
  amount: number
}

export const Amount = ({ amount, label }: AmountProps) => {
  return (
    <div className="flex justify-between">
      <dt className="font-bold">{label}</dt>
      <dd className="text-gray-900">{formatCurrency(amount) }</dd>
    </div>
  )
}
