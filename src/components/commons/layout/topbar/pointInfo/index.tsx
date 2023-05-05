import tw from 'twin.macro'
import Script from 'next/script'
import { ContentsLink, ContentsSpan } from '../../index.styled'
import Modal from '../../../../Molecule/Modal'
import { Div, H3 } from '../../../../../commons/styles'
import SelectBox from '../../../../Molecule/SelectBox'
import UsePointInfo from '../../../hooks/custom/UsePointInfo'

const PointInfo = () => {
  const { data, isActive, onClickToggle, onClickPaymentPoint } = UsePointInfo()
  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <ContentsSpan>
        <ContentsSpan
          css={tw`
            font-extrabold 
          `}
        >
          {data?.name}
        </ContentsSpan>
        님 포인트
        <button type="button" onClick={onClickToggle}>
          <ContentsLink>
            <ContentsSpan
              css={tw`
              px-4
          `}
            >
              {data?.userPoint?.amount} P 충전
            </ContentsSpan>
          </ContentsLink>
        </button>
        {isActive ? (
          <Modal
            isActive={isActive}
            onToggleActive={onClickToggle}
            buttonLabel="충전하기"
          >
            <Div tw="justify-center pt-6 flex-col">
              <H3 tw="font-bold text-xl pb-4">충전하실 금액을 선택해주세요!</H3>
              <SelectBox
                defaultValue="포인트 선택"
                options={[
                  '5000',
                  '10000',
                  '15000',
                  '20000',
                  '30000',
                  '40000',
                  '50000',
                ]}
                onClick={onClickPaymentPoint}
              />
            </Div>
          </Modal>
        ) : null}
      </ContentsSpan>
    </>
  )
}

export default PointInfo
