<template>
  <div class="demo-page">
    {{message}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'demo-page'
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-page {
  display: flex;
  width: 200px;
}
</style>
