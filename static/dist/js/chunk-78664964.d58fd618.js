(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78664964"],{"5c63":function(e,t,n){},c308:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"settings"},[n("breadcrumb",{attrs:{data:["Clusters",e.$route.params.id,"manage"]},scopedSlots:e._u([{key:"default",fn:function(){return e._l(e.clusterStatus,(function(t){return n("el-button",{key:t,staticClass:"fs-14",attrs:{type:"primary",size:"mini",disabled:e.isStatusDisable(t)},on:{click:function(n){return e.clusterOperation(t)}}},[e._v(e._s(e.$t("manage."+t+" Cluster")))])}))},proxy:!0}])}),n("section",{staticClass:"container"},[n("div",{staticClass:"uprade ptb-15"},[n("span",{staticClass:"fs-18 font-bold mb-15 inline-block"},[e._v(e._s(e.$t("manage.Upgrade Cluster")))]),n("div",{},[n("span",{staticClass:"fs-14 font-bold"},[e._v(e._s(e.$t("home.ClickHouse Version"))+": "+e._s(e.list.version))]),"deploy"===e.mode?[n("span",{staticClass:"fs-14 font-bold ml-30"},[e._v(e._s(e.$t("manage.Upgrade to"))+":")]),n("el-select",{staticClass:"ml-10 mr-10",attrs:{size:"small",clearable:"",filterable:""},model:{value:e.packageVersion,callback:function(t){e.packageVersion=t},expression:"packageVersion"}},e._l(e.versionOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("span",{staticClass:"fs-14 font-bold ml-0"},[e._v(e._s(e.$t("manage.Policy"))+":")]),n("el-select",{staticClass:"ml-10 mr-20",attrs:{size:"small",clearable:"",filterable:""},model:{value:e.policy,callback:function(t){e.policy=t},expression:"policy"}},[n("el-option",{attrs:{label:e.$t("manage.Full"),value:"Full"}}),n("el-option",{attrs:{label:e.$t("manage.Rolling"),value:"Rolling"}})],1),n("el-checkbox",{staticClass:"mr-50",model:{value:e.skip,callback:function(t){e.skip=t},expression:"skip"}},[e._v(e._s(e.$t("manage.skip same version")))]),n("el-button",{staticClass:"fs-16",attrs:{type:"primary",size:"mini",disabled:!e.packageVersion},on:{click:function(t){return e.clusterOperation("upgrade")}}},[e._v(e._s(e.$t("common.Upgrade")))])]:e._e()],2)]),n("div",{staticClass:"node-list"},[n("h3",{staticClass:"mt-15 mb-30"},[e._v(e._s(e.$t("home.ClickHouse Node List")))]),n("div",{staticClass:"search flex flex-between"},[n("el-input",{staticClass:"width-300",attrs:{placeholder:"search",autocomplete:"false",clearable:"",size:"medium"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),"deploy"===e.mode?n("el-button",{staticClass:"fs-16",attrs:{type:"primary",size:"mini"},on:{click:e.addNode}},[e._v(e._s(e.$t("manage.Add Node")))]):e._e()],1),n("el-table",{staticClass:"mt-10",attrs:{data:e.nodesList,border:""}},[n("el-table-column",{attrs:{prop:"ip","show-overflow-tooltip":"",label:e.$t("manage.Node IP"),align:"center"}}),n("el-table-column",{attrs:{prop:"hostname","show-overflow-tooltip":"",label:e.$t("manage.Node Name"),align:"center"}}),n("el-table-column",{attrs:{prop:"shardNumber","show-overflow-tooltip":"",label:e.$t("manage.shard number"),align:"center"}}),n("el-table-column",{attrs:{prop:"replicaNumber","show-overflow-tooltip":"",label:e.$t("manage.replica number"),align:"center"}}),n("el-table-column",{attrs:{prop:"disk","show-overflow-tooltip":"",label:e.$t("manage.Disk(Used/Total)"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.disk)+" ")]}}])}),n("el-table-column",{attrs:{prop:"status","show-overflow-tooltip":"",label:e.$t("manage.Node Status"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"dot mr-5",class:t.row.status}),e._v(e._s(t.row.status)+" ")]}}])}),"deploy"===e.mode?n("el-table-column",{attrs:{label:e.$t("home.Actions"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[[n("el-button",{attrs:{type:"text",disabled:"green"===a.status,loading:a.onlineLoading},on:{click:function(t){return e.onlineClusterNode(a)}}},[e._v(e._s(e.$t("manage.Online")))]),n("el-button",{attrs:{type:"text",disabled:"red"===a.status,loading:a.offlineLoading},on:{click:function(t){return e.offlineClusterNode(a)}}},[e._v(e._s(e.$t("manage.Offline")))]),n("i",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("common.Delete"),expression:"$t('common.Delete')"}],staticClass:"fa fa-trash pointer fs-18 ml-10",on:{click:function(t){return e.remove(a)}}})]]}}],null,!1,2219048524)}):e._e()],1)],1)])],1)},r=[],s=n("a34a"),o=n.n(s),i=n("e621");function c(e,t,n){var a=e.length;return n=void 0===n?a:n,!t&&n>=a?e:Object(i["a"])(e,t,n)}var l=c,u="\\ud800-\\udfff",d="\\u0300-\\u036f",f="\\ufe20-\\ufe2f",m="\\u20d0-\\u20ff",p=d+f+m,v="\\ufe0e\\ufe0f",h="\\u200d",b=RegExp("["+h+u+p+v+"]");function w(e){return b.test(e)}var g=w;function $(e){return e.split("")}var x=$,k="\\ud800-\\udfff",C="\\u0300-\\u036f",_="\\ufe20-\\ufe2f",y="\\u20d0-\\u20ff",N=C+_+y,P="\\ufe0e\\ufe0f",D="["+k+"]",O="["+N+"]",S="\\ud83c[\\udffb-\\udfff]",M="(?:"+O+"|"+S+")",j="[^"+k+"]",L="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",V="\\u200d",T=M+"?",z="["+P+"]?",A="(?:"+V+"(?:"+[j,L,R].join("|")+")"+z+T+")*",F=z+T+A,E="(?:"+[j+O+"?",O,L,R,D].join("|")+")",U=RegExp(S+"(?="+S+")|"+E+F,"g");function B(e){return e.match(U)||[]}var H=B;function I(e){return g(e)?H(e):x(e)}var J=I,q=n("79f6");function G(e){return function(t){t=Object(q["a"])(t);var n=g(t)?J(t):void 0,a=n?n[0]:t.charAt(0),r=n?l(n,1).join(""):t.slice(1);return a[e]()+r}}var K=G,Q=K("toUpperCase"),W=Q,X=K("toLowerCase"),Y=X;function Z(e){return e&&e.length?e[0]:void 0}var ee=Z;function te(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}var ne=te,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"add-node"},[n("el-form",{ref:"Form",attrs:{model:e.formModel,"label-width":"150px"}},[n("el-form-item",{attrs:{label:e.$t("manage.New Node IP")+":",prop:"ips"}},[n("el-input",{staticClass:"width-350",attrs:{type:"textarea",placeholder:e.$t("common.placeholderIp")},model:{value:e.formModel.ips,callback:function(t){e.$set(e.formModel,"ips",t)},expression:"formModel.ips"}})],1),n("el-form-item",{attrs:{label:e.$t("manage.Node Shard")+":",prop:"shard"}},[n("el-input-number",{attrs:{step:1,min:e.numberRange[0],max:e.numberRange[1]},model:{value:e.formModel.shard,callback:function(t){e.$set(e.formModel,"shard",t)},expression:"formModel.shard"}})],1)],1)],1)},re=[],se=n("c949"),oe=n("c281");function ie(e,t,n,a,r,s,o){try{var i=e[s](o),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(a,r)}function ce(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function o(e){ie(s,a,r,o,i,"next",e)}function i(e){ie(s,a,r,o,i,"throw",e)}o(void 0)}))}}var le={props:["numberRange","password"],data:function(){return{formModel:{ips:"",shard:1}}},methods:{onOk:function(){var e=this;return ce(o.a.mark((function t(){var n,a,r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.formModel,a=n.ips,r=n.shard,t.next=3,se["a"].addClusterNode(e.$route.params.id,{ips:Object(oe["b"])(Object(oe["c"])(a)),shard:+r},e.password);case 3:case"end":return t.stop()}}),t)})))()}}},ue=le,de=n("2877"),fe=Object(de["a"])(ue,ae,re,!1,null,null,null),me=fe.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"add-node"},[n("el-form",{ref:"Form",attrs:{model:e.formModel}},[n("el-form-item",{attrs:{prop:"password",required:""}},[n("el-input",{attrs:{placeholder:e.$t("home.SSH Password"),"show-password":"",autocomplete:"new-password"},model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1)],1)],1)},ve=[];function he(e,t,n,a,r,s,o){try{var i=e[s](o),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(a,r)}function be(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function o(e){he(s,a,r,o,i,"next",e)}function i(e){he(s,a,r,o,i,"throw",e)}o(void 0)}))}}var we={props:["password"],data:function(){return{formModel:{password:""}}},created:function(){this.formModel.password=this.password},methods:{onOk:function(){var e=this;return be(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.Form.validate();case 2:return t.abrupt("return",e.formModel.password);case 3:case"end":return t.stop()}}),t)})))()}}},ge=we,$e=Object(de["a"])(ge,pe,ve,!1,null,null,null),xe=$e.exports,ke=n("08ba"),Ce=n("8f12");function _e(e,t,n,a,r,s,o){try{var i=e[s](o),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(a,r)}function ye(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function o(e){_e(s,a,r,o,i,"next",e)}function i(e){_e(s,a,r,o,i,"throw",e)}o(void 0)}))}}var Ne={data:function(){return{mode:"",versionOptions:[{value:"",label:""}],input:"",list:{status:"green",version:"",nodes:[]},clusterStatus:[],packageVersion:"",skip:!0,policy:"Full",needPassword:!1,password:""}},computed:{nodesList:function(){var e=this.list.nodes,t=this.input;return e.filter((function(e){for(var n in e)if(-1!==String(e[n]).search(t))return!0}))}},mounted:function(){this.clusterStatus=Object.keys(Ce["a"]).filter((function(e){return"upgrade"!==e})).map((function(e){return W(e)})),this.fetchVersionData(),this.fetchData()},methods:{fetchData:function(){var e=this;return ye(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se["a"].getClusterInfo(e.$route.params.id);case 2:n=t.sent,a=n.data.entity,e.list=a,e.mode=a.mode,e.needPassword=a.needPassword;case 7:case"end":return t.stop()}}),t)})))()},fetchVersionData:function(){var e=this;return ye(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se["d"].getList();case 2:n=t.sent,a=n.data.entity,e.versionOptions=a.map((function(t){return{value:t,label:t,disabled:t===e.list.version}}));case 5:case"end":return t.stop()}}),t)})))()},isStatusDisable:function(e){return"import"===this.mode||(!(!["start","destroy"].includes(Y(e))||"red"===this.list.status)||"stop"===Y(e)&&"red"===this.list.status)},numberRange:function(){var e=this.list.nodes;e=e.sort((function(e,t){return e.shardNumber-t.shardNumber}));var t=0===e.length?[1,1]:[ee(e).shardNumber,ne(e).shardNumber+1];return t},openPasswordDialog:function(){var e=this;return ye(o.a.mark((function t(){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(ke["c"])({component:xe,props:{title:e.$t("home.SSH Password"),width:300,cancelText:e.$t("common.Cancel"),okText:e.$t("common.Confirm")},data:{password:e.password}}).then((function(e){return e}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},addNode:function(){var e=this;return ye(o.a.mark((function t(){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="",!e.needPassword){t.next=5;break}return t.next=4,e.openPasswordDialog();case 4:n=t.sent;case 5:return t.next=7,Object(ke["c"])({component:me,props:{title:e.$t("manage.Add Node"),width:600,cancelText:e.$t("common.Cancel"),okText:e.$t("common.Save")},data:{numberRange:e.numberRange(),password:n}});case 7:e.$message.success(e.$t("manage.Add Node")+e.$t("common.Success")),e.fetchData();case 9:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return ye(o.a.mark((function n(){var a;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a="",!t.needPassword){n.next=5;break}return n.next=4,t.openPasswordDialog();case 4:a=n.sent;case 5:return n.next=7,t.$confirm(t.$t("common.Confirm Delete"),t.$t("common.tips"),{confirmButtonText:t.$t("common.Delete"),cancelButtonText:t.$t("common.Cancel"),text:"warning"});case 7:return n.next=9,se["a"].deleteClusterNode(t.$route.params.id,{ip:e.ip},a);case 9:t.$message.success(t.$t("common.Delete")+t.$t("common.Success")),t.fetchData();case 11:case"end":return n.stop()}}),n)})))()},clusterOperation:function(e){var t=this;return ye(o.a.mark((function n(){var a,r,s,i,c;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a="",!t.needPassword){n.next=5;break}return n.next=4,t.openPasswordDialog();case 4:a=n.sent;case 5:return e=Y(e),n.next=8,t.$confirm(t.$t("common."+Ce["a"][e]),t.$t("common.tips"),{confirmButtonText:t.$t("common.Confirm"),cancelButtonText:t.$t("common.Cancel")});case 8:return ke["b"].increase(),r={clusterName:t.$route.params.id},"upgrade"===e&&(s=t.packageVersion,i=t.policy,c=t.skip,r=Object.assign(r,{packageVersion:s,policy:i,skip:c})),n.next=13,se["a"].manageCluster(e,r,a)["finally"]((function(){return ke["b"].decrease()}));case 13:if(t.$message.success("".concat(t.$t("manage."+W(e)+" Cluster"))+" ".concat(t.$t("common.Success"))),"destroy"!==e){n.next=17;break}return t.$router.push("/home"),n.abrupt("return");case 17:t.fetchData();case 18:case"end":return n.stop()}}),n)})))()},onlineClusterNode:function(e){var t=this;return ye(o.a.mark((function n(){var a,r;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a="",!t.needPassword){n.next=5;break}return n.next=4,t.openPasswordDialog();case 4:a=n.sent;case 5:return t.$set(e,"onlineLoading",!0),r=t.$route.params.id,n.next=9,se["a"].onlineClusterNode(r,e.ip,a);case 9:t.$message.success("".concat(t.$t("manage.Online"))+" ".concat(t.$t("common.Success"))),t.fetchData(),t.$set(e,"onlineLoading",!1);case 12:case"end":return n.stop()}}),n)})))()},offlineClusterNode:function(e){var t=this;return ye(o.a.mark((function n(){var a,r;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a="",!t.needPassword){n.next=5;break}return n.next=4,t.openPasswordDialog();case 4:a=n.sent;case 5:return t.$set(e,"offlineLoading",!0),r=t.$route.params.id,n.next=9,se["a"].offlineClusterNode(r,e.ip,a);case 9:t.$message.success("".concat(t.$t("manage.Offline"))+" ".concat(t.$t("common.Success"))),t.fetchData(),t.$set(e,"offlineLoading",!1);case 12:case"end":return n.stop()}}),n)})))()}},components:{}},Pe=Ne,De=(n("ed40"),Object(de["a"])(Pe,a,r,!1,null,"0e3c7d56",null));t["default"]=De.exports},e621:function(e,t,n){"use strict";function a(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;var s=Array(r);while(++a<r)s[a]=e[a+t];return s}t["a"]=a},ed40:function(e,t,n){"use strict";var a=n("5c63"),r=n.n(a);r.a}}]);