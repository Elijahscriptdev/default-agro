"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[5497],{5497:function(e,n,r){r.d(n,{Di:function(){return N},Nw:function(){return y},fd:function(){return k},j6:function(){return F},lg:function(){return w},vY:function(){return _},wr:function(){return A}});var s=r(1413),t=r(4165),a=r(5861),l=r(885),i=r(2791),c=r(9434),u=r(5705),o=r(132),d=r(8870),m=r(3767),h=r(254),x=r(7123),p=r(5013),b=r(5524),g=r(203),v=r(1303),j=r(5163),f=(r(5750),r(7770),r(4298),r(4034)),Z=(r(468),r(38)),S=r(1918),C=r(184),N=function(e){var n=e.closeHandler,r=e.roles,s=(0,c.I0)(),S=(0,i.useState)(!1),N=(0,l.Z)(S,2),w=N[0],F=N[1],k=o.Ry({name:f.t.name("Cluster name").required("Cluster name is required"),manager:f.t.blank().required("Select a manager")}),y=(0,i.useState)([]),_=(0,l.Z)(y,2),A=_[0],B=_[1],E=(0,i.useCallback)((0,a.Z)((0,t.Z)().mark((function e(){var n,s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.get("/users?user_role=".concat(r["Project Manager"]));case 3:a=e.sent,B((null===a||void 0===a||null===(n=a.result)||void 0===n||null===(s=n.data)||void 0===s?void 0:s.data)||[]),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[r]);return(0,i.useEffect)((function(){E()}),[E]),(0,C.jsxs)(d.Z,{sx:v.SV,children:[(0,C.jsx)(g.Z,{title:"Add Cluster",closeHandler:n}),(0,C.jsx)(u.J9,{initialValues:{name:"",manager:"",description:""},validationSchema:k,onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,a){var l,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=a.resetForm,i={name:r.name,manager:r.manager,description:r.description},console.log(i),F(!0),s((0,j.DE)(i)).then((function(){F(!1),l(),n()}));case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var r=e.values,s=e.errors,t=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,C.jsxs)("form",{onSubmit:i,children:[(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsxs)("label",{htmlFor:"name",className:"second-text mb-4 mt-6",children:["Cluster Name ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(h.Z,{sx:v.cE,InputProps:{style:{height:"44px"}},id:"name",name:"name",onChange:a,onBlur:l,value:r.name,className:s.name&&t.name?"input-error":null}),s.name&&t.name&&(0,C.jsx)("span",{className:"error",children:s.name})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsxs)("label",{htmlFor:"manager",className:"second-text my-4",children:["Project Manager ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(p.Z,{id:"manager",name:"manager",value:r.manager,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select Manager"}),iconType:"filled",width:v.cE.width,height:"44px",sx:v.cE,backgroundColor:"#F3F3F4",disableshadow:"true",iconwidth:"48px",options:A.map((function(e){return{value:e.id,name:"".concat(e.first_name," ").concat(e.last_name)}})),className:s.manager&&t.manager?"input-error":null}),s.manager&&t.manager&&(0,C.jsx)("span",{className:"error",children:s.manager})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"description",className:"second-text mb-4 mt-6",children:"Cluster Description"}),(0,C.jsx)(h.Z,{id:"description",name:"description",sx:v.cE,InputProps:{style:{height:"44px"}},onChange:a,onBlur:l,value:r.description,className:s.description&&t.description?"input-error":null})]}),(0,C.jsx)(x.Z,{children:(0,C.jsxs)("div",{className:"buttons mt-8",children:[(0,C.jsx)("div",{className:"",children:(0,C.jsx)(b.Z,{value:"Cancel",onClick:n,sx:{fontSize:"14px",color:"#A9A9A9",backgroundColor:"white",borderRadius:"5px"}})}),(0,C.jsx)("div",{className:"mx-6",children:(0,C.jsx)(b.Z,{type:"submit",disabled:w,value:w?"Adding...":"Submit",sx:{fontSize:"14px",borderRadius:"5px"}})})]})})]})}})]})},w=function(e){var n,r=e.closeHandler,s=e.data,S=e.roles,N=(0,c.I0)(),w=(0,i.useState)(!1),F=(0,l.Z)(w,2),k=F[0],y=F[1],_=o.Ry({name:f.t.name("Cluster name").required("Cluster name is required"),manager:f.t.blank().required("Select a manager")}),A=(0,i.useState)([]),B=(0,l.Z)(A,2),E=B[0],R=B[1],q=(0,i.useCallback)((0,a.Z)((0,t.Z)().mark((function e(){var n,r,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.get("/users?user_role=".concat(S["Project Manager"]));case 3:s=e.sent,R((null===s||void 0===s||null===(n=s.result)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.data)||[]),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[S]);return(0,i.useEffect)((function(){q()}),[q]),(0,C.jsxs)(d.Z,{sx:v.SV,children:[(0,C.jsx)(g.Z,{title:"Edit Cluster",closeHandler:r}),(0,C.jsx)(u.J9,{initialValues:{name:s.name||"",manager:"".concat(null===(n=s.manager)||void 0===n?void 0:n.id)||"",description:s.description||""},validationSchema:_,onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,a){var l,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=a.resetForm,i={name:n.name,manager:n.manager,description:n.description},console.log(i),y(!0),N((0,j.A0)(s.id,i)).then((function(){y(!1),l(),r()}));case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.values,s=e.errors,t=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,C.jsxs)("form",{onSubmit:i,children:[(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"name",className:"second-text mb-4 mt-6",children:"Cluster Name"}),(0,C.jsx)(h.Z,{InputProps:{style:{height:"44px"}},placeholder:"Kaduna State Cluster",sx:v.cE,id:"name",name:"name",onChange:a,onBlur:l,value:n.name,className:s.name&&t.name?"input-error":null})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"manager",className:"second-text my-4",children:"Project Manager"}),(0,C.jsx)(p.Z,{name:"manager",value:n.manager,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select Manager"}),iconType:"filled",iconwidth:"48px",height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",width:{md:"478px",xs:"100%"},options:E.map((function(e){return{value:e.id,name:"".concat(e.first_name," ").concat(e.last_name)}})),className:s.manager&&t.manager?"input-error":null})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"description",className:"second-text mb-4 mt-6",children:"Cluster Description"}),(0,C.jsx)(h.Z,{sx:v.cE,InputProps:{style:{height:"44px"}},placeholder:"All Farmers & Agents In Kaduna State",id:"description",name:"description",onChange:a,onBlur:l,value:n.description,className:s.description&&t.description?"input-error":null}),s.description&&t.description&&(0,C.jsx)("span",{className:"error",children:s.description})]}),(0,C.jsx)(x.Z,{children:(0,C.jsxs)("div",{className:"buttons mt-8",children:[(0,C.jsx)("div",{className:"",children:(0,C.jsx)(b.Z,{value:"Cancel",onClick:r,sx:{fontSize:"14px",color:"#A9A9A9",backgroundColor:"white",borderRadius:"5px"}})}),(0,C.jsx)("div",{className:"mx-6",children:(0,C.jsx)(b.Z,{type:"submit",disabled:k,value:k?"Updating...":"Submit",sx:{fontSize:"14px",borderRadius:"5px"}})})]})})]})}})]})},F=function(e){var n=e.closeHandler,r=e.roles,s=(0,c.I0)(),S=(0,i.useState)([]),N=(0,l.Z)(S,2),w=N[0],F=N[1],k=(0,i.useState)(!1),y=(0,l.Z)(k,2),_=y[0],A=y[1],B=(0,c.v9)((function(e){var n,r;return(null===(n=e.FarmMangementReducer)||void 0===n||null===(r=n.clusters)||void 0===r?void 0:r.data)||[]})),E=(0,i.useCallback)((0,a.Z)((0,t.Z)().mark((function e(){var n,s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.get("/users?user_role=".concat(r.Agent));case 3:a=e.sent,F((null===a||void 0===a||null===(n=a.result)||void 0===n||null===(s=n.data)||void 0===s?void 0:s.data)||[]),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[r]),R=o.Ry({name:f.t.name("Cluster name").required("Cluster name is required"),cluster:f.t.blank().required("Select a cluster"),agent:f.t.blank().required("Select an agent")});return(0,i.useEffect)((function(){s((0,j.zd)({page:1})),E()}),[E,s]),(0,C.jsxs)(d.Z,{sx:v.SV,children:[(0,C.jsx)(g.Z,{title:"Add Sub Cluster",closeHandler:n}),(0,C.jsx)(u.J9,{initialValues:{name:"",agent:"",description:"",cluster:""},validationSchema:R,onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,a){var l,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=a.resetForm,i={name:r.name,agent:r.agent,description:r.description,cluster:r.cluster},console.log(i),A(!0),s((0,j.lu)(i)).then((function(){A(!1),l(),n()}));case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var r=e.values,s=e.errors,t=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,C.jsxs)("form",{onSubmit:i,children:[(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsxs)("label",{htmlFor:"name",className:"second-text mb-4 mt-6",children:["Sub Cluster Name ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(h.Z,{sx:v.cE,InputProps:{style:{height:"44px"}},id:"name",name:"name",onChange:a,onBlur:l,value:r.name,className:s.name&&t.name?"input-error":null}),s.name&&t.name&&(0,C.jsx)("span",{className:"error",children:s.name})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsxs)("label",{htmlFor:"agent",className:"second-text my-4",children:["Agent ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(p.Z,{id:"agent",name:"agent",value:r.agent,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select an agent"}),options:w.map((function(e){return{value:e.id,name:"".concat(e.first_name," ").concat(e.last_name)}})),iconType:"filled",width:v.cE.width,disableshadow:"true",height:"44px",backgroundColor:"#F3F3F4",iconwidth:"48px",className:s.agent&&t.agent?"input-error":null}),s.agent&&t.agent&&(0,C.jsx)("span",{className:"error",children:s.agent})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"description",className:"second-text mb-4 mt-6",children:"Sub Cluster Description"}),(0,C.jsx)(h.Z,{sx:v.cE,InputProps:{style:{height:"44px"}},id:"description",name:"description",onChange:a,onBlur:l,value:r.description,className:s.description&&t.description?"input-error":null}),s.description&&t.description&&(0,C.jsx)("span",{className:"error",children:s.description})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsxs)("label",{htmlFor:"cluster",className:"second-text mb-4 mt-6",children:["Cluster ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(p.Z,{name:"cluster",value:r.cluster,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select Cluster"}),options:B.map((function(e){return{value:e.id,name:e.name}})),iconType:"filled",width:v.cE.width,height:"44px",backgroundColor:"#F3F3F4",iconwidth:"48px",disableshadow:"true",className:s.cluster&&t.cluster?"input-error":null}),s.cluster&&t.cluster&&(0,C.jsx)("span",{className:"error",children:s.cluster})]}),(0,C.jsx)(x.Z,{children:(0,C.jsxs)("div",{className:"buttons mt-8",children:[(0,C.jsx)("div",{className:"",children:(0,C.jsx)(b.Z,{value:"Cancel",onClick:n,sx:{fontSize:"14px",color:"#A9A9A9",backgroundColor:"white",borderRadius:"5px"}})}),(0,C.jsx)("div",{className:"mx-6",children:(0,C.jsx)(b.Z,{type:"submit",disabled:_,value:_?"Adding...":"Submit",sx:{fontSize:"14px",borderRadius:"5px"}})})]})})]})}})]})},k=function(e){var n,r=e.closeHandler,s=e.data,S=e.roles,N=(0,c.I0)(),w=(0,i.useState)(!1),F=(0,l.Z)(w,2),k=F[0],y=F[1],_=o.Ry({name:f.t.name("Cluster name").required("Cluster name is required"),cluster:f.t.blank().required("Select a cluster"),agent:f.t.blank().required("Select an agent")}),A=(0,i.useState)([]),B=(0,l.Z)(A,2),E=B[0],R=B[1],q=(0,c.v9)((function(e){var n,r;return(null===(n=e.FarmMangementReducer)||void 0===n||null===(r=n.clusters)||void 0===r?void 0:r.data)||[]})),I=(0,i.useCallback)((0,a.Z)((0,t.Z)().mark((function e(){var n,r,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.get("/users?user_role=".concat(S.Agent));case 3:s=e.sent,R((null===s||void 0===s||null===(n=s.result)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.data)||[]),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[S]);return(0,i.useEffect)((function(){N((0,j.zd)({page:1})),I()}),[N,I]),(0,C.jsxs)(d.Z,{sx:v.SV,children:[(0,C.jsx)(g.Z,{title:"Edit Sub Cluster",closeHandler:r}),(0,C.jsx)(u.J9,{initialValues:{name:s.name||"",agent:(null===(n=s.agent)||void 0===n?void 0:n.id)||"",description:s.description||"",cluster:s.cluster||""},validationSchema:_,onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n,a){var l,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=a.resetForm,i={name:n.name,agent:n.agent,description:n.description,cluster:n.cluster},console.log(i),y(!0),N((0,j.nn)(s.id,i)).then((function(){y(!1),l(),r()}));case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.values,s=e.errors,t=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,C.jsxs)("form",{onSubmit:i,children:[(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"name",className:"second-text mb-4 mt-6",children:"Sub Cluster Name"}),(0,C.jsx)(h.Z,{sx:v.cE,InputProps:{style:{height:"44px"}},id:"name",name:"name",onChange:a,onBlur:l,value:n.name,className:s.name&&t.name?"input-error":null}),s.name&&t.name&&(0,C.jsx)("span",{className:"error",children:s.name})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"agent",className:"second-text my-4",children:"Agent"}),(0,C.jsx)(p.Z,{id:"agent",name:"agent",value:n.agent,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select an agent"}),options:E.map((function(e){return{value:e.id,name:"".concat(e.first_name," ").concat(e.last_name)}})),iconType:"filled",width:v.cE.width,disableshadow:"true",height:"44px",backgroundColor:"#F3F3F4",iconwidth:"48px",className:s.agent&&t.agent?"input-error":null}),s.agent&&t.agent&&(0,C.jsx)("span",{className:"error",children:s.agent})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"description",className:"second-text mb-4 mt-6",children:"Sub Cluster Description"}),(0,C.jsx)(h.Z,{sx:v.cE,InputProps:{style:{height:"44px"}},id:"description",name:"description",onChange:a,onBlur:l,value:n.description,className:s.description&&t.description?"input-error":null}),s.description&&t.description&&(0,C.jsx)("span",{className:"error",children:s.description})]}),(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("label",{htmlFor:"cluster",className:"second-text mb-4 mt-6",children:"Cluster"}),(0,C.jsx)(p.Z,{name:"cluster",value:n.cluster,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select Cluster"}),options:q.map((function(e){return{value:e.id,name:e.name}})),iconType:"filled",width:v.cE.width,height:"44px",backgroundColor:"#F3F3F4",iconwidth:"48px",disableshadow:"true",className:s.cluster&&t.cluster?"input-error":null}),s.cluster&&t.cluster&&(0,C.jsx)("span",{className:"error",children:s.cluster})]}),(0,C.jsx)(x.Z,{children:(0,C.jsxs)("div",{className:"buttons mt-8",children:[(0,C.jsx)("div",{className:"",children:(0,C.jsx)(b.Z,{value:"Cancel",onClick:r,sx:{fontSize:"14px",color:"#A9A9A9",backgroundColor:"white",borderRadius:"5px"}})}),(0,C.jsx)("div",{className:"mx-6",children:(0,C.jsx)(b.Z,{type:"submit",disabled:k,value:k?"Updating...":"Submit",sx:{fontSize:"14px",borderRadius:"5px"}})})]})})]})}})]})},y=function(e){var n=e.closeHandler,r=e.data;return(0,C.jsxs)(d.Z,{sx:(0,s.Z)((0,s.Z)({},v.SV),{},{minWidth:"400px"}),children:[(0,C.jsx)(g.Z,{title:(null===r||void 0===r?void 0:r.farm_id)||"View Map",closeHandler:n}),(0,C.jsx)("div",{children:"No farm points"})]})},_=function(e){var n=e.closeHandler,r=e.selections,s=(0,c.I0)(),h=(0,i.useState)(!1),Z=(0,l.Z)(h,2),N=Z[0],w=Z[1],F=o.Ry({sub_cluster:f.t.blank().required("Sub-cluster is required")}),k=(0,c.v9)((function(e){var n,r;return(null===(n=e.FarmMangementReducer)||void 0===n||null===(r=n.subClusters)||void 0===r?void 0:r.data)||[]}));return(0,i.useEffect)((function(){s((0,j.aY)({page:1}))}),[s]),(0,C.jsxs)(d.Z,{sx:v.SV,children:[(0,C.jsx)(g.Z,{title:"Bulk Assign",closeHandler:n}),(0,C.jsx)(u.J9,{initialValues:{sub_cluster:""},validationSchema:F,onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,l){var i,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=l.resetForm,c={sub_cluster:a.sub_cluster,farms:r.map((function(e){return e.id}))},w(!0),s((0,j.p_)(c)).then((function(){w(!1),i(),n()}));case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.values,s=e.errors,t=e.touched,a=e.handleChange,l=e.handleBlur,i=e.handleSubmit;return(0,C.jsxs)("form",{onSubmit:i,children:[(0,C.jsxs)(m.Z,{direction:"column",children:[(0,C.jsx)("span",{className:"second-text my-3",style:{marginLeft:"8px",marginRight:"8px"},children:"Selected Farms: ".concat(r.length)}),(0,C.jsx)(m.Z,{direction:"row",flexWrap:"wrap",sx:{mx:1,mb:2,width:"100%",maxWidth:"400px"},children:r.map((function(e){return(0,C.jsx)(S.Z,{label:e.farm_id,color:"primary",size:"small",sx:{mr:1,mb:1,"& .MuiChip-label":{color:"white"}}})}))}),(0,C.jsxs)(m.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,C.jsxs)("label",{htmlFor:"sub_cluster",className:"second-text my-3",children:["Sub Cluster ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(p.Z,{name:"sub_cluster",id:"sub_cluster",value:n.sub_cluster,onChange:a,onBlur:l,noneLabel:(0,C.jsx)("em",{children:"Select Sub-cluster"}),iconType:"filled",width:{md:"400px",xs:"100%"},height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:k.map((function(e){return{value:e.id,name:e.name}})),className:s.sub_cluster&&t.sub_cluster?"input-error":null}),s.sub_cluster&&t.sub_cluster&&(0,C.jsx)("span",{className:"error",children:s.sub_cluster})]})]}),(0,C.jsx)(x.Z,{children:(0,C.jsx)("div",{className:"buttons mt-8",children:(0,C.jsx)("div",{className:"",children:(0,C.jsx)(b.Z,{type:"submit",disabled:N,value:N?"Assigning...":"Submit"})})})})]})}})]})},A=function(e){var n=e.closeHandler,r=e.farm,s=(0,c.I0)(),h=(0,i.useState)(!1),Z=(0,l.Z)(h,2),S=Z[0],N=Z[1],w=o.Ry({sub_cluster:f.t.blank().required("Sub-cluster is required")}),F=(0,c.v9)((function(e){var n,r;return(null===(n=e.FarmMangementReducer)||void 0===n||null===(r=n.subClusters)||void 0===r?void 0:r.data)||[]}));return(0,i.useEffect)((function(){s((0,j.aY)({page:1}))}),[s]),(0,C.jsxs)(d.Z,{sx:v.SV,children:[(0,C.jsx)(g.Z,{title:"Assign Farm",closeHandler:n}),(0,C.jsx)(u.J9,{initialValues:{sub_cluster:""},validationSchema:w,onSubmit:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a,l){var i,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=l.resetForm,c={sub_cluster:a.sub_cluster,farms:[r.id]},N(!0),s((0,j.p_)(c)).then((function(){N(!1),i(),n()}));case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.values,r=e.errors,s=e.touched,t=e.handleChange,a=e.handleBlur,l=e.handleSubmit;return(0,C.jsxs)("form",{onSubmit:l,children:[(0,C.jsx)(m.Z,{direction:"column",children:(0,C.jsxs)(m.Z,{direction:"column",sx:{mx:1,width:"100%"},children:[(0,C.jsxs)("label",{htmlFor:"sub_cluster",className:"second-text my-3",children:["Sub Cluster ",(0,C.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,C.jsx)(p.Z,{name:"sub_cluster",id:"sub_cluster",value:n.sub_cluster,onChange:t,onBlur:a,noneLabel:(0,C.jsx)("em",{children:"Select Sub-cluster"}),iconType:"filled",width:{md:"400px",xs:"100%"},height:"44px",sx:{backgroundColor:"grey"},backgroundColor:"#F3F3F4",disableshadow:"true",options:F.map((function(e){return{value:e.id,name:e.name}})),className:r.sub_cluster&&s.sub_cluster?"input-error":null}),r.sub_cluster&&s.sub_cluster&&(0,C.jsx)("span",{className:"error",children:r.sub_cluster})]})}),(0,C.jsx)(x.Z,{children:(0,C.jsx)("div",{className:"buttons mt-8",children:(0,C.jsx)("div",{className:"",children:(0,C.jsx)(b.Z,{type:"submit",disabled:S,value:S?"Assigning...":"Submit"})})})})]})}})]})}}}]);
//# sourceMappingURL=5497.46f0a53a.chunk.js.map