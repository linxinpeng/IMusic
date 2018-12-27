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
            <div class="c-item" v-for="(item,index) in songList.songs || []" :key="index" @click="play(item)">
                <span class="i-left"><i class="ion ion-md-add-circle-outline"></i></span>
                <span class="i-right">
                    <span class="r-order">
                        {{index+1}}
                    </span>
                    <span class="r-left">
                        <h3>{{item.name}}</h3>
                        <p>{{item.singer}}</p>
                    </span>
                    <span class="r-right">
                        ...
                    </span>
                </span>
            </div>
        </div>
    </div>    
</template>
<script>
import IPlay from './Play'
export default {
    components:{IPlay},
    data(){
        return{
            songList:{}
        }
    },
    methods:{
        async getMusic(){
            const resp = await this.axios.get(`https://api.bzqll.com/music/netease/songList?key=579621905&id=${this.$route.query.id}&limit=10&offset=0`);
            if(resp.status == 200){
                this.songList = resp.data.data;
            }
        },
        play(item){
            this.$store.dispatch('update',item)
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
        }
        .b-center{
            span{
                float: left;
            }
            .i-left{
                width: 40px;
                height: 55px;
                text-align: right;
                color: rgb(137,137,137);
                i{
                    line-height: 55px;
                    font-size: 20px;
                }
            }
            .i-right{
                width: calc(98% - 40px);
                height: 55px;
                box-sizing: border-box;
                padding-left: 5px;
                .r-order{
                    float: left;
                    width: 32px;
                    height: 55px;
                    text-align: center;
                    line-height: 55px;
                    font-size: 12px;
                    color: #000;
                }
                .r-left{
                    float: left;
                    width: calc( 100% - 64px);
                    height: 100%;
                    overflow: hidden;
                    border-bottom: 1px solid #eee;
                    h3{
                        margin: 0;
                        margin-bottom: 5px;
                        font-weight: 400;
                        color: #000;
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    p{
                        color: #999;
                        font-size: 12px;
                    }
                }
                .r-right{
                    float: left;
                    width: 32px;
                    height: 55px;
                    line-height: 55px;
                    text-align: center;
                    border-bottom: 1px solid #eee;
                }
            }
        }
    }
</style>
