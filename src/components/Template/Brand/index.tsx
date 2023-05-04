import 'twin.macro'
import { Wrapper } from '../../../commons/styles'
import Comment from '../../Molecule/Comment'
import BrandSubTitle from '../../Molecule/BrandSubTitle'
import BrandHeader from '../../Molecule/BrandHeader'
import UseBrand from '../../commons/hooks/custom/UseBrand'
import BrandBody from '../../Molecule/BrandBody'
import Textarea from '../../Molecule/Textarea'

const Brand = () => {
  const { brand, notice, onSubmitCreateUsedItemQuestion } = UseBrand()

  return (
    <Wrapper tw="flex-col items-center w-[1270px]">
      {brand ? (
        <>
          <BrandHeader brand={brand} />
          <BrandSubTitle title="DETAIL" />
          <BrandBody brand={brand} notice={notice} />
          <BrandSubTitle title="Q&A" />
          <Textarea
            name="contents"
            onSubmit={onSubmitCreateUsedItemQuestion(brand._id)}
          />
          <Comment id={brand._id} />
        </>
      ) : null}
    </Wrapper>
  )
}

export default Brand
