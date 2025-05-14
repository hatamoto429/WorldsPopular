<template>
  <div class="main">
    <Background />
    <Footer />
    <div class="content">
      <h1 class="title">World's Popular</h1>
      <h2 class="subtitle">What's hot?</h2>
      <h3 class="description">Well, you decide — power to the people ...</h3>

      <div class="button-container">
        <div class="button-row">
          <router-link to="/vote" class="button">Vote!</router-link>
          <router-link to="/guess" class="button">Guess!</router-link>
        </div>
        <router-link to="/leaderboard" class="button">Leaderboard</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import Background from '@/components/Background.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "MainView",
  components: {
    Background,
    Footer
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.title {
  font-size: 40px;
  font-weight: bolder;
  padding-bottom: 50px;
  color: white;
}

.subtitle {
  font-size: 25px;
  margin-bottom: 16px;
  padding-bottom: 50px;
  color: white;
}

.description {
  font-size: 25px;
  margin-bottom: 30px;
  padding-bottom: 50px;
  color: white;
}

.button-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.button-row {
  display: flex;
  gap: 20px;
}

.button {
  flex: 1;
  text-align: center;
  padding: 20px;
  font-size: 22px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #38da3e;
}
</style>
