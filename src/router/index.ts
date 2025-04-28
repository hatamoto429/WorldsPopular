import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import GuessView from '@/views/GuessView.vue'
import VoteView from '@/views/VoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: MainView,
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/vote',
      name: 'vote',
      component: VoteView,
    },
    {
      path: '/guess',
      name: 'guess',
      component: GuessView,
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderboardView,
    },
    {
      path: '/',
      name: '*',
      component: MainView,
    },
  ],
})

export default router
