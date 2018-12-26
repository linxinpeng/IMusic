<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  body,html,p{
    margin: 0;
    color: #999;
  }
  ul{
    padding: 0;
    li{
      list-style: none;
    }
  }
</style>
