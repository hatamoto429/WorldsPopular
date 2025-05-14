<template>
  <div class="vote-container">
    <VoteCard />
    <div class="overlay">
      <h1 class="title">Vote this!</h1>
      <div class="button-container">
        <button class="button voteup">Dope!</button>
        <button class="button  votedown">Nope!</button>
      </div>
    </div>
    <ReturnButton />
  </div>
</template>

<script>
import ReturnButton from '@/components/ReturnButton.vue';
import VoteCard from '@/components/VoteCard.vue';

export default {
  name: "VoteView",
  components: {
    VoteCard,
    ReturnButton
  }
}
</script>

<style>
.vote-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
}

.title {
  font-size: 40px;
  font-weight: bolder;
  padding-bottom: 50px;
  color: white;
}

.button-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  gap: 50px;
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
  min-width: 200px;
}

.voteup {
  background-color: #4caf50;
}

.votedown {
  background-color: #f12323;
}

.button:hover {
  background-color: #a3a3a3;
}
</style>
