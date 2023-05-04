import Image from 'next/image'
import 'twin.macro'
import { Div } from '../../../commons/styles'
import Header from './Header'
import { IUseditem } from '../../../commons/types/generated/types'
import Body from './Body'
import Footer from './Footer'
import UseBrandHeader from '../../commons/hooks/custom/UseBrandHeader'

interface IBrandHeaderProps {
  brand: IUseditem
}

const BrandHeader = ({ brand }: IBrandHeaderProps) => {
  const { onClickDeleteUseditem, onClickToggleUseditemPick } = UseBrandHeader(
    brand._id,
  )
  return (
    <Div tw="pt-16 items-start p-[68px] pb-[170px]">
      <Div>
        {brand.images?.[0] ? (
          <Image
            src={`https://storage.googleapis.com/${brand.images?.[0]}`}
            height="611px"
            width="863px"
            objectFit="contain"
            objectPosition="top center"
            alt={brand.name}
          />
        ) : (
          <Image
            src="/images/defaultImg.svg"
            height="611px"
            width="863px"
            objectFit="contain"
            objectPosition="top center"
            alt="defaultImg"
          />
        )}
      </Div>
      <Div tw="flex-col pl-[50px]">
        <Header
          title={brand.name}
          sellerId={brand.seller?._id}
          brandId={brand._id}
          onClickDeleteUseditem={onClickDeleteUseditem}
        />
        <Body brand={brand} onClickUseditemPick={onClickToggleUseditemPick} />
        <Footer />
      </Div>
    </Div>
  )
}

export default BrandHeader
