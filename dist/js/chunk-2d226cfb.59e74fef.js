(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226cfb"],{e9f7:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("1-2")]),t("el-button",{on:{click:e.gonext}},[e._v("去1-3")]),t("h3",[e._v("下面按钮根据当前用户的权限来显示隐藏：")]),t("p",[e._v('当前用户角色类型： "'+e._s(e.$store.getters.getroles)+'"')]),t("p",[e._v('分别代表： "'+e._s(e.$store.getters.getroles)+'"')]),t("p",[e._v('"0"：admin')]),t("p",[e._v('"1"：editor')]),t("p",[e._v('"2"：reader')]),t("p",[e._v("\n    不需要权限的按钮：\n    "),t("el-button",{attrs:{type:"primary",plain:"",size:"medium"}},[e._v("此按钮不需要权限")])],1),t("p",[e._v('\n    需要 ["admin"]：\n    '),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"adminBtn",expression:"'adminBtn'"}],attrs:{type:"primary"}},[e._v("按钮名称从后端获取")])],1),t("p",[e._v('\n    需要 ["editor"]：\n    '),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"editorBtn",expression:"'editorBtn'"}],attrs:{type:"success"}},[e._v("按钮名称从后端获取")])],1),t("p",[e._v('\n    需要 ["reader"]：\n    '),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"readerBtn",expression:"'readerBtn'"}],attrs:{type:"warning"}},[e._v("按钮名称从后端获取")])],1),t("p",[e._v('\n    需要 ["admin", "editor"]：\n    '),t("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"adminAndEditorBtn",expression:"'adminAndEditorBtn'"}],attrs:{type:"danger"}},[e._v("按钮名称从后端获取")])],1)],1)},i=[],s={methods:{gonext:function(){this.$router.push("/userpower1/1-3")}}},a=s,o=t("0c7c"),p=Object(o["a"])(a,r,i,!1,null,null,null);n["default"]=p.exports}}]);