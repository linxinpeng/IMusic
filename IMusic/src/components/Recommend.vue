<template>
    <div class="lt-recommend">
        <div class="r-header">
            <mt-header title="排行">
                <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div style="height: 40px"></div>
        <ul>
           <li @click="toBillboard('19723756')" :style="`background-image:url(${bg.b})`">
               <div class="r-right">
                   <p v-for="(item,index) in bSongList.songs || []" :key="index" v-if="index<3">
                       {{index+1}}.{{item.name}} - {{item.singer}}
                   </p>
               </div>
           </li>
           <li @click="toBillboard('3779629')" :style="`background-image:url(${bg.x})`">
               <div class="r-right">
                   <p v-for="(item,index) in xSongList.songs || []" :key="index" v-if="index<3">
                       {{index+1}}.{{item.name}} - {{item.singer}}
                   </p>
               </div>
           </li>
           <li @click="toBillboard('2884035')" :style="`background-image:url(${bg.y})`">
               <div class="r-right">
                   <p v-for="(item,index) in ySongList.songs || []" :key="index" v-if="index<3">
                       {{index+1}}.{{item.name}} - {{item.singer}}
                   </p>
               </div>
           </li>
           <li @click="toBillboard('3778678')" :style="`background-image:url(${bg.r})`">
               <div class="r-right">
                   <p v-for="(item,index) in rSongList.songs || []" :key="index" v-if="index<3">
                       {{index+1}}.{{item.name}} - {{item.singer}}
                   </p>
               </div>
           </li>
           <li @click="toBillboard('2250011882')" :style="`background-image:url(${bg.d})`">
               <div class="r-right">
                   <p v-for="(item,index) in dSongList.songs || []" :key="index" v-if="index<3">
                       {{index+1}}.{{item.name}} - {{item.singer}}
                   </p>
               </div>
           </li>
           <li @click="toBillboard('2534472105')" :style="`background-image:url(${bg.g})`">
               <div class="r-right">
                   <p v-for="(item,index) in gSongList.songs || []" :key="index" v-if="index<3">
                       {{index+1}}.{{item.name}} - {{item.singer}}
                   </p>
               </div>
           </li>
        </ul>
    </div>
</template>
<script>
import IPlay from './Play'
export default {
    components:{IPlay},
    data(){
        return{
            bSongList:{},
            xSongList:{},
            ySongList:{},
            rSongList:{},
            dSongList:{},
            gSongList:{},
            bg:{
                b:require('../assets/image/b.png'),
                x:require('../assets/image/x.png'),
                y:require('../assets/image/y.png'),
                r:require('../assets/image/r.png'),
                d:require('../assets/image/d.png'),
                g:require('../assets/image/g.png')
            }
        }
    },
    methods:{
        async getSongList(){
            const resp1 = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=19723756&limit=10&offset=0');
            const resp2 = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=3779629&limit=10&offset=0');
            const resp3 = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=2884035&limit=10&offset=0');
            const resp4 = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0');
            const resp5 = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=2250011882&limit=10&offset=0');
            const resp6 = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=2534472105&limit=10&offset=0');
            this.bSongList = resp1.data.data;
            this.xSongList = resp2.data.data;
            this.ySongList = resp3.data.data;
            this.rSongList = resp4.data.data;
            this.dSongList = resp5.data.data;
            this.gSongList = resp6.data.data;
        },
        toBillboard(id){      
            this.$router.push({path:'/billboard',query:{id}})
        }
    },
    created(){
       this.getSongList();
    }
}
</script>
<style lang="scss" scoped>
    .lt-recommend{
        .r-header{
            position: fixed;
            top: 0;
            width: 100%;
            .mint-header{
                background: #fff;
                color: #666;
            }
        }
        ul{
            width: calc( 100% - 40px);
            margin: 0 auto;
            li{
                width: 100%;
                height: 110px;
                border-radius: 5px;
                margin: 20px auto;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .r-right{
                    float: right;
                    width:60%;
                    height: 100%;
                    p{
                        margin: 15px auto;
                        box-sizing: border-box;
                        margin-right: 10px;
                        font-size: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        color: #fff;
                        font-family:'宋体';
                    }
                }
            }
        }
    }
</style>
