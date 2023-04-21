import 'twin.macro'
import React, { useEffect } from 'react'
import UseMap from '../../commons/hooks/custom/UseMap'

interface IMapProps {
  w?: string
  h?: string
}

const Map = ({ w, h }: IMapProps) => {
  const { isLoaded, settingMap, settingScript, MapRef, getValues } = UseMap()

  const address = getValues('address')
  useEffect(settingScript, [settingScript])
  useEffect(() => {
    if (!isLoaded) return
    window.kakao.maps.load(() => {
      if (MapRef !== null) settingMap(address)
    })
  }, [isLoaded, settingMap, address, MapRef])

  return (
    <div
      tw="w-full h-[150px]"
      css={{ width: w, height: h }}
      ref={MapRef}
      id="map"
    />
  )
}

export default Map
