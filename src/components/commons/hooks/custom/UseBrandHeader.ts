import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartItemsState } from '../../../../commons/stores'
import UseMutationDeleteUseditem from '../mutation/UseMutationDeleteUseditem'
import UseMutationToggleUseditemPick from '../mutation/UseMutationToggleUseditemPick'
import { FETCH_USEDITEMS } from '../query/UseFetchUseditems'
import UseFetchUseditemsIPicked from '../query/UseFetchUseditemsIPiecked'
import UseRoute from './UseRoute'

const UseBrandHeader = (useditemId: string) => {
  const [cartItems, setCartItems] = useRecoilState<string[]>(cartItemsState)
  const [pickedItems, setPickedItems] = useState<string[]>([])
  // const [cartItems, setCartItems] = useState<string[]>([])
  const { back } = UseRoute()
  const { deleteUseditem } = UseMutationDeleteUseditem()
  const { toggleUseditemPick } = UseMutationToggleUseditemPick()
  const { data: useditemsIPickedData } = UseFetchUseditemsIPicked()

  const onClickDeleteUseditem = () => {
    void deleteUseditem({
      variables: {
        useditemId,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: FETCH_USEDITEMS,
          variables: {
            page: 1,
            search: '',
          },
        },
      ],
    })

    back()
  }

  const onClickToggleUseditemPick = async () => {
    if (!pickedItems.some((item: string) => item === useditemId)) {
      setPickedItems((prev) => [...prev, useditemId])
    } else {
      const removedItems = pickedItems.filter(
        (item: string) => item !== useditemId,
      )
      setPickedItems(removedItems)
    }
    void toggleUseditemPick({
      variables: {
        useditemId,
      },
    })
  }

  const onClickToggleCart = () => {
    if (!cartItems.some((item: string) => item === useditemId)) {
      setCartItems((prev) => [...prev, useditemId])
    } else {
      const removedItems = cartItems.filter(
        (item: string) => item !== useditemId,
      )
      setCartItems(removedItems)
    }
  }

  useEffect(() => {
    const pickedItem = localStorage.getItem('pickedItems') ?? []
    const cartItem = localStorage.getItem('cartItems') ?? []
    if (pickedItem.length !== 0) {
      setPickedItems(JSON.parse(localStorage.getItem('pickedItems') as string))
    }
    if (cartItem.length !== 0) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems') as string))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pickedItems', JSON.stringify(pickedItems))
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [pickedItems, cartItems])

  return {
    pickedItems,
    cartItems,
    useditemsIPickedData,
    onClickToggleCart,
    onClickDeleteUseditem,
    onClickToggleUseditemPick,
  }
}

export default UseBrandHeader
