<template>
  <div id="app">
    <div class="lt-box">
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  .lt-box{
    p{
      font-size: 26px;
    }
  }
</style>
