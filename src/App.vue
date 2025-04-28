<template>
  <div class="app-container">
    <!--<img class="logo" src="@/assets/icons/Logo_1.jpeg" alt="logo" />-->
    <div class="main-container">
      <Background />
      <Footer />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Background from '@/components/Background.vue';

export default {
  name: "App",
  components: {
    Background,
    Footer
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content {
  flex: 1;
  width: 100%;
}
</style>
