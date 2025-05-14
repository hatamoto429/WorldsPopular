<template>
  <div class="card-container">
    <div class="half left"></div>
    <div class="half right"></div>
  </div>
</template>

<script>
export default {
  name: "GuessCard"
}
</script>

<style scoped>
.card-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.half {
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border: 2px solid black;
}

.half:hover {
  zoom: 1000%;
}

.left {
  background-image: url('@/media/beer.jpg');
}

.right {
  background-image: url('@/media/beer.jpg');
}
</style>
