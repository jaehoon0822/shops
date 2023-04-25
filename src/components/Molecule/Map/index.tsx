import 'twin.macro'
import React, { useEffect } from 'react'
import UseMap from '../../commons/hooks/custom/UseMap'

interface IMapProps {
  w?: string
  h?: string
}

const Map = ({ w, h }: IMapProps) => {
  const { isLoaded, settingMap, settingScript, getValues } = UseMap()

  const address = getValues('useditemAddress.address')
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
