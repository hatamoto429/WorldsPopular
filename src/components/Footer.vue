<template>
  <footer class="footer">
    <div class="info">
      <p>&copy; The Worlds Popular 2025 - Vote and Guess, all the things in existence.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: rgba(165, 165, 165, 0.418);
  border-top: 2px solid #000000;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.info {
  display: flex;
  gap: 250px;
  color: black;
  font-weight: bolder;
}
</style>
