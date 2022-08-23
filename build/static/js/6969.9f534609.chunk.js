"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[6969],{1303:function(e,n,r){r.d(n,{SV:function(){return a},cE:function(){return t}});var t={borderRadius:"5px",backgroundColor:"#F3F3F4",width:{md:"477.61px",xs:"100%"},"& fieldset":{border:"none"}},a={minWidth:{xs:"320px",md:"initial"}}},5013:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(1413),a=r(885),o=r(5987),s=r(2791),u=r(7865),c=r(8096),l=r(9321),i=r(184),d=["onChange","noneLabel","options","iconType","sx","backgroundColor"];function m(e){var n,r=e.onChange,m=void 0===r?function(e){}:r,p=e.noneLabel,h=e.options,x=void 0===h?[]:h,f=e.iconType,v=e.sx,b=void 0===v?{}:v,g=(e.backgroundColor,(0,o.Z)(e,d)),Z=(0,s.useState)(""),y=(0,a.Z)(Z,2),w=y[0],_=y[1];if(!0===(!!f&&"filled"===f))n={"& .MuiSelect-icon":{backgroundColor:"primary.main",fill:"white",height:"100%",width:e.iconwidth||"48px",top:0,right:0}};else n={};return(0,i.jsx)(c.Z,{sx:{borderRadius:"5px",minWidth:120,width:e.width,height:e.height,backgroundColor:e.backgroundColor},children:(0,i.jsxs)(l.Z,(0,t.Z)((0,t.Z)({value:w,onChange:function(e){_(e.target.value),m(e)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},sx:(0,t.Z)((0,t.Z)({overflow:"hidden",boxShadow:e.disableshadow?"none":"0px 5px 20px rgba(108, 117, 125, 0.15)","& *":{border:"none"}},n),b)},g),{},{children:[(0,i.jsx)(u.Z,{value:"",children:p||(0,i.jsx)("em",{children:"None"})}),x.map((function(e,n){return(0,i.jsx)(u.Z,{value:e.value,selected:e.selected,children:e.name||""},n)}))]}))})}},6969:function(e,n,r){r.r(n);var t=r(1413),a=r(4165),o=r(5861),s=r(885),u=r(2791),c=r(9434),l=r(6871),i=r(5705),d=r(132),m=r(4034),p=r(3767),h=r(890),x=r(533),f=r(254),v=r(5013),b=r(5865),g=r(5524),Z=r(5750),y=r(4298),w=r(1303),_=r(1350),j=r(38),k=r(184);n.default=function(){var e=(0,c.I0)(),n=(0,l.s0)(),r=(0,u.useState)(!1),F=(0,s.Z)(r,2),N=F[0],C=F[1],S=(0,u.useState)([]),P=(0,s.Z)(S,2),q=P[0],A=P[1],B=(0,c.v9)((function(e){var n;return(null===(n=e.AppReducer)||void 0===n?void 0:n.states)||{}})),M=(0,u.useCallback)((0,o.Z)((0,a.Z)().mark((function e(){var n,r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.get("/all/banks");case 3:t=e.sent,A((null===t||void 0===t||null===(n=t.result)||void 0===n||null===(r=n.banks)||void 0===r?void 0:r.data)||[]),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),L=(0,t.Z)((0,t.Z)({},w.cE),{},{width:(0,t.Z)((0,t.Z)({},w.cE.width),{},{md:"auto"})}),D=(0,c.v9)((function(e){var n;return(null===(n=e.AppReducer)||void 0===n?void 0:n.localGovt)||[]})),I=function(n){return function(r){console.log({state:r.target.value}),r.target.value?e((0,y.zW)(r.target.value)):e({type:_.UZ,payload:{localGovt:[]}}),n(r)}};(0,u.useEffect)((function(){M(),e((0,y.Pz)({}))}),[e,M]);var R=d.Ry({first_name:m.t.name("First name").required("First name is required"),last_name:m.t.name("Last name").required("Last name is required"),middle_name:m.t.name("Middle name"),mobile:m.t.mobile(),home_state:m.t.blank().required("State is required"),home_address:m.t.blank(),home_lga:m.t.blank().required("Local govt is required"),gender:m.t.blank().required("Gender is required"),dob:m.t.date("Date of birth").required("Date of birth is required"),account_no:m.t.blank().when("bank",{is:function(e){return!e},then:m.t.blank().matches(/[0-9]/g,"Invalid account number").min(10,"Account number must atleast 10 digits"),otherwise:m.t.blank().matches(/[0-9]/g,"Invalid account number").min(10,"Account number must atleast 10 digits").required("Account number is required")})});return(0,k.jsx)(u.Fragment,{children:(0,k.jsxs)("section",{children:[(0,k.jsx)("nav",{id:"quick-nav",children:(0,k.jsx)(b.Z,{breadcrumbs:[(0,k.jsx)(h.Z,{color:"inherit",children:"User Management"},"1"),(0,k.jsx)(x.Z,{href:"/user-management/farmers",color:"inherit",children:"Manage Farmers"},"2"),(0,k.jsx)(h.Z,{color:"primary.main",children:"Add Farmer"},"3")]})}),(0,k.jsxs)(p.Z,{direction:"column",px:4,py:3,alignItems:"flex-start",sx:{backgroundColor:"#FFF",boxShadow:"0px 5px 20px rgba(108, 117, 125, 0.15)",borderRadius:"5px"},children:[(0,k.jsx)("h2",{className:"first-text ml-1.5",children:"Add New Farmer"}),(0,k.jsx)(i.J9,{initialValues:{first_name:"",last_name:"",middle_name:"",mobile:"",home_state:"",home_address:"",home_lga:"",gender:"",dob:"",bank:""},validationSchema:R,onSubmit:function(){var r=(0,o.Z)((0,a.Z)().mark((function r(t,o){var s,u;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s=o.resetForm,u={first_name:t.first_name,last_name:t.last_name,middle_name:t.middle_name,mobile:t.mobile,home_state:t.home_state,home_address:t.home_address,home_lga:t.home_lga,gender:t.gender,dob:t.dob,bank:t.bank},C(!0),e((0,Z.NM)(u)).then((function(e){C(!1),(null!==e&&void 0!==e&&e.data||null!==e&&void 0!==e&&e.success)&&(s(),window.setTimeout((function(){return n("/user-management/farmers")}),1e3))}));case 5:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),children:function(e){var n=e.values,r=e.errors,t=e.touched,a=e.handleChange,o=e.handleBlur,s=e.handleSubmit;return(0,k.jsxs)("form",{onSubmit:s,style:{width:"100%",border:"1px solid transparent"},children:[(0,k.jsxs)(p.Z,{direction:"row",justifyContent:"space-between",sx:{flexWrap:{xs:"wrap",lg:"nowrap"}},children:[(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,k.jsxs)("label",{htmlFor:"first_name",className:"second-text my-3",children:["First Name ",(0,k.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,k.jsx)(f.Z,{id:"first_name",sx:L,name:"first_name",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.first_name,className:r.first_name&&t.first_name?"input-error":null}),r.first_name&&t.first_name&&(0,k.jsx)("span",{className:"error",children:r.first_name})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,k.jsxs)("label",{htmlFor:"last_name",className:"second-text my-3",children:["Last Name ",(0,k.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,k.jsx)(f.Z,{sx:L,id:"last_name",name:"last_name",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.last_name,className:r.last_name&&t.last_name?"input-error":null}),r.last_name&&t.last_name&&(0,k.jsx)("span",{className:"error",children:r.last_name})]})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,k.jsx)("label",{htmlFor:"middle_name",className:"second-text my-3",children:"Middle Name"}),(0,k.jsx)(f.Z,{sx:L,id:"middle_name",name:"middle_name",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.middle_name,className:r.middle_name&&t.middle_name?"input-error":null}),r.middle_name&&t.middle_name&&(0,k.jsx)("span",{className:"error",children:r.middle_name})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,k.jsx)("label",{htmlFor:"mobile",className:"second-text my-3",children:"Phone Number"}),(0,k.jsx)(f.Z,{sx:L,id:"mobile",name:"mobile",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.mobile,className:r.mobile&&t.mobile?"input-error":null}),r.mobile&&t.mobile&&(0,k.jsx)("span",{className:"error",children:r.mobile})]}),(0,k.jsxs)(p.Z,{direction:"row",justifyContent:"space-between",sx:{mb:2,flexWrap:{xs:"wrap",lg:"nowrap"}},children:[(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,k.jsxs)("label",{htmlFor:"dob",className:"second-text my-3",children:["Date Of Birth ",(0,k.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,k.jsx)(f.Z,{type:"date",sx:L,id:"dob",name:"dob",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.dob,className:r.dob&&t.dob?"input-error":null}),r.dob&&t.dob&&(0,k.jsx)("span",{className:"error",children:r.dob})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%"}},children:[(0,k.jsxs)("label",{htmlFor:"gender",className:"second-text my-3",children:["Gender ",(0,k.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,k.jsx)(v.Z,{name:"gender",id:"gender",value:n.gender,onChange:a,noneLabel:(0,k.jsx)("em",{children:"Select Gender"}),iconType:"filled",width:{md:"400px",xs:"100%"},height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:[{value:"Male",name:"Male"},{value:"Female",name:"Female"}],className:r.gender&&t.gender?"input-error":null}),r.gender&&t.gender&&(0,k.jsx)("span",{className:"error",children:r.gender})]})]}),(0,k.jsx)("h3",{style:{marginTop:"2rem",marginBottom:"0.5rem"},children:"Other Information"}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,k.jsx)("label",{htmlFor:"bank",className:"second-text my-3",children:"Bank"}),(0,k.jsx)(v.Z,{name:"bank",id:"bank",value:n.bank,onChange:a,noneLabel:(0,k.jsx)("em",{children:"Select Bank"}),iconType:"filled",width:"100%",height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:q.map((function(e){return{name:e.name,value:e.name}}))}),r.bank&&t.bank&&(0,k.jsx)("span",{className:"error",children:r.bank})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,k.jsx)("label",{htmlFor:"account_no",className:"second-text my-3",children:"Account Number"}),(0,k.jsx)(f.Z,{sx:L,id:"account_no",name:"account_no",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.account_no,className:r.account_no&&t.account_no?"input-error":null}),r.account_no&&t.account_no&&(0,k.jsx)("span",{className:"error",children:r.account_no})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,k.jsx)("label",{htmlFor:"loan",className:"second-text my-3",children:"Loan Amount"}),(0,k.jsx)(f.Z,{sx:L,id:"loan",name:"loan",type:"number",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.loan,className:r.loan&&t.loan?"input-error":null}),r.loan&&t.loan&&(0,k.jsx)("span",{className:"error",children:r.loan})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,k.jsx)("label",{htmlFor:"home_address",className:"second-text my-3",children:"Home Address"}),(0,k.jsx)(f.Z,{sx:L,id:"home_address",name:"home_address",InputProps:{style:{height:"44px"}},onChange:a,onBlur:o,value:n.home_address,className:r.home_address&&t.home_address?"input-error":null}),r.home_address&&t.home_address&&(0,k.jsx)("span",{className:"error",children:r.home_address})]}),(0,k.jsxs)(p.Z,{direction:"row",justifyContent:"space-between",sx:{mb:2,flexWrap:{xs:"wrap",lg:"nowrap"}},children:[(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:{xs:"100%"}},children:[(0,k.jsxs)("label",{htmlFor:"home_state",className:"second-text my-3",children:["Home State ",(0,k.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,k.jsx)(v.Z,{name:"home_state",id:"home_state",value:n.home_state,onChange:I(a),noneLabel:(0,k.jsx)("em",{children:"Select State"}),iconType:"filled",width:{md:"400px",xs:"100%"},height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:Object.values(B).map((function(e){return{name:e.name,value:e.state_id}})),className:r.home_state&&t.home_state?"input-error":null}),r.home_state&&t.home_state&&(0,k.jsx)("span",{className:"error",children:r.home_state})]}),(0,k.jsxs)(p.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,k.jsxs)("label",{htmlFor:"home_lga",className:"second-text my-3",children:["LGA ",(0,k.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,k.jsx)(v.Z,{name:"home_lga",id:"home_lga",value:n.home_lga,onChange:a,noneLabel:(0,k.jsx)("em",{children:"Select LGA"}),iconType:"filled",width:{md:"400px",xs:"100%"},height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:D.map((function(e){return{name:e.local_name,value:e.local_id}})),className:r.home_lga&&t.home_lga?"input-error":null}),r.home_lga&&t.home_lga&&(0,k.jsx)("span",{className:"error",children:r.home_lga})]})]}),(0,k.jsx)("div",{className:"buttons mt-8 ml-1.5",children:(0,k.jsx)("div",{className:"",children:(0,k.jsx)(g.Z,{type:"submit",value:N?"Adding...":"Submit",disabled:N})})})]})}})]})]})})}},5750:function(e,n,r){r.d(n,{NM:function(){return b},qH:function(){return j},cn:function(){return m},PH:function(){return Z},x7:function(){return p},AI:function(){return k},h8:function(){return x},Cm:function(){return y},sg:function(){return w},n9:function(){return f},wM:function(){return v},ZO:function(){return _},Rf:function(){return d},fP:function(){return g},Nq:function(){return h}});var t=r(4165),a=r(5861),o=r(38),s=r(1657),u=r(3528),c=r(4028);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new FormData;return Object.keys(e).length>0&&(console.log({body:e}),Object.keys(e).forEach((function(r){n.append(r,e[r])}))),n}var i=r(4329),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s,l,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.page||1,s=e.limit||10,l=(0,c.r)(e),r({type:i.Ny}),e=(0,c.r)(e),n.prev=5,n.next=8,o.Z.get("/viewusers?page=".concat(a,"&limit=").concat(s,"&query=").concat(l));case 8:d=n.sent,r({type:i.Oz,payload:d}),n.next=18;break;case 12:return n.prev=12,n.t0=n.catch(5),console.log(n.t0),r({type:i.wX}),(0,u.P)(n.t0,"Failed to fetch users"),n.abrupt("return",n.t0);case 18:case"end":return n.stop()}}),n,null,[[5,12]])})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post("/users",e);case 3:if(null===(a=n.sent)||void 0===a||!a.success||null===a||void 0===a||!a.result){n.next=8;break}return(0,s.notify)("User added successfully",{type:"success"}),r({type:i.qH,payload:a.result}),n.abrupt("return",a);case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),r({type:i.Jh}),(0,u.P)(n.t0,"Failed to add user"),n.abrupt("return",n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=l(e),n.next=4,(0,o.V)("formData").post("/users/bulk-upload",e,{});case 4:null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,s.notify)("Users uploaded successfully",{type:"success"}),r(d({page:1}))),n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),(0,u.P)(n.t0,"Failed to upload users"),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.patch("/users/".concat(e),n);case 3:if(null===(c=r.sent)||void 0===c||!c.success||null===c||void 0===c||!c.result){r.next=7;break}return(0,s.notify)("User Updated successfully",{type:"success"}),r.abrupt("return",c);case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),console.log(r.t0),(0,u.P)(r.t0,"Failed to update user"),r.abrupt("return",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},x=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.delete("/users/".concat(e));case 3:n.sent&&((0,s.notify)("User deleted successfully",{type:"success"}),r(d({page:1}))),n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),(0,u.P)(n.t0,"Failed to delete user"),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:i._l}),e=(0,c.r)(e),n.prev=2,n.next=5,o.Z.get("/farmers".concat(e));case 5:null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result?r({type:i.cj,payload:null===a||void 0===a||null===(s=a.result)||void 0===s?void 0:s.data}):r({type:i.eZ}),n.next=15;break;case 9:return n.prev=9,n.t0=n.catch(2),console.log(n.t0),r({type:i.eZ}),(0,u.P)(n.t0),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/farmers/".concat(n));case 3:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.result);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),b=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post("/farmers",e);case 3:return null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,s.notify)("Farmer added successfully",{type:"success"}),r({type:i.Du,payload:a.result}),r(f({page:1}))),n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),r({type:i.$0}),(0,u.P)(n.t0,"Failed to add farmer"),n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},g=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.patch("/farmers/".concat(e),n);case 3:return null!==(c=r.sent)&&void 0!==c&&c.success&&null!==c&&void 0!==c&&c.result&&(0,s.notify)("Farmer updated successfully",{type:"success"}),r.abrupt("return",c);case 8:return r.prev=8,r.t0=r.catch(0),console.log(r.t0),(0,u.P)(r.t0,"Failed to update farmer"),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},Z=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=l(e),n.next=4,(0,o.V)("formData")({method:"post",url:"/farmers/bulk-upload",data:e});case 4:null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,s.notify)("Farmers uploaded successfully",{type:"success"}),r(f({page:1}))),n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),(0,u.P)(n.t0,"Failed to add farmer"),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.post("/farmers/downloads/process-farmer-details",e);case 3:null!==(c=r.sent)&&void 0!==c&&c.success&&null!==c&&void 0!==c&&c.result&&((0,s.notify)("Farmers exported successfully",{type:"success"}),n("/user-management/farmers/exports")),r.next=12;break;case 7:return r.prev=7,r.t0=r.catch(0),console.log(r.t0),(0,u.P)(r.t0,"Failed to export farmers"),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},w=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/farmers/downloads");case 3:if(null===(n=e.sent)||void 0===n||!n.success||null===n||void 0===n||!n.result){e.next=6;break}return e.abrupt("return",null===n||void 0===n||null===(r=n.result)||void 0===r?void 0:r.data);case 6:return e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),(0,u.P)(e.t0,"Failed to fetch exports"),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:i.jt}),e=(0,c.r)(e),n.prev=2,n.next=5,o.Z.get("/sourcing-partners".concat(e));case 5:s=n.sent,r({type:i.rE,payload:null===s||void 0===s||null===(a=s.result)||void 0===a?void 0:a.sourcing_partners}),n.next=15;break;case 9:return n.prev=9,n.t0=n.catch(2),console.log(n.t0),r({type:i.ZU}),(0,u.P)(n.t0,"Failed to fetch sourcing agents"),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()},j=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.post("/sourcing-partners",e);case 3:return a=n.sent,console.log(a),null!==a&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,s.notify)("Sourcing agent added successfully",{type:"success"}),r({type:i.YJ,payload:a.result})),n.abrupt("return",a);case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),r({type:i.Dv}),(0,u.P)(n.t0,"Failed to add sourcing agent"),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},k=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.delete("/sourcing-partners/".concat(e));case 3:n.sent&&((0,s.notify)("Sourcing agent deleted successfully",{type:"success"}),r(_({page:1}))),n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),(0,u.P)(n.t0,"Failed to delete sourcing agent"),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}},4034:function(e,n,r){r.d(n,{t:function(){return a}});var t=r(132),a={name:function(e){return t.Z_().min(3,e?"".concat(e," must be 3 or more characters"):"Must be 3 or more characters")},number:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1e20,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e20;return t.Rx().min(n,e?"".concat(e," must be greater than ").concat(n):"Must be greater than ".concat(n)).max(r,e?"".concat(e," must be less than ").concat(r):"Must be less than ".concat(r))},email:function(e){return t.Z_().email()},password:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24;return t.Z_().min(n,e?"".concat(e," must be ").concat(n," or more characters"):"Must be 8 or more characters").max(r,e?"".concat(e," is too long"):"Too long")},date:function(e){return t.Z_().matches(/(\d{4}(-|\/|\\)\d{1,2}(-|\/|\\)\d{1,2})|(\d{1,2}(-|\/|\\)\d{1,2}(-|\/|\\)\d{4})/gi)},mobile:function(e){return t.Z_().matches(/[0-9)(+]/gi,"Invalid number")},bvn:function(e){return t.Z_().matches(/\d{11}/g,"Invalid BVN").length(11,"BVN must be 11 digits long")},blank:function(){return t.Z_()}}},533:function(e,n,r){r.d(n,{Z:function(){return N}});var t=r(2982),a=r(885),o=r(4942),s=r(3366),u=r(7462),c=r(2791),l=r(8182),i=r(4419),d=r(4036),m=r(7630),p=r(1046),h=r(3031),x=r(2071),f=r(890),v=r(1217);function b(e){return(0,v.Z)("MuiLink",e)}var g=(0,r(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=r(8529),y=r(2065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_=function(e){var n=e.theme,r=e.ownerState,t=function(e){return w[e]||e}(r.color),a=(0,Z.D)(n,"palette.".concat(t),!1)||r.color,o=(0,Z.D)(n,"palette.".concat(t,"Channel"));return"vars"in n&&o?"rgba(".concat(o," / 0.4)"):(0,y.Fq)(a,.4)},j=r(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],F=(0,m.ZP)(f.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,u.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,u.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:_({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),N=c.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiLink"}),o=r.className,m=r.color,f=void 0===m?"primary":m,v=r.component,g=void 0===v?"a":v,Z=r.onBlur,y=r.onFocus,_=r.TypographyClasses,N=r.underline,C=void 0===N?"always":N,S=r.variant,P=void 0===S?"inherit":S,q=r.sx,A=(0,s.Z)(r,k),B=(0,h.Z)(),M=B.isFocusVisibleRef,L=B.onBlur,D=B.onFocus,I=B.ref,R=c.useState(!1),T=(0,a.Z)(R,2),V=T[0],W=T[1],O=(0,x.Z)(n,I),U=(0,u.Z)({},r,{color:f,component:g,focusVisible:V,underline:C,variant:P}),E=function(e){var n=e.classes,r=e.component,t=e.focusVisible,a=e.underline,o={root:["root","underline".concat((0,d.Z)(a)),"button"===r&&"button",t&&"focusVisible"]};return(0,i.Z)(o,b,n)}(U);return(0,j.jsx)(F,(0,u.Z)({color:f,className:(0,l.Z)(E.root,o),classes:_,component:g,onBlur:function(e){L(e),!1===M.current&&W(!1),Z&&Z(e)},onFocus:function(e){D(e),!0===M.current&&W(!0),y&&y(e)},ref:O,ownerState:U,variant:P,sx:[].concat((0,t.Z)(Object.keys(w).includes(f)?[]:[{color:f}]),(0,t.Z)(Array.isArray(q)?q:[q]))},A))}))}}]);
//# sourceMappingURL=6969.9f534609.chunk.js.map