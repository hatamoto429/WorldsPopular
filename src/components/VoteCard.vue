<template>
  <div class="card-container">
    <div class="element"></div>
  </div>
</template>

<script>
export default {
  name: "VoteCard"
}
</script>

<style scoped>
.card-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.element {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border: 2px solid black;
  background-image: url('@/media/beer.jpg');
}
</style>
