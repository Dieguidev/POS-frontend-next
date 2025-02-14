import { submitOrder } from "@/actions/submit-order-action"
import { useStore } from "@/store/store"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"



export const SubmitOrderForm = () => {

  const coupon = useStore(state => state.coupon.name)
  const contents = useStore(state => state.contents)
  const clearOrder = useStore(state => state.clearOrder)
  const order = {
    coupon,
    contents
  }


  const submitOrderWithData = submitOrder.bind(null, order)
  const [state, dispatch] = useActionState(submitOrderWithData, {
    errors: [],
    success: ''
  })

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => {
        toast.error(error)
      })
    }
    if (state.success) {
      clearOrder()
      toast.success(state.success)
    }
  }, [state, clearOrder])



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
