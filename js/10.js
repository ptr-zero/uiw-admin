(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{219:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(18)),c=o(a(201)),n=o(a(184)),i=a(1),d=o(i),u=o(a(187)),s=o(a(441)),f=o(a(437));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.className,a=e.linkElement,o=void 0===a?"a":a,r=e.type,m=e.title,p=e.desc,g=e.img,v=e.actions,E=(0,n.default)(e,["className","linkElement","type","title","desc","img","actions"]),N=r in s.default?r:"404",x=(0,u.default)(f.default.exception,t);return d.default.createElement("div",(0,l.default)({className:x},E),d.default.createElement("div",{className:f.default.imgBlock},d.default.createElement("div",{className:f.default.imgEle,style:{backgroundImage:"url("+(g||s.default[N].img)+")"}})),d.default.createElement("div",{className:f.default.content},d.default.createElement("h1",null,m||s.default[N].title),d.default.createElement("div",{className:f.default.desc},p||s.default[N].desc),d.default.createElement("div",{className:f.default.actions},v||(0,i.createElement)(o,{to:"/",href:"/"},d.default.createElement(c.default,{type:"primary"},"返回首页")))))}},437:function(e,t,a){e.exports={exception:"exceptionaNQ0x",imgBlock:"imgBlockaNQ0x",imgEle:"imgEleaNQ0x",content:"contentaNQ0x",desc:"descaNQ0x",actions:"actionsaNQ0x"}},438:function(e,t,a){e.exports=a.p+"static/500.340144fb.svg"},439:function(e,t,a){e.exports=a.p+"static/404.602b8b77.svg"},440:function(e,t,a){e.exports=a.p+"static/403.19c6c525.svg"},441:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(440)),c=i(a(439)),n=i(a(438));function i(e){return e&&e.__esModule?e:{default:e}}var d={403:{img:l.default,title:"403",desc:"抱歉，你无权访问该页面"},404:{img:c.default,title:"404",desc:"抱歉，你访问的页面不存在"},500:{img:n.default,title:"500",desc:"抱歉，服务器出错了"}};t.default=d}}]);