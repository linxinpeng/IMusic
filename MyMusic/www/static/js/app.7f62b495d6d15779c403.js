webpackJsonp([1],{"/ALY":function(t,s,i){t.exports=i.p+"static/img/d.30408e0.png"},"3i9n":function(t,s){},"5OHe":function(t,s){},JAGC:function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("7+uW"),e=i("Xxa5"),a=i.n(e),o=i("exGp"),r=i.n(o),c={props:{songs:{type:Object}},data:function(){return{value:0,isPlay:!1,time:null,show:!1,lrc:[],flag:[],top:60,album:{}}},watch:{songs:function(){this.value=0,this.isPlay=!1,clearInterval(this.time),this.onPlay()},flag:function(){this.show&&(this.top=30*-(this.flag.length-1)+60)}},methods:{onPlay:function(){var t=this;this.isPlay?(this.$refs.audio.pause(),this.isPlay=!1):this.songs.url&&(this.$refs.audio.play(),this.isPlay=!0,this.expand(),this.time=setInterval(function(){if(t.$refs.audio.ended)return clearInterval(t.time),t.$store.dispatch("nextSong"),void(t.isPlay=!1);if(t.value=t.$refs.audio.currentTime/t.$refs.audio.duration*100,t.lrc.length>0){var s=t.lrc.filter(function(s){return s[0]<=t.$refs.audio.currentTime}).filter(function(t){return t[1].length>0});t.flag=s}},10))},expand:function(){var t=this;return r()(a.a.mark(function s(){var i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.axios.get("https://api.bzqll.com/music/netease/lrc?id="+t.songs.id+"&key=579621905");case 2:200==(i=s.sent).status&&t.parseLyric(i.data);case 4:case"end":return s.stop()}},s,t)}))()},parseLyric:function(t){this.$refs.audio.currentTime;for(var s=t.split(/[(\r\n)\r\n]+/),i=s.length,n=new Array,e=0;e<i;e++){var a=s[e].match(/\[\d{2}:\d{2}((\.|\:)\d+)\]/g),o=s[e].split(a);if(null!=a){var r=String(a).split(":"),c=Math.round(1e3*(60*parseInt(r[0].split("[")[1])+parseFloat(r[1].split("]")[0])))/1e3;n.push([c,o[1]])}this.lrc=n}}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return Object.keys(t.songs).length>0?i("div",{staticClass:"i-play"},[i("div",{staticClass:"h-play",on:{click:function(s){t.show=!t.show}}},[i("div",{staticClass:"p-inner"},[i("audio",{ref:"audio",attrs:{src:t.songs.url,autoplay:"autoplay"}}),t._v(" "),i("div",{staticClass:"p-progress",style:"width:"+t.value+"%"}),t._v(" "),i("span",{staticClass:"i-left"},[i("img",{attrs:{src:t.songs.pic}})]),t._v(" "),i("span",{staticClass:"i-center"},[i("h4",[t._v(t._s(t.songs.name))]),t._v(" "),i("p",[t._v(t._s(t.songs.singer))])]),t._v(" "),i("span",{staticClass:"i-right",on:{touchstart:t.onPlay}},[i("i",{class:t.isPlay?"ion ion-ios-pause":"ion ion-ios-play-circle"})])])]),t._v(" "),i("div",{staticStyle:{height:"62px"}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.show?i("div",{staticClass:"h-mask"},[i("div",{staticClass:"m-inner"},[i("mt-header",{attrs:{title:t.songs.name}},[i("span",{attrs:{slot:"left"},on:{click:function(s){t.$router.go(-1),t.show=!1}},slot:"left"},[i("mt-button",{attrs:{icon:"back"}})],1)]),t._v(" "),i("div",{staticClass:"m-singer"},[i("img",{attrs:{src:t.songs.pic}})]),t._v(" "),i("div",{staticClass:"m-lrc"},[i("ul",{staticClass:"l-inner",style:"top:"+t.top+"px"},t._l(t.lrc,function(s,n){return i("li",{key:n,class:t.flag[t.flag.length-1]==s?"i-active":""},[t._v(t._s(s[1]))])}),0)])],1)]):t._e()])],1):t._e()},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("mNdS")},"data-v-2a474d29",null).exports,d={name:"app",components:{IPlay:u},data:function(){return{}},mounted:function(){},computed:{songs:function(){return this.$store.state.song}}},p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),this._v(" "),s("i-play",{attrs:{songs:this.songs}})],1)},staticRenderFns:[]};var g=i("VU/8")(d,p,!1,function(t){i("mgCM")},null,null).exports,h=i("/ocq"),f={data:function(){return{value:"",results:[],hrefs:["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=342462208,241731034&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1751299247,2746970245&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2833203770,4110281004&fm=26&gp=0.jpg"],list:[{icon:"ion ion-md-list-box",title:"歌单",color:"rgba(37,214,216,.9)",path:"/"},{icon:"ion ion-md-radio",title:"电台",color:"rgba(131,95,196,.9)",path:"/"},{icon:"ion ion-md-ribbon",title:"排行",color:"rgba(245,83,122,.9)",path:"/recommend"},{icon:"ion ion-md-disc",title:"专辑",color:"rgba(8,130,241,.9)",path:"/"},{icon:"ion ion-md-musical-notes",title:"新推",color:"rgba(0,156,245,.9)",path:"/"},{icon:"ion ion-md-browsers",title:"日推",color:"rgba(244,76,177,.9)",path:"/"},{icon:"ion ion-ios-headset",title:"歌手",color:"rgba(139,104,200,.9)",path:"/"},{icon:"ion ion-md-tv",title:"MV",color:"rgba(37,214,216,.9)",path:"/"}],recom:[{src:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=969641204,494147551&fm=58",title:"你是我的青春",singer:"五月天",id:"五月天"},{src:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2735437136,2812997221&fm=58&bpow=1024&bpoh=1024",title:"抖音最火榜",singer:"Douyin",id:"2250011882"},{src:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1909022031,1548857548&fm=58&bpow=885&bpoh=746",title:"最爱中国风",singer:"中国风",id:"2534472105"}],songList:{},showSearch:!1}},methods:{getMusic:function(){var t=this;return r()(a.a.mark(function s(){var i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0");case 2:200==(i=s.sent).status&&(t.songList=i.data.data);case 4:case"end":return s.stop()}},s,t)}))()},result:function(){var t=this;return r()(a.a.mark(function s(){var i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.value.trim()){s.next=5;break}return s.next=3,t.axios.get("https://api.bzqll.com/music/netease/search?key=579621905&s="+t.value+"&type=song&limit=100&offset=0");case 3:200==(i=s.sent).status&&(t.results=i.data.data);case 5:case"end":return s.stop()}},s,t)}))()},update:function(t){this.$store.dispatch("update",t),this.showSearch=!1}},mounted:function(){this.getMusic()}},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"i-home"},[i("div",{staticClass:"h-header"},[i("mt-header",{attrs:{title:"I Music"}},[i("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[i("mt-button",[i("i",{staticClass:"ion ion-md-menu"})])],1),t._v(" "),i("mt-button",{attrs:{slot:"right",icon:"ion ion-md-search"},nativeOn:{click:function(s){t.showSearch=!0}},slot:"right"})],1)],1),t._v(" "),i("mt-popup",{staticClass:"h-search",attrs:{position:"right",modal:!1},model:{value:t.showSearch,callback:function(s){t.showSearch=s},expression:"showSearch"}},[i("mt-search",{attrs:{autofocus:""},nativeOn:{keyup:function(s){return t.result(s)}},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}},t._l(t.results,function(s,n){return i("mt-cell",{key:n,attrs:{title:s.name,value:s.singer},nativeOn:{click:function(i){t.update(s)}}})}),1)],1),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("div",{staticClass:"h-banner"},[i("mt-swipe",{attrs:{auto:4e3}},t._l(t.hrefs,function(t,s){return i("mt-swipe-item",{key:s,staticClass:"slide1"},[i("img",{attrs:{src:t,width:"100%"}})])}),1)],1),t._v(" "),i("div",{staticClass:"h-type"},[i("ul",t._l(t.list,function(s,n){return i("li",{key:n},[i("router-link",{attrs:{to:s.path}},[i("div",{staticClass:"t-box"},[i("i",{class:s.icon,style:"color: "+s.color}),t._v(" "),i("span",[t._v(t._s(s.title))])])])],1)}),0)]),t._v(" "),i("div",{staticClass:"h-recom"},[t._m(0),t._v(" "),i("ul",t._l(t.recom,function(s,n){return i("li",{key:n,on:{click:function(i){t.$router.push({path:"/billboard",query:{id:s.id}})}}},[i("div",{staticClass:"r-img"},[i("img",{attrs:{src:s.src}}),t._v(" "),i("i",{staticClass:"ion ion-ios-play-circle"})]),t._v(" "),i("div",{staticClass:"r-footer"},[i("h4",[t._v(t._s(s.title))]),t._v(" "),i("p",[t._v(t._s(s.singer))])])])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[this._v("推荐歌单"),s("i",{staticClass:"ion ion-ios-arrow-forward"})])}]};var v=i("VU/8")(f,m,!1,function(t){i("3i9n")},"data-v-0053985e",null).exports,_={components:{IPlay:u},data:function(){return{bSongList:{},xSongList:{},ySongList:{},rSongList:{},dSongList:{},gSongList:{},bg:{b:i("ef/J"),x:i("c6xF"),y:i("aHvj"),r:i("gdNM"),d:i("/ALY"),g:i("g7Ut")}}},methods:{getSongList:function(){var t=this;return r()(a.a.mark(function s(){var i,n,e,o,r,c;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=19723756&limit=3&offset=0");case 2:return i=s.sent,s.next=5,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=3779629&limit=3&offset=0");case 5:return n=s.sent,s.next=8,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=2884035&limit=3&offset=0");case 8:return e=s.sent,s.next=11,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=3&offset=0");case 11:return o=s.sent,s.next=14,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=2250011882&limit=3&offset=0");case 14:return r=s.sent,s.next=17,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id=2534472105&limit=3&offset=0");case 17:c=s.sent,t.bSongList=i.data.data,t.xSongList=n.data.data,t.ySongList=e.data.data,t.rSongList=o.data.data,t.dSongList=r.data.data,t.gSongList=c.data.data;case 24:case"end":return s.stop()}},s,t)}))()},toBillboard:function(t){this.$router.push({path:"/billboard",query:{id:t}})}},created:function(){this.getSongList()}},b={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"lt-recommend"},[i("div",{staticClass:"r-header"},[i("mt-header",{attrs:{title:"排行"}},[i("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}})],1)],1)],1),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("ul",[i("li",{style:"background-image:url("+t.bg.b+")",on:{click:function(s){t.toBillboard("19723756")}}},[i("div",{staticClass:"r-right"},t._l(t.bSongList.songs||[],function(s,n){return n<3?i("p",{key:n},[t._v("\n                   "+t._s(n+1)+"."+t._s(s.name)+" - "+t._s(s.singer)+"\n               ")]):t._e()}),0)]),t._v(" "),i("li",{style:"background-image:url("+t.bg.x+")",on:{click:function(s){t.toBillboard("3779629")}}},[i("div",{staticClass:"r-right"},t._l(t.xSongList.songs||[],function(s,n){return n<3?i("p",{key:n},[t._v("\n                   "+t._s(n+1)+"."+t._s(s.name)+" - "+t._s(s.singer)+"\n               ")]):t._e()}),0)]),t._v(" "),i("li",{style:"background-image:url("+t.bg.y+")",on:{click:function(s){t.toBillboard("2884035")}}},[i("div",{staticClass:"r-right"},t._l(t.ySongList.songs||[],function(s,n){return n<3?i("p",{key:n},[t._v("\n                   "+t._s(n+1)+"."+t._s(s.name)+" - "+t._s(s.singer)+"\n               ")]):t._e()}),0)]),t._v(" "),i("li",{style:"background-image:url("+t.bg.r+")",on:{click:function(s){t.toBillboard("3778678")}}},[i("div",{staticClass:"r-right"},t._l(t.rSongList.songs||[],function(s,n){return n<3?i("p",{key:n},[t._v("\n                   "+t._s(n+1)+"."+t._s(s.name)+" - "+t._s(s.singer)+"\n               ")]):t._e()}),0)]),t._v(" "),i("li",{style:"background-image:url("+t.bg.d+")",on:{click:function(s){t.toBillboard("2250011882")}}},[i("div",{staticClass:"r-right"},t._l(t.dSongList.songs||[],function(s,n){return n<3?i("p",{key:n},[t._v("\n                   "+t._s(n+1)+"."+t._s(s.name)+" - "+t._s(s.singer)+"\n               ")]):t._e()}),0)]),t._v(" "),i("li",{style:"background-image:url("+t.bg.g+")",on:{click:function(s){t.toBillboard("2534472105")}}},[i("div",{staticClass:"r-right"},t._l(t.gSongList.songs||[],function(s,n){return n<3?i("p",{key:n},[t._v("\n                   "+t._s(n+1)+"."+t._s(s.name)+" - "+t._s(s.singer)+"\n               ")]):t._e()}),0)])])])},staticRenderFns:[]};var y=i("VU/8")(_,b,!1,function(t){i("JAGC")},"data-v-4558d5c1",null).exports,x={components:{IPlay:u},data:function(){return{songList:{}}},methods:{getMusic:function(){var t=this;return r()(a.a.mark(function s(){var i,n;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if("五月天"!=t.$route.query.id){s.next=7;break}return s.next=3,t.axios.get("https://api.bzqll.com/music/netease/search?key=579621905&s=五月天&type=song&limit=100&offset=0");case 3:i=s.sent,t.songList=i.data.data,s.next=11;break;case 7:return s.next=9,t.axios.get("https://api.bzqll.com/music/netease/songList?key=579621905&id="+t.$route.query.id+"&limit=10&offset=0");case 9:200==(n=s.sent).status&&(t.songList=n.data.data);case 11:case"end":return s.stop()}},s,t)}))()},play:function(t){this.$store.dispatch("update",t)},playAll:function(){this.$store.dispatch("updateSongList",this.songList.songs),this.$store.dispatch("nextSong")}},created:function(){this.getMusic()}},k={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"i-billboard"},[i("div",{staticClass:"b-header"},[i("mt-header",{attrs:{title:t.songList.songListName}},[i("span",{attrs:{slot:"left"},on:{click:function(s){t.$router.go(-1)}},slot:"left"},[i("mt-button",{attrs:{icon:"back"}})],1)])],1),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("div",{staticClass:"b-center"},[i("div",{staticClass:"c-header"},[i("span",{staticClass:"h-left",on:{click:t.playAll}},[i("i",{staticClass:"ion ion-ios-play-circle"}),t._v("播放全部(总共100首)\n            ")]),t._v(" "),t._m(0)]),t._v(" "),t._l(t.songList.songs||t.songList,function(s,n){return i("div",{key:n,staticClass:"c-item",on:{click:function(i){t.play(s)}}},[i("div",{staticClass:"i-left"},[i("span",{style:0==n||1==n||2==n?"color:red":"color: #ccc"},[t._v(t._s(n+1))])]),t._v(" "),i("div",{staticClass:"i-right"},[i("mt-cell",{attrs:{title:s.name,label:s.singer}},[i("i",{staticClass:"ion ion-ios-more"})])],1)])})],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"h-right"},[s("i",{staticClass:"ion ion-ios-add"}),this._v("    点击收藏")])}]};var L=i("VU/8")(x,k,!1,function(t){i("bLGr")},"data-v-8f61b65c",null).exports;n.default.use(h.a);var S=new h.a({routes:[{path:"/",name:"Home",component:v},{path:"/recommend",name:"Recommend",component:y},{path:"/billboard",name:"Billboard",component:L}]}),C=i("wSez"),w=i.n(C),$=(i("5OHe"),i("aozt")),q=i.n($),F=i("3khs"),M=i.n(F),P=i("9rMa");n.default.use(P.a);var z={song:{name:"IMusic音乐",singer:"就是歌多",pic:i("qt8S"),url:!1},songList:[],index:0},j={update:function(t,s){t.commit("updateSong",s)},updateSongList:function(t,s){t.commit("updateSongs",s)},nextSong:function(t){z.songList.length>0&&(t.commit("next",z.songList[z.index]),z.index=z.index+1)}},I=new P.a.Store({state:z,actions:j,mutations:{updateSong:function(t,s){t.song=s},updateSongs:function(t,s){t.songList=s},next:function(t,s){t.song=s}}}),H=i("NfSi"),N=i.n(H);n.default.use(N.a),n.default.use(M.a,q.a),n.default.use(w.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:S,store:I,components:{App:g},template:"<App/>"})},aHvj:function(t,s,i){t.exports=i.p+"static/img/y.8e8bd65.png"},bLGr:function(t,s){},c6xF:function(t,s,i){t.exports=i.p+"static/img/x.8727eb8.png"},"ef/J":function(t,s,i){t.exports=i.p+"static/img/b.5439571.png"},g7Ut:function(t,s,i){t.exports=i.p+"static/img/g.b42fead.png"},gdNM:function(t,s,i){t.exports=i.p+"static/img/r.9800e4d.png"},mNdS:function(t,s){},mgCM:function(t,s){},qt8S:function(t,s,i){t.exports=i.p+"static/img/guangdie.98d6368.jpg"}},["NHnr"]);