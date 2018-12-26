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
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hrefs:[
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=342462208,241731034&fm=26&gp=0.jpg',
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1751299247,2746970245&fm=26&gp=0.jpg'
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
            ]
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
            height: 200px;
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
           
        }
    }
</style>
