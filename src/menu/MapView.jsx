import React, { useEffect } from "react";

const { kakao } = window;
const MapView = () => {
  useEffect(() => {
    let lat = 36;
    let long = 126;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
      });
    }
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, long), //지도의 중심좌표.
      level: 10, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);
  });
  return (
    <>
      <div
        id="map"
        style={{
          width: "1000px",
          height: "800px",
        }}
      ></div>
    </>
  );
};

export default MapView;
