(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f454fc66"],{"04d9":function(t,e,a){"use strict";a("cc57"),a("163d");var s=a("0651"),i={props:{statisticData:{type:Array},wrapHeight:{type:Number,default:410},unit:{type:String,default:"条"}},data:function(){return{colorList:["#507AFF","#51D9A2","#FFC371","#DDA0DD","#87CEEB","#d2eb96","#fe9b8e","#b6c2ff","#ffe180","#4FADFD","pink"],rich:{name:{color:"#666666",fontSize:14,padding:[8,30,0,30],fontWeight:"400",align:"left"},value:{color:"#333",fontSize:15,padding:[8,30,0,30],fontWeight:"500",align:"left"},percent:{color:"#FFF",align:"right",fontSize:15,fontWeight:"500"},hr:{borderColor:"#DFDFDF",width:"100%",borderWidth:1,height:0},cir:{fontSize:26}}}},methods:{getStatisticOption:function(){var t=this,e=this;return{tooltip:{trigger:"item",formatter:"{b}: {d}%"},series:[{itemStyle:{normal:{color:function(t){return e.colorList[t.dataIndex]}}},type:"pie",radius:["0%","50%"],center:["50%","50%"],label:{normal:{position:"inner",formatter:function(t){return"{percent|"+t.percent.toFixed(0)+"%}"},show:!1,rich:this.rich}},data:this.statisticData},{itemStyle:{normal:{color:function(t){return e.colorList[t.dataIndex]}}},type:"pie",silent:!0,radius:["0%","50%"],center:["50%","50%"],labelLine:{normal:{length:30,length2:0,lineStyle:{color:"transparent"}}},label:{normal:{formatter:function(e){return"{name|"+e.name+"}{value|"+e.value+" "+t.unit+"}\n{hr|}\n"},rich:this.rich,padding:[2,25,0,25]}},data:this.statisticData,z:-1},{itemStyle:{normal:{color:function(t){return e.colorList[t.dataIndex]}}},type:"pie",silent:!0,radius:["0%","50%"],center:["50%","50%"],labelLine:{normal:{length:30,length2:0,lineStyle:{color:"transparent"}}},label:{normal:{formatter:function(t){return"\n{cir|●}\n"},rich:this.rich}},data:this.statisticData,z:-1},{itemStyle:{normal:{color:"#F2F9F7"}},type:"pie",silent:!0,radius:["0%","57%"],center:["50%","50%"],hoverAnimation:!1,data:this.statisticData,label:{normal:{show:!1,position:"inner",formatter:function(t){return"{percent|"+t.percent.toFixed(0)+"%}"},rich:this.rich}},z:-1}]}}},components:{echarts:s.a}},n=(a("8249"),a("9ca4")),r=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pieBase",style:"height:"+this.wrapHeight+"px"},[e("echarts",{attrs:{id:Math.random().toString(),options:this.getStatisticOption()}})],1)}),[],!1,null,"91ec5398",null);e.a=r.exports},"0651":function(t,e,a){"use strict";var s=a("986e"),i={props:{options:Object,id:String},data:function(){return{chart:null}},watch:{options:{handler:function(t,e){this.draw(this.id,t)},deep:!0}},mounted:function(){this.draw(this.id,this.options)},methods:{draw:function(t,e){var a=this;setTimeout((function(){var i=document.getElementById(t);a.chart=a.$echarts.init(i),a.chart.setOption(e),a.chart.on("click",(function(t){s.a.$emit("chartInfo",t)}))}))}},beforeDestroy:function(){this.chart&&this.chart.clear()}},n=(a("4d79"),a("9ca4")),r=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}})}),[],!1,null,"50501b03",null);e.a=r.exports},"324f":function(t,e,a){},"4d79":function(t,e,a){"use strict";var s=a("324f");a.n(s).a},"5ed5":function(t,e,a){"use strict";var s=a("bace");a.n(s).a},6498:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r}));a("f548");function s(t,e){var a=Date.parse(t);return(Date.parse(e)-a)/864e5}function i(t){if(t)return t.slice(5,t.length).replace(/\//,"月")+"日"}function n(t,e){if(t)return t=(t=t.replace("月","/")).replace("日",""),"".concat(e||(new Date).getFullYear(),"/").concat(t)}function r(t){return new Date(Date.parse((new Date).toLocaleDateString())+24*t*60*60*1e3).toLocaleDateString()}},"76b5":function(t,e,a){"use strict";var s=a("e0cd");a.n(s).a},8249:function(t,e,a){"use strict";var s=a("8ccd");a.n(s).a},"8ccd":function(t,e,a){},"986e":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var s=new(a("0261").a)},"9cae":function(t,e,a){"use strict";a.r(e);a("2aa3"),a("06a2"),a("ec25");var s=a("e292"),i=(a("163d"),a("2b45"),a("6d57"),a("cc57"),a("6498")),n=a("fa7d"),r=[{date:"2020/9/28",billList:[{name:"地铁上班",amount:5.46,type:"交通出行",isMust:!0,remarks:""},{name:"晚饭 重庆小面",amount:20,type:"饮食",isMust:!0,remarks:"豌杂面加卤蛋"},{name:"地铁回家",amount:2,type:"交通出行",isMust:!0,remarks:"回家收拾东西"},{name:"地铁下班",amount:5.46,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/9/29",billList:[{name:"地铁上班",amount:5.46,type:"交通出行",isMust:!0,remarks:""},{name:"地铁下班",amount:5.46,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/9/30",billList:[{name:"地铁上班",amount:5.46,type:"交通出行",isMust:!0,remarks:""},{name:"地铁下班",amount:5.46,type:"交通出行",isMust:!0,remarks:""},{name:"地铁（来福士来回）",amount:10.8,type:"交通出行",isMust:!0,remarks:""},{name:"椰子🥥",amount:20,type:"饮食",isMust:!1,remarks:""},{name:"烤鱿鱼",amount:20,type:"饮食",isMust:!1,remarks:""},{name:"西贝莜面村",amount:94,type:"饮食",isMust:!0,remarks:""},{name:"卫衣",amount:330,type:"服装",isMust:!1,remarks:""},{name:"皮带",amount:370,type:"服装",isMust:!0,remarks:""}]},{date:"2020/10/2",billList:[{name:"烤面筋",amount:10,type:"饮食",isMust:!1,remarks:""},{name:"iCloud",amount:6,type:"电子消费",isMust:!0,remarks:""},{name:"公交车",amount:2,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/10/5",billList:[{name:"藿香正气滴丸",amount:29,type:"药品",isMust:!0,remarks:""}]},{date:"2020/10/6",billList:[{name:"牛肉粉丝汤",amount:26,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/10/7",billList:[{name:"满杯百香果饮料",amount:13,type:"饮食",isMust:!1,remarks:""},{name:"羊蝎子火锅",amount:269,type:"饮食",isMust:!0,remarks:""},{name:"永辉超市购物",amount:30.24,type:"饮食",isMust:!0,remarks:"西红柿 火腿肠 鸡蛋 鱼丸"},{name:"矿泉水4L",amount:10,type:"饮食",isMust:!0,remarks:""},{name:"地铁",amount:9.1,type:"交通出行",isMust:!0,remarks:"回家 吃火锅去临平来回"}]},{date:"2020/10/8",billList:[{name:"回宝宝家",amount:5.46,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/10/9",billList:[{name:"地铁上班",amount:5.46,type:"交通出行",isMust:!0,remarks:""},{name:"马桶刷",amount:8.9,type:"生活日用",isMust:!0,remarks:""},{name:"洁厕灵",amount:13.49,type:"交通出行",isMust:!0,remarks:""},{name:"地铁下班",amount:5.46,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/10/10",billList:[{name:"地铁上班",amount:5.46,type:"交通出行",isMust:!0,remarks:""},{name:"重庆小面 + 卤蛋",amount:12,type:"饮食",isMust:!0,remarks:""},{name:"米婆婆醪糟",amount:15.9,type:"饮食",isMust:!0,remarks:""},{name:"沐浴球",amount:6.8,type:"生活日用",isMust:!0,remarks:""}]},{date:"2020/10/11",billList:[{name:"9月空调费",amount:55.6,type:"生活日用",isMust:!0,remarks:""},{name:"去宝宝家地铁来回",amount:9.1,type:"交通出行",isMust:!0,remarks:""},{name:"宝宝羽绒服",amount:420,type:"服装",isMust:!1,remarks:""},{name:"牙刷套",amount:5.5,type:"生活日用",isMust:!0,remarks:""}]},{date:"2020/10/12",billList:[{name:"小夹子",amount:5.73,type:"生活日用",isMust:!0,remarks:""},{name:"地铁下班",amount:1.82,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/10/13",billList:[{name:"地铁回家",amount:1.82,type:"交通出行",isMust:!0,remarks:""},{name:"地铁卡充值",amount:100,type:"交通出行",isMust:!0,remarks:""},{name:"地铁去宝宝家",amount:4.55,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/10/14",billList:[{name:"地铁上班",amount:4.55,type:"交通出行",isMust:!0,remarks:""},{name:"买衣服运费",amount:78,type:"服装",isMust:!0,remarks:""},{name:"临平滨江地铁来回",amount:12.74,type:"交通出行",isMust:!0,remarks:""},{name:"罗森面包",amount:7.9,type:"饮食",isMust:!0,remarks:""},{name:"辣条",amount:4.8,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/10/15",billList:[{name:"小面加卤蛋",amount:12,type:"饮食",isMust:!0,remarks:""},{name:"地铁下班",amount:4.55,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/10/16",billList:[{name:"酸辣粉加卤蛋",amount:14,type:"饮食",isMust:!0,remarks:""},{name:"地铁下班",amount:1.23,type:"交通出行",isMust:!0,remarks:"破百逆算"},{name:"邮寄妈妈衣服",amount:26,type:"生活日用",isMust:!0},{name:"留朋餐厅",amount:114.5,type:"生活日用",isMust:!0}]},{date:"2020/10/17",billList:[{name:"舅老爷麻辣香锅",amount:47.5,type:"饮食",isMust:!0,remarks:""},{name:"椒麻鸡丝凉皮",amount:18,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/10/18",billList:[{name:"杂粮煎饼",amount:10,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/10/20",billList:[{name:"鸡蛋拉面",amount:12,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/10/21",billList:[{name:"糖炒栗子",amount:15,type:"饮食",isMust:!0,remarks:""},{name:"外婆家",amount:143.1,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/10/22",billList:[{name:"酸辣粉加卤蛋",amount:14,type:"饮食",isMust:!0,remarks:""},{name:"烤肠",amount:9,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/10/23",billList:[{name:"地铁充值",amount:100,type:"交通出行",isMust:!0,remarks:""},{name:"烧烤羊蝎子",amount:196,type:"饮食",isMust:!1,remarks:""},{name:"大红袍奶茶",amount:26.5,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/10/25",billList:[{name:"新疆炒年糕/馕",amount:50.8,type:"饮食",isMust:!0,remarks:""},{name:"芋圆、草莓奶茶",amount:29.5,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/10/26",billList:[{name:"坐垫",amount:36.5,type:"生活日用",isMust:!0,remarks:""},{name:"糖炒栗子",amount:15,type:"饮食",isMust:!0,remarks:""},{name:"麻辣烫",amount:36.44,type:"饮食",isMust:!0,remarks:""},{name:"丰巢纪念品",amount:1.5,type:"生活日用",isMust:!0,remarks:""}]},{date:"2020/10/28",billList:[{name:"关中牛肉面",amount:19.9,type:"饮食",isMust:!0,remarks:""},{name:"电费",amount:50,type:"生活日用",isMust:!0,remarks:""}]},{date:"2020/10/30",billList:[{name:"苹果快冲头",amount:149,type:"电子消费",isMust:!0,remarks:""},{name:"矿泉水",amount:4,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/10/31",billList:[{name:"iCloud",amount:6,type:"电子消费",isMust:!0,remarks:""},{name:"法考午餐咖喱饭",amount:50,type:"饮食",isMust:!0,remarks:""},{name:"新手机壳",amount:31.86,type:"电子消费",isMust:!0,remarks:""},{name:"法考回程公交车",amount:3,type:"交通出行",isMust:!0,remarks:""},{name:"万能小组件软件",amount:8,type:"电子消费",isMust:!0,remarks:""},{name:"川味观请吃饭",amount:470,type:"人情往来",isMust:!0,remarks:""}]},{date:"2020/11/1",billList:[{name:"auto Sleep",amount:25,type:"电子消费",isMust:!0,remarks:""},{name:"熊猫吃短信",amount:3,type:"电子消费",isMust:!0,remarks:""},{name:"退换手机膜",amount:9,type:"电子消费",isMust:!0,remarks:""},{name:"外婆家请吃饭",amount:369,type:"人情往来",isMust:!0,remarks:""},{name:"猴子大圣娶亲皮肤",amount:95.06,type:"电子消费",isMust:!1,remarks:""}]},{date:"2020/11/2",billList:[{name:"地铁充值",amount:100,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/11/3",billList:[{name:"电动牙刷",amount:192.25,type:"人情往来",isMust:!0,remarks:"白色138.75 黑色减免红包后53.5"},{name:"快充头+钢化膜",amount:48.19,type:"电子消费",isMust:!0},{name:"暖风机 洁厕剂",amount:205.81,type:"生活日用",isMust:!0},{name:"工会费",amount:144,type:"工作支出",isMust:!0},{name:"羊肉泡馍",amount:28,type:"饮食",isMust:!1}]},{date:"2020/11/4",billList:[{name:"袜子盒 x 2",amount:11.46,type:"生活日用",isMust:!0,remarks:""},{name:"背心 x 3",amount:68,type:"服装",isMust:!0,remarks:""},{name:"小米手环钥匙扣",amount:9.61,type:"电子消费",isMust:!0,remarks:""},{name:"花生迷你小刀",amount:11.16,type:"生活日用",isMust:!0,remarks:""},{name:"airpods清洁工具",amount:2.43,type:"电子消费",isMust:!0,remarks:""},{name:"appleWatch贴膜",amount:31.45,type:"电子消费",isMust:!0},{name:"appleWatch贴膜（买多了）",amount:31.45,type:"电子消费",isMust:!1,remarks:"买多了一个 尴尬"},{name:"appleWatch表带 三色",amount:39,type:"电子消费",isMust:!0,remarks:""},{name:"appleWatch表带 白色",amount:9.4,type:"电子消费",isMust:!0,remarks:"商家发错颜色 退款一半"}]},{date:"2020/11/5",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"哨子扯面",amount:17,type:"饮食",isMust:!0,remarks:""},{name:"appleWatch透明钢化膜",amount:32.88,type:"电子消费",isMust:!0,remarks:""}]},{date:"2020/11/6",billList:[{name:"番茄鱼饭",amount:21.99,type:"饮食",isMust:!0,remarks:""},{name:"宝宝丰巢超时",amount:.5,type:"生活日用",isMust:!0,remarks:""},{name:"打车至龙翔桥",amount:11,type:"交通出行",isMust:!1,remarks:""},{name:"新疆炒米粉",amount:20.9,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/11/7",billList:[{name:"黄焖鸡",amount:20.8,type:"饮食",isMust:!0,remarks:""},{name:"appleWatch Care+",amount:699,type:"电子消费",isMust:!0,remarks:""},{name:"晚餐麦当劳",amount:51.4,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/8",billList:[{name:"晚餐麻辣香锅",amount:46.85,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/9",billList:[{name:"王者荣耀转区",amount:102,type:"电子消费",isMust:!0,remarks:""},{name:"香干回锅肉木桶饭",amount:16.4,type:"饮食",isMust:!0,remarks:""},{name:"关中牛肉面",amount:19.9,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/11",billList:[{name:"口气清新剂",amount:7.78,type:"生活日用",isMust:!0,remarks:""},{name:"擦手球",amount:10.33,type:"生活日用",isMust:!0,remarks:""},{name:"午睡绒毯",amount:25.94,type:"生活日用",isMust:!0,remarks:""},{name:"养生壶",amount:140.53,type:"生活日用",isMust:!0,remarks:""},{name:"插座",amount:51.18,type:"生活日用",isMust:!0,remarks:""},{name:"iPhone钢化膜",amount:25.94,type:"电子消费",isMust:!0,remarks:""},{name:"良品衣吧 牛仔裤",amount:0,type:"服装",isMust:!1,remarks:"已退货 原价 69.46"},{name:"良品衣吧 黑裤子",amount:60.66,type:"服装",isMust:!1,remarks:""},{name:"良品衣吧 黑背心",amount:9.7,type:"服装",isMust:!1,remarks:""},{name:"蛇铺 棕色毛衣",amount:49,type:"服装",isMust:!0,remarks:""},{name:"耐克白色空军一号",amount:194,type:"服装",isMust:!1,remarks:""},{name:"地铁充值",amount:100,type:"交通出行",isMust:!0,remarks:""},{name:"加热鼠标垫",amount:60,type:"电子消费",isMust:!0,remarks:"宝宝还款"},{name:"发夹",amount:12.5,type:"生活日用",isMust:!0,remarks:"宝宝还款"},{name:"打底猫咪体恤2件",amount:109.1,type:"服装",isMust:!0,remarks:"一黑一白 宝宝还款"},{name:"黑口罩",amount:24.31,type:"生活日用",isMust:!0,remarks:"宝宝还款"}]},{date:"2020/11/12",billList:[{name:"重庆小面 + 卤蛋",amount:12,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/14",billList:[{name:"搞事",amount:35.89,type:"生活日用",isMust:!1,remarks:""},{name:"必胜客",amount:219,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/15",billList:[{name:"打底猫咪体恤",amount:69,type:"服装",isMust:!0,remarks:""},{name:"闪电棉服外套",amount:370.99,type:"服装",isMust:!0,remarks:""},{name:"退货快递费",amount:9,type:"服装",isMust:!1,remarks:""}]},{date:"2020/11/16",billList:[{name:"爆浆奶糖",amount:15.96,type:"饮食",isMust:!1,remarks:""},{name:"heartWatch",amount:25,type:"电子消费",isMust:!0,remarks:""},{name:"哨子扯面",amount:17,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/17",billList:[{name:"桑葚干",amount:20.8,type:"饮食",isMust:!0,remarks:""},{name:"宁夏枸杞",amount:19.9,type:"饮食",isMust:!0,remarks:""},{name:"零食",amount:14.8,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/11/19",billList:[{name:"搞事",amount:50,type:"生活日用",isMust:!0,remarks:""},{name:"烧鸭米粉",amount:16,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/20",billList:[{name:"关中牛肉面",amount:19.9,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/23",billList:[{name:"地铁充值",amount:100,type:"交通出行",isMust:!0,remarks:""},{name:"过桥米线 + 肉夹馍",amount:100,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/24",billList:[{name:"iphone12 白色手机壳",amount:29.9,type:"电子消费",isMust:!0,remarks:""},{name:"肥牛冒菜 打包",amount:30.8,type:"饮食",isMust:!0,remarks:""},{name:"华元电费",amount:20,type:"生活日用",isMust:!0,remarks:""}]},{date:"2020/11/28",billList:[{name:"一点点奶茶",amount:23,type:"饮食",isMust:!1,remarks:""},{name:"陈火锅",amount:176,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/11/30",billList:[{name:"键盘膜",amount:10.8,type:"电子消费",isMust:!0,remarks:""},{name:"mac保护壳",amount:63,type:"电子消费",isMust:!0,remarks:""},{name:"永辉超市购物",amount:41.52,type:"饮食",isMust:!0,remarks:"挂面 鸡蛋 紫菜汤 西红柿等"},{name:"地铁充值",amount:100,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/12/1",billList:[{name:"icloud",amount:6,type:"电子消费",isMust:!0,remarks:""},{name:"冒菜",amount:32.8,type:"饮食",isMust:!1,remarks:""},{name:"永辉超市购物",amount:41.52,type:"饮食",isMust:!0,remarks:"挂面 鸡蛋 紫菜汤 西红柿等"},{name:"糖炒板栗",amount:15,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/2",billList:[{name:"冒菜",amount:34,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/12/3",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"过桥米线",amount:21,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/4",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"冒菜",amount:35.5,type:"饮食",isMust:!1,remarks:""},{name:"波霸奶绿",amount:10,type:"饮食",isMust:!1,remarks:""}]},{date:"2020/12/5",billList:[{name:"橘右京皮肤",amount:95.06,type:"电子消费",isMust:!1,remarks:""},{name:"给宝宝打钱",amount:1e3,type:"人情往来",isMust:!0,remarks:""},{name:"iphone + appleWatch分期",amount:424.92,type:"电子消费",isMust:!1,remarks:""}]},{date:"2020/12/6",billList:[{name:"一点点",amount:28,type:"饮食",isMust:!0,remarks:""},{name:"爸爸生日礼物 皮带",amount:330,type:"人情往来",isMust:!0,remarks:""}]},{date:"2020/12/7",billList:[{name:"椒香肉片饭",amount:11.9,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/8",billList:[{name:"酸菜包 + 豆浆",amount:4.8,type:"饮食",isMust:!0,remarks:""},{name:"购买发票",amount:90,type:"生活日用",isMust:!0,remarks:""},{name:"澜 + 战令",amount:95.16,type:"电子消费",isMust:!1,remarks:""}]},{date:"2020/12/9",billList:[{name:"青菜包 + 玉米汁",amount:4.8,type:"饮食",isMust:!0,remarks:""},{name:"地铁出行",amount:100,type:"交通出行",isMust:!0,remarks:""}]},{date:"2020/12/10",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"关中牛肉面",amount:19.9,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/11",billList:[{name:"鸡腿包 + 豆浆",amount:7.8,type:"饮食",isMust:!0,remarks:""},{name:"咖喱鸡块饭",amount:22.99,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/12",billList:[{name:"筋膜枪",amount:99,type:"生活日用",isMust:!0,remarks:""},{name:"黑龙堂奶茶",amount:31,type:"饮食",isMust:!0,remarks:""},{name:"廉颇皮肤",amount:114.6,type:"电子消费",isMust:!1,remarks:""}]},{date:"2020/12/14",billList:[{name:"一点点豆花奶茶",amount:14,type:"饮食",isMust:!1,remarks:""},{name:"冒菜",amount:32,type:"饮食",isMust:!1,remarks:""},{name:"知乎会员",amount:9,type:"电子消费",isMust:!1,remarks:""},{name:"宝宝羽绒服",amount:1050,type:"服装",isMust:!0,remarks:""}]},{date:"2020/12/15",billList:[{name:"豆浆青菜包",amount:4,type:"饮食",isMust:!0,remarks:""},{name:"重庆小面",amount:12,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/16",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"红枣豆浆",amount:3.5,type:"饮食",isMust:!0,remarks:""},{name:"哨子面",amount:15,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/17",billList:[{name:"十足早饭",amount:6,type:"饮食",isMust:!0,remarks:""},{name:"熬粥佬",amount:14.6,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/17",billList:[{name:"十足早饭",amount:6,type:"饮食",isMust:!0,remarks:""},{name:"熬粥佬",amount:14.6,type:"饮食",isMust:!0,remarks:""},{name:"买衣服快递",amount:40,type:"服装",isMust:!0,remarks:""}]},{date:"2020/12/18",billList:[{name:"付小姐串串",amount:189,type:"饮食",isMust:!0,remarks:""},{name:"娃哈哈奶茶",amount:20,type:"饮食",isMust:!0,remarks:""},{name:"买衣服快递",amount:40,type:"服装",isMust:!0,remarks:""}]},{date:"2020/12/20",billList:[{name:"天涯明月刀充值",amount:383,type:"电子消费",isMust:!1,remarks:""}]},{date:"2020/12/21",billList:[{name:"十足早饭",amount:4.8,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/22",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"羽绒服快递费",amount:20,type:"服装",isMust:!0,remarks:""},{name:"冒菜",amount:32.8,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/23",billList:[{name:"天涯明月刀充值",amount:3,type:"电子消费",isMust:!1,remarks:""},{name:"宝宝利息",amount:88,type:"人情往来",isMust:!0,remarks:""},{name:"地铁充值",amount:100,type:"交通出行",isMust:!0,remarks:"宝宝帮充"},{name:"冒菜",amount:32.8,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/24",billList:[{name:"葱油拌面",amount:5,type:"饮食",isMust:!0,remarks:""},{name:"玛格丽塔披萨",amount:35.8,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/25",billList:[{name:"十足早饭",amount:4.5,type:"饮食",isMust:!0,remarks:""},{name:"重庆小面",amount:12,type:"饮食",isMust:!0,remarks:""},{name:"川味观",amount:214,type:"饮食",isMust:!0,remarks:""},{name:"娃哈哈奶茶",amount:31.8,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/28",billList:[{name:"贼难吃的蟹黄拌饭",amount:29.9,type:"饮食",isMust:!0,remarks:""},{name:"麦当劳",amount:36,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/12/29",billList:[{name:"十足早饭",amount:4.8,type:"饮食",isMust:!0,remarks:""},{name:"红糖",amount:5,type:"人情往来",isMust:!0,remarks:""}]},{date:"2020/12/30",billList:[{name:"华元电费",amount:20,type:"生活日用",isMust:!0,remarks:""}]}],u=[{date:"2020/9/29",billList:[{name:"留朋餐厅",amount:107,type:"饮食",isMust:!0,remarks:""}]},{date:"2020/9/30",billList:[{name:"臭豆腐",amount:15,type:"饮食",isMust:!1,remarks:""},{name:"长沙假烤肠",amount:15,type:"饮食",isMust:!1,remarks:""},{name:"地铁（来福士来回）",amount:10.8,type:"交通出行",isMust:!0,remarks:""},{name:"6条新内裤",amount:149.7,type:"生活日用",isMust:!0,remarks:""},{name:"地铁上班",amount:2.73,type:"交通出行",isMust:!0,remarks:""}]}],o=a("04d9"),m=a("0651"),l={props:{statisticData:{type:Object},wrapHeight:{type:Number,default:410}},data:function(){return{}},methods:{getStatisticOption:function(){return{backgroundColor:"#344b58",legend:{top:"10",textStyle:{color:"#fff"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:50,bottom:50,left:60,right:100,textStyle:{color:"#fff"}},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"rgba(255,255,255,.5)"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,color:"rgba(255,255,255,0.7)",fontSize:10,rotate:30,margin:16,align:"center"},position:{right:-5},data:this.statisticData.xAxis}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,color:"rgba(255,255,255,0.5)",fontSize:14},splitArea:{show:!1}}],series:[{name:"刚需",type:"bar",stack:"总量",barMaxWidth:35,barGap:"0%",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(35, 157, 250, 1)"},{offset:1,color:"rgba(35, 157, 250, 0)"}],global:!1}}},data:this.statisticData.must},{name:"非必需",type:"bar",stack:"总量",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(35, 250, 187, 1)"},{offset:1,color:"rgba(35, 250, 187, 0)"}],global:!1},barBorderRadius:0}},data:this.statisticData.notMust},{name:"总金额",type:"line",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(255, 196, 53, 1)",barBorderRadius:0}},lineStyle:{normal:{width:4,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 67, 2, 1)"},{offset:1,color:"rgba(255, 196, 53, 1)"}],global:!1}}},data:this.statisticData.total}]}}},components:{echarts:m.a}},c=(a("5ed5"),a("9ca4")),p=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lineBase",style:"height:"+this.wrapHeight+"px"},[e("echarts",{attrs:{id:Math.random().toString(),options:this.getStatisticOption()}})],1)}),[],!1,null,"be797d8c",null).exports,h=a("986e"),y=[{title:"序号",dataIndex:"key",width:"100px"},{title:"消费内容",dataIndex:"name",width:"150px"},{title:"消费金额",dataIndex:"amount",scopedSlots:{customRender:"amount"},width:"100px"},{title:"消费类型",dataIndex:"type",scopedSlots:{customRender:"type"},width:"100px"},{title:"是否必需",dataIndex:"isMust",scopedSlots:{customRender:"isMust"},width:"100px"},{title:"备注",dataIndex:"remarks",scopedSlots:{customRender:"remarks"},width:"100px"}],d=[{title:"序号",dataIndex:"key",width:"50px"},{title:"消费内容",dataIndex:"name",width:"150px"},{title:"消费金额",dataIndex:"amount",scopedSlots:{customRender:"amount"},width:"100px"},{title:"消费日期",dataIndex:"date",scopedSlots:{customRender:"date"},width:"100px"},{title:"消费类型",dataIndex:"type",scopedSlots:{customRender:"type"},width:"100px"},{title:"是否必需",dataIndex:"isMust",scopedSlots:{customRender:"isMust"},width:"100px"},{title:"备注",dataIndex:"remarks",scopedSlots:{customRender:"remarks"},width:"100px"}],k={data:function(){return{columns:y,columnsMonth:d,timeType:"日",infoTitle:{title:"今日消费",btnTitle:"日"},btnTypeList:["日","月","年"],activeKey:0,totalCount:6,timeTabList:[],timeTabRefresh:!0,accountBook:r,currentBill:"",accountBookList:["我的账本","宝宝账本","合计"],visible:!1,statisticShow:!1,billStatisticData:[],changeCount:0,lineChartVisible:!1,statisticLineData:{total:[],must:[],notMust:[]},lineChangeCount:0,currentMonthDate:[],latestMonthDate:[],monthList:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],currentYear:""}},created:function(){var t=this;this.init(),h.a.$on("chartInfo",(function(e){if("bar"===e.seriesType&&"月"===t.timeType&&(t.timeTypeChange("日"),t.selectDailyBill(e.name),t.timeTabList.forEach((function(a,s){a===e.name&&(t.activeKey=s)}))),"pie"===e.seriesType&&"月"===t.timeType){var a=[];t.accountBook.forEach((function(s){console.log(t.activeKey),new Date(s.date).getMonth()===t.activeKey&&("刚需"===e.name||"非必需"===e.name?s.billList.forEach((function(s){t.mustTrans(s.isMust)===e.name&&a.push(s)})):s.billList.forEach((function(t){t.type===e.name&&a.push(t)})))})),console.log(a),t.statisticShow=!1,t.generateBill(a),t.infoTitle.title="分类消费",t.infoTitle.btnTitle="",t.totalCount=parseFloat(e.value)}}))},computed:{tableJudge:function(){switch(this.timeType){case"日":return this.columns;case"月":default:return this.columnsMonth}}},methods:{init:function(){this.timeTypeChange("日"),this.generateDays(),this.selectDailyBill(Object(i.a)((new Date).toLocaleDateString())),this.generateCurrentMonthDays((new Date).getMonth()+1),this.yearSelect((new Date).getFullYear().toString()),this.billAddDate()},timeTypeChange:function(t){switch(t){case"日":this.infoTitle.title="今日消费",this.infoTitle.btnTitle="日",this.timeTabChange("日"),this.statisticShow=!1;break;case"月":this.infoTitle.title="本月消费",this.infoTitle.btnTitle="月",this.timeTabChange("月");break;case"年":this.infoTitle.title="年度消费",this.infoTitle.btnTitle="年",this.timeTabChange("年")}},callback:function(t){},tabChange:function(t){"日"===this.timeType&&this.selectDailyBill(this.timeTabList[t]),"月"===this.timeType&&(this.totalCount=this.monthBillCalculate(this.timeTabList[t])||0,this.generateCurrentMonthDays(t+1),this.handleLineChartData(this.currentMonthDate),this.lineChangeCount=0),"年"===this.timeType&&(this.currentYear=this.timeTabList[t],this.accountBook=r,this.yearSelect(this.timeTabList[t]),this.totalCount=this.yearBillCalculate(this.timeTabList[t]),this.handleLineChartData()),this.activeKey=t},timeTabChange:function(t){var e=this;switch(t){case"日":this.timeType="日",this.generateDays(),this.selectDailyBill(Object(i.a)((new Date).toLocaleDateString()));break;case"月":this.timeType="月",this.timeTabList=this.monthList,this.timeTabList.forEach((function(t,a){parseInt(t)===(new Date).getMonth()+1&&(e.totalCount=e.monthBillCalculate(e.timeTabList[a]),e.activeKey=a)})),this.handleLineChartData(this.currentMonthDate);break;case"年":this.timeType="年",this.timeTabList=["2019","2020","2021"],this.timeTabList.forEach((function(t,a){parseInt(t)===(new Date).getFullYear()&&(e.activeKey=a)})),this.totalCount=this.yearBillCalculate(),this.handleLineChartData()}},generateDays:function(){var t=this;this.timeTabList=[];for(var e=0;e<31;e++)this.timeTabList.push(Object(i.a)(Object(i.c)(e-30)));this.timeTabList.reverse(),this.timeTabList.forEach((function(e,a){Object(i.b)(e)===(new Date).toLocaleDateString()&&(t.activeKey=a)})),this.latestMonthDate=this.timeTabList},selectDailyBill:function(t){this.totalCount=0,this.currentBill=[],this.totalCount=this.dailyBillCalculate(t)},dailyBillCalculate:function(t,e){var a=this,s=0;return this.accountBook.forEach((function(r){r.date===Object(i.b)(t,a.currentYear)&&(e||(a.currentBill=r.billList,Object(n.c)(r.billList)),r.billList.forEach((function(t,e){s+=t.amount})))})),Number(s.toFixed(2))},monthBillCalculate:function(t,e){var a=this,n=[],r=[];return this.accountBook.forEach((function(e){if(new Date(e.date).getMonth()+1===parseInt(t)){n.push(a.dailyBillCalculate(Object(i.a)(e.date),!0));var u=Object(s.a)(e.billList);r.push(u)}})),e||(this.generateBill(r),this.handleBillStatistic()),0!==n.length?Number(n.reduce((function(t,e){return t+e})).toFixed(2)):0},generateBill:function(t){var e=this;this.currentBill=[],t.forEach((function(t){e.currentBill=e.currentBill.concat(t)})),Object(n.c)(this.currentBill)},yearBillCalculate:function(t){var e=this,a=0,s=[];return this.monthList.forEach((function(t){a+=e.monthBillCalculate(t),s.push(e.currentBill)})),this.generateBill(s),this.handleBillStatistic(),a||0},accountSelect:function(t){switch(t){case"我的账本":this.accountBook=r;break;case"宝宝账本":this.accountBook=u;break;case"合计":var e=Object(s.a)(r);e.map((function(t){u.forEach((function(e){t.date===e.date&&(t.billList=t.billList.concat(e.billList))}))})),this.accountBook=e;break;default:this.accountBook=r}this.init()},billAddDate:function(){this.accountBook.forEach((function(t){t.billList.map((function(e){e.date=Object(i.a)(t.date)}))}))},createBillTemplate:function(){return"\n  {\n    date: '".concat((new Date).toLocaleDateString(),"',\n    billList: [\n      {\n        name: '条目',\n        amount: 0,\n        type: '分类',\n        isMust: true,\n        remarks: ''\n      }\n    ]\n  },\n      ")},billClick:function(){this.visible=!0},handleOk:function(){this.visible=!1},showStatistic:function(){this.statisticShow=!0},handleBillStatistic:function(t){var e=this,a=[],s=[],i=[];this.currentBill.forEach((function(e){s.push("must"===t?e.isMust:e.type)})),(s=Array.from(new Set(s))).map((function(t,e){void 0===t&&s.splice(e,1)})),s.forEach((function(a){var s=0;e.currentBill.forEach((function(e){("must"===t?a===e.isMust:a===e.type)&&(s+=e.amount)})),i.push(s.toFixed(2))})),"must"===t&&(s=s.map((function(t){return t=t?"刚需":"非必需"})));for(var n=0;n<s.length;n++)a.push({name:s[n],value:i[n]});this.billStatisticData=a},changeChartType:function(){this.changeCount++,this.lineChartVisible&&(this.changeCount=0,this.lineChartVisible=!1),1===this.changeCount?this.handleBillStatistic("must"):(this.handleBillStatistic(),this.changeCount=0)},backToList:function(){this.statisticShow=!1},yearSelect:function(t){var e=Object(s.a)(r),a=[];e.forEach((function(e,s){e.date.slice(0,4)===t&&a.push(e)})),this.accountBook=a},showLineChart:function(){this.lineChangeCount++,1===this.lineChangeCount?this.handleLineChartData(this.currentMonthDate):(this.handleLineChartData(this.latestMonthDate),this.lineChangeCount=0),this.lineChartVisible=!0},handleLineChartData:function(t){var e=this;this.statisticLineData={total:[],must:[],notMust:[]};var a=this.selectMustBill("刚需"),s=this.selectMustBill("非必需");"月"===this.timeType&&(this.statisticLineData.xAxis=t,t.forEach((function(t){e.statisticLineData.total.push(e.dailyBillCalculate(t,!0))})),t.forEach((function(t){e.statisticLineData.must.push(e.dailyBillCalculateLineChart(a,t))})),t.forEach((function(t){e.statisticLineData.notMust.push(e.dailyBillCalculateLineChart(s,t))}))),"年"===this.timeType&&(this.statisticLineData.xAxis=this.monthList,this.monthList.forEach((function(t){e.statisticLineData.total.push(e.monthBillCalculate(t,!0))})),this.monthList.forEach((function(t){e.statisticLineData.must.push(e.monthBillCalculateLineChart(a,t))})),this.monthList.forEach((function(t){e.statisticLineData.notMust.push(e.monthBillCalculateLineChart(s,t))})))},selectMustBill:function(t){return JSON.parse(JSON.stringify(this.accountBook)).map((function(e){var a=[];e.billList.forEach((function(e,s){"刚需"===t&&(e.isMust||a.push(s)),"非必需"===t&&e.isMust&&a.push(s)}));var s=0;return a.forEach((function(t){e.billList.splice(t-s,1),s++})),e}))},dailyBillCalculateLineChart:function(t,e){var a=this,s=0;return t.forEach((function(t){t.date===Object(i.b)(e,a.currentYear)&&t.billList.forEach((function(t,e){s+=t.amount}))})),Number(s.toFixed(2))},monthBillCalculateLineChart:function(t,e){var a=this,s=[];return t.forEach((function(n){new Date(n.date).getMonth()+1===parseInt(e)&&s.push(a.dailyBillCalculateLineChart(t,Object(i.a)(n.date)))})),0!==s.length?Number(s.reduce((function(t,e){return t+e})).toFixed(2)):0},mustTrans:function(t){return t?"刚需":"非必需"},generateCurrentMonthDays:function(t){this.currentMonthDate=[];for(var e=new Date((new Date).getFullYear(),t,0).getDate(),a=0;a<e;a++)this.currentMonthDate.push("".concat(t,"月").concat(a+1,"日"))}},components:{pieBase:o.a,lineBase:p}},M=(a("76b5"),Object(c.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moneyManage"},[a("div",{staticClass:"infoBar"},[a("a-card",{staticStyle:{width:"240px"},attrs:{title:t.infoTitle.title,size:"small"}},[a("div",{attrs:{slot:"extra",href:"#"},slot:"extra"},[a("a-popover",{attrs:{title:"详细信息"}},[a("template",{slot:"content"},[a("p",[t._v("账目数："+t._s(t.currentBill.length))])]),a("a",{attrs:{href:"#"}},[t._v("more")])],2)],1),a("p",{staticClass:"totalAmount"},[t._v(t._s(t.totalCount.toFixed(2)+"  ¥"))])]),a("div",{staticClass:"barRight",staticStyle:{"margin-left":"auto"}},["日"!==t.timeType?a("a-button",{attrs:{type:"danger"},on:{click:t.showStatistic}},[t._v("\n        统计\n      ")]):t._e(),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"我的账本"},on:{change:t.accountSelect}},t._l(t.accountBookList,(function(e,s){return a("a-select-option",{key:s,attrs:{value:e}},[t._v("\n          "+t._s(e)+"\n        ")])})),1),a("a-button-group",t._l(t.btnTypeList,(function(e,s){return a("a-button",{key:s,attrs:{type:t.infoTitle.btnTitle===e?"primary":""},on:{click:function(a){return t.timeTypeChange(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),1),a("a-button",{attrs:{type:"primary"},on:{click:t.billClick}},[t._v("\n        New\n      ")])],1)],1),a("a-tabs",{style:{height:"420px"},attrs:{activeKey:t.activeKey,"tab-position":"left"},on:{prevClick:t.callback,nextClick:t.callback,change:t.tabChange}},t._l(t.timeTabList,(function(e,s){return a("a-tab-pane",{key:s,attrs:{tab:e}},[t.statisticShow?t._e():a("a-table",{attrs:{columns:t.tableJudge,"data-source":t.currentBill,pagination:{pageSize:100},scroll:{y:350}},scopedSlots:t._u([{key:"amount",fn:function(e){return a("span",{staticStyle:{color:"green"}},[t._v("\n          "+t._s(e+" ¥")+"\n        ")])}},{key:"type",fn:function(e){return a("span",{},[t._v(t._s(e))])}},{key:"details",fn:function(e,s){return a("span",{on:{click:function(e){return t.showDetail(s)}}},[a("a",[t._v("details")])])}},{key:"isMust",fn:function(e){return a("span",{},[t._v(t._s(e?"刚需":"非必需"))])}},{key:"remarks",fn:function(e,s){return a("span",{},[a("a-popover",{attrs:{title:"备注"}},[a("a",[t._v(t._s(e?"查看":""))]),a("template",{slot:"content"},[a("pre",[t._v(t._s(s.remarks))])])],2)],1)}}],null,!0)}),t.statisticShow?a("div",{staticClass:"statisticWrap"},[a("a-card",{staticStyle:{width:"1000px"},attrs:{hoverable:""}},[t.lineChartVisible?t._e():a("pieBase",{attrs:{statisticData:t.billStatisticData,wrapHeight:320,unit:"¥"}}),t.lineChartVisible?a("lineBase",{attrs:{statisticData:t.statisticLineData,wrapHeight:320}}):t._e(),a("template",{staticClass:"ant-card-actions",slot:"actions"},[a("a-icon",{key:"swap",attrs:{type:"swap"},on:{click:t.changeChartType}}),a("a-icon",{key:"line-chart",attrs:{type:"line-chart"},on:{click:t.showLineChart}}),a("a-icon",{key:"rollback",attrs:{type:"rollback"},on:{click:t.backToList}})],1)],2)],1):t._e()],1)})),1),a("a-modal",{attrs:{width:"70%",title:"账单模板"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("pre",[t._v(t._s(t.createBillTemplate()))])])],1)}),[],!1,null,"e0a1b102",null));e.default=M.exports},bace:function(t,e,a){},e0cd:function(t,e,a){},fa7d:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n}));a("ed63"),a("8cf2"),a("e10e"),a("0b46"),a("6d57"),a("06a2"),a("2aa3"),a("e292");function s(t){var e=JSON.stringify(t);return JSON.parse(e)}function i(t,e){for(var a=arguments.length,s=new Array(a>2?a-2:0),i=2;i<a;i++)s[i-2]=arguments[i];var n;return function(){var a=this;if(void 0===n)return e.apply(a,s),void(n="isApplyed");clearTimeout(n),n=setTimeout((function(){e.apply(a,s)}),t)}}function n(t){t.map((function(t,e){t.key=e+1}))}}}]);