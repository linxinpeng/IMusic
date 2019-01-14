import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
const state={
    song:{
        name:'IMusic音乐',
        singer:'就是歌多',
        pic:require('../assets/image/guangdie.jpg'),
        url:false
    },
    songList:[],
    index: 0 
  };

const mutations = {
    updateSong(state,songs){
        state.song = songs
    },
    updateSongs(state,songList){
        state.songList = songList
    },
    next(state,song){
        state.song = song
    }
}

const actions = {
    update(context,songs){
        context.commit('updateSong',songs)
    },
    updateSongList(context,songList){
   
        context.commit('updateSongs',songList)
    },
    nextSong(context){
        if(state.songList.length>0){
            context.commit('next',state.songList[state.index]);
            state.index = state.index+1;
        }
    }
}

  const store = new Vuex.Store({
    state,
    actions,
    mutations
 });


export default store;