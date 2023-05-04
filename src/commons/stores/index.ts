import { atom, selector } from 'recoil'
import getAccessToken from '../libraries/getAccessToken'

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
})

export const refreshTokenLoadable = selector({
  key: 'refreshTokenLoadable',
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  },
})

export const filesState = atom<string[]>({
  key: 'fileState',
  default: [],
})

export const pageState = atom<number>({
  key: 'pageState',
  default: 1,
})

export const answerPageState = atom<number>({
  key: 'answerPageState',
  default: 1,
})

export const cartItemsState = atom<string[]>({
  key: 'cartItemsState',
  default: [],
})
