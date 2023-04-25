import Registration from '../../components/Template/Registration'
import { Schema } from '../../commons/validation/registration.yup'

interface IRegistrationPageProps {
  defaultValue: Schema
}

const RegistrationPage = ({ defaultValue }: IRegistrationPageProps) => {
  return <Registration defaultValue={defaultValue} />
}

export default RegistrationPage

export async function getServerSideProps() {
  const defaultValue: Schema = {
    name: '',
    contents: '',
    remarks: '',
    useditemAddress: {
      address: '',
      addressDetail: '',
      zipcode: '',
    },
    tags: '',
    images: [],
  }
  return {
    props: {
      defaultValue,
      fallback: false,
    },
  }
}
