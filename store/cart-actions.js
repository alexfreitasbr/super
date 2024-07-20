
import { uiSliceActions } from './ui-slice'
import { cartListActions } from './cart-slice'

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {

            dispatch(uiSliceActions.showNotification(
                {
                    status: "pending",
                    title: 'Sending...',
                    message: "Sending cart data!"
                }
            ))

            const response = await fetch(
                'https://redux-28b31-default-rtdb.firebaseio.com/cart.json'
            )


            if (!response.ok) {
                throw new Error("Could not fetch cart data!")
            }

            const data = await response.json()
            return data

        }

        try {
            const cartData = await fetchData()
            dispatch(cartListActions.replaceCard(
                {
                    itens: cartData.itens || [],
                    totalQuantity: cartData.totalQuantity || 0
                }
            ))
            dispatch(uiSliceActions.showNotification(
                {
                    cartIsVisible: false, notification: null
                }
            ))
        } catch (error) {
            dispatch(uiSliceActions.showNotification(
                {
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                }
            ))
        }
    }
}




export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiSliceActions.showNotification(
            {
                status: "pending",
                title: 'Sending...',
                message: "Sending cart data!"
            }
        ))

        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-28b31-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(
                        {
                            itens: cart.itens,
                            totalQuantity: cart.totalQuantity
                        }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (!response.ok) {
                throw new Error("sending cart data failed!")

            }

        }

        try {
            dispatch(uiSliceActions.showNotification(
                {
                    status: 'success',
                    title: 'Success',
                    message: 'Item added to cart successfully!'
                }
            )
            )

            await sendRequest()
        } catch (error) {

            dispatch(uiSliceActions.showNotification(
                {
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                }
            ))

        }


    }
}