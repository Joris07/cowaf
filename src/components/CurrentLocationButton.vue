<template>
    <div id="position-actuelle" @click="useCurrentLocation">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
           <path d="M7.99984 9.33335V10.6667C5.7907 10.6667 3.99984 12.4576 3.99984 14.6667H2.6665C2.6665 11.7212 5.05432 9.33335 7.99984 9.33335ZM7.99984 8.66669C5.78984 8.66669 3.99984 6.87669 3.99984 4.66669C3.99984 2.45669 5.78984 0.666687 7.99984 0.666687C10.2098 0.666687 11.9998 2.45669 11.9998 4.66669C11.9998 6.87669 10.2098 8.66669 7.99984 8.66669ZM7.99984 7.33335C9.47317 7.33335 10.6665 6.14002 10.6665 4.66669C10.6665 3.19335 9.47317 2.00002 7.99984 2.00002C6.5265 2.00002 5.33317 3.19335 5.33317 4.66669C5.33317 6.14002 6.5265 7.33335 7.99984 7.33335ZM13.8854 14.0474L11.9998 16L10.1142 14.0474C9.07284 12.969 9.07284 11.2206 10.1142 10.1422C11.1556 9.06375 12.844 9.06375 13.8854 10.1422C14.9268 11.2206 14.9268 12.969 13.8854 14.0474ZM12.9263 13.1212C13.4688 12.5595 13.4688 11.6301 12.9263 11.0684C12.4092 10.5328 11.5905 10.5328 11.0734 11.0684C10.5309 11.6301 10.5309 12.5595 11.0734 13.1212L11.9998 14.0806L12.9263 13.1212Z" fill="#263238"/>
       </svg>
       <p>Utiliser ma position actuelle</p>
       <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
           <path d="M4.45457 5.50004L0 1.22222L1.27273 0L7 5.50004L1.27273 11L0 9.77779L4.45457 5.50004Z" fill="#263238"/>
       </svg>
   </div>
</template>

<script>
   export default {
       name: 'CurrentLocationButton',
       props: {
            callback: Function,
       },
       methods: {
           useCurrentLocation() {
               if (navigator.geolocation) {
                   navigator.geolocation.getCurrentPosition(async (position) => {
                       const lat = position.coords.latitude;
                       const lng = position.coords.longitude;
                       
                       const address = await this.geocodeLatLng(lat, lng);
                       this.$emit('update:searchInputValue', address);
                       setTimeout(() => {
                            this.$emit('update:validateStep');
			            }, 500);
                   }, () => {
                       alert("Erreur lors de l'obtention de la position.");
                   });
               } else {
                   alert("La géolocalisation n'est pas prise en charge.");
               }
           },
           async geocodeLatLng(lat, lng) {
               try {
                   const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
                   const data = await response.json();
                   return data.address.isolated_dwelling + ', ' + data.address.postcode + ', ' + data.address.city_district;
               } catch (error) {
                   throw error;
               }
           }
       }
   };
</script>

<style scoped>
   #position-actuelle {
       display: flex;
       align-items: center;
       gap: 10px;
   }
</style>