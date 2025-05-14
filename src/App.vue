<template>
  <div class="app-container">
    <!--<img class="logo" src="@/assets/icons/Logo_1.jpeg" alt="logo" />-->
    <div class="main-container">

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>


export default {
  name: "App",

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
