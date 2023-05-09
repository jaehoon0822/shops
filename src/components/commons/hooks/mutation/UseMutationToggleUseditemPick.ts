import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from '../../../../commons/types/generated/types'

const TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`

const UseMutationToggleUseditemPick = () => {
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, 'toggleUseditemPick'>,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK)

  return { toggleUseditemPick }
}

export default UseMutationToggleUseditemPick
