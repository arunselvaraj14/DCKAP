(this["webpackJsonpdrag-and-drop"]=this["webpackJsonpdrag-and-drop"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(3),d=n.n(a),r=(n(17),n(12)),s=n(2),o=n(10),b=(n(18),n(6)),j=n(11),l=n.n(j),u=n(28),p=n(1),O={id:Object(u.a)(),name:"Drag and Drop down "},m={id:Object(u.a)(),name:"Drag and Drop up"};var x=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)({todo:{title:"TASK",items:[O,m]}}),d=Object(o.a)(a,2),j=d[0],x=d[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"divbg",children:Object(p.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(p.jsx)("label",{children:"Enter The Task"}),Object(p.jsx)("input",{className:"int",type:"text",value:n,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"but",onClick:function(){x((function(e){return Object(s.a)(Object(s.a)({},e),{},{todo:{title:"TASK",items:[{id:Object(u.a)(),name:n}].concat(Object(r.a)(e.todo.items))}})})),i("")},children:Object(p.jsx)("h1",{children:"ADD"})}),Object(p.jsxs)("div",{id:"div",children:[Object(p.jsx)("div",{id:"divid"}),Object(p.jsx)("div",{id:"divid2"})]})]})}),Object(p.jsx)(b.a,{onDragEnd:function(e){var t=e.destination,n=e.source;if(t&&(t.index!==n.index||t.droppableId!==n.droppableId)){var c=Object(s.a)({},j[n.droppableId].items[n.index]);x((function(e){return(e=Object(s.a)({},e))[n.droppableId].items.splice(n.index,1),e[t.droppableId].items.splice(t.index,0,c),e}))}},children:l.a.map(j,(function(e,t){return Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h3",{className:"title",children:e.title}),Object(p.jsx)(b.c,{droppableId:t,children:function(t,n){return Object(p.jsxs)("div",Object(s.a)(Object(s.a)({ref:t.innerRef},t.droppableProps),{},{className:"droppable-col",children:[e.items.map((function(e,t){return Object(p.jsx)(b.b,{index:t,draggableId:e.id,children:function(t,n){return Object(p.jsxs)("div",Object(s.a)(Object(s.a)(Object(s.a)({className:"item ".concat(n.isDragging&&"dragging"),ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:["\u2666 ",e.name]}))}},e.id)})),t.placeholder]}))}})]},t)}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),c(e),i(e),a(e),d(e)}))};d.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.8f07a8ba.chunk.js.map