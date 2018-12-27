<template>
    <div class="i-play" v-if="Object.keys(songs).length>0">
        <div class="h-play">
                <div class="p-inner">
                    <audio ref="audio" :src="songs.url"></audio>
                    <div class="p-progress" :style="`width:${value}%`"></div>
                    <span class="i-left"><img :src="songs.pic" /></span>
                    <span class="i-center">
                        <h4>{{songs.name}}</h4>
                        <p>{{songs.singer}}</p>
                    </span>
                    <span class="i-right" @click="onPlay"><i :class="isPlay?'ion ion-ios-pause':'ion ion-ios-play-circle'"></i></span>
                </div>
            </div>
            <div style="height: 62px"></div>
    </div>    
</template>
<script>
export default {
    props:{
        songs:{
            type:Object
        }
    },
    data(){
        return{
            value: 0,
            isPlay:false,
            time: null
        }
    },
    watch:{
        songs(){
            this.value = 0;
            this.isPlay = false;
            this.time = null;
        }
    },
    methods:{
        onPlay(){
            if(this.isPlay){
                this.$refs.audio.pause();
                this.isPlay = false;
            }else{
                this.$refs.audio.play();
                this.isPlay = true;
                this.time = setInterval(()=>{
                    if(this.$refs.audio.currentTime == this.$refs.audio.duration){
                        clearInterval(this.time);
                        this.isPlay = false;
                        return
                        }
                    this.value = (this.$refs.audio.currentTime/this.$refs.audio.duration)*100;
                },10)
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    .i-play{
          .h-play{
            position: fixed;
            bottom: 0;
            background: #fff;
            height: 61px;
            width: 100%;
            .p-inner{
                height: 60px;
                position: relative;
                border-top: 1px solid #eee;
                .p-progress{
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    z-index: 2;
                    background: rgba(37, 214, 216, 0.9);
                }
                 span{
                    float: left;
                }
                .i-left{
                    width: 10%;
                    margin-left: 20px;
                    padding-top: 10px;
                    box-sizing: border-box;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .i-center{
                    width: 60%;
                    padding-left: 15px;
                    padding-top: 10px;
                    box-sizing: border-box;
                    h4{
                        margin: 0;
                        font-size: 12px;
                        // margin-top: 4px;
                        color: #666;
                    }
                    p{
                        margin: 0;
                        font-size: 12px;
                        margin-top: 3px;
                    }
                }
                .i-right{
                    padding-top: 13px;
                    box-sizing: border-box;
                    padding-left: 24px;
                    width: calc(30% - 20px);
                    color: rgba(37, 214, 216, 0.9);
                    font-size: 28px;
                }
            }
           
        }
    }
</style>
