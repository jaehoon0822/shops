import { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

const UseMap = (setValue?: UseFormSetValue<any>) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const settingScript = () => {
    const $script = document.createElement('script')
    $script.defer = true
    $script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=a6074bf9c1983e8ed29335240326bec9&libraries=services&autoload=false'
    $script.addEventListener('load', () => setIsLoaded(true))
    document.head.appendChild($script)
  }

  const addressSearch = (address: string, mapInstance: any) => {
    if (address) {
      const geocoder = new window.kakao.maps.services.Geocoder()

      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)
          if (setValue) {
            setValue('useditemAddress.lat', result[0].y)
            setValue('useditemAddress.lng', result[0].x)
          }
          const marker = new window.kakao.maps.Marker({
            position: coords,
          })
          marker.setMap(mapInstance)
          mapInstance.panTo(coords)
        }
      })
    }
  }

  const settingMap = (address: string) => {
    const map = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(37.5762386885113, 127.168806998897),
      level: 3,
    }
    const mapInstance = new window.kakao.maps.Map(map, options)

    addressSearch(address, mapInstance)
  }

  return {
    isLoaded,
    setIsLoaded,
    settingScript,
    settingMap,
    setValue,
  }
}

export default UseMap
