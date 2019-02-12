<template>
    <div class="i-billboard">
        <div class="b-header">
            <mt-header :title="songList.songListName">
                <span @click="$router.go(-1)" slot="left">
                <mt-button icon="back"></mt-button>
                </span>
            </mt-header>
        </div>
        <div style="height: 40px"></div>
        <div class="b-center">
            <div class="c-header">
                <span class="h-left" @click="playAll">
                    <i class="ion ion-ios-play-circle"></i>播放全部(总共100首)
                </span>
                <span class="h-right"><i class="ion ion-ios-add"></i>&nbsp;&nbsp;&nbsp;&nbsp;点击收藏</span>
            </div>
            <div class="c-item" v-for="(item,index) in songList.songs || songList" :key="index" @click="play(item)">
                <div class="i-left">
                    <span :style="index == 0 || index == 1 || index == 2?'color:red':'color: #ccc'">{{index+1}}</span>
                </div>
                <div class="i-right">
                    <mt-cell :title="item.name" :label="item.singer">
                        <i class="ion ion-ios-more"></i>
                    </mt-cell>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import IPlay from './Play'
import { Indicator } from 'mint-ui';
export default {
    components:{IPlay},
    data(){
        return{
            songList:{}
        }
    },
    methods:{
        async getMusic(){
            Indicator.open('加载中...');
            if(this.$route.query.id=="五月天"){
                const resp = await this.axios.get(`https://api.bzqll.com/music/netease/search?key=579621905&s=五月天&type=song&limit=100&offset=0`)
                this.songList = resp.data.data;
                Indicator.close();
            }else{
                const resp = await this.axios.get(`https://api.bzqll.com/music/netease/songList?key=579621905&id=${this.$route.query.id}&limit=10&offset=0`);
                if(resp.status == 200){
                    this.songList = resp.data.data;
                    Indicator.close();
                }
            }
        },
        play(item){
            this.$store.dispatch('update',item)
        },
        playAll(){
            
            this.$store.dispatch('updateSongList',this.songList.songs);
            this.$store.dispatch('nextSong')
        }
    },
    created(){
        this.getMusic();
    }
}
</script>
<style lang="scss" scoped>
    .i-billboard{
        .b-header{
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 2;
        }
        .b-center{
            .c-header{
                width: 100%;
                height: 48px;
                // border-radius: 15px 15px 0 0;
                border-top: 1px solid #ccc;
                overflow: hidden;
                margin-top: 20px;
                .h-left{
                    float: left;
                    width: 70%;
                    height: 100%;
                    text-align: left;
                    padding-left: 15px;
                    box-sizing: border-box;
                    line-height: 48px;
                    i{
                        padding-right: 20px;
                    }
                }
                .h-right{
                    float: left;
                    height: 100%;
                    width: 30%;
                    text-align: center;
                    line-height: 48px;
                    background: rgb(241,79,48);
                    color: #fff;
                }
            }
            .i-left{
                width: 40px;
                text-align: center;
                line-height: 48px;
                float: left;
            }
            .i-right{
               width: calc(98% - 40px);
               float: left;
            }
        }
    }
</style>
