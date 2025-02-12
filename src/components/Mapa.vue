<template>
  <div class="map-wrapper">
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@/db/firebaseConfig'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN

const map = ref(null)
const mapContainer = ref(null)
const pontosColeta = ref([])

const centralizarMapa = (lng, lat, label) => {
  if (map.value) {
    map.value.flyTo({ center: [lng, lat], zoom: 16 })
    new mapboxgl.Popup()
      .setLngLat([lng, lat])
      .setText(label)
      .addTo(map.value)
  }
}

defineExpose({ centralizarMapa })

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'pontosColeta'))
    pontosColeta.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      lng: doc.data().longitude,
      lat: doc.data().latitude,
      label: `${doc.data().nome} (${doc.data().categoria})`
    }))

    map.value = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapscoleta/cm71cfb27004001qu5uss9ujv',
      center: [-50.647644, -23.179245],
      zoom: 14
    })

    pontosColeta.value.forEach(({ lng, lat, label }) => {
      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setText(label))
        .addTo(map.value)
    })

    map.value.resize()
  } catch (error) {
    console.error('Erro ao carregar pontos de coleta:', error)
  }
})
</script>

<style scoped>
.map-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
}

.map-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 97%;
  height: 90%;
  border-radius: 8px;
}
</style>