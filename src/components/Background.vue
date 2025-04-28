<template>
  <div class="background">
    <video class="background-video" autoplay muted loop playsinline>
      <source src="../media/PlanetEarth2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: "Background",
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -10;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  opacity: 0.85;
}
</style>
