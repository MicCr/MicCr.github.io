(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d29fb216"],{"165d":function(t,i,s){},"22b9":function(t,i,s){"use strict";s.r(i);s("b794"),s("6f84");var e=s("382a"),a=s("e8cf"),h=function(){function t(i,s){Object(e.a)(this,t),console.log(s),this.ctx=i||document.querySelector("canvas").getContext("2d"),this.canvasWidth=this.ctx.canvas.width,this.canvasHeight=this.ctx.canvas.height,this.gridSize=s.gridSize||10,this.space=s.space||20,this.arrowSize=s.arrowSize||10,this.dotSize=s.dotSize||6,s.girdAssist&&this.drawGirdAssist(s),this.drawAxis(s.axis),this.drawDots()}return Object(a.a)(t,[{key:"drawGirdAssist",value:function(t){var i=Math.floor(this.canvasHeight/this.gridSize),s=Math.floor(this.canvasWidth/this.gridSize);this.ctx.strokeStyle="#ddd";for(var e=0;e<i;e++)this.ctx.beginPath(),this.ctx.moveTo(0,e*this.gridSize-.5),this.ctx.lineTo(this.canvasWidth,e*this.gridSize-.5),this.ctx.stroke();for(var a=0;a<s;a++)this.ctx.beginPath(),this.ctx.moveTo(a*this.gridSize-.5,0),this.ctx.lineTo(a*this.gridSize-.5,this.canvasHeight),this.ctx.stroke();this.ctx.closePath()}},{key:"drawAxis",value:function(){this.ctx.beginPath(),this.ctx.strokeStyle="black";var t=this.space-.5,i=this.canvasHeight-this.space-.5;this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(this.canvasWidth-this.space,i),this.ctx.stroke(),this.ctx.closePath(),this.ctx.moveTo(t,i),this.ctx.lineTo(t,this.space),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(this.canvasWidth-this.space-this.arrowSize,i),this.ctx.lineTo(this.canvasWidth-this.space-this.arrowSize,i+this.arrowSize/3),this.ctx.lineTo(this.canvasWidth-this.space,i),this.ctx.lineTo(this.canvasWidth-this.space-10,i-this.arrowSize/3),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.moveTo(t,this.space+this.arrowSize),this.ctx.lineTo(t-this.arrowSize/3,this.space+this.arrowSize),this.ctx.lineTo(t,this.space),this.ctx.lineTo(t+this.arrowSize/3,this.space+this.arrowSize),this.ctx.fill(),this.ctx.closePath()}},{key:"drawDots",value:function(){}}]),t}(),c={props:{config:{type:Object,default:{width:"300",height:"150"}}},data:function(){return{id:"lineChart".concat(Math.random()),canvas:"",ctx:"",lineChart:""}},mounted:function(){this.canvas=document.getElementById(this.id),this.ctx=this.canvas.getContext("2d"),new h(this.ctx,this.config)}},n=(s("a95e"),s("9ca4")),o={data:function(){return{config1:{width:490,height:280,girdAssist:!0},demoList:[{id:"canvasDemo1",name:"基本网格"},{id:"canvasDemo2",name:"网格方法"},{id:"canvasDemo3",name:"基本坐标轴"}]}},mounted:function(){},methods:{},components:{lineChart:Object(n.a)(c,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"lineChart"},[i("canvas",{attrs:{id:this.id,width:Number(this.config.width),height:Number(this.config.height)}})])}),[],!1,null,"222accaf",null).exports}},r=(s("b806"),Object(n.a)(o,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"canvasCharts"},[i("div",{staticClass:"demoBlock"},[i("p",[this._v("折线图")]),i("lineChart",{attrs:{config:this.config1}})],1)])}),[],!1,null,"2c11bb26",null));i.default=r.exports},a95e:function(t,i,s){"use strict";var e=s("b3ae");s.n(e).a},b3ae:function(t,i,s){},b794:function(t,i,s){"use strict";s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return a})),s.d(i,"a",(function(){return h}));s("6f84"),s("6d57");function e(t,i,s,e,a,h){switch(a&&(t.strokeStyle=a),h&&(t.lineWidth=h),t.beginPath(),t.moveTo(i[0][0],i[0][1]),i.slice(1,i.length).forEach((function(i){t.lineTo(i[0],i[1])})),s&&t.closePath(),e){case"stroke":t.stroke();break;case"fill":t.fill();break;case"both":t.fill(),t.stroke()}}function a(t,i,s,e,a){a&&(t.font=a),e&&(t.fillStyle=e),t.fillText(i,s[0],s[1])}function h(t,i,s){var e=i,a=t.canvas.width,h=t.canvas.height,c=Math.floor(h/e),n=Math.floor(a/e);t.strokeStyle=s;for(var o=0;o<c;o++)t.beginPath(),t.moveTo(0,o*e-.5),t.lineTo(0,o*e-.5),t.lineTo(a,o*e-.5),t.stroke();for(var r=0;r<n;r++)t.beginPath(),t.moveTo(r*e-.5,0),t.lineTo(r*e-.5,0),t.lineTo(r*e-.5,h),t.stroke()}},b806:function(t,i,s){"use strict";var e=s("165d");s.n(e).a}}]);