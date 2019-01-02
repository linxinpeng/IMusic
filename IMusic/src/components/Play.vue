<template>
    <div class="i-play" v-if="Object.keys(songs).length>0">
        <div class="h-play" @click="show= true">
                <div class="p-inner">
                    <audio ref="audio" :src="songs.url"  autoplay="autoplay"></audio>
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
            <transition name="fade">
                <div class="h-mask" v-if="show">
                    <div class="m-inner">
                        <div class="m-singer">

                        </div>
                        <div class="m-lrc">
                            <ul class="l-inner" :style="`top:${top}px`">
                                <li v-for="(item,index) in lrc" :key="index" :class="flag[flag.length-1] == item?'i-active':''">{{item[1]}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>
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
            time: null,
            show: false,
            lrc:[],
            flag:[],
            top: 60
        }
    },
    watch:{
        songs(){
            this.value = 0;
            this.isPlay = false;
            clearInterval(this.time);
            this.onPlay();
        },
        flag(){
            if(this.show){
                this.top = -(this.flag.length -1) *30 +60
                // $('.l-inner').animate({ 'top': '-' + (this.flag.length-1)* 30 + 'px'})
            }
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
                this.expand();
                this.time = setInterval(()=>{
                    if(this.$refs.audio.currentTime == this.$refs.audio.duration){
                        clearInterval(this.time);
                        this.isPlay = false;
                        return
                        }
                this.value = (this.$refs.audio.currentTime/this.$refs.audio.duration)*100;
                let lr = this.lrc.filter( v => v[0]<=this.$refs.audio.currentTime);
                this.flag = lr;
                
                },10)
            }
        },
        async expand(){
            const resp = await this.axios.get(`https://api.bzqll.com/music/netease/lrc?id=${this.songs.id}&key=579621905`);
            if(resp.status == 200){
                this.parseLyric(resp.data);
            }
        },
        parseLyric(text) {
            let currentTime = this.$refs.audio.currentTime;
            const lyric = text.split(/[(\r\n)\r\n]+/);
            var _l = lyric.length; 
            var lrc = new Array(); 
            for(var i=0;i<_l;i++) {
                var d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d+)\]/g); 
                var t = lyric[i].split(d); 
                if(d != null) { 
                    var dt = String(d).split(':');
                    var _t = Math.round((parseInt(dt[0].split('[')[1])*60 + parseFloat(dt[1].split(']')[0]))*1000)/1000
                    lrc.push([_t, t[1]]);
                }
                this.lrc = lrc;
            }
        }

        

    }
}
</script>
<style lang="scss" scoped>
    .i-active{
        color: rgba(37, 214, 216, 0.9) !important;
    }
    .i-play{
          .h-play{
            position: fixed;
            bottom: 0;
            background: #fff;
            height: 61px;
            width: 100%;
            z-index: 2001;
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
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
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
        .h-mask{
            position: fixed;
            bottom:0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: #fff;
            .m-inner{
                position: relative;
                width: 100%;
                height: 100%;
                .m-singer{
                    height: 50%;
                    width: 100%;
                }
                .m-lrc{
                    position: absolute;
                    bottom: 61px;
                    left: 0;
                    height: 150px;
                    width: 100%;
                    // background: #000;
                    overflow: scroll;
                    .l-inner{
                       position: absolute;
                       width: 100%;
                       margin: 0;
                       left: 0;
                       transition: all .3s ease;
                        li{
                            line-height: 30px;
                            width: 100%;
                            text-align: center;
                            color: #666;
                        }
                    }
                }
            }
        }
    }
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%)
}
</style>
