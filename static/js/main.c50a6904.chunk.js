(this["webpackJsonpinteractive-budget"]=this["webpackJsonpinteractive-budget"]||[]).push([[0],{13:function(e,t,n){},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return l}));var i={UPDATE_PAGE:"UPDATE_PAGE",UPDATE_LAST_PAGE:"UPDATE_LAST_PAGE",UPDATE_OPTIONS:"UPDATE_OPTIONS",SET_JSON_OPTIONS:"SET_JSON_OPTIONS",UPDATE_NAME:"UPDATE_NAME",UPDATE_EMAIL:"UPDATE_EMAIL",UPDATE_PHONE:"UPDATE_PHONE",UPDATE_BUDGET:"UPDATE_BUDGET"},c=function(e){return{type:i.UPDATE_PAGE,data:e}},a=function(e){return{type:i.UPDATE_LAST_PAGE,data:e}},r=function(e){return{type:i.UPDATE_OPTIONS,data:e}},s=function(e){return{type:i.SET_JSON_OPTIONS,data:e}},o=function(e){return{type:i.UPDATE_NAME,data:e}},d=function(e){return{type:i.UPDATE_EMAIL,data:e}},u=function(e){return{type:i.UPDATE_PHONE,data:e}},l=function(e){return{type:i.UPDATE_BUDGET,data:e}}},20:function(e,t,n){"use strict";n.r(t);var i=n(5),c=n(1),a=n.n(c),r=(n(13),n(4)),s=n(0),o=function(e){var t=e.item,n=e.fnEvent,i=e.jsonImg,c=e.type,a=e.checkBoxImg;return Object(s.jsx)("div",{children:"input"===c?Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"".concat(t.id," - ").concat(t.title)}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Ingrese ".concat(t.title),name:t.id,id:t.id,onChange:n})]}):Object(s.jsxs)("div",{children:[t&&Object(s.jsx)("label",{children:"".concat(t.id," - ").concat(t.title)}),i.map((function(e){return Object(s.jsxs)("div",{className:"img",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{alt:"CustomImage",src:e.imgSrc,className:"img-width"})}),a&&Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"radio",id:e.id,name:"radio",onClick:function(e){return n(e)}}),e.title]})]},e.id)}))]})})},d=n(3),u=n.n(d),l=n(2),p=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)(!1),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(f(t),i,t):[],m(!1)):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&O(Number(u.a.last(e).id)),i},O=function(){return m(!0)},f=function(){var e=[],t=2;return e.push({id:t,title:"Cantidad de areas communes (sala, comedor, balcon, pasillo, studio, etc)  ",isHidden:!1,value:""}),t+=1,e.push({id:t,title:"Metraje de la propiedad (puede ser estimado sino lo conce) ",isHidden:!0,value:""}),e};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:P,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),j&&Object(s.jsx)(o,{jsonImg:_,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!1})]})},b=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=function(t){"name"===t.target.id&&e(Object(l.f)(t.target.value)),"email"===t.target.id&&e(Object(l.d)(t.target.value)),"phone"===t.target.id&&e(Object(l.i)(t.target.value))};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Nombre y Apellido"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Ingrese su Nombre y Apellido",onChange:t})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"Ingrese su Email",onChange:t})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Telefono"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"phone",placeholder:"Ingrese su Telefono",onChange:t})]})]})},j=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)(!1),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(f(t),i,t):[],m(!1)):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&O(Number(u.a.last(e).id)),i},O=function(){return m(!0)},f=function(){var e=[],t=2;return e.push({id:t,title:"Cantidad de areas communes (sala, comedor, balcon, pasillo, studio, etc)  ",isHidden:!1,value:""}),t+=1,e.push({id:t,title:"Metraje de la propiedad (puede ser estimado sino lo conce) ",isHidden:!0,value:""}),e};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:P,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),j&&Object(s.jsx)(o,{jsonImg:_,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!1})]})},m=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)([]),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(f(t),i,t):[],m([])):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&O(Number(u.a.last(e).id)),i},O=function(e){m({id:e+1,title:"Seleccione el tipo de interruptor que desee:",isHidden:!1})},f=function(e){for(var t=1,n=1,i=[],c=0;c<e;c++)n+=1,i.push({id:n,title:"Nombre de Zona "+t,isHidden:0!==c,value:""}),n+=1,i.push({id:n,title:"Cantidad de Circuitos",isHidden:!0,value:""}),t++;return i};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:y,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),0!==j.length&&Object(s.jsx)(o,{item:j,jsonImg:C,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!0})]})},g=function(){var e=Object(c.useContext)(r.AppContext).dispatch;return Object(s.jsx)("div",{children:Object(s.jsx)(o,{item:{id:1,title:"Seleccione el tipo de sala multimedia o cine en casa que desee:",isHidden:!1},jsonImg:A,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!0},"1")})},h=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)([]),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(O(t),i,t):[],m([])):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&f(Number(u.a.last(e).id)),i},O=function(e){for(var t=1,n=1,i=[],c=0;c<e;c++)n+=1,i.push({id:n,title:"Nombre de Zona "+t,isHidden:0!==c,value:""}),t++;return i},f=function(e){m({id:e+1,title:"Seleccione el tipo de bocina que desee:",isHidden:!1})};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:U,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),0!==j.length&&Object(s.jsx)(o,{item:j,jsonImg:T,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!0})]})},O=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)(!1),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(f(t),i,t):[],m(!1)):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&O(Number(u.a.last(e).id)),i},O=function(){return m(!0)},f=function(){var e=[],t=2;return e.push({id:t,title:"Cantidad de areas communes (sala, comedor, balcon, pasillo, studio, etc)  ",isHidden:!1,value:""}),t+=1,e.push({id:t,title:"Metraje de la propiedad (puede ser estimado sino lo conce) ",isHidden:!0,value:""}),e};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:P,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),j&&Object(s.jsx)(o,{jsonImg:_,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!1})]})},f=n(10),v=function(){var e=Object(c.useContext)(r.AppContext),t=e.state,n=e.dispatch,i=function(e){var i=[],c=void 0;u.a.includes(t.options,e)?(i=t.options.filter((function(t){return t!==e})),c=Number(i.length)+Number(t.page),n(Object(l.g)(i)),n(Object(l.e)(i.length>1?c:3))):(i=[].concat(Object(f.a)(t.options),[e]),c=Number(i.length)+Number(t.page),n(Object(l.g)(i)),n(Object(l.e)(i.length>1?c:3)));var r=[].concat(Object(f.a)(t.jsonOptions),[a(e,c)]);n(Object(l.b)(r))},a=function(e,t){var n=k.find((function(t){return t.id===e}));return n.page=t,n};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(1)},defaultChecked:u.a.includes(t.options,1)}),Object(s.jsx)("label",{className:"form-check-label",children:"Control de Iluminaci\xf3n"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(2)},defaultChecked:u.a.includes(t.options,2)}),Object(s.jsx)("label",{className:"form-check-label",children:"Audio Multizonas (ej. Sala, Comedor, Balc\xf3n)"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(3)},defaultChecked:u.a.includes(t.options,3)}),Object(s.jsx)("label",{className:"form-check-label",children:"Audio en habitaciones y control de TV"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(4)},defaultChecked:u.a.includes(t.options,4)}),Object(s.jsx)("label",{className:"form-check-label",children:"Sala Multimedia o Cine en casa"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(5)},defaultChecked:u.a.includes(t.options,5)}),Object(s.jsx)("label",{className:"form-check-label",children:"Sistema WiFi y Redes"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(6)},defaultChecked:u.a.includes(t.options,6)}),Object(s.jsx)("label",{className:"form-check-label",children:"Cortinas Automatizadas"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(7)},defaultChecked:u.a.includes(t.options,7)}),Object(s.jsx)("label",{className:"form-check-label",children:"C\xe1maras de seguridad"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(8)},defaultChecked:u.a.includes(t.options,8)}),Object(s.jsx)("label",{className:"form-check-label",children:"Alarmas"})]}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",onClick:function(){i(9)},defaultChecked:u.a.includes(t.options,9)}),Object(s.jsx)("label",{className:"form-check-label",children:"Servicio de dise\xf1o y preinstalaci\xf3n dom\xf3tica"})]})]})},x=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)([]),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(O(t),i,t):[],m([])):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&f(Number(u.a.last(e).id)),i},O=function(e){for(var t=1,n=1,i=[],c=0;c<e;c++)n+=1,i.push({id:n,title:"Nombre de Habitaci\xf3n "+t,isHidden:0!==c,value:""}),t++;return i},f=function(e){m({id:e+1,title:"Seleccione el tipo de bocina que desee:",isHidden:!1})};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:H,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),0!==j.length&&Object(s.jsx)(o,{item:j,jsonImg:I,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!0})]})},S=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)(!1),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(f(t),i,t):[],m(!1)):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&O(Number(u.a.last(e).id)),i},O=function(){return m(!0)},f=function(){var e=[],t=2;return e.push({id:t,title:"Cantidad de areas communes (sala, comedor, balcon, pasillo, studio, etc)  ",isHidden:!1,value:""}),t+=1,e.push({id:t,title:"Metraje de la propiedad (puede ser estimado sino lo conce) ",isHidden:!0,value:""}),e};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:P,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),j&&Object(s.jsx)(o,{jsonImg:_,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!1})]})},N=function(){var e=Object(c.useContext)(r.AppContext).dispatch,t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],d=n[1],p=Object(c.useState)(!1),b=Object(i.a)(p,2),j=b[0],m=b[1],g=function(e){var t=e.target.value,n=[],i=Number(e.target.id)+1;"1"===e.target.id.toString()?(n=null!==t&&""!==t?h(f(t),i,t):[],m(!1)):n=h(a,i,t),d(n)},h=function(e,t,n){var i=[],c=!1;return 0!==e.length&&e.map((function(a){t.toString()===a.id.toString()?i.push({id:a.id,title:a.title,isHidden:!1,value:n}):i.push(a),c=u.a.last(e).id.toString()===a.id.toString()&&""!==a.value})),c&&O(Number(u.a.last(e).id)),i},O=function(){return m(!0)},f=function(){var e=[],t=2;return e.push({id:t,title:"Cantidad de areas communes (sala, comedor, balcon, pasillo, studio, etc)  ",isHidden:!1,value:""}),t+=1,e.push({id:t,title:"Metraje de la propiedad (puede ser estimado sino lo conce) ",isHidden:!0,value:""}),e};return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{item:P,fnEvent:g,type:"input"}),0!==a.length&&a.map((function(e){return!e.isHidden&&Object(s.jsx)(o,{item:e,fnEvent:g,type:"input"},e.id)})),j&&Object(s.jsx)(o,{jsonImg:_,fnEvent:function(t){e(Object(l.c)(t.target.id))},type:"img",checkBoxImg:!1})]})},E=[{page:1,component:Object(s.jsx)(b,{})},{page:2,component:Object(s.jsx)(v,{})}],k=[{page:void 0,component:Object(s.jsx)(m,{}),id:1},{page:void 0,component:Object(s.jsx)(h,{}),id:2},{page:void 0,component:Object(s.jsx)(x,{}),id:3},{page:void 0,component:Object(s.jsx)(g,{}),id:4},{page:void 0,component:Object(s.jsx)(O,{}),id:5},{page:void 0,component:Object(s.jsx)(S,{}),id:6},{page:void 0,component:Object(s.jsx)(p,{}),id:7},{page:void 0,component:Object(s.jsx)(N,{}),id:8},{page:void 0,component:Object(s.jsx)(j,{}),id:9}],y={id:1,title:"Cantidad de zonas",type:"input"},C=[{id:"rb1",title:"Entry Level US$50.00-US$100.00 x interruptor",imgSrc:"https://i.ibb.co/fHjpytX/src1.png"},{id:"rb2",title:"Mid Level US$100-US$150 x interruptor",imgSrc:"https://i.ibb.co/8N787p4/src2.png"},{id:"rb3",title:"Mid Level US$150.00-US$350.00 x interruptor",imgSrc:"https://i.ibb.co/qdXdxTz/src3.png"}],A=[{id:"rb1",title:"Entry Level US$50.00-US$100.00 x interruptor",imgSrc:"https://i.ibb.co/fHjpytX/src1.png"},{id:"rb2",title:"Mid Level US$100-US$150 x interruptor",imgSrc:"https://i.ibb.co/8N787p4/src2.png"},{id:"rb3",title:"Mid Level US$150.00-US$350.00 x interruptor",imgSrc:"https://i.ibb.co/qdXdxTz/src3.png"}],U={id:1,title:"Cantidad de Zonas",type:"input"},T=[{id:"rb1",title:"Entry Level US$50.00-US$100.00 x interruptor",imgSrc:"https://i.ibb.co/fHjpytX/src1.png"},{id:"rb2",title:"Mid Level US$100-US$150 x interruptor",imgSrc:"https://i.ibb.co/8N787p4/src2.png"},{id:"rb3",title:"Mid Level US$150.00-US$350.00 x interruptor",imgSrc:"https://i.ibb.co/qdXdxTz/src3.png"}],P={id:1,title:"Cantidad de habitaciones",isHidden:!1},_=[{id:"rb1",title:"",imgSrc:"https://i.ibb.co/fHjpytX/src1.png"}],H={id:1,title:"Cantidad de habitaciones",type:"input"},I=[{id:"rb1",title:"Entry Level US$50.00-US$100.00 x interruptor",imgSrc:"https://i.ibb.co/fHjpytX/src1.png"},{id:"rb2",title:"Mid Level US$100-US$150 x interruptor",imgSrc:"https://i.ibb.co/8N787p4/src2.png"},{id:"rb3",title:"Mid Level US$150.00-US$350.00 x interruptor",imgSrc:"https://i.ibb.co/qdXdxTz/src3.png"}],D=function(e){var t=e.content,n=Object(c.useContext)(r.AppContext),i=n.state,a=n.dispatch;return Object(s.jsxs)("div",{className:"content-section-wizzard",children:[Object(s.jsx)("div",{children:t}),Object(s.jsxs)("div",{className:"align-btn",children:[i.page>1&&Object(s.jsx)("div",{className:"margin-btn",children:Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){a(Object(l.h)(i.page-1))},children:"Atras"})}),i.page<i.last_page&&Object(s.jsx)("div",{className:"margin-btn",children:Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){2===i.page&&0===i.options.length?alert("Para continuar debe seleccionar al menos 1 opci\xf3n"):(a(Object(l.h)(i.page+1)),Number(i.page)+Number(i.options.length)<i.last_page&&a(Object(l.e)(i.last_page+1)))},children:"Siguiente"})}),i.page===i.last_page&&Object(s.jsx)("div",{className:"margin-btn",children:Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){var e={name:i.name,email:i.email,phone:i.phone,budget:i.budget};alert(JSON.stringify(e))},children:"Finalizar"})})]})]})},M=function(){var e=Object(c.useContext)(r.AppContext).state;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"center-css",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("ul",{className:"progressbar",children:[Object(s.jsx)("li",{className:1===e.page?"active":void 0,children:"Datos Personales"}),Object(s.jsx)("li",{className:2===e.page?"active":void 0,children:"Servicios"}),Object(s.jsx)("li",{className:e.page>=3?"active":void 0,children:"Presupuesto"})]})})}),Object(s.jsx)("div",{className:"center-css",children:e.page<3?E.map((function(t){if(e.page===t.page)return Object(s.jsx)(D,{content:t.component},t.page)})):e.jsonOptions.map((function(t){if(e.page===t.page&&void 0!==t.page&&u.a.includes(e.options,t.id))return Object(s.jsx)(D,{content:t.component},t.page)}))})]})},$=n(4),L=$.initialState,B=$.reducer,G=$.AppContext,z=function(){var e=Object(c.useReducer)(B,L),t=Object(i.a)(e,2),n={state:t[0],dispatch:t[1]};return Object(s.jsx)(G.Provider,{value:n,children:Object(s.jsx)(M,{})})},X=n(11);n.n(X).a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(z,{})}),document.getElementById("root"))},4:function(e,t,n){"use strict";n.r(t),n.d(t,"AppContext",(function(){return r})),n.d(t,"initialState",(function(){return s})),n.d(t,"reducer",(function(){return o}));var i=n(6),c=n(2),a=n(1),r=Object(a.createContext)({}),s={name:void 0,email:void 0,phone:void 0,budget:void 0,page:1,last_page:2,options:[],jsonOptions:[]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.data,a=t.type;switch(a){case c.a.UPDATE_NAME:return Object(i.a)(Object(i.a)({},e),{},{name:n});case c.a.UPDATE_EMAIL:return Object(i.a)(Object(i.a)({},e),{},{email:n});case c.a.UPDATE_PHONE:return Object(i.a)(Object(i.a)({},e),{},{phone:n});case c.a.UPDATE_BUDGET:return Object(i.a)(Object(i.a)({},e),{},{budget:n});case c.a.UPDATE_PAGE:return Object(i.a)(Object(i.a)({},e),{},{page:n});case c.a.UPDATE_LAST_PAGE:return Object(i.a)(Object(i.a)({},e),{},{last_page:n});case c.a.UPDATE_OPTIONS:return Object(i.a)(Object(i.a)({},e),{},{options:n});case c.a.SET_JSON_OPTIONS:return Object(i.a)(Object(i.a)({},e),{},{jsonOptions:n});default:return e}}}},[[20,1,2]]]);
//# sourceMappingURL=main.c50a6904.chunk.js.map