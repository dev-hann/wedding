"use client";

import { Location } from "@/models/location";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export interface LocationProps {
  location: Location;
}

export default function NaverMap({ location }: LocationProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // 네이버 지도 API 스크립트 로드
  useEffect(() => {
    if (!window.naver) {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  // 지도 렌더링
  useEffect(() => {
    if (isScriptLoaded && window.naver && mapRef.current) {
      const { latitude, longitude } = location;
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom: 15,
        mapDataControl: false,
        logoControl: false,
        scaleControl: false,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(latitude, longitude),
        map,
      });
    }
  }, [isScriptLoaded, location]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 위치 정보 카드 */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex justify-between items-center mb-4">
        {/* 위치 정보 텍스트 */}
        <div className="flex flex-col items-start space-y-1">
          <h2 className="text-lg font-semibold text-gray-800">
            {location.name}
          </h2>
          <p className="text-sm text-gray-600">{location.address}</p>
          <p className="text-sm text-gray-600">TEL: {location.phoneNumber}</p>
        </div>
        {/* 전화 걸기 버튼 */}
        <a
          href={`tel:${location.phoneNumber}`}
          className="p-2 text-blue-500 hover:text-blue-600 transition-colors duration-200"
          aria-label="전화 걸기"
        >
          <span className="text-2xl">📞</span>
        </a>
      </div>

      {/* 지도 */}
      <div ref={mapRef} className="w-full h-[50vh] rounded-lg shadow-lg" />

      <div className="mt-4 flex gap-8">
        <a
          href={"https://naver.me/G65MFUhM"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/navigation/naver.png`}
            width={50}
            height={50}
            alt="네이버 지도"
          />
        </a>
        <a
          href={"https://kko.kakao.com/nDeh3BgYDa"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/navigation/kakao.png`}
            width={50}
            height={50}
            alt="카카오맵"
          />
        </a>
        <a
          href={"https://tmap.life/4283be76"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/navigation/skt.png`}
            width={50}
            height={50}
            alt="T맵"
          />
        </a>
      </div>
    </div>
  );
}
