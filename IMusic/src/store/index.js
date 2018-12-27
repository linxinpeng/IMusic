import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
const state={
    songList:{
        name:'IMusic音乐',
        singer:'就是歌多',
        pic:require('../assets/image/guangdie.jpg'),
        url:'none'
    }
  };

const mutations = {
    updateSong(state,songs){
        state.songList = songs
    }
}

const actions = {
    update(context,songs){
        context.commit('updateSong',songs)
    }
}

  const store = new Vuex.Store({
    state,
    actions,
    mutations
 });


export default store;