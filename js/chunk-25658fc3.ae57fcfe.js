(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25658fc3"],{"68b9":function(e,a,t){"use strict";t.r(a);t("2aa3"),t("06a2"),t("ec25"),t("6d57"),t("f548");var s=t("e354"),n=t("fa7d"),r=[{title:"任务",dataIndex:"name",scopedSlots:{customRender:"name"},width:"200px"},{title:"日期跨度",dataIndex:"startTime",scopedSlots:{customRender:"startTime"},width:"200px"},{title:"进度",dataIndex:"process",scopedSlots:{customRender:"process"},width:"300px"},{title:"详情",dataIndex:"details",scopedSlots:{customRender:"details"},width:"100px"}],o={data:function(){return{columns:r,dailyReportData:s.a,taskList:s.a,typeList:[],taskVisible:!1,taskTemplate:"",dailyReportVisible:!1,todayTask:{}}},computed:{dateFormatDeal:function(){return function(e){if(e)return e.slice(5,e.length).replace(/\//,"月")+"日"}}},watch:{todayTask:function(e,a){console.log(e)}},created:function(){this.initTaskList()},methods:{initTaskList:function(){this.setTaskKey(),this.handleTaskType(),this.handlePercent()},setTaskKey:function(){Object(n.c)(this.taskList),this.taskList.forEach((function(e){Object(n.c)(e.targetNodeList),e.targetNodeList.forEach((function(e){Object(n.c)(e.childrenTask)}))}))},handleTaskType:function(){var e=[];s.a.forEach((function(a){e.push(a.type)})),e.unshift("全部"),this.typeList=Array.from(new Set(e))},handlePercent:function(){var e=this;s.a.forEach((function(a){var t=0;a.targetNodeList.forEach((function(a){var s=0;a.childrenTask.forEach((function(e){s+=e.process})),s/=a.childrenTask.length,e.$set(a,"process",parseInt(s)?parseInt(s):0),t+=a.process})),t/=a.targetNodeList.length,e.$set(a,"process",parseInt(t)?parseInt(t):0)}))},typeSelect:function(e){var a=[];this.taskList=s.a,this.taskList.forEach((function(t){t.type===e&&a.push(t)})),this.taskList="全部"===e?s.a:a},showDetail:function(e){this.$router.push({path:"dailyReport/taskDetail",query:{key:e.key,data:"dailyReportData"}})},createTask:function(){var e="\n  {\n    name: '".concat((new Date).getMonth()+1,"月第x周日报',\n    type: '工作日报',\n    startTime: '").concat((new Date).toLocaleDateString(),"',\n    endTime: '").concat(new Date(Date.parse((new Date).toLocaleDateString())+3456e5).toLocaleDateString(),"',\n    targetNodeList: [\n      {\n        targetName: '").concat(this.dateFormatDeal((new Date).toLocaleDateString()),"',\n        childrenTask: [\n          {\n            name: '子任务1',\n            process: 0\n          }\n        ]\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+864e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+1728e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+2592e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n      {\n        targetName: '").concat(this.dateFormatDeal(new Date(Date.parse((new Date).toLocaleDateString())+3456e5).toLocaleDateString()),"',\n        childrenTask: []\n      },\n    ]\n  },\n      ");this.taskTemplate=e,this.taskVisible=!0},handleOk:function(){this.taskVisible=!1},cloneObject:function(e){var a=JSON.stringify(e);return JSON.parse(a)}}},c=(t("9053"),t("9ca4")),m=Object(c.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"taskList"},[t("div",{staticClass:"menuBar"},[t("a-select",{staticStyle:{width:"150px"},attrs:{"default-value":"工作日报",disabled:""},on:{change:e.typeSelect}},e._l(e.typeList,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v("\n        "+e._s(a)+"\n      ")])})),1),t("a-button",{attrs:{type:"primary"},on:{click:e.createTask}},[e._v("\n      新周报模板\n    ")])],1),t("a-table",{attrs:{columns:e.columns,"data-source":e.taskList},scopedSlots:e._u([{key:"name",fn:function(a,s){return t("span",{on:{click:function(a){return e.showDetail(s)}}},[t("a",[e._v(e._s(a))])])}},{key:"startTime",fn:function(a,s){return t("span",{},[e._v("\n      "+e._s(e.dateFormatDeal(a)+"-"+e.dateFormatDeal(s.endTime))+"\n    ")])}},{key:"process",fn:function(a){return t("div",{staticClass:"processBar"},[t("div",{staticClass:"barMask"},[t("div",{staticClass:"bar",style:"width:"+a+"px"})]),t("p",[e._v(e._s(a+"%"))])])}},{key:"details",fn:function(a,s){return t("span",{on:{click:function(a){return e.showDetail(s)}}},[t("a",[e._v("Details")])])}}])}),t("a-modal",{attrs:{width:"70%",title:"任务模板"},on:{ok:e.handleOk},model:{value:e.taskVisible,callback:function(a){e.taskVisible=a},expression:"taskVisible"}},[t("pre",[e._v(e._s(e.taskTemplate))])])],1)}),[],!1,null,"346a2ed3",null);a.default=m.exports},9053:function(e,a,t){"use strict";var s=t("c76e");t.n(s).a},c76e:function(e,a,t){},e354:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var s=[{name:"9月第4周日报",type:"工作日报",startTime:"2020/9/27",endTime:"2020/9/30",targetNodeList:[{targetName:"9月27日 周日",childrenTask:[{name:"与后端对接评估迁移监控模块",process:100},{name:"监控模块部分迁移",process:100}]},{targetName:"9月28日 周一",projectList:[{name:"saas相关",subProject:["园区后台","园区大屏"]},{name:"湖州水生态",subProject:["大屏","后台"]}],childrenTask:[{name:"添加监控失败修复联调自测",process:100},{name:"联调视频列表接口",process:100,remarks:"\n    与后端沟通协商联调方案\n            "},{name:"联调转码接口",process:100},{name:"联调基地址接口",process:100},{name:"拼接最终视频数组",process:100},{name:"后台测试环境发版",process:100},{name:"大屏测试环境发版",process:100}]},{targetName:"9月29日 周二",childrenTask:[{name:"新建房源中视频资料上传后保留文件名（50%）",process:100,remarks:"\n禅道：            \nhttp://172.22.12.192:8080/zentao/story-view-389.html      \n            "}]},{targetName:"9月30日 周三",childrenTask:[{key:1,name:"新建房源中视频资料上传后保留文件名（50%）",process:100,remarks:"\n禅道：            \nhttp://172.22.12.192:8080/zentao/story-view-389.html      \n            "},{name:"后台：测试环境发版更新",process:100}]}]},{name:"10月第1周日报",type:"工作日报",startTime:"2020/10/9",endTime:"2020/10/10",targetNodeList:[{targetName:"10月9日",childrenTask:[{name:"无事发生",process:100}]},{targetName:"10月10日",childrenTask:[{name:"无事发生",process:100}]}]},{name:"10月第2周日报",type:"工作日报",startTime:"2020/10/12",endTime:"2020/10/16",targetNodeList:[{targetName:"10月12日",childrenTask:[{name:"智能化管理-监控大厅 增加前端校验",process:100,remarks:"\n智能化管理-监控大厅-添加设备-端口号、通道号、IP地址增加前端校验\nhttp://172.22.12.192:8080/zentao/bug-view-2467.html    \n            "},{name:"监控大厅-添加设备-通道号",process:100,remarks:"\n智能化管理-监控大厅-添加设备-通道号已经有值时提示“请输入通道号”\nhttp://172.22.12.192:8080/zentao/bug-view-2466.html    \n            "},{name:"智能化管理-监控大厅 所属录像机重复",process:100,remarks:"\n智能化管理-监控大厅-添加设备-所属录像机重复，所属录像机1应修改为“所属厂商”\nhttp://172.22.12.192:8080/zentao/bug-view-2465.html    \n            "},{name:"园区后台 测试环境发版",process:100}]},{targetName:"10月13日",childrenTask:[{name:"整理saas 1.02版本更新需求",process:100,remarks:"\n语雀地址：\nhttps://www.yuque.com/gx82q9/bs4cxo/vs25o1\n            "},{name:"沟通统一门户添加外部链接解决方案",process:100}]},{targetName:"10月14日",childrenTask:[{name:"无事发生",process:100}]},{targetName:"10月15日",childrenTask:[{name:"学习Vue自定义指令",process:100},{name:"使用权限指令控制按钮权限 30%",process:100}]},{targetName:"10月16日",childrenTask:[{name:"saas后台版本上线",process:100,remarks:"\nPipeline\nhttp://git.dev.wochanye.com/saas-park/park-admin-front/pipelines/6017\n            "},{name:"saas大屏版本上线",process:100,remarks:"\nPipeline\nhttp://git.dev.wochanye.com/saas-park/park-visual-front/pipelines/6002\n            "},{name:"saas统一门户版本上线",process:100,remarks:"\nPipeline\nhttp://git.dev.wochanye.com/saas-portal/saas-portal-front/pipelines/6005\n            "}]}]},{name:"10月第3周日报",type:"工作日报",startTime:"2020/10/19",endTime:"2020/10/23",targetNodeList:[{targetName:"10月19日",childrenTask:[{name:"请假",process:100}]},{targetName:"10月20日",childrenTask:[{name:"配合后端部署定海saas用户中心",process:100}]},{targetName:"10月21日",childrenTask:[{name:"定海用户中心更改打包路径",process:100},{name:"定海用户中心主题色更换",process:100},{name:"定海用户中心打包部署",process:100},{name:"实践小程序跨端解决方案taro",process:100},{name:"taro中引入Vant-app组件库",process:100}]},{targetName:"10月22日",childrenTask:[{name:"实践小程序跨端解决方案taro",process:100},{name:"编写taro语雀文档",process:100},{name:"研究taro兼容打包微信小程序和H5",process:100}]},{targetName:"10月23日",childrenTask:[{name:"无事发生",process:100}]}]},{name:"10月第4周日报",type:"工作日报",startTime:"2020/10/26",endTime:"2020/10/30",targetNodeList:[{targetName:"10月26日",childrenTask:[{name:"帮助胡屹凛解决菜单异步获取问题",process:100},{name:"bug修复：资讯发布增加返回按钮",process:100,remarks:"\n禅道：\nhttp://172.22.12.192:8080/zentao/bug-view-2503.html\n            "},{name:"编写语雀saas登录对接文档",process:100,remarks:"\n语雀：\nhttps://www.yuque.com/gx82q9/sbyu02/msk89a\n            "}]},{targetName:"10月27日",childrenTask:[{name:"园区管理模块按钮级权限控制配置",process:100},{name:"入园管理模块按钮级权限控制配置",process:100},{name:"与产品后端沟通按钮级权限设计问题",process:100},{name:"saas中后台权限控制前端实现思考总结",process:100}]},{targetName:"10月28日",childrenTask:[{name:"资产管理模块按钮级权限控制配置",process:100},{name:"物业管理模块按钮级权限控制配置",process:100},{name:"评估saas园区大屏/后台新需求开发时长",process:100},{name:"帮助胡屹凛解决Vue watch监听问题",process:100}]},{targetName:"10月29日",childrenTask:[{name:"园区管理 -> 概况图片改为全景图片；",process:100},{name:"园区详情 -> 增加园区投资信息（6个字段）",process:100},{name:"园区详情 -> 人才密度改为高端人才",process:100},{name:"园区详情 -> 企业专利改为发明专利",process:100},{name:"园区详情 -> 新增科研装备字段",process:100},{name:"园区详情 -> 新增园区照片上传",process:100},{name:"园区后台管理界面园区概况占地面积无单位显示",process:100}]},{targetName:"10月30日",childrenTask:[{name:"无事发生",process:100}]}]},{name:"11月第1周日报（周六加班）",type:"工作日报",startTime:"2020/11/2",endTime:"2020/11/7",targetNodeList:[{targetName:"11月2日",childrenTask:[{name:"新增入园管理 -> 新增所属行业、企业上云、企业认定字段",process:100},{name:"园区大屏：修复登录密码错误无提示bug",process:100},{name:"园区大屏：修复验证码无效bug",process:100},{name:"园区大屏：修复转码接口地址错误bug",process:100},{name:"园区后台：修复转码接口地址错误bug",process:100}]},{targetName:"11月3日",childrenTask:[{name:"交接基于上虞、乐清等基于saas大屏登录验证码功能",process:100}]},{targetName:"11月4日",childrenTask:[{name:"saas大屏 园区简介图片接口联调",process:100},{name:"saas大屏 中心图片替换功能实现",process:100},{name:"园区经济接口联调",process:100},{name:"园区投资接口联调",process:100},{name:"企业入驻接口联调",process:100},{name:"高端要素接口联调",process:100}]},{targetName:"11月5日",childrenTask:[{name:"大屏 -> 党组织概况接口联调",process:100},{name:"大屏 -> 就业人数接口联调",process:100},{name:"后台 -> 新增投资字段（6个）接口联调",process:100},{name:"后台 -> 概况图片上传接口联调",process:100}]},{targetName:"11月6日",childrenTask:[{name:"园区门户 -> 专业服务模块、企业码紧急迁移",process:100}]},{targetName:"11月7日",childrenTask:[{name:"园区门户 -> 申请服务静态页面",process:100},{name:"园区门户 -> 申请服务接口联调",process:100},{name:"园区大屏 -> 服务评价接口联调",process:100},{name:"园区大屏 -> 客户服务接口联调",process:100},{name:"园区大屏 -> 设备故障分布接口联调",process:100},{name:"园区大屏 -> 服务热搜接口联调",process:100},{name:"园区大屏 -> 企业产值排行接口联调",process:100},{name:"园区门户 -> 专业服务、企业码发版",process:100}]}]},{name:"11月第2周日报",type:"工作日报",startTime:"2020/11/9",endTime:"2020/11/13",targetNodeList:[{targetName:"11月9日",childrenTask:[{name:"园区门户 -> 申请服务接口联调",process:100},{name:"园区大屏 -> 服务热度接口联调",process:100},{name:"园区大屏 -> 出租情况接口联调",process:100},{name:"园区大屏 -> 工单信息接口联调",process:100},{name:"园区大屏 -> 工单列表接口联调",process:100},{name:"园区大屏 -> 工单分布接口联调",process:100},{name:"园区大屏 -> 政策服务接口联调",process:100}]},{targetName:"11月10日",childrenTask:[{name:"园区大屏 -> 各类收费情况接口联调",process:100},{name:"园区大屏 -> 服务企业接口联调",process:100},{name:"园区大屏 -> 服务订单接口联调",process:100},{name:"园区大屏 -> 服务订单表格接口联调",process:100},{name:"园区大屏 -> 上云服务接口联调",process:100},{name:"园区大屏 -> 党员队伍结构接口联调",process:100},{name:"园区大屏 -> 党内表彰接口联调",process:100},{name:"园区大屏 -> 党建活动接口联调",process:100},{name:"园区大屏 -> 园区运营接口联调",process:100}]},{targetName:"11月11日",childrenTask:[{name:"园区大屏 -> 企业入驻404 bug修复",process:100},{name:"园区大屏 -> 企业经济接口联调",process:100},{name:"园区大屏 -> 三会一课接口联调",process:100},{name:"园区后台 -> 入园企业管理企业类型code -> id",process:100}]},{targetName:"11月12日",childrenTask:[{name:"园区后台 -> 用户中心-园区勾选和不勾选首页房源信息概况菜单项 bug修复",process:100},{name:"园区大屏 -> 维保超过4个则换行显示 需求迭代",process:100},{name:"园区后台 -> 已退驻企业详情权限失效 bug修复",process:100},{name:"园区后台 -> 删除多余无用权限指令（分页、搜索等） bug修复",process:100},{name:"园区后台 -> 保存/修改园区情况权限失效 bug修复",process:100}]},{targetName:"11月13日",childrenTask:[{name:"园区大屏 -> 统计的单位是万 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2757.html"},{name:"园区大屏 -> 去掉5700小时 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2755.html"},{name:"园区大屏 -> 字数过多时 会出现遮盖 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2752.html"},{name:"园区大屏 -> 季度和均亩需要去掉 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2753.html"},{name:"园区后台 -> 缴费单位接口404 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2761.html"}]}]},{name:"11月第3周日报",type:"工作日报",startTime:"2020/11/16",endTime:"2020/11/20",targetNodeList:[{targetName:"11月16日",childrenTask:[{name:"服务机构和服务产品的切换显示",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2754.html"},{name:"服务产品数据排序",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2783.html"},{name:"进入园区党建页面会弹窗报错",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2782html"},{name:"维保进度条显示错误",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2784.html"},{name:"收费名称与占比会有重叠",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2820.html"},{name:"上传全景图片权限控制不生效",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2788.html"},{name:"服务事项审批没有统计总共有多少条记录",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2821.html"},{name:"物业管理 维保管理权限配置",process:100},{name:"物业管理 设备故障统计权限配置",process:100},{name:"物业管理 物业资源出租 权限bug修复",process:100},{name:"物业管理 巡检管理 权限bug修复",process:100}]},{targetName:"11月17日",childrenTask:[{name:"物业管理 服务事项审批 权限细分",process:100},{name:"物业管理 投诉管理 权限细分",process:100},{name:"物业管理 报修管理 权限细分",process:100},{name:"园区门户 移除企业码模块",process:100}]},{targetName:"11月18日",childrenTask:[{name:"园区后台 服务事项审批权限 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2796.html"},{name:"园区后台 报修管理权限 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2795.html"},{name:"园区后台 安全信息统计提示文案显示中文 bug修复",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2851.html"},{name:"园区小程序 修改密码的提示语不正确",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2851.html"}]},{targetName:"11月19日",childrenTask:[{name:"园区门户 增加办事指南详情",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2871.html"},{name:"园区门户 新闻资讯-点击标题-查看详情-调用接口错误",process:100,remarks:"http://172.22.12.192:8080/zentao/bug-view-2870.html"}]},{targetName:"11月20日",childrenTask:[]}]}]},fa7d:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return r}));t("ed63"),t("8cf2"),t("e10e"),t("0b46"),t("6d57"),t("06a2"),t("2aa3"),t("e292");function s(e){var a=JSON.stringify(e);return JSON.parse(a)}function n(e,a){for(var t=arguments.length,s=new Array(t>2?t-2:0),n=2;n<t;n++)s[n-2]=arguments[n];var r;return function(){var t=this;if(void 0===r)return a.apply(t,s),void(r="isApplyed");clearTimeout(r),r=setTimeout((function(){a.apply(t,s)}),e)}}function r(e){e.map((function(e,a){e.key=a+1}))}}}]);