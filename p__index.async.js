(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3,2],{"5MT0":function(e,t,a){e.exports={toolbar:"toolbar___pcmmB",tooltip:"tooltip_____8D4"}},"6bLa":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTc1ODU4MTkzNDk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxMzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEyOGMyMTEuOTY4IDAgMzg0IDE3Mi4wMzIgMzg0IDM4NHMtMTcyLjAzMiAzODQtMzg0IDM4NC0zODQtMTcyLjAzMi0zODQtMzg0IDE3Mi4wMzItMzg0IDM4NC0zODR6IG0tMTg3LjIyMTMzMyA0MjUuNmgzNzEuMmE0MS42IDQxLjYgMCAxIDAgMC04My4yaC0zNzEuMmE0MS42IDQxLjYgMCAwIDAgMCA4My4yeiIgcC1pZD0iNTEzOCI+PC9wYXRoPjwvc3ZnPg=="},MzgG:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTc2MDU3MzUxNzc0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODYxLjkgODQzLjVjMCAzMS4xLTI1LjIgNTYuMi01Ni4yIDU2LjJIMTAzLjVsOTguMy00NTQuMmMwLTMxIDI1LTU2LjIgNTYuMS01Ni4yaDY0Ni4yYzMxIDAgNTYuMSAyNS4yIDU2LjEgNTYuMmwtOTguMyAzOTh6TTIxNS44IDM0Ny4xaDYzMnYtNTUuMmMwLTMxLTI1LjItNTYuMi01Ni4yLTU2LjJoLTMzN3YtNTAuOWMwLTMxLTI1LjItNTYuMi01Ni4yLTU2LjJIMTE3LjZjLTMxIDAtNTYuMiAyNS4yLTU2LjIgNTYuMnY2NTguNmw5OC4yLTQ0MC4yYzAtMzAuOSAyNS4yLTU2LjEgNTYuMi01Ni4xeiBtMCAwIiBwLWlkPSIyNTM5IiBmaWxsPSIjZmFhZDE0Ij48L3BhdGg+PC9zdmc+"},Mzha:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),c=a("vzA7"),l=a("vurl"),d="http://img.alicdn.com/tfs/TB1gXH2ywHqK1RjSZFPXXcwapXa-200-200.svg",r=100,s=50;class o extends n.a.Component{render(){var e={afterDraw(e){var t=e.getModel(),a=e.getGraphicGroup(),i=a.findByClass("label")[0],n=i.getBBox();a.addShape("image",{attrs:{x:n.width/2+s,y:-n.height/2,width:r,height:r,img:t.icon||d}})},adjustLabelPosition(e,t){var a=this.getSize(e),i=this.getPadding(),n=a[0],c=t.getBBox();t.attr({x:-n/2+i[3],y:-c.height/2})},getPadding(){return[4,8,4,8]},getSize(e){var t=e.getGraphicGroup(),a=t.findByClass("label")[0],i=a.getBBox(),n=this.getPadding(e);return[i.width+n[1]+n[3],i.height+n[0]+n[2]]},getPath(e){var t=this.getSize(e),a=this.getStyle(e);return Object(l["a"])(-t[0]/2,-t[1]/2,t[0]+r+s,t[1],a.radius)},getStyle(e){return{fill:"#cccccc",fillOpacity:0,radius:4,lineWidth:2}},getLabelStyle(e){return{fill:"#333333",lineHeight:18,fontSize:16}},getActivedStyle(e){return{stroke:"#44C0FF",lineWidth:2}},getSelectedStyle(e){return{stroke:"#1AA7EE",lineWidth:2}}};return n.a.createElement(i["Fragment"],null,n.a.createElement(c["h"],{name:"mind-base",config:e,extend:"mind-base"}),n.a.createElement(c["h"],{name:"custom-node",config:e,extend:"mind-base"}))}}t["default"]=o},QeBL:function(e,t,a){"use strict";a.r(t);a("Q9mQ");var i=a("diRs"),n=(a("+L6B"),a("2/Rp")),c=(a("jCWc"),a("kPKH")),l=(a("14J3"),a("BMrR")),d=a("qIgq"),r=a.n(d),s=a("p0pE"),o=a.n(s),m=a("q1tI"),g=a.n(m),u=a("vzA7"),I=a("vurl"),M=a("ijdH"),h=a.n(M),p=a("6bLa"),N=a.n(p),E=a("MzgG"),y=a.n(E),C=a("Rsdn"),j=a.n(C),x="node-inner-icon",D={code:"9D5cBEfB-A1bb-C3e1-A57B-c87ACDB8C77d",name:"\u4e3b\u9898\u540d\u79f0",type:"lib",isLeaf:!0,children:[{code:"d3EFfAf6-83F3-Aad9-4EBf-3b475Af6Fd39",name:"GG-Editor \u662f\u57fa\u4e8e G6-Editor \u8fdb\u884c\u4e8c\u6b21\u5c01\u88c5\u7684\u4e00\u6b3e\u53ef\u89c6\u5316\u64cd\u4f5c\u5e94\u7528\u6846\u67b6\uff0c\u4e0d\u8fc7\u76ee\u524d\u76f8\u5173\u7684\u4f7f\u7528\u8bf4\u660e\u6587\u6863\u592a\u7a00\u5c11\u4e86\uff0c\u6ca1\u6709\u4e00\u4e2a\u5b8c\u6574\u7684\u9879\u76ee\u5e94\u7528\u6848\u4f8b\uff0c\u8fd8\u6709\u5c31\u662f\u6838\u5fc3\u4ee3\u7801 gg-editor-core \u6ca1\u6709\u5f00\u6e90\uff0c\u90a3\u4e48\u4eca\u5929\u5c31\u6559\u5927\u5bb6\u5982\u4f55\u57fa\u4e8e GG-Editor \u5f00\u53d1\u4e00\u6b3e\u8111\u56fe\u5e94\u7528\u3002",type:"cate",side:"left",isLeaf:!0,children:[{code:"ca81ef1B-BfcA-2B66-CEcB-D9bEdb5dcbCc",name:"\u6d4b\u8bd5\u6570\u636e",type:"cate",isLeaf:!1}]},{code:"B5c04DB5-16D0-9661-588B-D2C4C9C3B8EF",name:"\u672c\u9879\u76ee\u662f\u57fa\u4e8e GG-Editor \u8fdb\u884c\u5f00\u53d1\u7684\u8111\u56fe\u5e94\u7528\uff0c\u57fa\u672c\u4e0a\u662f\u4e00\u4e2a\u8f83\u4e3a\u5b8c\u6574\u7684\u5e94\u7528\u4e86\uff0c\u53ef\u4ee5\u8bf4\u5df2\u7ecf\u9884\u5148\u7ed9\u4f60\u4eec\u628a\u5751\u586b\u597d\u4e86\uff0c\u53e6\u5916\u672c\u9879\u76ee\u6240\u6709\u4ee3\u7801\u57fa\u672c\u53ef\u4ee5\u5f88\u5feb\u901f\u7684\u5b9e\u73b0\u4e00\u4e2a\u6d41\u7a0b\u56fe\u5e94\u7528\uff0c\u56e0\u4e3a\u57fa\u672c\u7684 API \u4f7f\u7528\u4e0a\u662f\u76f8\u540c\u7684\u3002 \u53e6\u5916\uff0c\u672c\u6587\u4e0d\u4f1a\u8fc7\u591a\u7684\u8bb2\u8ff0\u5b98\u65b9\u6587\u6863\u6709\u7684\u5185\u5bb9\uff0c\u4f1a\u6ce8\u91cd\u4e8e\u4f7f\u7528\u4e0a\u3002",type:"cate",side:"left",isLeaf:!0,children:[{code:"668E54Ad-31EB-7e3E-5cfb-629BEBdb672C",name:"\u6d4b\u8bd5\u6570\u636e",type:"case",isLeaf:!0}]},{code:"e1cAC0Fe-Ee25-1fDC-c3Ac-96cbebF1AE8D",name:"\u5b89\u88c5\u548c\u4f7f\u7528 GG-Editor \u53ef\u76f4\u63a5\u901a\u8fc7 npm \u6216 yarn \u5b89\u88c5\u4f9d\u8d56npm install --save gg-editor\u4e0b\u9762\u6211\u4eec\u5feb\u901f\u8fdb\u5165\u5f00\u53d1\uff0c\u9996\u5148\u4e0a github \u4e0a\u628a\u9879\u76ee\u62c9\u53d6\u5230\u672c\u5730 https://github.com/alibaba/GGEditor\uff0c\u6211\u4eec\u5c06\u5b83\u81ea\u5e26\u7684 Demo \u4f5c\u4e3a\u6a21\u7248\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u8fdb\u884c\u5f00\u53d1.",type:"cate",side:"right",isLeaf:!0,children:[]},{code:"3Cf26E28-e4b2-FBd2-aBD9-5EB9ace8cFaC",name:"\u6d4b\u8bd5\u6570\u636e",icon:"https://img.alicdn.com/tfs/TB1OzAmyyLaK1RjSZFxXXamPFXa-200-200.svg",type:"cate",side:"right",isLeaf:!1,children:[]},{label:"\u5206\u652f\u4e3b\u9898 1",icon:"https://img.alicdn.com/tfs/TB1OzAmyyLaK1RjSZFxXXamPFXa-200-200.svg"}]},T=16;class L extends g.a.Component{render(){var e={afterDraw(e){var t=e.getModel(),a=e.getGraphicGroup(),i=a.findByClass("label")[0],n=i.getBBox(),c=n.width,l=n.height,d=-c/2,r=-l/2,s=t.type,o=t.collapsed,m=t.children;"cate"===s&&m&&m.length>0&&a.addShape("image",{className:x,attrs:{img:o?h.a:N.a,x:d-24,y:"cate"===s?r:r+2,width:T,height:T,style:"cursor: pointer"}}),a.addShape("image",{attrs:{img:"cate"===s?y.a:j.a,x:m&&m.length>0?d+4:d-12,y:"cate"===s?r:r+2,width:T,height:T}})},adjustLabelPosition(e,t){var a=this.getSize(e),i=this.getPadding(e),n=a[0],c=t.getBBox();t.attr({x:-n/2+i[3],y:-c.height/2})},getPadding(e){var t=e.getModel(),a=t.children;return a&&a.length>0?[12,8,12,60]:[12,8,12,38]},getSize(e){var t=e.getGraphicGroup(),a=t.findByClass("label")[0],i=a.getBBox(),n=this.getPadding(e);return[i.width+n[1]+n[3],i.height+n[0]+n[2]]},getPath(e){var t=this.getSize(e),a=this.getStyle(e);return Object(I["a"])(-t[0]/2,-t[1]/2,t[0]+4,t[1],a.radius)},getStyle(e){return{radius:2,lineWidth:1}},getLabelStyle(e){return{fill:"rgba(0,0,0,0.65)",lineHeight:18,fontSize:16}},getActivedStyle(e){return{stroke:"#096dd9"}},getSelectedStyle(e){return{stroke:"#096dd9"}}};return g.a.createElement(m["Fragment"],null,g.a.createElement(u["h"],{name:"mind-base",config:e,extend:"mind-base"}),g.a.createElement(u["h"],{name:"custom-node",config:e,extend:"mind-base"}))}}var b=L;function v(e,t,a,i){var n=e.getGraph(),c=t.getModel(),l=e.getFirstChildrenBySide("left"),d=l[0]&&n.find(l[0].id);return n.add("node",{id:a,parent:t.id,label:"\u65b0\u5efa\u8282\u70b9",type:i,side:c.children.length>2?"left":"right",nth:d?n.getNth(d):void 0})}class z extends g.a.Component{render(){return[g.a.createElement(u["g"],{key:"customAppendCase",name:"customAppendCase",config:{enable(e){var t=e.getCurrentPage(),a=t.getSelected();return t.isMind&&1===a.length},getItem(e){var t=e.getCurrentPage(),a=t.getGraph();return this.selectedItemId?a.find(this.selectedItemId):t.getSelected()[0]},execute(e){var t,a=e.getCurrentPage(),i=a.getGraph(),n=a.getRoot(),c=this.getItem(e),l=c.getModel(),d=l.hierarchy,r=c.getParent();if(c.isRoot)t=v(a,c,this.addItemId,"case");else{var s=i.getNth(c);t=i.add("node",{id:this.addItemId,parent:r.id,side:2===d&&3===n.children.length?"left":l.side,label:"\u65b0\u5efa\u8282\u70b9",type:"case",nth:"left"===l.side&&2===d?s:s+1})}a.clearSelected(),a.clearActived(),a.setSelected(t,!0),1===this.executeTimes&&(this.selectedItemId=c.id,this.addItemId=t.id,a.beginEditLabel(t))},back(e){var t=e.getCurrentPage();t.getGraph().remove(this.addItemId),t.clearSelected(),t.clearActived(),t.setSelected(this.selectedItemId,!0)},shortcutCodes:["Enter"]}}),g.a.createElement(u["g"],{key:"customAppendChildCase",name:"customAppendChildCase",config:{enable(e){var t=e.getCurrentPage(),a=t.getSelected(),i=this.getItem(e),n=i&&"case"===i.getModel().type;return t.isMind&&a.length>0&&!n},getItem(e){var t=e.getCurrentPage(),a=t.getGraph();return this.selectedItemId?a.find(this.selectedItemId):t.getSelected()[0]},execute(e){var t,a=e.getCurrentPage(),i=a.getGraph(),n=this.getItem(e);t=n.isRoot?v(a,n,this.addItemId,"case"):i.add("node",{id:this.addItemId,parent:n.id,label:"\u65b0\u5efa\u8282\u70b9",type:"case"}),a.clearSelected(),a.clearActived(),a.setSelected(t,!0),1===this.executeTimes&&(this.selectedItemId=n.id,this.addItemId=t.id,a.beginEditLabel(t))},back(e){var t=e.getCurrentPage();t.getGraph().remove(this.addItemId),t.clearSelected(),t.clearActived(),t.setSelected(this.selectedItemId,!0)},shortcutCodes:["Tab"]}}),g.a.createElement(u["g"],{key:"customAppendCate",name:"customAppendCate",config:{enable(e){var t=e.getCurrentPage(),a=t.getSelected();return t.isMind&&1===a.length},getItem(e){var t=e.getCurrentPage(),a=t.getGraph();return this.selectedItemId?a.find(this.selectedItemId):t.getSelected()[0]},execute(e){var t,a=e.getCurrentPage(),i=a.getGraph(),n=a.getRoot(),c=this.getItem(e),l=c.getModel(),d=l.hierarchy,r=c.getParent();if(c.isRoot)t=v(a,c,this.addItemId,"cate");else{var s=i.getNth(c);t=i.add("node",{id:this.addItemId,parent:r.id,side:2===d&&3===n.children.length?"left":l.side,label:"\u65b0\u5efa\u8282\u70b9",type:"cate",nth:"left"===l.side&&2===d?s:s+1})}a.clearSelected(),a.clearActived(),a.setSelected(t,!0),1===this.executeTimes&&(this.selectedItemId=c.id,this.addItemId=t.id,a.beginEditLabel(t))},back(e){var t=e.getCurrentPage();t.getGraph().remove(this.addItemId),t.clearSelected(),t.clearActived(),t.setSelected(this.selectedItemId,!0)},shortcutCodes:[["metaKey","ArrowDown"],["ctrlKey","ArrowDown"]]}}),g.a.createElement(u["g"],{key:"customAppendChildCate",name:"customAppendChildCate",config:{enable(e){var t=e.getCurrentPage(),a=t.getSelected(),i=this.getItem(e),n=i&&"case"===i.getModel().type;return t.isMind&&a.length>0&&!n},getItem(e){var t=e.getCurrentPage(),a=t.getGraph();return this.selectedItemId?a.find(this.selectedItemId):t.getSelected()[0]},execute(e){var t,a=e.getCurrentPage(),i=a.getGraph(),n=this.getItem(e);t=n.isRoot?v(a,n,this.addItemId,"cate"):i.add("node",{id:this.addItemId,parent:n.id,label:"\u65b0\u5efa\u8282\u70b9",type:"cate"}),a.clearSelected(),a.clearActived(),a.setSelected(t,!0),1===this.executeTimes&&(this.selectedItemId=n.id,this.addItemId=t.id,a.beginEditLabel(t))},back(e){var t=e.getCurrentPage();t.getGraph().remove(this.addItemId),t.clearSelected(),t.clearActived(),t.setSelected(this.selectedItemId,!0)},shortcutCodes:[["metaKey","ArrowRight"],["ctrlKey","ArrowRight"]]}}),g.a.createElement(u["g"],{key:"customCollapseExpand",name:"customCollapseExpand",config:{enable(e){var t=this.getItem(e);if(!t)return!1;var a=t.getModel(),i=a.type,n=t.getChildren().length>0;return t&&n&&"case"!==i},getItem(e){var t=e.getCurrentPage(),a=t.getGraph();return this.itemId?a.find(this.itemId):t.getSelected()[0]},execute(e){var t=e.getCurrentPage(),a=t.getGraph(),i=this.getItem(e);i.getModel().collapsed?(a.update(i,{collapsed:!1}),i.getInnerEdges&&i.getInnerEdges().forEach(e=>{e.update()}),this.toCollapsed=!1):(a.update(i,{collapsed:!0}),this.toCollapsed=!0),t.clearSelected(),t.setSelected(i,!0),1===this.executeTimes&&(this.itemId=i.id)},back(e){var t=e.getCurrentPage(),a=t.getGraph(),i=this.getItem(e);this.toCollapsed?a.update(i,{collapsed:!1}):a.update(i,{collapsed:!0}),t.clearSelected(),t.setSelected(i,!0)},shortcutCodes:[["metaKey","b"],["ctrlKey","b"]]}}),g.a.createElement(u["g"],{key:"customCollapse",name:"customCollapse",extend:"customCollapseExpand",config:{enable(e){var t=this.getItem(e);if(!t)return!1;var a=t.getModel(),i=a.type,n=a.collapsed,c=t.getChildren().length>0;return t&&c&&"case"!==i&&!n}}}),g.a.createElement(u["g"],{key:"customExpand",name:"customExpand",extend:"customCollapseExpand",config:{enable(e){var t=this.getItem(e);if(!t)return!1;var a=t.getModel(),i=a.type,n=a.collapsed,c=t.getChildren().length>0;return t&&c&&"case"!==i&&n}}})]}}var A=z,S=a("LvDl"),f=(a("Pwec"),a("CtXQ")),w=f["a"].createFromIconfontCN({scriptUrl:"https://at.alicdn.com/t/font_1101588_01zniftxm9yp.js"}),O=w,P=a("j2Jt"),B=a.n(P),Q=e=>{var t=e.command,a=e.icon,i=e.text;return g.a.createElement(u["b"],{name:t},g.a.createElement("div",{className:B.a.item},g.a.createElement(O,{type:"icon-".concat(a||t)}),g.a.createElement("span",null,i||Object(S["upperFirst"])(t))))},R=Q,G=()=>g.a.createElement(u["c"],{className:B.a.contextMenu},g.a.createElement(u["f"],null,g.a.createElement(R,{command:"customAppendCase",icon:"append",text:"\u6dfb\u52a0\u540c\u7ea7 case"}),g.a.createElement(R,{command:"customAppendChildCase",icon:"append-child",text:"\u6dfb\u52a0\u4e0b\u7ea7 case"}),g.a.createElement(R,{command:"customAppendCate",icon:"append",text:"\u6dfb\u52a0\u540c\u7ea7 cate"}),g.a.createElement(R,{command:"customAppendChildCate",icon:"append-child",text:"\u6dfb\u52a0\u4e0b\u7ea7 cate"}),g.a.createElement(R,{command:"customCollapse",icon:"collapse",text:"\u6298\u53e0"}),g.a.createElement(R,{command:"customExpand",icon:"expand",text:"\u5c55\u5f00"}),g.a.createElement(R,{command:"delete",text:"Delete / BackSpace \u5220\u9664"})),g.a.createElement(u["a"],null,g.a.createElement(R,{command:"undo",text:"\u64a4\u9500"}),g.a.createElement(R,{command:"redo",text:"\u91cd\u505a"}))),U=G,k=(a("IzEo"),a("bx4M")),W=()=>g.a.createElement(k["a"],{type:"inner",size:"small",title:"\u7f29\u7565\u56fe",bordered:!1},g.a.createElement(u["e"],{height:200})),F=W,H=(a("/zsF"),a("PArb")),Z=(a("5Dmo"),a("3S7+")),Y=a("5MT0"),V=a.n(Y),_=e=>{var t=e.command,a=e.icon,i=e.text;return g.a.createElement(u["b"],{name:t},g.a.createElement(Z["a"],{title:i||Object(S["upperFirst"])(t),placement:"bottom",overlayClassName:V.a.tooltip},g.a.createElement(O,{type:"icon-".concat(a||t)})))},J=_,X=()=>g.a.createElement(u["i"],{className:V.a.toolbar},g.a.createElement(J,{command:"undo",text:"\u64a4\u9500"}),g.a.createElement(J,{command:"redo",text:"\u91cd\u505a"}),g.a.createElement(H["a"],{type:"vertical"}),g.a.createElement(J,{command:"zoomIn",icon:"zoom-in",text:"\u653e\u5927"}),g.a.createElement(J,{command:"zoomOut",icon:"zoom-out",text:"\u7f29\u5c0f"}),g.a.createElement(J,{command:"autoZoom",icon:"fit-map",text:"\u81ea\u9002\u5e94\u6bd4\u4f8b"}),g.a.createElement(J,{command:"resetZoom",icon:"actual-size",text:"\u539f\u59cb\u6bd4\u4f8b"}),g.a.createElement(H["a"],{type:"vertical"}),g.a.createElement(J,{command:"customAppendCase",icon:"append",text:"\u6dfb\u52a0\u540c\u7ea7 case"}),g.a.createElement(J,{command:"customAppendChildCase",icon:"append-child",text:"\u6dfb\u52a0\u4e0b\u7ea7 case"}),g.a.createElement(H["a"],{type:"vertical"}),g.a.createElement(J,{command:"customAppendCate",icon:"append",text:"\u6dfb\u52a0\u540c\u7ea7 cate"}),g.a.createElement(J,{command:"customAppendChildCate",icon:"append-child",text:"\u6dfb\u52a0\u4e0b\u7ea7 cate"}),g.a.createElement(H["a"],{type:"vertical"}),g.a.createElement(J,{command:"customCollapse",icon:"collapse",text:"\u6298\u53e0"}),g.a.createElement(J,{command:"customExpand",icon:"expand",text:"\u5c55\u5f00"})),K=X,q=(a("bbsP"),a("/wGt")),$=(a("2qtc"),a("kLXV")),ee=(a("DZo9"),a("8z0m")),te=(a("miYZ"),a("tsqr")),ae={name:"file",action:"https://jsonplaceholder.typicode.com/posts/",headers:{authorization:"authorization-text"},onChange(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?te["a"].success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&te["a"].error("".concat(e.file.name," file upload failed."))}};class ie extends g.a.Component{constructor(){super(...arguments),this.state={}}render(){return g.a.createElement(m["Fragment"],null,g.a.createElement(ee["a"],Object.assign({},ae),g.a.createElement(n["a"],null,"\u8bf7\u9009\u62e9\u8981\u4e0a\u4f20\u7684\u6587\u4ef6")))}}var ne=ie;class ce extends g.a.Component{constructor(){super(...arguments),this.state={previewVisible:!1,previewImage:"hahahahhaha",previewTitle:"hahahahhaha",fileList:[{uid:"-1",name:"image.png",time:"20200820 18:20:11",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",time:"20200820 18:20:11",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",time:"20200820 18:20:11",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",time:"20200820 18:20:11",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",time:"20200820 18:20:11",status:"error",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]}}render(){return g.a.createElement(m["Fragment"],null,this.state.fileList.map(e=>{return g.a.createElement("span",null,g.a.createElement("h3",null,"\u6587\u4ef6\u540d\u79f0\uff1a",e.name),g.a.createElement("h4",null,"\u4e0a\u4f20\u65f6\u95f4\uff1a",e.time),g.a.createElement("img",{src:e.url,alt:"avatar",style:{width:"100%"}}),g.a.createElement(H["a"],null))}))}}var le=ce,de={marginTop:"20px"};class re extends g.a.Component{constructor(){super(...arguments),this.state={visible:!1,docVisible:!1},this.showDocModal=(()=>{this.setState({docVisible:!0})}),this.handleDocOk=(()=>{this.setState({docVisible:!1})}),this.handleDocCancel=(()=>{this.setState({docVisible:!1})}),this.showModal=(()=>{this.setState({visible:!0})}),this.handleOk=(e=>{this.setState({visible:!1})}),this.handleCancel=(e=>{this.setState({visible:!1})})}render(){return g.a.createElement(m["Fragment"],null,g.a.createElement(n["a"],{type:"primary",onClick:this.showModal},"\u4e0a\u4f20\u9644\u4ef6"),g.a.createElement(n["a"],{type:"primary",style:de,onClick:this.showDocModal},"\u9644\u4ef6\u5217\u8868"),g.a.createElement($["a"],{title:"\u4e0a\u4f20\u6587\u4ef6",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},g.a.createElement(ne,null)),g.a.createElement(q["a"],{title:"\u9644\u4ef6\u5217\u8868",placement:"right",width:"800",closable:!1,onClose:this.handleDocCancel,visible:this.state.docVisible},g.a.createElement(le,null)))}}var se=re,oe=a("Mzha"),me=a("XfOM"),ge=a.n(me);u["j"].setTrackable(!1);var ue=(e,t,a)=>o()({},e,{label:e.name,collapsed:t,isLoaded:a,children:Ie({data:e.children,collapsed:!0,isLoaded:!1,hierarchy:1})}),Ie=e=>{var t=e.data,a=void 0===t?[]:t,i=e.collapsed,n=e.isLoaded,c=e.parentId,l=e.hierarchy;return a.map(e=>{var t=Number(l)+1;return o()({},e,{label:e.label||e.name,parent:c,collapsed:i,isLoaded:n,hierarchy:t,children:Ie({data:e.children,collapsed:!0,isLoaded:!1,parentId:e.id||e.code,hierarchy:t})})})};function Me(e){var t=e.code,a=e.name,i=e.label,n=e.type,c=e.isLeaf,l=e.children;return{code:t,name:i||a,type:n,isLeaf:c,children:l}}function he(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=t.reduce((t,a)=>{var i=e.find(e=>e.code===a.code);if(!a.code||!i){var n=Me(a);t.push(n)}return t},[]),i=[];return e.forEach(e=>{var a=e.children,n=t.find(t=>e.code===t.code),c=n||e,l=Me(c);n?a=he(a,c.children):l.isDeleted=!0,i.push(o()({},l,{children:a}))}),[...a,...i]}t["default"]=(()=>{var e=Object(m["useState"])(),t=r()(e,2),a=t[0],d=t[1],s=Object(m["useState"])(),I=r()(s,2),M=I[0],h=I[1],p=Object(m["useRef"])(),N=Object(m["useCallback"])(e=>{console.log("\u70b9\u51fb\u8282\u70b9___",e);var t=e.item,a=e.domEvent,i=e.shape,n=t.graph,c=t.model,l=c.type,d=c.children,r=c.collapsed;"case"===l||d&&0===d.length||0!==a.button||i.get("className")!==x||n.update(t,{collapsed:!r})},[]),E=Object(m["useCallback"])(e=>{console.log(e)},[]),y={border:"1px solid red"},C=Object(m["useCallback"])(()=>{var e=p.current.editor,t=e.getCurrentPage(),i=t.getGraph(),n=i.save().roots[0],c=a.children,l=n.children,d=o()({},Me(n),{children:he(c,l)});console.log("\u4fdd\u5b58\u6570\u636e ======>",d)},[a]);return Object(m["useEffect"])(()=>{var e=e=>{e.preventDefault(),e.returnValue="\u79bb\u5f00\u5f53\u524d\u9875\u540e\uff0c\u6240\u7f16\u8f91\u7684\u6570\u636e\u5c06\u4e0d\u53ef\u6062\u590d"};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[]),Object(m["useEffect"])(()=>{var e=D?{roots:[ue(D,!1,!0)]}:null;d(D),h(e)},[]),M?g.a.createElement(u["j"],{ref:p,className:ge.a.editor},g.a.createElement(l["a"],{type:"flex",align:"middle",className:ge.a.editorHd},g.a.createElement(c["a"],{span:20},g.a.createElement(K,null)),g.a.createElement(c["a"],{span:4,style:{textAlign:"right"}},g.a.createElement(n["a"],{type:"primary",onClick:C},"\u4fdd\u5b58"))),g.a.createElement(l["a"],{type:"flex",className:ge.a.editorBd},g.a.createElement(c["a"],{span:20,className:ge.a.editorContent},g.a.createElement(u["d"],{className:ge.a.mind,data:M,firstSubShape:"custom-node",secondSubShape:"custom-node",onNodeClick:N,onDragEnd:E,shortcut:{append:!1,appendChild:!1,collaspeExpand:!1,customAppendCase:!0,customAppendChildCase:!0,customAppendCate:!0,customAppendChildCate:!0,customCollapseExpand:!0,customExpand:!0,customCollapse:!0}}),g.a.createElement(i["a"],{style:y,visible:!0,title:"Title",content:"Content"}),g.a.createElement(oe["default"],null)),g.a.createElement(c["a"],{span:4,className:ge.a.editorSidebar},g.a.createElement(F,null),g.a.createElement(se,null))),g.a.createElement(A,null),g.a.createElement(b,null),g.a.createElement(U,null)):null})},Rsdn:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTc2MDU2OTQxNzkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODU5LjQyODU3MSAxNDYuMjg1NzE0djUxMmExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxLTUuMzM5NDI4IDEyLjk0NjI4NmwtMjE5LjQyODU3MiAyMTkuNDI4NTcxQTE4LjI4NTcxNCAxOC4yODU3MTQgMCAwIDEgNjIxLjcxNDI4NiA4OTZIMTgyLjg1NzE0M2ExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxLTE4LjI4NTcxNC0xOC4yODU3MTRWMTQ2LjI4NTcxNGExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxIDE4LjI4NTcxNC0xOC4yODU3MTRoNjU4LjI4NTcxNGExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxIDE4LjI4NTcxNCAxOC4yODU3MTR6IG0tMzYuNTcxNDI4IDE4LjI4NTcxNWgtNjIxLjcxNDI4NnY2OTQuODU3MTQyaDQxMy4wMDExNDNsMjA4LjcxMzE0My0yMDguNzEzMTQyVjE2NC41NzE0Mjl6TTM2NS43MTQyODYgMzQ3LjQyODU3MWExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxIDAtMzYuNTcxNDI4aDI5Mi41NzE0MjhhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwIDM2LjU3MTQyOGgtMjkyLjU3MTQyOHogbTAgMTQ2LjI4NTcxNWExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAtMzYuNTcxNDI5aDI5Mi41NzE0MjhhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwIDM2LjU3MTQyOWgtMjkyLjU3MTQyOHogbTI3NC4yODU3MTQgMTgyLjg1NzE0M1Y3NjhhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMS0zNi41NzE0MjkgMHYtMTA5LjcxNDI4NmExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxIDE4LjI4NTcxNS0xOC4yODU3MTRoMTA5LjcxNDI4NWExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAgMzYuNTcxNDI5aC05MS40Mjg1NzF6IiBwLWlkPSIxMTUzIiBmaWxsPSIjOGM4YzhjIj48L3BhdGg+PC9zdmc+"},XfOM:function(e,t,a){e.exports={editor:"editor___31mBT",editorHd:"editorHd___1HHj4",editorBd:"editorBd___3LJSy",editorContent:"editorContent___1NxQc",editorSidebar:"editorSidebar___3Giua",flow:"flow___JjQr4",koni:"koni___27jk9",mind:"mind___1Nnsi"}},ijdH:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTc1ODU4MjEyMzgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUyNTQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDY0QzI2NC42NCA2NCA2NCAyNjQuNTc2IDY0IDUxMmMwIDI0Ny4zNiAyMDAuNjQgNDQ4IDQ0OCA0NDggMjQ3LjQyNCAwIDQ0OC0yMDAuNjQgNDQ4LTQ0OEM5NjAgMjY0LjU3NiA3NTkuNDI0IDY0IDUxMiA2NHpNNzM0LjI3MiA1NTMuMjE2bC0xODEuMTItMC4wNjQgMCAxODEuMTg0YzAgMjMuNDg4LTE4LjM2OCA0Mi42MjQtNDEuMTUyIDQyLjYyNC0yMi43MiAwLjA2NC00MS4xNTItMTkuMDcyLTQxLjE1Mi00Mi41Nkw0NzAuODQ4IDU1My4xNTJsLTE4MS4xMiAwQzI2Ni4yNCA1NTMuMjE2IDI0Ni45NzYgNTM0LjY1NiAyNDYuOTc2IDUxMi4wNjRjMC4xMjgtMjIuNjU2IDE5LjI2NC00MS4xNTIgNDIuODgtNDEuMDg4bDE4MC45OTIgMEw0NzAuODQ4IDI4OS43OTJjMC0yMy42OCAxOC40OTYtNDIuNjg4IDQxLjE1Mi00Mi43NTIgMjIuNzItMC4wNjQgNDEuMTUyIDE5LjEzNiA0MS4xNTIgNDIuNjg4bDAgMTgxLjI0OCAxODEuMTIgMGMyMy42MTYtMC4xMjggNDIuNzUyIDE4LjQzMiA0Mi43NTIgNDEuMTUyQzc3Ny4wMjQgNTM0LjY1NiA3NTguMDE2IDU1My4yMTYgNzM0LjI3MiA1NTMuMjE2eiIgcC1pZD0iNTI1NSI+PC9wYXRoPjwvc3ZnPg=="},j2Jt:function(e,t,a){e.exports={contextMenu:"contextMenu___1owQI",item:"item___1hSsS"}},vurl:function(e,t,a){"use strict";function i(e,t,a,i,n){if(n)return[["M",+e+ +n,t],["l",a-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-a,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]];var c=[["M",e,t],["l",a,0],["l",0,i],["l",-a,0],["z"]];return c.toString=toString,c}a.d(t,"a",function(){return i})}}]);