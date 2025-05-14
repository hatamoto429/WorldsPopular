<template>
  <div class="guess-container">
    <GuessCard />
    <div class="overlay">
      <h1>Guess the more Popular!</h1>
      <h1>Streak Counter ${streak} </h1>
    </div>
    <ReturnButton />
  </div>
</template>

<script>
import ReturnButton from '@/components/ReturnButton.vue';
import GuessCard from '@/components/GuessCard.vue';

export default {
  name: "GuessView",
  components: {
    GuessCard,
    ReturnButton
  }
}
</script>


<style>
@media (min-width: 1024px) {
  .guess {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
