import 'twin.macro'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { Div } from '../../../commons/styles'
import { IUseditem } from '../../../commons/types/generated/types'
import Map from '../Map'

interface IBrandBody {
  brand: IUseditem
  notice: (string | string[])[]
}

const BrandBody = ({ brand, notice }: IBrandBody) => {
  return (
    <>
      {brand.images?.length !== 0 ? (
        <Div tw="flex-col mt-[105px]">
          {brand.images?.map((image) => (
            <Div tw="relative w-full h-screen mb-4" key={uuidv4()}>
              <Image
                src={`https://storage.googleapis.com/${image}`}
                layout="fill"
                objectFit="contain"
                alt="detail image"
              />
            </Div>
          ))}
        </Div>
      ) : null}
      <Div
        tw="mt-[97px] flex-col items-start"
        dangerouslySetInnerHTML={{
          __html: brand.contents,
        }}
      />
      <Div tw="mt-[97px]">
        <span tw="text-[32px] font-bold">배송/교환/반품/AS 관련 유의사항</span>
      </Div>
      <Div>
        <span tw="text-[24px] font-light">
          상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
          안내사항보다 우선 적용됩니다.
        </span>
      </Div>
      {brand.useditemAddress?.address && (
        <Map h="791px" ad={brand.useditemAddress?.address} />
      )}
      <Div tw="mt-8 mb-20">
        <ul tw="list-disc ml-[20px]">
          {notice.map((item) => {
            if (Array.isArray(item)) {
              return (
                <li key={uuidv4()}>
                  <span tw="font-medium">
                    {item[0]}
                    <span tw="font-bold">{item[1]}</span>
                  </span>
                </li>
              )
            }
            return (
              <li key={uuidv4()}>
                <span tw="font-medium">{item}</span>
              </li>
            )
          })}
        </ul>
      </Div>
    </>
  )
}

export default BrandBody
