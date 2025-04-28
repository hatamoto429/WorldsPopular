<template>
  <div class="main">
    <div class="content">
      <h1 class="title">World's Popular</h1>
      <h2 class="subtitle">What's the hot shit?</h2>
      <h3 class="description">Well, you decide — power to the people or whatever they say...</h3>

      <div class="button-row">
        <router-link to="/vote" class="button">Vote!</router-link>
        <router-link to="/guess" class="button">Guess!</router-link>
      </div>

      <router-link to="/leaderboard" class="leaderboard-button">Leaderboard</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView"
};
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 20px;
  box-sizing: border-box;
}

.content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.title {
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
}

.subtitle {
  font-size: 28px;
  margin-bottom: 16px;
  color: white;
}

.description {
  font-size: 20px;
  margin-bottom: 30px;
  color: white;
}

.button-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.button,
.leaderboard-button {
  background-color: #4caf50;
  color: white;
  padding: 14px 28px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.button:hover,
.leaderboard-button:hover {
  background-color: #45a049;
}

.leaderboard-button {
  width: calc(2 * 160px + 20px);
  max-width: 100%;
}
</style>
