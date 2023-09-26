import type { VendingType } from '@/lib/@type/vending';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SpinnerModal } from './SpinnerModal';
import { useBoolean } from '@chakra-ui/react';
import type { Drink } from '@/lib/@type/drink';
import { VendingModal } from './VendingModal';
import { Header } from './Header';
import type { SearchResult } from '@/lib/@type/search-result';
import { ResultDrawer } from './ResultDrawer';

const mapContainerStyle = {
  height: 'calc(100svh - 4rem)',
  width: '100%',
};

interface GMapProps {
  contents: VendingType[]
}

export const GMap: FC<GMapProps> = ({ contents }) => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? '',
    language: 'ja',
  });
  const mapRef = useRef<google.maps.Map>();
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onLoad = (marker: google.maps.Marker) => {
    console.log('marker: ', marker);
  };

  // 検索ボックス
  const searchInputRef = useRef<HTMLInputElement>(null);
  //  現在地
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLng | undefined>();
  //  自販機
  const [currentVenndings, setCurrentVendings] = useState<VendingType | undefined>();
  //  自販機
  const [venndings, setVendings] = useState<VendingType[]>(contents);
  // 飲み物
  const [drinks, setDrinks] = useState<Drink[]>([]);
  // スピナー
  const [isSpinnerOpen, { on: onSpinnerOpen, off: onSpinnerOff }] = useBoolean();
  // モーダル
  const [isVendingModalOpen, { on: onVendingModalOpen, off: onVendingModalOff }] = useBoolean();
  // 検索結果ドロワー
  const [isResultDrawerOpen, { on: onResultDrawerOpen, off: onResultDrawerOff }] = useBoolean();
  // 飲み物検索結果
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  /**
   * 自販機情報取得
   */
  const getVending = async () => {
    try {
      const respocse = await fetch('/api/get-vending-machine');
      const { contents } = await respocse.json();
      setVendings(contents);
    } catch (error) {
      console.log(error);
    } finally {
      onSpinnerOff();
    }
  };

  /**
   * ピンクリック時に自販機の飲み物取得
   * @param id 自販機ID
   */
  const handleMarkerFClick = async (id: number) => {
    try {
      const response = await fetch(`/api/get-drinks-by-vending?vid=${id}`);
      const { contents } = await response.json();
      setDrinks(contents);
      setCurrentVendings(venndings.find(item => item.id === id));
      onVendingModalOpen();
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * 飲み物を検索
   * @returns 
   */
  const submitSearch = async () => {
    if (!searchInputRef || !searchInputRef.current || searchInputRef.current.value === '') return;
    try {
      onSpinnerOpen();
      
      const response = await fetch(`/api/search-drink?name=${searchInputRef.current.value}`);
      const { contents } = await response.json();
      console.log(contents);
      // 成功したらドロワー表示して結果を表示
      setSearchResult(contents);
      onResultDrawerOpen();
    } catch (error) {
      console.log(error);
      onResultDrawerOff();
    } finally {
      onSpinnerOff();
    }
  };

  /**
   * ピンに移動する
   * @param latLng 
   */
  const panTo = (latLng: google.maps.LatLng | google.maps.LatLngLiteral) => {
    mapRef.current?.panTo(latLng)
  }

  useEffect(() => {

    if (isLoaded) {

      onSpinnerOpen();

      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const latlng = new google.maps.LatLng(lat, lng); //中心の緯度, 経度
        setCurrentPosition(latlng);
        getVending();
      }, () => {
        const latlng = new google.maps.LatLng(35.66003283140587, 139.70522242457778); //中心の緯度, 経度
        setCurrentPosition(latlng);
        onSpinnerOff();
      });
    }
  }, [isLoaded]);


  if (loadError) return 'Error';
  return (
    <>
      <Header searchInputRef={searchInputRef} submitSearch={submitSearch} onResultDrawerOff={onResultDrawerOff} />
      {currentVenndings && <VendingModal drinks={drinks} isOpen={isVendingModalOpen} vending={currentVenndings} onClose={onVendingModalOff} />}
      <ResultDrawer panTo={panTo} isOpen={isResultDrawerOpen} searchResult={searchResult} searchWord={searchInputRef.current?.value ?? ''} onClose={onResultDrawerOff}/>
      <SpinnerModal isOpen={isSpinnerOpen && !isLoaded} onClose={onSpinnerOff} />
      {isLoaded && <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={currentPosition ? currentPosition : {
          lat: 35.66003283140587,
          lng: 139.70522242457778,
        }}
        onLoad={onMapLoad}
      >
        {currentPosition && <MarkerF title="現在地" label='現在地' position={currentPosition} onLoad={onLoad} />}
        {venndings?.map((vending, index) => {
          return (
            <MarkerF
              key={index}
              position={{
                lat: parseFloat(vending.lat),
                lng: parseFloat(vending.lng)
              }}
              onLoad={onLoad}
              onClick={() => handleMarkerFClick(vending.id)}
            />
          );
        })}
      </GoogleMap>}
    </>
  );
};