import 'twin.macro'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import React, { useEffect } from 'react'
import UseMap from '../../commons/hooks/custom/UseMap'

interface IMapProps {
  w?: string
  h?: string
  ad?: string
  getValues?: UseFormGetValues<any>
  setValue?: UseFormSetValue<any>
}

const Map = ({ w, h, ad, getValues, setValue }: IMapProps) => {
  const { isLoaded, settingMap, settingScript } = UseMap(setValue)

  const address = ad ?? getValues?.('useditemAddress.address')

  useEffect(settingScript, [settingScript])
  useEffect(() => {
    if (!isLoaded) return
    window.kakao.maps.load(() => {
      settingMap(address)
    })
  }, [isLoaded, settingMap, address])

  return <div tw="w-full h-[150px]" css={{ width: w, height: h }} id="map" />
}

export default Map
