(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a89fbeac"],{"0caf":function(t,e,a){"use strict";a.r(e);a("2aa3"),a("06a2"),a("ec25"),a("6d57"),a("f548");var n=a("b07c"),s=a("fa7d"),i=[{title:"任务",dataIndex:"name",scopedSlots:{customRender:"name"},width:"200px"},{title:"日期跨度",dataIndex:"startTime",scopedSlots:{customRender:"startTime"},width:"200px"},{title:"进度",dataIndex:"process",scopedSlots:{customRender:"process"},width:"300px"},{title:"详情",dataIndex:"details",scopedSlots:{customRender:"details"},width:"100px"}],r={data:function(){return{columns:i,dailyTaskData:n.a,taskList:n.a,typeList:[],taskVisible:!1,taskTemplate:"",dailyReportVisible:!1,todayTask:{}}},computed:{dateFormatDeal:function(){return function(t){if(t)return t.slice(5,t.length).replace(/\//,"月")+"日"}}},watch:{todayTask:function(t,e){console.log(t)}},created:function(){this.initTaskList()},methods:{initTaskList:function(){this.setTaskKey(),this.handleTaskType(),this.handlePercent()},setTaskKey:function(){Object(s.c)(this.taskList),this.taskList.forEach((function(t){Object(s.c)(t.targetNodeList),t.targetNodeList.forEach((function(t){Object(s.c)(t.childrenTask)}))}))},handleTaskType:function(){var t=[];n.a.forEach((function(e){t.push(e.type)})),t.unshift("全部"),this.typeList=Array.from(new Set(t))},handlePercent:function(){var t=this;n.a.forEach((function(e){var a=0;e.targetNodeList.forEach((function(e){var n=0;e.childrenTask.forEach((function(t){n+=t.process})),n/=e.childrenTask.length,t.$set(e,"process",parseInt(n)?parseInt(n):0),a+=e.process})),a/=e.targetNodeList.length,t.$set(e,"process",parseInt(a)?parseInt(a):0)}))},typeSelect:function(t){var e=[];this.taskList=n.a,this.taskList.forEach((function(a){a.type===t&&e.push(a)})),this.taskList="全部"===t?n.a:e},showDetail:function(t){this.$router.push({path:"dailyTask/taskDetail",query:{key:t.key,data:"dailyTask"}})},createTask:function(){var t="\n  {\n    name: '".concat((new Date).getMonth()+1,"月第x周任务',\n    type: '个人任务',\n    startTime: '").concat((new Date).toLocaleDateString(),"',\n    endTime: '").concat(new Date(Date.parse((new Date).toLocaleDateString())+3456e5).toLocaleDateString(),"',\n    targetNodeList: [\n      {\n        targetName: '").concat(this.dateFormatDeal((new Date).toLocaleDateString()),"',\n        childrenTask: [\n          {\n            name: '子任务1',\n            process: 0\n          }\n        ]\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+864e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+1728e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+2592e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+3456e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+432e6).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+5184e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n    ]\n  },\n      ");this.taskTemplate=t,this.taskVisible=!0},handleOk:function(){this.taskVisible=!1},cloneObject:function(t){var e=JSON.stringify(t);return JSON.parse(e)}}},c=(a("7bca"),a("9ca4")),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taskList"},[a("div",{staticClass:"menuBar"},[a("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"每日待办",disabled:""},on:{change:t.typeSelect}},t._l(t.typeList,(function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])})),1),a("a-button",{attrs:{type:"primary"},on:{click:t.createTask}},[t._v("\n      新任务模板\n    ")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.taskList},scopedSlots:t._u([{key:"name",fn:function(e,n){return a("span",{on:{click:function(e){return t.showDetail(n)}}},[a("a",[t._v(t._s(e))])])}},{key:"startTime",fn:function(e,n){return a("span",{},[t._v("\n      "+t._s(t.dateFormatDeal(e)+"-"+t.dateFormatDeal(n.endTime))+"\n    ")])}},{key:"process",fn:function(e){return a("div",{staticClass:"processBar"},[a("div",{staticClass:"barMask"},[a("div",{staticClass:"bar",style:"width:"+e+"px"})]),a("p",[t._v(t._s(e+"%"))])])}},{key:"details",fn:function(e,n){return a("span",{on:{click:function(e){return t.showDetail(n)}}},[a("a",[t._v("Details")])])}}])}),a("a-modal",{attrs:{width:"70%",title:"任务模板"},on:{ok:t.handleOk},model:{value:t.taskVisible,callback:function(e){t.taskVisible=e},expression:"taskVisible"}},[a("pre",[t._v(t._s(t.taskTemplate))])])],1)}),[],!1,null,"a66abbba",null);e.default=o.exports},"77a1":function(t,e,a){},"7bca":function(t,e,a){"use strict";var n=a("77a1");a.n(n).a},b07c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=[{name:"10月第3周任务",type:"个人任务",startTime:"2020/10/20",endTime:"2020/10/24",targetNodeList:[{targetName:"10月20日",childrenTask:[{name:"",process:0}]},{targetName:"10月21日",childrenTask:[]},{targetName:"10月22日",childrenTask:[]},{targetName:"10月23日",childrenTask:[]},{targetName:"10月24日",childrenTask:[]},{targetName:"10月25日",childrenTask:[]}]}]},fa7d:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i}));a("ed63"),a("8cf2"),a("e10e"),a("0b46"),a("6d57"),a("06a2"),a("2aa3"),a("e292");function n(t){var e=JSON.stringify(t);return JSON.parse(e)}function s(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),s=2;s<a;s++)n[s-2]=arguments[s];var i;return function(){var a=this;if(void 0===i)return e.apply(a,n),void(i="isApplyed");clearTimeout(i),i=setTimeout((function(){e.apply(a,n)}),t)}}function i(t){t.map((function(t,e){t.key=e+1}))}}}]);