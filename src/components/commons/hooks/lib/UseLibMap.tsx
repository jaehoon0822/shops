import { useRef, useState } from 'react'

const UseLibMap = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const MapRef = useRef<HTMLDivElement | null>(null)

  const settingScript = () => {
    const $script = document.createElement('script')
    $script.defer = true
    $script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a6074bf9c1983e8ed29335240326bec9&autoload=false'
    $script.addEventListener('load', () => setIsLoaded(true))
    document.head.appendChild($script)
  }

  const settingMap = () => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    if (MapRef !== null) {
      const map = new window.kakao.maps.Map(MapRef.current, options)
    }
  }

  return {
    isLoaded,
    setIsLoaded,
    settingScript,
    settingMap,
    MapRef,
  }
}

export default UseLibMap
