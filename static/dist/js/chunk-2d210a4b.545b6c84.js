(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210a4b"],{b986:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.mode?n("div",{staticClass:"flex flex-column height-full"},[n("breadcrumb",{attrs:{data:t.breadcrumbInfo}}),"import"===t.mode?n("div",{staticClass:"flex-1 flex"},[n("div",{staticClass:"fs-20",staticStyle:{margin:"20px auto"}},[t._v(t._s(t.$t("home.The imported cluster does not support editing")))])]):n("div",[t.schema?n("d-form",{staticClass:"mt-30",attrs:{loading:t.loading,schema:t.schema,"form-model":t.formModel,"is-show-cancel":!1,"submit-text":t.$t("common.Save")},on:{submit:t.onSubmit}}):t._e()],1)],1):t._e()},a=[],o=n("a34a"),s=n.n(o),c=n("3617"),i=n("c949");function u(t,e,n,r,a,o,s){try{var c=t[o](s),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(r,a)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){u(o,r,a,s,c,"next",t)}function c(t){u(o,r,a,s,c,"throw",t)}s(void 0)}))}}var l={name:"test",components:{DForm:c["a"]},props:{},data:function(){return{schema:null,formModel:{},breadcrumbInfo:["Clusters",this.$t("home.Settings")],mode:"",loading:!1}},created:function(){this.getFormSchema(),this.getCluster()},mounted:function(){},methods:{getCluster:function(){var t=this;return m(s.a.mark((function e(){var n,r,a,o;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,i["a"].getClusterConfig(n);case 3:r=e.sent,a=r.data.entity,t.mode=a.mode,o=new Function("return "+a.config)(),console.log(o),t.formModel=o;case 9:case"end":return e.stop()}}),e)})))()},getFormSchema:function(){var t=this;return m(s.a.mark((function e(){var n,r,a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getClusterUpdateFormSchema();case 2:n=e.sent,r=n.data.entity;try{a=new Function("return "+r)(),console.log(a),t.schema=a}catch(o){}case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(t){var e=this;return m(s.a.mark((function n(){var r;return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loading=!0,r=e.$route.params.id,n.next=4,i["a"].saveClusterConfig(r,t)["finally"]((function(){return e.loading=!1}));case 4:e.$message.success("".concat(r," Cluster ").concat(e.$t("common.Save")).concat(e.$t("common.Success")));case 5:case"end":return n.stop()}}),n)})))()}}},d=l,f=n("2877"),h=Object(f["a"])(d,r,a,!1,null,null,null);e["default"]=h.exports}}]);