import * as yup from 'yup'

export const registrationSchema = yup.object({
  name: yup
    .string()
    .min(2, '최소 2자 이상 입력해주세요.')
    .max(12, '최대 12자 이하 입력해주세요.')
    .required('이름을 입력해주세요.'),
  remarks: yup
    .string()
    .min(2, '최소 2자 이상 입력해주세요.')
    .max(36, '최대 36자 이하 입력해주세요.')
    .required('내용을 입력해주세요.'),
  contents: yup
    .string()
    .min(2, '최소 2자 이상 입력해주세요.')
    .max(1000, '최대 1000자 이하로 입력해주세요.')
    .required('내용을 입력해주세요.'),
  price: yup
    .number()
    .typeError('숫자를 입력해주세요')
    .positive('숫자를 입력해주세요.')
    .required('상품가격을 입력해주세요.'),
  tags: yup.string(),
  useditemAddress: yup.object().shape({
    zipcode: yup.string(),
    address: yup.string(),
    addressDetail: yup.string(),
    lat: yup.number(),
    lng: yup.number(),
  }),
  images: yup
    .array()
    .of(yup.mixed())
    .compact()
    .max(3, '이미지는 3개까지 등록가능합니다.'),
})

export interface Schema
  extends Omit<yup.InferType<typeof registrationSchema>, 'price'> {}
