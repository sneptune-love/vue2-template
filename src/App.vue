<template>
  <div id="app">
    <xf-header></xf-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
