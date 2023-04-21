import * as yup from 'yup'

export const registrationSchema = yup.object({
  name: yup.string().required('이름을 입력해주세요.'),
  remarks: yup.string().required('내용을 입력해주세요.'),
  contents: yup.string().required('내용을 입력해주세요.'),
  price: yup.string().required('상품가격을 입력해주세요.'),
  tags: yup.string(),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  lat: yup.string(),
  lng: yup.string(),
  images: yup.string(),
})
