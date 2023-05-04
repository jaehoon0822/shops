import { useMemo } from 'react'
import { useSetRecoilState } from 'recoil'
import UseFetchUseditem from '../query/UseFetchUseditem'
import UseRoute from './UseRoute'
import UseMutationCreateUseditemQuestion from '../mutation/UseMutationCreateUseditemQuestion'
import { ICreateUseditemQuestionInput } from '../../../../commons/types/generated/types'
import { FETCH_USEDITEM_QUESTIONS } from '../query/UseFetchUseditemQuestions'
import { pageState } from '../../../../commons/stores'

const UseBrand = () => {
  const { query } = UseRoute()
  const setPage = useSetRecoilState(pageState)
  const { createUseditemQuestion } = UseMutationCreateUseditemQuestion()
  const { data: useditemData } = UseFetchUseditem(query.id as string)
  const onSubmitCreateUsedItemQuestion =
    (id: string) => (data: ICreateUseditemQuestionInput) => {
      void createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: data,
          useditemId: id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: id,
            },
          },
        ],
      })
      setPage(1)
    }
  const notice = useMemo(
    () => [
      '상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.',
      '상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.',
      [
        '상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다.',
        '(전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)',
      ],
      '주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.',
      '반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여 주십시오.',
      '제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품 부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외) 반품/교환이 불가합니다.',
      'A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 에이블리 고객센터를 통해 부탁드립니다.',
      '상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다.',
    ],
    [],
  )
  return {
    brand: useditemData?.fetchUseditem,
    onSubmitCreateUsedItemQuestion,
    notice,
  }
}

export default UseBrand
