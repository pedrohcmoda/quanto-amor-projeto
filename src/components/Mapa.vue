<template>
    <div class="map-wrapper">
      <div ref="mapContainer" class="map-container"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import mapboxgl from 'mapbox-gl';
  
  mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
  
  const mapContainer = ref(null);
  const coordinates = [
    { lng: -50.648500, lat: -23.179800, label: "Centro" },
    { lng: -50.645200, lat: -23.183000, label: "UENP" },
    { lng: -50.651700, lat: -23.176500, label: "Vila Nova" },
    { lng: -50.644300, lat: -23.181700, label: "Rodoviária" },
    { lng: -50.653800, lat: -23.175200, label: "Estádio Ubirajara Medeiros" },
  ];
  
  onMounted(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-50.647644, -23.179245],
      zoom: 14,
    });
  
    coordinates.forEach(({ lng, lat, label }) => {
      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setText(label))
        .addTo(map);
    });
  
    map.resize();
  });
  </script>
  
  <style scoped>
  .map-wrapper {
    position: relative;
    width: 100%;
    height: 400px;
  }
  
  .map-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  </style>
  