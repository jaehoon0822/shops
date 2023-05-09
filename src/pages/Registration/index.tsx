import Registration from '../../components/Template/Registration'
import { ICreateUseditemInput } from '../../commons/types/generated/types'

interface IRegistrationPageProps {
  defaultValue: ICreateUseditemInput
}

const RegistrationPage = ({ defaultValue }: IRegistrationPageProps) => {
  return <Registration defaultValue={defaultValue} />
}

export default RegistrationPage

export async function getServerSideProps() {
  const defaultValue: Omit<ICreateUseditemInput, 'price'> = {
    name: '',
    contents: '',
    remarks: '',
  }
  return {
    props: {
      defaultValue,
      fallback: false,
    },
  }
}
