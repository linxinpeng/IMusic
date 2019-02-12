<template>
  <div id="app">
    <router-view></router-view>
    <i-play :songs="songs"></i-play>
  </div>
</template>

<script>
import IPlay from '@/components/Play'
export default {
  name: 'app',
  components:{IPlay},
  data () {
    return {
      
    }
  },
  mounted(){
  },
  computed:{
    songs(){
      return this.$store.state.song
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
