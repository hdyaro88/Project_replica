(this.webpackJsonpapp_user=this.webpackJsonpapp_user||[]).push([[4],{33:function(e,t,c){"use strict";var n=c(35),a=c.n(n),i=c(1);t.a=function(e){return Object(i.jsx)("button",{onClick:e.onClick,className:"".concat(e.className," ").concat(a.a.Button),children:e.children})}},34:function(e,t,c){"use strict";var n=c(36),a=c.n(n),i=c(1);t.a=function(e){return Object(i.jsx)("div",{className:"".concat(a.a.card," ").concat(e.className),children:e.children})}},35:function(e,t,c){},36:function(e,t,c){e.exports={card:"Card_card__1K5uX"}},40:function(e,t,c){e.exports={card:"PostItem_card__1ytqO",flex_container:"PostItem_flex_container__2u0w_",downbar:"PostItem_downbar__1vcJM",downbar_button:"PostItem_downbar_button__1oZbN"}},44:function(e,t,c){e.exports={backdrop:"modal_backdrop__2GYJw",card:"modal_card__2pdRx",item:"modal_item__1-osQ",buttonItem:"modal_buttonItem__3R48l",Create_button:"modal_Create_button__2GGro"}},45:function(e,t,c){e.exports={nopost:"Post_nopost__2m5Va"}},55:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),i=c.n(a),s=c(6),r=c(33),l=c(34),j=c(44),o=c.n(j),d=c(1),b=function(e){return Object(d.jsx)("div",{onClick:e.onClick,className:o.a.backdrop})},u=function(e){var t=Object(s.b)(),c=Object(a.useState)(""),i=Object(n.a)(c,2),j=i[0],b=i[1],u=Object(a.useState)(""),O=Object(n.a)(u,2),x=O[0],m=O[1],h=Object(a.useState)(""),_=Object(n.a)(h,2),v=_[0],f=_[1];return Object(d.jsx)("div",{className:o.a.card,children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault();var n={id:e.id,name:j,age:x,relation:v};t({type:"ADD",payload:n}),e.onClick()},children:[Object(d.jsxs)("div",{className:o.a.item,children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{value:j,type:"text",onChange:function(e){var t=e.target.value;0!==t.trim().lenth&&b(t)}})]}),Object(d.jsxs)("div",{className:o.a.item,children:[Object(d.jsx)("label",{children:"Age"}),Object(d.jsx)("input",{value:x,type:"number",onChange:function(e){var t=e.target.value;0!==t.trim().lenth&&m(+t)}})]}),Object(d.jsxs)("div",{className:o.a.item,children:[Object(d.jsx)("label",{children:"Relation"}),Object(d.jsx)("input",{value:v,type:"text",onChange:function(e){var t=e.target.value;0!==t.trim().lenth&&f(t)}})]}),Object(d.jsx)("div",{className:o.a.buttonItem,children:Object(d.jsx)(r.a,{className:o.a.Create_button,children:"Submit"})})]})})})},O=function(e){return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(b,{onClick:e.onClose}),Object(d.jsx)(u,{id:e.id,onClick:e.onClose})]})},x=c(40),m=c.n(x),h=function(e){var t=Object(s.b)(),c=Object(a.useState)(!1),j=Object(n.a)(c,2),o=j[0],b=j[1],u=Object(a.useState)(!1),x=Object(n.a)(u,2),h=x[0],_=x[1];return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){b(!o)},className:m.a.card,children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:m.a.flex_container,children:[Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:e.name})}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:e.age})}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:e.relation})})]})})}),o&&Object(d.jsx)("div",{className:m.a.card,children:Object(d.jsxs)(l.a,{className:m.a.downbar,children:[Object(d.jsx)(r.a,{onClick:function(){_(!0)},className:m.a.downbar_button,children:"Edit"}),h&&Object(d.jsx)(O,{onClose:function(){_(!1)},id:e.id}),Object(d.jsx)(r.a,{onClick:function(){t({type:"DEL",payload:e.id})},className:m.a.downbar_button,children:"Delete"})]})})]})},_=function(){return Object(d.jsx)("div",{className:m.a.card,children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:m.a.flex_container,children:[Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Name"})})}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Age"})})}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Relation"})})})]})})})},v=c(45),f=c.n(v);t.default=function(e){var t=Object(s.c)((function(e){return e.items}));return document.body.style.marginTop="6rem",Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{}),0===t.length&&Object(d.jsx)("h1",{className:f.a.nopost,children:"No Posts Yet"}),t.map((function(e){return Object(d.jsx)(h,{id:e.id,name:e.name,age:e.age,relation:e.relation},e.id)}))]})}}}]);
//# sourceMappingURL=4.5088b13a.chunk.js.map