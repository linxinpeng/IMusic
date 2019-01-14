<template>
    <div class="i-home">
        <div class="h-header">
            <mt-header title="I Music">
                <router-link to="/" slot="left">
                    <mt-button><i class="ion ion-md-menu"></i></mt-button>
                </router-link>
                <mt-button slot="right" icon="ion ion-md-search" @click.native="showSearch = true"></mt-button>
            </mt-header>
        </div>
        <mt-popup v-model="showSearch" position="right" class="h-search" :modal="false">
            <mt-search autofocus v-model="value" @keyup.native="result">
                <mt-cell
                    v-for="(item,index) in results"
                    :title="item.name"
                    :value="item.singer"
                    :key="index"
                    @click.native="update(item)"
                    >
                </mt-cell>
            </mt-search>
        </mt-popup>
        <div style="height: 40px;"></div>
        <div class="h-banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="slide1" v-for="(item,index) in hrefs" :key="index">
                    <img :src="item" width="100%" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="h-type">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <router-link :to="item.path">
                        <div class="t-box">
                            <i :class="item.icon" :style="`color: ${item.color}`"></i>
                            <span>{{item.title}}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="h-recom">
            <h3>推荐歌单<i class="ion ion-ios-arrow-forward" /></h3>
            <ul>
                <li v-for="(item,index) in recom" :key="index" @click="$router.push({path:'/billboard',query:{id:item.id}})">
                    <div class="r-img">
                        <img :src="item.src" />
                        <i class="ion ion-ios-play-circle"></i>
                    </div>
                    <div class="r-footer">
                        <h4>{{item.title}}</h4>
                        <p>{{item.singer}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import IPlay from './play'
export default {
    components:{IPlay},
    data(){
        return{
            value:'',
            results:[],
            hrefs:[
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=342462208,241731034&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1751299247,2746970245&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2833203770,4110281004&fm=26&gp=0.jpg'
            ],
            list:[
                { icon: 'ion ion-md-list-box',title:'歌单',color:'rgba(37,214,216,.9)' ,path:'/'},
                { icon: 'ion ion-md-radio',title:'电台' ,color:'rgba(131,95,196,.9)' ,path:'/'},
                { icon: 'ion ion-md-ribbon',title:'排行',color:'rgba(245,83,122,.9)' ,path:'/recommend' },
                { icon: 'ion ion-md-disc',title:'专辑' ,color:'rgba(8,130,241,.9)' ,path:'/' },
                { icon: 'ion ion-md-musical-notes',title:'新推' ,color:'rgba(0,156,245,.9)' ,path:'/' },
                { icon: 'ion ion-md-browsers',title:'日推' ,color:'rgba(244,76,177,.9)' ,path:'/'},
                { icon: 'ion ion-ios-headset',title:'歌手',color:'rgba(139,104,200,.9)' ,path:'/'},
                { icon: 'ion ion-md-tv',title:'MV',color:'rgba(37,214,216,.9)' ,path:'/' }
            ],
            recom:[
                {
                    src:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=969641204,494147551&fm=58',
                    title:'你是我的青春',
                    singer:'五月天',
                    id:'五月天'
                },
                 {
                    src:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2735437136,2812997221&fm=58&bpow=1024&bpoh=1024',
                    title:'抖音最火榜',
                    singer:'Douyin',
                    id:'2250011882'
                },
                 {
                    src:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1909022031,1548857548&fm=58&bpow=885&bpoh=746',
                    title:'最爱中国风',
                    singer:'中国风',
                    id:'2534472105'
                }
            ],
            songList:{},
            showSearch:false
        }
    },
    methods:{
        async getMusic(){
            const resp = await this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0');
            if(resp.status == 200){
                this.songList = resp.data.data;
            }
        },
        async result(){
            if(this.value.trim()){
                const resp = await this.axios.get(`https://api.bzqll.com/music/netease/search?key=579621905&s=${this.value}&type=song&limit=100&offset=0`);
                if(resp.status == 200){
                    this.results = resp.data.data
                }
            }
        },
        update(item){
            this.$store.dispatch('update',item);
            this.showSearch = false
        }
    },
    mounted() {
        this.getMusic();
        
    },
}
</script>
<style lang="scss" scoped>
    .i-home{
        .h-header{
            position: fixed;
            top: 0;
            width: 100%;
            .mint-header{
                background: #fff;
                color: #999;
                font-size: 15px;
            }
        }
        .h-search{
                width: 100%;
                height: 100%;
                background-color: #fff;
            }
        .h-banner{
            height: 130px;
            width: calc(100% - 20px);
            margin: 10px auto;
            border-radius: 5px;
            overflow: hidden;
        }
        .h-type{
             width: calc(100% - 20px);
             margin: 0 auto;
             ul{
                 li{
                     display: inline-block;
                     width: 25%;
                     height: 80px;
                     a{
                         display: flex;
                         align-items:center;
                         width: 100%;
                         height: 100%;
                         .t-box{
                             margin: 0 auto;
                            i{
                                display: block;
                                font-size: 40px;
                            }
                            span{
                                font-size: 12px;
                                color: #999;
                                display: inline-block;
                                width: 100%;
                                text-align: center;
                            }
                         }
                     }
                 }
             }
        }
        .h-recom{
            width: calc(100% - 20px);
            margin: 0 auto;
            h3{
                font-size: 17px;
                font-weight: 400;
                padding-left: 10px;
                margin: 0;
                color: #4a4a4a;
                border-left: 2px solid #40dae0;
                i{
                    float: right;
                    font-size: 17px;
                    margin-top: 3px;
                }
            }
            ul{
                li{
                    display: inline-block;
                    width: calc( 100% / 3 - 4px);
                    margin: 2px;
                    .r-img{
                        width: 100%;
                        position: relative;
                        img{
                            max-width: 100%;
                            max-height: 100%;
                            border-radius: 5px;
                            box-shadow: 0 0 10px;
                        }
                        i{
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                        }
                    }
                    .r-footer{
                        h4{
                            margin: 5px auto;
                            font-size: 13px;
                            font-weight: 400;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                        p{
                            margin: 0;
                            font-size: 12px;
                            color: #aaa;
                        }
                    }
                }
            }
           
        }
    }
</style>
