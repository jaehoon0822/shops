import UseFetchUserLoggedIn, {
  FETCH_USER_LOGGED_IN,
} from '../query/UseFetchUserLoggedIn'
import UseToggle from './UseToggle'
import {
  RequestPayParams,
  RequestPayResponse,
} from '../../../../commons/types/global'
import UseCreatePointTransactionOfLoading from '../mutation/UseCreatePointTransactionOfLoading'

const UsePointInfo = () => {
  const { isActive, onClickToggle } = UseToggle()
  const { data: fetchUserData } = UseFetchUserLoggedIn()
  const { createPointTransactionOfLoading } =
    UseCreatePointTransactionOfLoading()

  const onClickPaymentPoint = (val: string) => {
    if (!window.IMP) return
    const { IMP } = window
    IMP.init('imp49910675')

    const IMPData: RequestPayParams = {
      pg: 'kakaopay',
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: Number(val), // 결제금액
      name: `point${val}`, // 주문명
      buyer_name: fetchUserData?.fetchUserLoggedIn.name, // 구매자 이름
      buyer_tel: '',
      buyer_email: fetchUserData?.fetchUserLoggedIn.email, // 구매자 이메일
    }

    IMP.request_pay(IMPData, (response: RequestPayResponse) => {
      const { success, error_msg, imp_uid } = response

      if (success) {
        void createPointTransactionOfLoading({
          variables: {
            impUid: imp_uid as string,
          },
          refetchQueries: [
            {
              query: FETCH_USER_LOGGED_IN,
            },
          ],
        })
        onClickToggle()
        document.body.style.removeProperty('overflow')
      } else {
        console.log(`결제 실패: ${error_msg}`)
      }
    })
  }
  return {
    data: fetchUserData?.fetchUserLoggedIn,
    isActive,
    onClickToggle,
    onClickPaymentPoint,
  }
}

export default UsePointInfo
