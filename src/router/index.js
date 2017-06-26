import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Team from '../components/Team.vue'
import Schedule from '../components/Schedule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
