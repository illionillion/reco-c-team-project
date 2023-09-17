import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

const mapContainerStyle = {
    height: '100vh',
    width: '100%',
};

export const GMap: FC = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.VITE_GOOGLE_MAP_API_KEY ?? '',
        language: 'ja',
    });
    const mapRef = useRef<google.maps.Map>();
    const onMapLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
    }, []);
    
        const onLoad = (marker: google.maps.Marker) => {
            console.log('marker: ', marker);
        };

    //   現在地
    const [currentPosition, setCurrentPosition] = useState<google.maps.LatLng | undefined>();

    const get_vending = async () => {
        const respocse = await fetch ('/api/get-vending-machine')
        const data = await respocse.json()
        console.log(data);
        
    }

    useEffect(() => {
        console.log("!!");
        
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log("!!!");
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const latlng = new google.maps.LatLng(lat, lng); //中心の緯度, 経度
            setCurrentPosition(latlng);
            get_vending()
        }, () => {
            const latlng = new google.maps.LatLng(35.6812405, 139.7649361); //中心の緯度, 経度
            setCurrentPosition(latlng);
        });
    }, []);


    if (loadError) return 'Error';
    if (!isLoaded) return 'Load中';
    return (
        <>
            <GoogleMap
                id='map'
                mapContainerStyle={mapContainerStyle}
                zoom={20}
                center={currentPosition ? currentPosition : {
                    lat: 35.6812405,
                    lng: 139.7649361,
                }}
                onLoad={onMapLoad}
            >
                {currentPosition && <MarkerF title="現在地" position={currentPosition} onLoad={onLoad} onClick={e => {
                    console.log(e.latLng);
                    console.log(e.domEvent);
                }} />}
                <MarkerF
                    position={{
                        lat: 35.6895,
                        lng: 139.6917,
                    }}
                    onLoad={onLoad}
                />
            </GoogleMap>
        </>
    );
};