(this.webpackJsonpapp_user=this.webpackJsonpapp_user||[]).push([[5],{33:function(e,t,c){"use strict";var a=c(35),n=c.n(a),r=c(1);t.a=function(e){return Object(r.jsx)("button",{onClick:e.onClick,className:"".concat(e.className," ").concat(n.a.Button),children:e.children})}},34:function(e,t,c){"use strict";var a=c(36),n=c.n(a),r=c(1);t.a=function(e){return Object(r.jsx)("div",{className:"".concat(n.a.card," ").concat(e.className),children:e.children})}},35:function(e,t,c){},36:function(e,t,c){e.exports={card:"Card_card__1K5uX"}},43:function(e,t,c){e.exports={card:"Home_card__222yl",item:"Home_item__2frsi",buttonItem:"Home_buttonItem__VEaJH",Create_button:"Home_Create_button__2sC_M"}},53:function(e,t,c){"use strict";c.r(t);var a=c(34),n=c(43),r=c(33),s=c(0),u=c(17),i=c(16),l=c(6),o=c(1),d=!0;t.default=function(e){var t=Object(l.c)((function(e){return e.userId})),c=Object(l.b)(),j=Object(u.a)(i.a),b=j.sendRequest,m=j.status,f=j.data,p=Object(s.useRef)(),O=Object(s.useRef)(),_=Object(s.useRef)();Object(s.useEffect)((function(){d&&(b({userId:t}),d=!1),"completed"===m&&c({type:"UPDATE",payload:f})}),[m,f,b,t,c]);return Object(o.jsx)("div",{className:n.card,children:Object(o.jsx)(a.a,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.random(),name:p.current.value,age:O.current.value,relation:_.current.value};c({type:"ADD",payload:t}),p.current.value="",O.current.value="",_.current.value=""},children:[Object(o.jsxs)("div",{className:n.item,children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{ref:p,required:!0,type:"text"})]}),Object(o.jsxs)("div",{className:n.item,children:[Object(o.jsx)("label",{children:"Age"}),Object(o.jsx)("input",{ref:O,required:!0,type:"number"})]}),Object(o.jsxs)("div",{className:n.item,children:[Object(o.jsx)("label",{children:"Relation"}),Object(o.jsx)("input",{ref:_,required:!0,type:"text"})]}),Object(o.jsx)("div",{className:n.buttonItem,children:Object(o.jsx)(r.a,{className:n.Create_button,children:"Create Post"})})]})})})}}}]);
//# sourceMappingURL=5.81967062.chunk.js.map