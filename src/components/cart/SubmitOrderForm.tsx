import { submitOrder } from "@/actions/submit-order-action"
import { useStore } from "@/store/store"
import { useActionState } from "react"


export const SubmitOrderForm = () => {

  const coupon = useStore(state => state.coupon)
  const contents = useStore(state => state.contents)
  const order = {
    coupon,
    contents
  }

  const [state, dispatch] = useActionState(submitOrder, {
    errors: [],
    success: ''
  })

  return (
    <form
    action={dispatch}
    >
      <input
        type="submit"
        className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white uppercase font-bold p-3"
        value="Confirmar compra"
      />
    </form>
  )
}
