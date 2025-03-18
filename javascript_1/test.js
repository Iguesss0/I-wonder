var panoramaOptions = {
    position: myLatlng,
    pov: {
      heading: 34,
      pitch: 10
    }
  };


  var panorama = new  google.maps.StreetViewPanorama(document.getElementById('pano'),panoramaOptions);
