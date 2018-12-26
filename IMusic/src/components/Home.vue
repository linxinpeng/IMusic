<template>
    <div class="i-home">
        <div class="h-header">
            <mt-header title="音乐馆">
                <router-link to="/" slot="left">
                    <mt-button><i class="ion ion-md-menu"></i></mt-button>
                </router-link>
                <mt-button slot="right" icon="ion ion-md-search"></mt-button>
            </mt-header>
        </div>
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
                    <a>
                        <div class="t-box">
                            <i :class="item.icon" :style="`color: ${item.color}`"></i>
                            <span>{{item.title}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="h-recom">
            <h3>推荐歌单<i class="ion ion-ios-arrow-forward" /></h3>
            <ul>
                <li v-for="(item,index) in recom" :key="index">
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
        <div class="h-play">
            <div class="p-inner">
                <div class="p-progress" :style="`width:${value}%`"></div>
                <span class="i-left"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1752432182,2397597091&fm=26&gp=0.jpg" /></span>
                <span class="i-center">
                    <h4>朗朗的新专辑</h4>
                    <p>朗朗</p>
                </span>
                <span class="i-right" @click="onPlay"><i class="far fa-play-circle"></i></span>
            </div>
        </div>
        <div style="height: 62px"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hrefs:[
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=342462208,241731034&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1751299247,2746970245&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2833203770,4110281004&fm=26&gp=0.jpg'
            ],
            list:[
                { icon: 'ion ion-md-list-box',title:'歌单',color:'rgba(37,214,216,.9)' },
                { icon: 'ion ion-md-radio',title:'电台' ,color:'rgba(131,95,196,.9)' },
                { icon: 'ion ion-md-ribbon',title:'排行',color:'rgba(245,83,122,.9)'  },
                { icon: 'ion ion-md-disc',title:'专辑' ,color:'rgba(8,130,241,.9)' },
                { icon: 'ion ion-md-musical-notes',title:'新推' ,color:'rgba(0,156,245,.9)' },
                { icon: 'ion ion-md-browsers',title:'日推' ,color:'rgba(244,76,177,.9)' },
                { icon: 'ion ion-ios-headset',title:'歌手',color:'rgba(139,104,200,.9)'  },
                { icon: 'ion ion-md-tv',title:'MV',color:'rgba(37,214,216,.9)'  }
            ],
            recom:[
                {
                    src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=342462208,241731034&fm=26&gp=0.jpg',
                    title:'一入电音深似海',
                    singer:'Dearrn'
                },
                 {
                    src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1751299247,2746970245&fm=26&gp=0.jpg',
                    title:'最好听的还是你',
                    singer:'Mr.Zhou'
                },
                 {
                    src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2833203770,4110281004&fm=26&gp=0.jpg',
                    title:'懂我的，不懂我的',
                    singer:'Ruerer'
                }
            ],
            value:0,
            time: null
        }
    },
    methods:{
        onPlay(){
          this.time = setInterval(()=>{
               this.value++
               if(this.value == 100){
                   clearInterval(this.time)
               }
           },100)
        }
    }
}
</script>
<style lang="scss" scoped>
    .i-home{
        .h-header{
            .mint-header{
                background: #fff;
                color: #999;
                font-size: 15px;
            }
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
                    height: 1px;
                    z-index: 2;
                    background: red;
                    transition: all .3s ease;
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
