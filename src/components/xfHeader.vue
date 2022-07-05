<template>
  <div class="header">
    <i class="iconfont back" @click="$router.go(-1)">&#xe600;</i>
    <span>{{title}}</span>
    <i class="iconfont refresh" @click="refreshPage">&#xe782;</i>
  </div>
</template>

<script>

export default{
  props: {
    title: {
      type: String,
      default: 'XF'
    }
  },
  methods: {
    refreshPage () {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #f4f4f4;
  .back {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
  }
  .refresh {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }
}
</style>
