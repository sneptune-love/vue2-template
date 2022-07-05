import Vue from 'vue'
import Router from 'vue-router'
import partRoutesA from './partA'

Vue.use(Router)

const routes = [].concat(partRoutesA)

export default new Router({
  routes
})
