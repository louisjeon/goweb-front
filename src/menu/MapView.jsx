import React, { useEffect } from "react";

const {kakao} = window;
const MapView = () => {

    useEffect(()=> {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        }
        const map = new kakao.maps.Map(container, options);
    })
    return (
        <>
        <div id="map" style={
            {
                width: '1920px',
                height: '800px'
            }}></div>
        </>
    )
}

export default MapView