(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},249:function(e,t,a){},251:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a(64),s=a.n(c),l=a(22),i=a(15),o=a.n(i),u=a(21),j=a(55),d=a(14),b=a(11),p=a(269),h=a(280),O=a(275),m=a(256),x=a(279),v="login",g="logout",f="loading",y="current_user",S=function(e,t){switch(t.type){case v:return console.log(t.payload),localStorage.setItem("user",JSON.stringify(t.payload.user)),Object(d.a)(Object(d.a)({},t.payload),{},{loading:!1});case g:return localStorage.removeItem("user"),{user:null,error:null,loading:!1};case f:return{user:null,error:null,loading:!0};case y:var a=JSON.parse(localStorage.getItem("user"));return console.log(localStorage.getItem("user"),a),{user:a,error:null,loading:!0};default:return e}},k=Object(r.createContext)(),w=function(e){var t=e.children,a=Object(r.useReducer)(S,{user:JSON.parse(localStorage.getItem("user")),error:null,loading:!1}),c=Object(b.a)(a,2),s=c[0],l=c[1];return Object(n.jsx)(k.Provider,{value:{state:s,dispatch:l},children:t})},D=a(122),C=a.n(D),N="https://human-resource-backend.herokuapp.com",I="bonus",_="payroll",q="leave",A=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.path,n=t.data,r=t.method,c=t.setLoading,e.prev=1,c&&c(!0),e.next=5,C()("".concat(N+a),{method:r,data:n,headers:{"Content-Type":"application/json"},withCredentials:!0});case 5:return s=e.sent,e.abrupt("return",s.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.log(e.t0),console.log(e.t0.response),new Error(e.t0.response.data);case 14:return e.prev=14,c&&c(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,9,14,17]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),e.next=4,A({path:"/api/login",method:"POST",data:a});case 4:return n=e.sent,t({type:v,payload:n}),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:v,payload:{user:null,error:e.t0.message}}),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.f)(),t=Object(r.useContext)(k),a=t.state,c=t.dispatch,s=Object(r.useState)(""),i=Object(b.a)(s,2),v=i[0],g=i[1],f=Object(r.useState)(!1),y=Object(b.a)(f,2),S=y[0],w=y[1],D=Object(r.useState)({email:"",password:""}),C=Object(b.a)(D,2),N=C[0],I=C[1],_=function(e,t){var a=t.name,n=t.value;return I(Object(d.a)(Object(d.a)({},N),{},Object(j.a)({},a,n)))},q=function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),w(!0),t.next=4,L(c,N);case 4:if(r=t.sent,w(!1),!r){t.next=10;break}return t.abrupt("return",e.replace("/dashboard"));case 10:g(a.error),console.log(v);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)(p.a,{children:Object(n.jsxs)(h.a,{inverted:!0,children:[Object(n.jsxs)(O.a,{inverted:!0,onSubmit:q,loading:a.loading,children:[Object(n.jsx)(O.a.Input,{fluid:!0,label:"email",placeholder:"email",name:"email",type:"email",value:N.email,onChange:_}),Object(n.jsx)(O.a.Input,{fluid:!0,label:"password",placeholder:"password",name:"password",type:"password",value:N.password,onChange:_}),Object(n.jsx)(m.a,{loading:S,type:"submit",children:"Submit"})]}),a.error?Object(n.jsx)(x.a,{error:!!a.error,header:"Error",content:a.error}):null]})})},E=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(P,{})})},M=function(e){var t=e.path,a=e.component,c=Object(l.f)(),s=Object(r.useContext)(k).state;return console.log(s),!s.user||s.error?(c.replace("/login"),null):Object(n.jsx)(l.a,{path:t,component:a})},F=function(e){var t=e.path,a=e.component,c=Object(l.f)(),s=Object(r.useContext)(k).state;console.log(s);var i=s.user,o=s.error;return!i||o?(c.replace("/login"),null):i.isAdmin?Object(n.jsx)(l.a,{path:t,component:a}):(alert("You cannot access admin routes!"),c.replace("/dashboard"),null)},T=a(72),z=a(281),G=a(274),R=a(145),B=a(272),H=(a(240),function(e,t){for(var a=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1),n=new Date(t.getFullYear(),t.getMonth(),t.getDate()+1),r=[],c=new Date(a);c<=n;c.setDate(c.getDate()+1))r.push(new Date(c));return r}),J=function(){var e=Object(r.useState)({value:new Date,message:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),l=Object(b.a)(s,2),i=l[0],j=l[1],h=Object(r.useState)(null),v=Object(b.a)(h,2),g=v[0],f=v[1],y=Object(r.useState)(!1),S=Object(b.a)(y,2),k=S[0],w=S[1],D=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=H(a.value[0],a.value[1]),r={dates:n,message:a.message},e.next=6,A({path:"/api/request",method:"POST",data:{type:q,data:r},setLoading:w});case 6:return c=e.sent,console.log(c),f("request has been created!"),j(null),e.abrupt("return");case 13:return e.prev=13,e.t0=e.catch(1),console.log(e.t0.message),j(e.t0.message),f(null),e.abrupt("return");case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(p.a,{textAlign:"left",children:[Object(n.jsx)(R.a,{className:"calender",onChange:function(e){console.log(e),c(Object(d.a)(Object(d.a)({},a),{},{value:e}))},value:a.value,returnValue:"range",selectRange:!0}),Object(n.jsx)(O.a,{children:Object(n.jsx)(O.a.Field,{control:B.a,value:a.message,onChange:function(e,t){var n=t.value;return c(Object(d.a)(Object(d.a)({},a),{},{message:n}))},label:"Leave Application",placeholder:"Please elaborate your leave application..."})}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{loading:k,onClick:D,children:"Request Leave"}),i?Object(n.jsx)(x.a,{negative:!0,children:Object(n.jsx)("p",{children:i})}):null,g?Object(n.jsx)(x.a,{success:!0,children:Object(n.jsx)("p",{children:g})}):null]})},U=(a(241),function(){var e=Object(r.useState)({money:"",message:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),l=Object(b.a)(s,2),i=l[0],j=l[1],h=Object(r.useState)(null),v=Object(b.a)(h,2),g=v[0],f=v[1],y=Object(r.useState)(!1),S=Object(b.a)(y,2),k=S[0],w=S[1],D=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={amount:a.money,message:a.message},e.next=5,A({path:"/api/request",method:"POST",data:{type:I,data:n},setLoading:w});case 5:return r=e.sent,console.log(r),f("request has been created!"),e.abrupt("return");case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0.message),j(e.t0.message),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(O.a.Input,{value:a.money,onChange:function(e,t){var n=t.value;return c(Object(d.a)(Object(d.a)({},a),{},{money:n}))},label:"Money amount",placeholder:"Amount you want..",type:"Number"}),Object(n.jsx)(O.a.Field,{control:B.a,value:a.message,onChange:function(e,t){var n=t.value;return c(Object(d.a)(Object(d.a)({},a),{},{message:n}))},label:"Why do you deserve a bonus?",placeholder:"Elaborate your needs and arguments..."})]}),Object(n.jsx)(m.a,{loading:k,onClick:D,className:"btn-padding",children:"Bonus Request"}),i?Object(n.jsx)(x.a,{negative:!0,children:Object(n.jsx)("p",{children:i})}):null,g?Object(n.jsx)(x.a,{success:!0,children:Object(n.jsx)("p",{children:g})}):null]})}),$=function(){var e=Object(r.useState)({message:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),l=Object(b.a)(s,2),i=l[0],j=l[1],h=Object(r.useState)(null),v=Object(b.a)(h,2),g=v[0],f=v[1],y=Object(r.useState)(!1),S=Object(b.a)(y,2),k=S[0],w=S[1],D=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={message:a.message},e.next=5,A({path:"/api/request",method:"POST",data:{type:_,data:n},setLoading:w});case 5:return r=e.sent,console.log(r),f("request has been created!"),e.abrupt("return");case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0.message),j(e.t0.message),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(O.a.Field,{control:B.a,value:a.message,onChange:function(e,t){var n=t.value;return c(Object(d.a)(Object(d.a)({},a),{},{message:n}))},label:"Message",placeholder:"Message along with the request..."})}),Object(n.jsx)(m.a,{loading:k,onClick:D,className:"btn-padding",children:"Payroll Request"}),i?Object(n.jsx)(x.a,{negative:!0,children:Object(n.jsx)("p",{children:i})}):null,g?Object(n.jsx)(x.a,{success:!0,children:Object(n.jsx)("p",{children:g})}):null]})},Q=(a(242),function(){var e=Object(r.useState)("leave"),t=Object(b.a)(e,2),a=t[0],c=t[1],s=function(e,t){var a=t.name;return c(a)};return Object(n.jsxs)("div",{className:"user-request-menu",children:[Object(n.jsx)(z.a,{attached:"top",as:"h3",textAlign:"left",children:"User Request Menu"}),Object(n.jsxs)(G.a,{attached:"top",tabular:!0,children:[Object(n.jsx)(G.a.Item,{name:"leave",active:"leave"===a,onClick:s}),Object(n.jsx)(G.a.Item,{name:"payroll",active:"payroll"===a,onClick:s}),Object(n.jsx)(G.a.Item,{name:"bonus",active:"bonus"===a,onClick:s})]}),Object(n.jsx)(h.a,{attached:"bottom",children:"bonus"===a?Object(n.jsx)(U,{}):"leave"===a?Object(n.jsx)(J,{absentDates:["01/01/2021","05/01/2021","20/01/2021"]}):Object(n.jsx)($,{})})]})}),Y=a(198),V=a(277),W=a(85),K=(a(243),function(e){var t=e._id,a=e.branch,r=e.department,c=e.dob,s=e.email,l=e.firstName,i=e.lastName,o=e.img,u=e.salary,j=e.position,d=e.fluid;return Object(n.jsxs)(n.Fragment,{children:[d&&Object(n.jsx)("div",{children:Object(n.jsx)(Y.a,{rounded:!0,bordered:!0,src:o,wrapped:!0,ui:!0,size:"medium",centered:!0})}),Object(n.jsxs)(V.a,{fluid:d,children:[!d&&Object(n.jsx)(Y.a,{src:o,wrapped:!0,ui:!0,size:"medium",centered:!0}),Object(n.jsxs)(V.a.Content,{className:"content",children:[Object(n.jsx)(V.a.Header,{children:Object(n.jsxs)("h2",{children:[l," ",i]})}),Object(n.jsxs)(V.a.Description,{children:["Employee_id: ",Object(n.jsx)("span",{className:"highlight",children:t})]}),Object(n.jsxs)(V.a.Meta,{children:["Date of Birth: ",c.toString()]}),Object(n.jsxs)(V.a.Description,{children:["Department : ",Object(n.jsx)("span",{className:"highlight",children:r})]}),Object(n.jsxs)(V.a.Description,{children:["Position : ",Object(n.jsx)("span",{className:"highlight",children:j})]}),Object(n.jsxs)(V.a.Description,{children:["Branch : ",Object(n.jsx)("span",{className:"highlight",children:a})]}),Object(n.jsxs)(V.a.Description,{children:["Salary : ",Object(n.jsxs)("span",{className:"highlight",children:["$",u]})]})]}),Object(n.jsxs)(V.a.Content,{extra:!0,children:[Object(n.jsx)(W.a,{name:"mail"}),s]})]})]})}),X=(a(244),function(e){var t=e.presentDates,a=e.absentDates,c=Object(r.useState)(null),s=Object(b.a)(c,2),l=s[0],i=s[1],j=Object(r.useState)(null),d=Object(b.a)(j,2),h=d[0],O=d[1],v=Object(r.useState)(!1),g=Object(b.a)(v,2),f=g[0],y=g[1];var S=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),n={date:a,type:"present"},console.log(n),e.next=7,A({path:"/api/attendance",method:"POST",data:n,setLoading:y});case 7:return r=e.sent,console.log(r),i("attendance for today marked,refresh to see the results."),O(null),e.abrupt("return");case 14:return e.prev=14,e.t0=e.catch(1),console.log(e.t0.message),O(e.t0.message),i(null),e.abrupt("return");case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(p.a,{textAlign:"center",fluid:!0,children:[Object(n.jsx)(z.a,{as:"h3",attached:"top",textAlign:"left",children:"Attendance Calendar"}),Object(n.jsx)(R.a,{value:new Date,className:"calender",returnValue:"start",selectRange:!1,tileClassName:function(e){var n=e.date;if("month"===e.view){var r=a?a.filter((function(e){return e===n.toLocaleDateString()})):[];if((t?t.filter((function(e){return e===n.toLocaleDateString()})):[]).length)return"present";if(r.length)return"absent"}}}),Object(n.jsx)(m.a,{loading:f,onClick:S,children:"Mark Today's Attendance"}),h?Object(n.jsx)(x.a,{error:!0,children:Object(n.jsx)("p",{children:h})}):null,l?Object(n.jsx)(x.a,{success:!0,children:Object(n.jsx)("p",{children:l})}):null]})}),Z=a(30),ee=function(e){var t=e._id,a=e.employee,c=e.type,s=e.data,l=e.status,i=e.resolved_by,j=e.disabled,d=void 0!==j&&j,p=Object(r.useState)(!1),h=Object(b.a)(p,2),O=h[0],v=h[1],g=Object(r.useState)(null),f=Object(b.a)(g,2),y=f[0],S=f[1],k=Object(r.useState)(null),w=Object(b.a)(k,2),D=w[0],C=w[1],N=function(){var e=Object(u.a)(o.a.mark((function e(a,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.name,a.preventDefault(),e.prev=2,e.next=5,A({path:"/api/request",method:"PATCH",data:{_id:t,status:r},setLoading:v});case 5:c=e.sent,S(null),console.log(c),C(c),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message),S(e.t0.message),C(null);case 16:return e.prev=16,e.abrupt("return");case 19:case"end":return e.stop()}}),e,null,[[2,11,16,19]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.jsxs)(V.a,{color:"grey",loading:O.toString(),children:[Object(n.jsxs)(V.a.Content,{children:[Object(n.jsx)(Y.a,{floated:"right",size:"mini",src:a.img}),Object(n.jsx)(V.a.Header,{children:a.name}),Object(n.jsxs)(V.a.Meta,{children:[c," request"]}),Object(n.jsxs)(V.a.Description,{children:[Object(n.jsxs)("strong",{children:[c===q&&" is asking for leave from ".concat(s.dates.startDate," to ").concat(s.dates.endDate),c===I&&" is asking for bonus of ".concat(s.amount),c===_&&" is asking for payroll"]}),Object(n.jsx)("br",{}),s.message]})]}),"pending"===l?Object(n.jsxs)(V.a.Content,{extra:!0,children:[Object(n.jsxs)("div",{className:"ui two buttons",children:[Object(n.jsx)(m.a,{basic:!0,color:"green",onClick:N,name:"approved",disabled:d,children:"Approve"}),Object(n.jsx)(m.a,{basic:!0,color:"red",onClick:N,name:"rejected",disabled:d,children:"Decline"})]}),y?Object(n.jsx)(x.a,{error:!0,size:"mini",children:Object(n.jsx)("p",{children:y})}):null,D?Object(n.jsx)(x.a,{success:!0,size:"mini",children:Object(n.jsx)("p",{children:D})}):null]}):Object(n.jsxs)(V.a.Content,{extra:!0,children:[Object(n.jsx)(Y.a,{floated:"right",size:"mini",avatar:!0,src:i.img}),Object(n.jsxs)("p",{children:["resolved by ",i.name]}),Object(n.jsx)(x.a,{color:"approved"===l?"green":"red",size:"mini",children:Object(n.jsxs)("p",{children:["request has been ",l,"."]})})]})]})},te=function(e){var t=e.requests,a=e.disabled,c=void 0!==a&&a,s=Object(r.useState)("pending"),l=Object(b.a)(s,2),i=l[0],o=l[1],u=Object(r.useState)([]),j=Object(b.a)(u,2),d=j[0],O=j[1];Object(r.useEffect)((function(){var e=t.filter((function(e){return e.status===i}));O(e)}),[i,t]);var m=function(e,t){var a=t.name;return o(a)};return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(z.a,{as:"h3",block:!0,children:"Requests From Employees"}),Object(n.jsxs)(G.a,{attached:"top",tabular:!0,children:[Object(n.jsx)(G.a.Item,{name:"pending",active:"pending"===i,onClick:m}),Object(n.jsx)(G.a.Item,{name:"approved",active:"approved"===i,onClick:m}),Object(n.jsx)(G.a.Item,{name:"rejected",active:"rejected"===i,onClick:m})]}),Object(n.jsx)(h.a,{attached:"bottom",children:Object(n.jsx)(V.a.Group,{centered:!0,children:d.map((function(e,t){return Object(n.jsx)(ee,{_id:e._id,status:e.status,employee:e.employee,data:e.data,type:e.type,resolved_by:e.resolved_by,disabled:c},t)}))})})]})};function ae(){var e=Object(T.a)(["\n    query Employee($_id: String!) {\n      employee(_id:$_id){\n        absentDates{\n          date\n        }\n        presentDates{\n          date\n        }\n      }\n      requests(employee_id:$_id){\n        _id\n        employee{\n          _id\n          name\n          img\n        }\n        status\n        data{\n          amount \n          message\n          dates{\n            startDate\n            endDate\n          }\n        }\n        type\n        resolved_by{\n          name\n          img\n        }\n      }\n    }\n  "]);return ae=function(){return e},e}var ne=function(){var e=Object(r.useContext)(k).state.user,t=e._id,a=e.branch,c=e.department,s=e.dob,l=e.email,i=e.firstName,o=e.lastName,u=e.img,j=e.position,d=e.salary,b=Object(Z.gql)(ae()),O=Object(Z.useQuery)(b,{variables:{_id:t}}),m=O.loading,x=O.error,v=O.data;if(m&&console.log("loading..."),x&&console.log(x),v){var g=v.requests,f=v.employee,y=f.absentDates,S=f.presentDates;y=y.map((function(e){return new Date(e.date).toLocaleDateString()})),S=S.map((function(e){return new Date(e.date).toLocaleDateString()})),console.log(y,S)}var w=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()};return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(h.a,{textAlign:"center",children:Object(n.jsx)(K,{fluid:!0,_id:t,branch:a,department:c,dob:s.split("T")[0],email:l,firstName:w(i),lastName:w(o),img:u,position:j,salary:d})}),Object(n.jsx)(X,{absentDates:y||[],presentDates:S||[]}),Object(n.jsx)(Q,{}),Object(n.jsx)(te,{requests:g||[],disabled:!0}),Object(n.jsx)("div",{style:{height:"50px"}})]})},re=a(270),ce=a(113),se=[{key:"m",text:"Male",value:"Male"},{key:"f",text:"Female",value:"Female"},{key:"o",text:"Other",value:"Other"}],le=[{key:"s",text:"Sales Department",value:"Sales Department"},{key:"a",text:"Management Department",value:"Management Department"},{key:"m",text:"Finance Department",value:"Finance Department"}],ie=[{key:"i",text:"Intern",value:"Intern"},{key:"r",text:"Regular Employee",value:"Regular Employee"},{key:"m",text:"Manager",value:"Manager"}],oe=[{key:"i",text:"Scranton",value:"Scranton"},{key:"r",text:"Akron",value:"Akron"},{key:"m",text:"Utica",value:"Utica"}],ue=function(e){var t=e.details;return Object(n.jsxs)(h.a,{attached:"bottom",inverted:!0,className:"form-container",children:[Object(n.jsx)(Y.a,{src:t.img,size:"medium",centered:!0}),Object(n.jsxs)(O.a,{inverted:!0,className:"form-container",children:[Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{fluid:!0,label:"First name",readOnly:!0,value:t.firstName}),Object(n.jsx)(O.a.Input,{fluid:!0,label:"Last name",readOnly:!0,value:t.lastName}),Object(n.jsx)(O.a.Input,{fluid:!0,label:"Gender",readOnly:!0,value:t.gender})]}),Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{fluid:!0,label:"Department",readOnly:!0,value:t.department}),Object(n.jsx)(O.a.Input,{fluid:!0,label:"Department",readOnly:!0,value:t.position})]}),Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{fluid:!0,label:"branch",readOnly:!0,value:t.branch}),Object(n.jsx)(O.a.Input,{fluid:!0,label:"email",readOnly:!0,value:t.email})]}),Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{label:"date of birth",value:t.dob,readOnly:!0}),Object(n.jsx)(O.a.Input,{label:"salary",value:t.salary,readOnly:!0})]}),Object(n.jsx)(O.a.Checkbox,{label:"is Admin",checked:t.isAdmin})]})]})},je=(a(249),function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}),de=function(e){var t=e.details,a=e.setDetails,c=Object(r.useState)(null),s=Object(b.a)(c,2),l=s[0],i=s[1],j=Object(r.useState)(!1),p=Object(b.a)(j,2),m=p[0],x=p[1],v=function(){var e=Object(u.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,je(l);case 4:return n=e.sent,e.next=7,A({path:"/api/fileUpload",method:"POST",data:{file:n},setLoading:x});case 7:r=e.sent,console.log(r),a(Object(d.a)(Object(d.a)({},t),{},{img:r}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(h.a,{attached:"bottom",inverted:!0,className:"form-container",children:[Object(n.jsx)(Y.a,{src:t.img||"",size:"medium",centered:!0}),Object(n.jsxs)(O.a,{inverted:!0,className:"form-container",onSubmit:v,children:[Object(n.jsx)(O.a.Input,{type:"file",label:"Image of Employee",name:"img",onChange:function(e,t){t.value;i(e.target.files[0]),console.log(e.target.files[0])}}),Object(n.jsx)(O.a.Button,{type:"submit",loading:m,children:"upload Image"})]})]})},be=function(){var e=Object(r.useState)({firstName:"",lastName:"",email:"",gender:"",department:"",position:"",branch:"",salary:"",isAdmin:!1,dob:"",img:""}),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!1),l=Object(b.a)(s,2),i=l[0],m=l[1],v=Object(r.useState)({show:!1,type:null,header:null,content:!1}),g=Object(b.a)(v,2),f=g[0],y=g[1],S=Object(r.useState)("form"),k=Object(b.a)(S,2),w=k[0],D=k[1],C=function(e,t){var n=t.name,r=t.value;e.preventDefault(),c(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},n,r)))},N=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,A({path:"/api/employee",method:"POST",data:a,setLoading:m});case 4:n=e.sent,console.log(n),y({show:!0,type:"success",header:"Success",content:"A new Employee has been created with ID : ".concat(n)}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),y({show:!0,type:"error",header:"Error",content:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e,t){var a=t.name;return D(a)};return Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(G.a,{attached:"top",tabular:!0,inverted:!0,children:[Object(n.jsx)(G.a.Item,{name:"form",active:"form"===w,onClick:I}),Object(n.jsx)(G.a.Item,{name:"image",active:"image"===w,onClick:I}),Object(n.jsx)(G.a.Item,{name:"preview",active:"preview"===w,onClick:I})]}),"image"===w?Object(n.jsx)(de,{details:a,setDetails:c}):"form"===w?Object(n.jsxs)(h.a,{attached:"bottom",inverted:!0,className:"form-container",children:[Object(n.jsx)("h1",{children:"Add A New Employee"}),Object(n.jsxs)(O.a,{inverted:!0,onSubmit:N,loading:i,className:"form-container",children:[Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{fluid:!0,label:"First name",placeholder:"First name",name:"firstName",onChange:C,value:a.firstName}),Object(n.jsx)(O.a.Input,{fluid:!0,label:"Last name",placeholder:"Last name",name:"lastName",onChange:C,value:a.lastName}),Object(n.jsx)(O.a.Select,{fluid:!0,label:"Gender",options:se,placeholder:"Gender",name:"gender",onChange:C,value:a.gender})]}),Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Select,{fluid:!0,label:"Department",options:le,placeholder:"Department",name:"department",value:a.department,onChange:C}),Object(n.jsx)(O.a.Select,{fluid:!0,label:"Job Position",options:ie,placeholder:"Job Position",name:"position",value:a.position,onChange:C})]}),Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{fluid:!0,label:"email",placeholder:"Email",type:"email",name:"email",onChange:C,value:a.email}),Object(n.jsxs)(O.a.Field,{children:[Object(n.jsx)("label",{children:"Salary"}),Object(n.jsxs)(re.a,{fluid:!0,label:"salary",placeholder:"Amount",name:"salary",value:a.salary,onChange:C,children:[Object(n.jsx)(ce.a,{basic:!0,children:"$"}),Object(n.jsx)("input",{})]})]})]}),Object(n.jsxs)(O.a.Group,{widths:"equal",children:[Object(n.jsx)(O.a.Input,{type:"date",label:"date of birth",placeholder:"DOB",value:a.dob,name:"dob",onChange:C}),Object(n.jsx)(O.a.Select,{fluid:!0,label:"Branch",options:oe,placeholder:"Branch",name:"branch",value:a.branch,onChange:C})]}),Object(n.jsx)(O.a.Checkbox,{label:"is Admin",name:"isAdmin",checked:a.isAdmin,onChange:function(e,t){var n=t.name,r=t.checked;return c(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},n,r)))}}),Object(n.jsx)(O.a.Button,{children:"Submit"})]}),f.show&&Object(n.jsx)(x.a,{error:"error"===f.type,success:"success"===f.type,header:f.header,content:f.content})]}):Object(n.jsx)(ue,{details:a})]})},pe=a(278),he=a(273),Oe=a(144),me=a.n(Oe),xe=function(e){var t=e.details,a=e.setDetails,r=e.setHtml;return Object(n.jsx)(p.a,{children:Object(n.jsx)(me.a,{value:t.value,onChange:function(e){a(Object(d.a)(Object(d.a)({},t),{},{value:e})),r(e.toString("html"))}})})},ve=function(e){var t=e.html,a=e.img;return Object(n.jsxs)("div",{children:[Object(n.jsx)(Y.a,{src:a,size:"medium"}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]})},ge=function(){var e=Object(r.useState)("content"),t=Object(b.a)(e,2),a=t[0],c=t[1],s=function(e,t){var a=t.name;return c(a)},l=Object(r.useState)({value:me.a.createEmptyValue(),img:""}),i=Object(b.a)(l,2),j=i[0],d=i[1],O=Object(r.useState)(""),v=Object(b.a)(O,2),g=v[0],f=v[1],y=Object(r.useState)(!1),S=Object(b.a)(y,2),k=S[0],w=S[1],D=Object(r.useState)(null),C=Object(b.a)(D,2),N=C[0],I=C[1],_=Object(r.useState)(null),q=Object(b.a)(_,2),L=q[0],P=q[1],E=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(g),e.next=5,A({path:"/api/post",method:"POST",data:{img:j.img,html:g},setLoading:w});case 5:a=e.sent,I(a),P(null),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message),I(null),P(e.t0.message);case 15:return e.prev=15,e.abrupt("return");case 18:case"end":return e.stop()}}),e,null,[[1,10,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(p.a,{children:Object(n.jsxs)("div",{className:"user-request-menu",children:[Object(n.jsx)(z.a,{attached:"top",as:"h3",textAlign:"left",block:!0,children:"Create a post for discussion"}),Object(n.jsxs)(G.a,{attached:"top",tabular:!0,children:[Object(n.jsx)(G.a.Item,{name:"content",active:"content"===a,onClick:s}),Object(n.jsx)(G.a.Item,{name:"image",active:"image"===a,onClick:s}),Object(n.jsx)(G.a.Item,{name:"preview",active:"preview"===a,onClick:s})]}),Object(n.jsx)(h.a,{attached:"bottom",children:"content"===a?Object(n.jsx)(xe,{setHtml:f,details:j,setDetails:d}):"image"===a?Object(n.jsx)(de,{details:j,setDetails:d}):Object(n.jsx)(ve,{html:g,img:j.img})}),Object(n.jsx)(m.a,{loading:k,onClick:E,children:"Submit"}),L?Object(n.jsx)(x.a,{error:!0,children:L}):null,N?Object(n.jsx)(x.a,{success:!0,children:N}):null]})})};function fe(){var e=Object(T.a)(["\n    query AdminDashboard{\n      requests{\n        _id\n        employee{\n          _id\n          name\n          img\n        }\n        status\n        data{\n          amount \n          message\n          dates{\n            startDate\n            endDate\n          }\n        }\n        type\n        resolved_by{\n          name\n          img\n        }\n      }\n    } \n  "]);return fe=function(){return e},e}var ye=function(){var e=Object(Z.gql)(fe()),t=Object(Z.useQuery)(e),a=t.loading,r=t.error,c=t.data;if(a)return Object(n.jsx)(pe.a,{active:!0,children:Object(n.jsx)(he.a,{size:"small",children:"Loading"})});if(r)return Object(n.jsx)(pe.a,{active:!0,children:Object(n.jsxs)("p",{children:["Some error occured! ",r]})});var s=c.requests;return Object(n.jsxs)("div",{children:[Object(n.jsx)(te,{requests:s}),Object(n.jsx)("div",{style:{height:"50px"}}),Object(n.jsx)(ge,{}),Object(n.jsx)("div",{style:{height:"50px"}}),Object(n.jsx)(be,{}),Object(n.jsx)("div",{style:{height:"50px"}})]})},Se=a(276),ke=function(e){var t=e.post;return Object(n.jsx)(h.a,{children:Object(n.jsx)(Se.a.Event,{children:Object(n.jsxs)(Se.a.Content,{children:[Object(n.jsxs)(Se.a.Summary,{children:[Object(n.jsx)(Y.a,{avatar:!0,src:t.created_by.img||""}),Object(n.jsx)("strong",{children:t.created_by.name})," posted",Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsx)(Y.a,{size:"large",src:t.img}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:t.html}})]})})})},we=function(e){var t=e.posts;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)(ke,{post:e},e._id)}))})};function De(){var e=Object(T.a)(["\n  {\n    posts{\n      _id\n      html\n      img\n      created_by{\n        name\n        img\n      }\n    } \n  }"]);return De=function(){return e},e}var Ce=function(){var e=Object(Z.gql)(De()),t=Object(Z.useQuery)(e),a=t.loading,r=t.error,c=t.data;return a?Object(n.jsx)(pe.a,{active:!0,children:Object(n.jsx)(he.a,{size:"small",children:"Loading"})}):r?Object(n.jsx)(pe.a,{active:!0,children:Object(n.jsxs)("p",{children:["Some error occured! ",r]})}):Object(n.jsx)(p.a,{style:{padding:"10px",margin:"auto"},children:Object(n.jsx)(we,{posts:c.posts})})},Ne=a(271),Ie=a(197);function _e(){var e=Object(T.a)(["\n{\n  employees{\n    _id\n    name\n    email\n    img\n    branch\n    department\n    position\n    dob\n    salary\n  }\n}"]);return _e=function(){return e},e}var qe=[{key:"department",text:"department",value:"department"},{key:"branch",text:"branch",value:"branch"},{key:"position",text:"position",value:"position"},{key:"name",text:"name",value:"name"}],Ae=Object(Z.gql)(_e()),Le=function(){var e=Object(r.useState)("department"),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),l=Object(b.a)(s,2),i=l[0],o=l[1],u=Object(Z.useQuery)(Ae),j=u.loading,d=u.error,O=u.data,v=Object(r.useState)((null===O||void 0===O?void 0:O.employees)||[]),g=Object(b.a)(v,2),f=g[0],y=g[1],S=Object(r.useState)((null===O||void 0===O?void 0:O.employees)||[]),k=Object(b.a)(S,2),w=k[0],D=k[1];Object(r.useEffect)((function(){y((null===O||void 0===O?void 0:O.employees)||[]),D((null===O||void 0===O?void 0:O.employees)||[])}),[O]);return j?Object(n.jsx)(pe.a,{active:!0,children:Object(n.jsx)(he.a,{size:"small",children:"Loading"})}):d?Object(n.jsx)(pe.a,{active:!0,children:Object(n.jsxs)("p",{children:["Some error occured! ",d]})}):Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(z.a,{as:"h2",block:!0,children:["Search Employee by ",a]}),Object(n.jsxs)(re.a,{type:"text",placeholder:"Search...",action:!0,value:i,onChange:function(e,t){var a=t.value;return o(a)},children:[Object(n.jsx)("input",{}),Object(n.jsx)(Ne.a,{compact:!0,options:qe,value:a,onChange:function(e,t){var a=t.value;c(a)}}),Object(n.jsx)(m.a,{type:"submit",onClick:function(e){e.preventDefault();var t={includeScore:!0,keys:[a]},n=new Ie.a(w||[],t).search(i).map((function(e){return e.item}));console.log(n),y(n)},children:"Search"})]}),Object(n.jsx)(h.a,{children:Object(n.jsx)(V.a.Group,{centered:!0,children:0===f.length?Object(n.jsx)(x.a,{children:"No results found!"}):f.map((function(e){return Object(n.jsx)(K,{_id:e._id,branch:e.branch,department:e.department,position:e.position,firstName:e.name,img:e.img,fluid:!1,dob:e.dob,email:e.email,salary:e.salary},e._id)}))})})]})},Pe=function(e){var t=e.description,a=e.link,r=e.header;return Object(n.jsxs)(V.a,{children:[Object(n.jsx)(V.a.Content,{header:r}),Object(n.jsx)(V.a.Content,{description:t}),Object(n.jsxs)(V.a.Content,{extra:!0,children:[Object(n.jsx)(W.a,{name:"file alternate"}),Object(n.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:"open document"})]})]})},Ee=[{_id:1,header:"Policy",description:"A file containing set of rules and regulations regarding working of company.",link:"../../../assets/policy.pdf"},{_id:2,header:"Holidays",description:"A document containing the holidays of the year.",link:"../../../assets/holidays.jpg"},{_id:3,header:"Company logo",description:"A file containing company logo, cannot be used for commercial purposes without permission",link:"../../../assets/logo.jpg"}],Me=function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsx)("div",{className:"hero",children:Object(n.jsx)("h3",{children:"The Office"})}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(z.a,{as:"h3",block:!0,children:"Company Policies and Holidays"}),Object(n.jsx)(V.a.Group,{children:Ee.map((function(e){return Object(n.jsx)(Pe,{header:e.header,description:e.description,link:e.link},e._id)}))})]})]})},Fe=(a(250),function(){return Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",exact:!0,children:Me}),Object(n.jsx)(l.a,{path:"/login",children:Object(n.jsx)(E,{})}),Object(n.jsx)(M,{path:"/dashboard",component:ne}),Object(n.jsx)(M,{path:"/discussion",component:Ce}),Object(n.jsx)(M,{path:"/search",component:Le}),Object(n.jsx)(F,{path:"/admin",component:ye}),Object(n.jsx)(l.a,{component:function(){return Object(n.jsx)("h1",{children:"404 Page not found"})}})]})}),Te=(a(251),a(252),new Z.ApolloClient({uri:"".concat(N,"/graphql"),cache:new Z.InMemoryCache})),ze=a(60),Ge=(a(253),function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),e.next=4,C.a.post("/api/logout");case 4:return t({type:g}),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:g,payload:{user:null,error:e.t0.response.data}}),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),Re=function(){var e=Object(r.useContext)(k),t=e.state,a=e.dispatch,c=["Login"];t.user&&(c=["Discussion","Search","Dashboard"],t.user.isAdmin&&(c=["Discussion","Search","Dashboard","Admin"]));return Object(n.jsxs)("nav",{children:[Object(n.jsx)(ze.b,{to:"/",children:Object(n.jsx)("h1",{children:"The Office"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"nav-links",children:[c.map((function(e,t){return console.log(e),Object(n.jsx)(ze.b,{className:"link",to:"/".concat(e.toLowerCase()),children:Object(n.jsx)("li",{children:e})},t)})),t.user?Object(n.jsx)("li",{onClick:function(){return Ge(a)},children:"Logout"}):null]})})]})};s.a.render(Object(n.jsx)(Z.ApolloProvider,{client:Te,children:Object(n.jsx)(ze.a,{children:Object(n.jsxs)(w,{children:[Object(n.jsx)(Re,{}),Object(n.jsx)(Fe,{})]})})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.5c525c60.chunk.js.map