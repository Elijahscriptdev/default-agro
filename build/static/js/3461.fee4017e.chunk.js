"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[3461],{3461:function(e,n,s){s.r(n);var r=s(4165),a=s(5861),l=s(1413),t=s(885),i=s(2791),o=s(9434),d=s(6871),m=s(5705),c=s(132),u=s(4034),x=s(9971),h=s(3767),p=s(890),j=s(533),g=s(254),f=s(5013),w=s(5865),b=s(5524),v=s(5750),N=s(4298),y=s(705),Z=s(1303),_=s(184);n.default=function(){var e,n=(0,o.I0)(),s=(0,d.s0)(),F=(0,i.useState)(!1),C=(0,t.Z)(F,2),S=C[0],k=C[1],B=(0,i.useState)([]),q=(0,t.Z)(B,2),P=q[0],I=q[1],T=(0,o.v9)((function(e){return e.AuthReducer.userProfile||JSON.parse(sessionStorage.getItem("user_profile"))})),U=(0,o.v9)((function(e){return e.TenantReducer.tenants})),A=(0,l.Z)((0,l.Z)({},Z.cE),{},{width:(0,l.Z)((0,l.Z)({},Z.cE.width),{},{md:"auto"})});(0,i.useEffect)((function(){var e;(0,N.F3)({filterByAuthority:!0,authUser:T},I),(0,x.B)({role:null===T||void 0===T||null===(e=T.my_role)||void 0===e?void 0:e.role,action:"user:create:add-tenant-info"})&&n((0,y.ax)({page:1}))}),[T,null===T||void 0===T||null===(e=T.my_role)||void 0===e?void 0:e.role,n]);var E=c.Ry({first_name:u.t.name("First name").required("First name is required"),last_name:u.t.name("Last name").required("Last name is required"),email:u.t.email().required("Email is required"),password:u.t.password("Password").required("Password is required"),group:u.t.blank().required("User group is required"),bvn:u.t.bvn("BVN")});return(0,_.jsx)(i.Fragment,{children:(0,_.jsxs)("section",{children:[(0,_.jsx)("nav",{id:"quick-nav",children:(0,_.jsx)(w.Z,{breadcrumbs:[(0,_.jsx)(p.Z,{color:"inherit",children:"User Management"},"1"),(0,_.jsx)(j.Z,{href:"/user-management/users",color:"inherit",children:"Manage Users"},"2"),(0,_.jsx)(p.Z,{color:"primary.main",children:"Add User"},"3")]})}),(0,_.jsxs)(h.Z,{direction:"column",px:4,py:3,alignItems:"flex-start",sx:{backgroundColor:"#FFF",boxShadow:"0px 5px 20px rgba(108, 117, 125, 0.15)",borderRadius:"5px"},children:[(0,_.jsx)("h3",{className:"first-text ml-1.5",children:"Add New User"}),(0,_.jsx)(m.J9,{initialValues:{first_name:"",last_name:"",email:"",password:"",group:"",bvn:"",phone:"",tenant:""},validationSchema:E,onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a,l){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.resetForm,i={first_name:a.first_name,last_name:a.last_name,email:a.email,password:a.password,group:a.group,tenant:a.tenant||"TN-40",bvn:a.bvn},k(!0),n((0,v.cn)(i)).then((function(e){console.log(e),k(!1),(null!==e&&void 0!==e&&e.data||null!==e&&void 0!==e&&e.success)&&(t(),window.setTimeout((function(){return s("/user-management/users")}),1e3))}));case 5:case"end":return e.stop()}}),e)})));return function(n,s){return e.apply(this,arguments)}}(),children:function(e){var n,s=e.values,r=e.errors,a=e.touched,l=e.handleChange,t=e.handleBlur,i=e.handleSubmit;return(0,_.jsxs)("form",{onSubmit:i,style:{width:"100%",border:"1px solid transparent"},children:[(0,_.jsxs)(h.Z,{direction:"row",justifyContent:"space-between",sx:{flexWrap:{xs:"wrap",lg:"nowrap"}},children:[(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,_.jsxs)("label",{htmlFor:"first_name",className:"second-text my-3",children:["First Name ",(0,_.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,_.jsx)(g.Z,{id:"first_name",sx:A,name:"first_name",InputProps:{style:{height:"44px"}},onChange:l,onBlur:t,value:s.first_name,className:r.first_name&&a.first_name?"input-error":null}),r.first_name&&a.first_name&&(0,_.jsx)("span",{className:"error",children:r.first_name})]}),(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,_.jsxs)("label",{htmlFor:"last_name",className:"second-text my-3",children:["Last Name ",(0,_.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,_.jsx)(g.Z,{sx:A,id:"last_name",name:"last_name",InputProps:{style:{height:"44px"}},onChange:l,onBlur:t,value:s.last_name,className:r.last_name&&a.last_name?"input-error":null}),r.last_name&&a.last_name&&(0,_.jsx)("span",{className:"error",children:r.last_name})]})]}),(0,_.jsxs)(h.Z,{direction:"row",justifyContent:"space-between",sx:{flexWrap:{xs:"wrap",lg:"nowrap"}},children:[(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,_.jsxs)("label",{htmlFor:"email",className:"second-text my-3",children:["Email ",(0,_.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,_.jsx)(g.Z,{sx:A,id:"email",name:"email",InputProps:{style:{height:"44px"}},onChange:l,onBlur:t,value:s.email,className:r.email&&a.email?"input-error":null}),r.email&&a.email&&(0,_.jsx)("span",{className:"error",children:r.email})]}),(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,_.jsx)("label",{htmlFor:"phone",className:"second-text my-3",children:"Phone Number"}),(0,_.jsx)(g.Z,{sx:A,id:"phone",name:"phone",InputProps:{style:{height:"44px"}},onChange:l,onBlur:t,value:s.phone,className:r.phone&&a.phone?"input-error":null})]}),r.phone&&a.phone&&(0,_.jsx)("span",{className:"error",children:r.phone})]}),(0,_.jsxs)(h.Z,{direction:"row",justifyContent:"space-between",sx:{flexWrap:{xs:"wrap",lg:"nowrap"}},children:[(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:{xs:"100%"}},children:[(0,_.jsxs)("label",{htmlFor:"password",className:"second-text my-3",children:["Password ",(0,_.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,_.jsx)(g.Z,{type:"password",sx:A,id:"password",name:"password",InputProps:{style:{height:"44px"}},onChange:l,onBlur:t,value:s.password,className:r.password&&a.password?"input-error":null}),r.password&&a.password&&(0,_.jsx)("span",{className:"error",children:r.password})]}),(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,_.jsxs)("label",{htmlFor:"group",className:"second-text my-3",children:["User Group ",(0,_.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,_.jsx)(f.Z,{name:"group",id:"group",value:s.group,onChange:l,noneLabel:(0,_.jsx)("em",{children:"Select Group"}),iconType:"filled",width:{md:"400px",xs:"100%"},height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:P.map((function(e){return{value:e.id,name:e.role}})),className:r.group&&a.group?"input-error":null}),r.group&&a.group&&(0,_.jsx)("span",{className:"error",children:r.group})]})]}),(0,_.jsx)(x.Z,{role:null===T||void 0===T||null===(n=T.my_role)||void 0===n?void 0:n.role,perform:"user:create:add-tenant-info",yes:function(){return(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1},children:[(0,_.jsx)("label",{htmlFor:"tenant",className:"second-text my-3",children:"Select Tenant"}),(0,_.jsx)(f.Z,{name:"tenant",id:"tenant",value:s.tenant,onChange:l,noneLabel:(0,_.jsx)("em",{children:"Select"}),iconType:"filled",width:"100%",height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:U.map((function(e){return{value:e.id,name:e.name}}))}),r.tenant&&a.tenant&&(0,_.jsx)("span",{className:"error",children:r.tenant})]})},no:function(){return null}}),(0,_.jsx)("h3",{style:{marginTop:"2rem",marginBottom:"0.5rem"},children:"Other Information"}),(0,_.jsxs)(h.Z,{direction:"column",sx:{mx:1,width:{xs:"100%",md:"auto"}},children:[(0,_.jsx)("label",{htmlFor:"bvn",className:"second-text my-3",children:"BVN"}),(0,_.jsx)(g.Z,{sx:A,id:"bvn",name:"bvn",InputProps:{style:{height:"44px"}},onChange:l,onBlur:t,value:s.bvn,className:r.bvn&&a.bvn?"input-error":null}),r.bvn&&a.bvn&&(0,_.jsx)("span",{className:"error",children:r.bvn})]}),(0,_.jsx)("div",{className:"buttons mt-8 ml-1.5",children:(0,_.jsx)("div",{className:"",children:(0,_.jsx)(b.Z,{type:"submit",value:S?"Adding...":"Submit",disabled:S})})})]})}})]})]})})}}}]);
//# sourceMappingURL=3461.fee4017e.chunk.js.map