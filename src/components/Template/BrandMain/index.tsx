import 'twin.macro'
import { Wrapper } from '../../../commons/styles'
import BrandMainBest from '../../Molecule/BrandMainBest'
import BrandMainBody from '../../Molecule/BrandMainBody'

const BrandMain = () => {
  return (
    <Wrapper tw="w-[1270px] flex-col">
      <BrandMainBest />
      <BrandMainBody />
    </Wrapper>
  )
}

export default BrandMain
