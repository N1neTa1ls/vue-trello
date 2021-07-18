import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from './components/Tasks.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Tasks},
]

export default new VueRouter({
  routes
})