import 'twin.macro'
import { Div } from '../../../../commons/styles'
import IcoButton from '../../IcoButton'

interface IButtonsProps {
  isOwner: boolean
  onClickDelete: (() => void) | (() => Promise<void>)
  onClickIsEditToggle: () => void
  onClickIsAnswerToggle?: () => void
}

const Buttons = ({
  isOwner,
  onClickDelete,
  onClickIsEditToggle,
  onClickIsAnswerToggle,
}: IButtonsProps) => {
  if (isOwner) {
    return (
      <>
        <Div tw="mr-8">
          <IcoButton
            w="14px"
            h="14px"
            src="/ico/ic_delete.svg"
            alt="delete"
            onClick={onClickDelete}
          />
        </Div>
        <Div>
          <IcoButton
            w="14px"
            h="14px"
            src="/ico/ic_edit.svg"
            alt="edit"
            onClick={onClickIsEditToggle}
          />
        </Div>
      </>
    )
  }
  if (onClickIsAnswerToggle) {
    return (
      <Div>
        <IcoButton
          w="14px"
          h="14px"
          src="/ico/ic_answer.svg"
          alt="asnwer"
          onClick={onClickIsAnswerToggle}
        />
      </Div>
    )
  }
  return null
}

export default Buttons
