import 'twin.macro'
import UseSelectBox from '../../commons/hooks/custom/UseSelectBox'
import { Button, Div } from '../../../commons/styles'

interface ISelectBoxProps {
  options: string[]
  defaultValue: string
  onClick: (val?: any) => void
}

const SelectBox = ({ options, defaultValue, onClick }: ISelectBoxProps) => {
  const { isActive, onClickToggle, val, onClickSelectVal } =
    UseSelectBox(defaultValue)
  return (
    <Div tw="w-full flex-col">
      <Div
        tw="border-black border-b-2 border-solid pb-2 w-full
         transition-all duration-100 ease-in mb-4"
      >
        <button
          type="button"
          onClick={() => {
            onClickToggle()
          }}
          tabIndex={0}
          tw="bg-[url('/ico/ic_arrow.svg')] bg-no-repeat bg-right w-full text-left pt-4 font-semibold transition-all duration-100 ease-in"
          css={{
            color: val === '포인트 선택' ? '#828282' : '#000',
          }}
        >
          {val}
        </button>
      </Div>
      {isActive && (
        <ul tw="relative border-[1px] border-gray-300 rounded-[16px] w-full">
          {options.map((option, idx) => (
            <li
              key={option}
              tw="w-full border-b-[1px] border-gray-300 text-gray-400 last-of-type:border-b-0 hover:(text-black font-bold) cursor-pointer"
            >
              <button
                tw="outline-none border-none w-full p-2"
                type="button"
                onClick={() => {
                  onClickSelectVal(option)
                  onClickToggle()
                }}
                tabIndex={idx + 1}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
      <Div tw="pt-4">
        <Button
          tw="w-full rounded-lg bg-black outline-none disabled:(bg-gray-300 cursor-not-allowed)"
          disabled={val === defaultValue ? true : false}
          onClick={() => onClick(val)}
        >
          충전하기
        </Button>
      </Div>
    </Div>
  )
}

export default SelectBox
