"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Location() {
  const { x, y } = { x: 37.5665, y: 126.978 };
  const mapRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!window.naver) {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      console.log(script.src);
      script.async = true;
      script.onload = () => {
        setIsScriptLoaded(true);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isScriptLoaded && window.naver && mapRef.current) {
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(x, y),
        zoom: 15,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(x, y),
        map,
      });
    }
  }, [isScriptLoaded, x, y]);

  return <div ref={mapRef} className="w-full h-[50vh]" />;
}
