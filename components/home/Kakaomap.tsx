import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import store from '../../assets/icon/store.png';
import { MdLocationOn } from 'react-icons/md';

interface KakaoMapProps {
  address?: string;
  onSearch: (mapRef: any) => void;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const MapWrapper = styled.div`
  position: relative;
  height: calc(100vh - 4rem - 4rem);
  overflow: hidden;
  button {
    position: absolute;
    width: 11rem;
    height: 2.6rem;
    transform: translate(-50%, 0);
    left: 50%;
    top: 20px;
    z-index: 1;
    text-align: center;
    font-size: ${({ theme }) => theme.font.md};
    font-weight: 500;
    border-radius: 24px;
    border: none;
    background: #f85f73;
    color: #fbe8d3;
    cursor: pointer;
  }

  button:hover {
    background: #928a97;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const createMarker = (map: any, center: any, type: string) => {
  let makerImage = new window.kakao.maps.MarkerImage(
    type === 'store' ? '/location.png' : '/location.png',
    type === 'store'
      ? new window.kakao.maps.Size(35, 35)
      : new window.kakao.maps.Size(35, 35),
  );
  let marker = new window.kakao.maps.Marker({
    position: center,
    image: makerImage,
  });
  marker.setMap(map);
};

const KakaoMap: React.FC<KakaoMapProps> = ({ address, onSearch }) => {
  const mapRef = useRef<any>();

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [mapCenter, setMapCenter] = useState({
    latitude: 37.541,
    longitude: 126.986,
  });

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        let center = new window.kakao.maps.LatLng(
          mapCenter.latitude,
          mapCenter.longitude,
        );
        const map = new window.kakao.maps.Map(container, { center, level: 3 });
        mapRef.current = map;

        createMarker(map, center, 'store');
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, []);

  useEffect(() => {
    if (address) {
      let geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          let center = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          setMapCenter({ latitude: result[0].y, longitude: result[0].x });
          mapRef.current.setCenter(center);
          createMarker(mapRef.current, center, 'myLocation');
        }
      });
    }
  }, [address]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 767 && windowSize.width !== 0) {
      let center = new window.kakao.maps.LatLng(
        mapCenter.latitude,
        mapCenter.longitude,
      );
      mapRef.current.setCenter(center);
    }
  }, [windowSize]);

  return (
    <MapWrapper>
      <Map id="map" />
      <button onClick={() => onSearch(mapRef)}>현재 위치에서 검색</button>
    </MapWrapper>
  );
};

export default KakaoMap;
