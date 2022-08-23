"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[9438],{5013:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(1413),a=r(885),s=r(5987),o=r(2791),l=r(7865),i=r(8096),c=r(9321),u=r(184),d=["onChange","noneLabel","options","iconType","sx","backgroundColor"];function m(e){var n,r=e.onChange,m=void 0===r?function(e){}:r,p=e.noneLabel,h=e.options,x=void 0===h?[]:h,f=e.iconType,v=e.sx,b=void 0===v?{}:v,g=(e.backgroundColor,(0,s.Z)(e,d)),Z=(0,o.useState)(""),y=(0,a.Z)(Z,2),j=y[0],w=y[1];if(!0===(!!f&&"filled"===f))n={"& .MuiSelect-icon":{backgroundColor:"primary.main",fill:"white",height:"100%",width:e.iconwidth||"48px",top:0,right:0}};else n={};return(0,u.jsx)(i.Z,{sx:{borderRadius:"5px",minWidth:120,width:e.width,height:e.height,backgroundColor:e.backgroundColor},children:(0,u.jsxs)(c.Z,(0,t.Z)((0,t.Z)({value:j,onChange:function(e){w(e.target.value),m(e)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},sx:(0,t.Z)((0,t.Z)({overflow:"hidden",boxShadow:e.disableshadow?"none":"0px 5px 20px rgba(108, 117, 125, 0.15)","& *":{border:"none"}},n),b)},g),{},{children:[(0,u.jsx)(l.Z,{value:"",children:p||(0,u.jsx)("em",{children:"None"})}),x.map((function(e,n){return(0,u.jsx)(l.Z,{value:e.value,selected:e.selected,children:e.name||""},n)}))]}))})}},4496:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.value,r=e.type,a={boxSizing:"border-box",width:"auto",height:"26px",padding:"8px",borderRadius:"13px",borderWidth:"0.6px",display:"flex",justifyContent:"center",alignItems:"center"},s={fontSize:"12px",fontWeight:600,display:"block"};switch(void 0===r?"pending":r){case"success":a.backgroundColor="#F6FFED",a.borderColor="#B7EB8F",s.color="#52C41A";break;case"pending":a.backgroundColor="#FFF7E6",a.borderColor="#FA8C16",s.color="#FA8C16";break;default:a.backgroundColor="#FFF1F0",a.borderColor="#F5222D",s.color="#F5222D"}return(0,t.jsx)("div",{style:a,children:(0,t.jsx)("span",{style:s,children:n})})}},9438:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t=r(4165),a=r(5861),s=r(885),o=r(2791),l=r(9434),i=r(6871),c=r(5705),u=r(132),d=r(3767),m=r(890),p=r(533),h=r(254),x=r(3400),f=r(7692),v=r(5013),b=r(4496),g=r(1584),Z=r(5865),y=r(5524),j=r(9373),w=r(4034),_=r(38),k=r(1657),F=r(1413),N=r(5987),C=r(8096),P=r(1419),I=r(765),S=r(5523),B=r(7133),G=r(184),L=["id","name","formLabel","formLabelProps","onChange","options","sx"];function M(e){var n=e.id,r=void 0===n?"":n,t=e.name,a=void 0===t?null:t,s=e.formLabel,o=void 0===s?"":s,l=e.formLabelProps,i=void 0===l?{}:l,c=e.onChange,u=void 0===c?function(e){}:c,d=e.options,m=void 0===d?[]:d,p=(e.sx,(0,N.Z)(e,L));return(0,G.jsxs)(C.Z,{children:[(0,G.jsx)(B.Z,(0,F.Z)((0,F.Z)({id:r},i),{},{children:o})),(0,G.jsx)(I.Z,(0,F.Z)((0,F.Z)({"aria-labelledby":r,name:a,onChange:u},p),{},{children:m.map((function(e,n){return(0,G.jsx)(S.Z,(0,F.Z)({value:e.value,control:(0,G.jsx)(P.Z,{}),label:e.name},e.props||{}),n)}))}))]})}var A=r(5750),q=r(4298),V=r(1350);var D=function(){var e=(0,l.I0)(),n=(0,i.s0)(),r=(0,i.UO)(),F=(0,o.useState)({}),N=(0,s.Z)(F,2),C=N[0],P=N[1],I=(0,o.useState)(!1),S=(0,s.Z)(I,2),B=S[0],L=S[1],D=(0,o.useState)([]),O=(0,s.Z)(D,2),U=O[0],z=O[1],E={backgroundColor:"#FFF",width:"100%","& fieldset":{border:"0.5px solid rgba(108, 117, 125, 0.5)"}},R=(0,l.v9)((function(e){return e.AppReducer.states})),W=(0,l.v9)((function(e){var n;return(null===(n=e.AppReducer)||void 0===n?void 0:n.localGovt)||[]})),T=function(n){return function(r){r.target.value?e((0,q.zW)(r.target.value)):e({type:V.UZ,payload:{localGovt:[]}}),n(r)}},H=(0,o.useMemo)((function(){return[{Header:"Farm ID",accessor:"farm_id"},{Header:"Crop",accessor:"crop_name"},{Header:"Edit",Cell:function(e){e.value;var n=e.row.original;return(0,G.jsx)(x.Z,{href:"/user-management/edit-farmer/".concat(n.id),children:(0,G.jsx)(f.vpV,{})})}}]}),[]),J=(0,o.useMemo)((function(){return[{farm_id:"FM-101210",crop_name:"OPV-MAIZE"}]}),[]),Y=(0,o.useCallback)((0,a.Z)((0,t.Z)().mark((function e(){var n,r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.Z.get("/all/banks");case 3:a=e.sent,z((null===a||void 0===a||null===(n=a.result)||void 0===n||null===(r=n.banks)||void 0===r?void 0:r.data)||[]),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);(0,o.useEffect)((function(){!function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,A.wM)(n);case 3:null!==(r=e.sent)&&void 0!==r&&r.data?P(r.data):(0,k.notify)("Failed to get farmer",{type:"error"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,k.notify)(e.t0,{type:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()(r.farmerId),e((0,q.Pz)({})),Y()}),[e,Y,r.farmerId]);var X=u.Ry({first_name:w.t.name("First name").required("First name is required"),last_name:w.t.name("Last name").required("Last name is required"),middle_name:w.t.name("Middle name"),mobile:w.t.mobile("Phone number"),dob:w.t.date("Date of birth").required("Date of birth cannot be empty"),bvn:w.t.bvn("BVN"),account_no:w.t.blank().when("bank",{is:function(e){return!e},then:w.t.blank().matches(/[0-9]/g,"Invalid account number").min(10,"Account number must atleast 10 digits"),otherwise:w.t.blank().matches(/[0-9]/g,"Invalid account number").min(10,"Account number must atleast 10 digits").required("Account number is required")}),home_state:w.t.blank().required("State is required"),home_lga:w.t.blank().required("LGA is required")});return(0,G.jsx)(o.Fragment,{children:(0,G.jsxs)("section",{children:[(0,G.jsx)("nav",{id:"quick-nav",children:(0,G.jsx)(Z.Z,{breadcrumbs:[(0,G.jsx)(m.Z,{color:"inherit",children:"User Management"},"1"),(0,G.jsx)(p.Z,{href:"/user-management/farmers",color:"inherit",children:"Manage Farmers"},"2"),(0,G.jsx)(m.Z,{color:"primary.main",children:"Edit Farmer"},"3")]})}),(0,G.jsxs)(d.Z,{direction:"row",px:2,py:3,alignItems:"flex-start",sx:{flexWrap:{xs:"wrap",sm:"no-wrap"},backgroundColor:"#FFF",boxShadow:"0px 5px 20px rgba(108, 117, 125, 0.15)",borderRadius:"5px"},children:[(0,G.jsxs)(d.Z,{direction:"column",alignItems:"center",spacing:2,sx:{flexGrow:{xs:1,md:0},mx:"auto",minWidth:"300px"},children:[(0,G.jsx)(g.Z,{size:"140px",fontSize:"64px",firstname:null===C||void 0===C?void 0:C.first_name,lastname:null===C||void 0===C?void 0:C.last_name,avatarUrl:null!==C&&void 0!==C&&C.image?null===C||void 0===C?void 0:C.image:"",disableOutline:"true"}),(0,G.jsx)(b.Z,{value:null!==C&&void 0!==C&&C.bvn_validate?"BVN Verified":"BVN Not Verified",type:null!==C&&void 0!==C&&C.bvn_validate?"success":"error"}),(0,G.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[(0,G.jsx)("span",{style:{fontSize:"15px",marginRight:"10px"},children:"Input Confirmed:"}),(0,G.jsx)(b.Z,{value:null!==C&&void 0!==C&&C.input_confirmed?"Yes":"No",type:null!==C&&void 0!==C&&C.input_confirmed?"success":"error"})]}),(0,G.jsxs)(d.Z,{direction:"column",alignItems:"center",children:[(0,G.jsx)("span",{style:{fontWeight:700},children:"Farms"}),(0,G.jsx)(j.Z,{columns:H,data:J,tableColor:"white",sx:{boxShadow:"4px 5px 20px rgba(108, 117, 125, 0.15)"}})]})]}),(0,G.jsx)(d.Z,{sx:{ml:{xs:0,md:4},flexGrow:1},children:(0,G.jsx)(c.J9,{enableReinitialize:!0,initialValues:{first_name:(null===C||void 0===C?void 0:C.first_name)||"",last_name:(null===C||void 0===C?void 0:C.last_name)||"",middle_name:(null===C||void 0===C?void 0:C.middle_name)||"",email:(null===C||void 0===C?void 0:C.email)||"",gender:(null===C||void 0===C?void 0:C.gender)||"",mobile:(null===C||void 0===C?void 0:C.mobile)||"",dob:(null===C||void 0===C?void 0:C.dob)||"",season:"",status:(null===C||void 0===C?void 0:C.status)||0,lead:(null===C||void 0===C?void 0:C.lead)||!1,programme:(null===C||void 0===C?void 0:C.programme)||"",bank:(null===C||void 0===C?void 0:C.bank)||"",account_no:(null===C||void 0===C?void 0:C.account_no)||"",bvn:(null===C||void 0===C?void 0:C.bvn)||"",home_state:(null===C||void 0===C?void 0:C.home_state)||"",home_address:null===C||void 0===C?void 0:C.home_address,home_lga:(null===C||void 0===C?void 0:C.home_lga)||""},validationSchema:X,onSubmit:function(){var s=(0,a.Z)((0,t.Z)().mark((function a(s,o){var l,i;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=o.resetForm,i={first_name:s.first_name,last_name:s.last_name,email:s.email,mobile:s.mobile,gender:s.gender,home_state:s.home_state,home_address:s.home_address,home_lga:s.home_lga,dob:s.dob,season:s.season,status:s.status,lead:s.lead,programme:s.programme,bank:s.bank,account_no:s.account_no,bvn:s.bvn},console.log(i),L(!0),e((0,A.fP)(r.farmerId,i)).then((function(){L(!1),l(),window.setTimeout((function(){return n("/user-management/farmers")}),1e3)}));case 6:case"end":return t.stop()}}),a)})));return function(e,n){return s.apply(this,arguments)}}(),children:function(e){var n=e.values,r=e.errors,t=e.touched,a=e.handleChange,s=e.handleBlur,o=e.handleSubmit;return(0,G.jsxs)("form",{onSubmit:o,className:"flex flex-col",style:{flexGrow:1},children:[(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsxs)("label",{htmlFor:"first_name",className:"second-text my-3",children:["First Name ",(0,G.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,G.jsx)(h.Z,{id:"first_name",sx:E,name:"first_name",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.first_name,className:r.first_name&&t.first_name?"input-error":null}),r.first_name&&t.first_name&&(0,G.jsx)("span",{className:"error",children:r.first_name})]}),(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsxs)("label",{htmlFor:"last_name",className:"second-text my-3",children:["Last Name ",(0,G.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,G.jsx)(h.Z,{sx:E,id:"last_name",name:"last_name",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.last_name,className:r.last_name&&t.last_name?"input-error":null}),r.last_name&&t.last_name&&(0,G.jsx)("span",{className:"error",children:r.last_name})]})]}),(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"middle_name",className:"second-text my-3",children:"Middle Name"}),(0,G.jsx)(h.Z,{id:"middle_name",sx:E,name:"middle_name",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.middle_name,className:r.middle_name&&t.middle_name?"input-error":null}),r.middle_name&&t.middle_name&&(0,G.jsx)("span",{className:"error",children:r.middle_name})]}),(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"mobile",className:"second-text my-3",children:"Phone Number"}),(0,G.jsx)(h.Z,{sx:E,id:"mobile",name:"mobile",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.mobile,className:r.mobile&&t.mobile?"input-error":null}),r.mobile&&t.mobile&&(0,G.jsx)("span",{className:"error",children:r.mobile})]})]}),(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsxs)("label",{htmlFor:"dob",className:"second-text my-3",children:["Date Of Birth ",(0,G.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,G.jsx)(h.Z,{id:"dob",sx:E,name:"dob",type:"date",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.dob,className:r.dob&&t.dob?"input-error":null}),r.dob&&t.dob&&(0,G.jsx)("span",{className:"error",children:r.dob})]}),(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"gender",className:"second-text my-3",children:"Gender"}),(0,G.jsx)(v.Z,{id:"gender",name:"gender",noneLabel:(0,G.jsx)("em",{children:"Select Gender"}),options:[{name:"Male",value:"Male"},{name:"Female",value:"Female"}],value:n.gender,iconType:"filled",width:"100%",height:"44px",sx:E,backgroundColor:"#F3F3F4",disableshadow:"true",onChange:a,onBlur:s}),r.gender&&t.gender&&(0,G.jsx)("span",{className:"error",children:r.gender})]})]}),(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"season",className:"second-text my-3",children:"Season"}),(0,G.jsx)(h.Z,{id:"season",sx:E,name:"season",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.season,className:r.season&&t.season?"input-error":null}),r.season&&t.season&&(0,G.jsx)("span",{className:"error",children:r.season})]}),(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"programme",className:"second-text my-3",children:"Programme"}),(0,G.jsx)(h.Z,{id:"programme",sx:E,name:"programme",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.programme,className:r.programme&&t.programme?"input-error":null}),r.programme&&t.programme&&(0,G.jsx)("span",{className:"error",children:r.programme})]})]}),(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"bank",className:"second-text my-3",children:"Bank"}),(0,G.jsx)(v.Z,{name:"bank",id:"bank",value:n.bank,onChange:a,noneLabel:(0,G.jsx)("em",{children:"Select Bank"}),iconType:"filled",width:"100%",height:"44px",sx:E,backgroundColor:"#F3F3F4",disableshadow:"true",options:U.map((function(e){return{name:e.name,value:e.name}}))}),r.bank&&t.bank&&(0,G.jsx)("span",{className:"error",children:r.bank})]}),(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"account_no",className:"second-text my-3",children:"Account Number"}),(0,G.jsx)(h.Z,{id:"account_no",sx:E,name:"account_no",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.account_no,className:r.account_no&&t.account_no?"input-error":null}),r.account_no&&t.account_no&&(0,G.jsx)("span",{className:"error",children:r.account_no})]})]}),(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"bvn",className:"second-text my-3",children:"BVN"}),(0,G.jsx)(h.Z,{id:"bvn",sx:E,name:"bvn",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.bvn,className:r.bvn&&t.bvn?"input-error":null}),r.bvn&&t.bvn&&(0,G.jsx)("span",{className:"error",children:r.bvn})]}),(0,G.jsx)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:(0,G.jsx)(M,{row:!0,name:"status",id:"status",formLabel:"Status",formLabelProps:{htmlFor:"status",className:"second-text my-3"},options:[{name:"Active",value:1,props:{sx:{}}},{name:"Inactive",value:0,props:{sx:{}}}],onChange:a,onBlur:s,value:n.status})})]}),(0,G.jsx)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:(0,G.jsx)(M,{row:!0,name:"lead",id:"lead",formLabel:"Lead",formLabelProps:{htmlFor:"lead",className:"second-text my-3"},options:[{name:"Yes",value:!0,props:{sx:{}}},{name:"No",value:!1,props:{sx:{}}}],onChange:a,onBlur:s,value:n.lead})}),(0,G.jsx)("h2",{style:{fontSize:"20px",fontWeight:700,margin:"2.5rem 8px 5px"},children:"Other Information"}),(0,G.jsx)(d.Z,{direction:"row",justifyContent:"space-between",children:(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"loan",className:"second-text my-3",children:"Loan Amount"}),(0,G.jsx)(h.Z,{id:"loan",sx:E,name:"loan",type:"number",InputProps:{style:{height:"44px"}},onChange:a,onBlur:s,value:n.loan,className:r.loan&&t.loan?"input-error":null}),r.loan&&t.loan&&(0,G.jsx)("span",{className:"error",children:r.loan})]})}),(0,G.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",children:[(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsxs)("label",{htmlFor:"home_state",className:"second-text my-3",children:["State ",(0,G.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,G.jsx)(v.Z,{id:"home_state",name:"home_state",noneLabel:(0,G.jsx)("em",{children:"Select State"}),options:Object.values(R).map((function(e){return{name:e.name,value:e.state_id}})),iconType:"filled",width:"100%",height:"44px",sx:E,backgroundColor:"#F3F3F4",disableshadow:"true",onChange:T(a),onBlur:s,className:r.home_state&&t.home_state?"input-error":null}),r.home_state&&t.home_state&&(0,G.jsx)("span",{className:"error",children:r.home_state})]}),(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsxs)("label",{htmlFor:"home_lga",className:"second-text my-3",children:["L.G.A ",(0,G.jsx)("small",{className:"text-red-500",children:"*"})]}),(0,G.jsx)(v.Z,{id:"home_lga",name:"home_lga",noneLabel:(0,G.jsx)("em",{children:"Select LGA"}),options:W.map((function(e){return{name:e.local_name,value:e.local_id}})),iconType:"filled",width:"100%",height:"44px",sx:E,backgroundColor:"#F3F3F4",disableshadow:"true",onChange:a,onBlur:s,className:r.home_lga&&t.home_lga?"input-error":null}),r.home_lga&&t.home_lga&&(0,G.jsx)("span",{className:"error",children:r.home_lga})]})]}),(0,G.jsx)(d.Z,{direction:"row",justifyContent:"space-between",children:(0,G.jsxs)(d.Z,{direction:"column",flexGrow:1,sx:{mx:1,width:"100%"},children:[(0,G.jsx)("label",{htmlFor:"home_address",className:"second-text my-3",children:"Home Address"}),(0,G.jsx)(h.Z,{id:"home_address",sx:E,name:"home_address",multiline:!0,InputProps:{style:{height:"64px"}},onChange:a,onBlur:s,value:n.home_address,className:r.home_address&&t.home_address?"input-error":null}),r.home_address&&t.home_address&&(0,G.jsx)("span",{className:"error",children:r.home_address})]})}),(0,G.jsx)("div",{className:"buttons mt-8",children:(0,G.jsx)("div",{className:"mx-1.5",children:(0,G.jsx)(y.Z,{type:"submit",value:B?"Updating Farmer...":"Submit",disabled:0===Object.keys(C).length||B})})})]})}})})]})]})})}},5750:function(e,n,r){r.d(n,{NM:function(){return b},qH:function(){return _},cn:function(){return m},PH:function(){return Z},x7:function(){return p},AI:function(){return k},h8:function(){return x},Cm:function(){return y},sg:function(){return j},n9:function(){return f},wM:function(){return v},ZO:function(){return w},Rf:function(){return d},fP:function(){return g},Nq:function(){return h}});var t=r(4165),a=r(5861),s=r(38),o=r(1657),l=r(3528),i=r(4028);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new FormData;return Object.keys(e).length>0&&(console.log({body:e}),Object.keys(e).forEach((function(r){n.append(r,e[r])}))),n}var u=r(4329),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,o,c,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.page||1,o=e.limit||10,c=(0,i.r)(e),r({type:u.Ny}),e=(0,i.r)(e),n.prev=5,n.next=8,s.Z.get("/viewusers?page=".concat(a,"&limit=").concat(o,"&query=").concat(c));case 8:d=n.sent,r({type:u.Oz,payload:d}),n.next=18;break;case 12:return n.prev=12,n.t0=n.catch(5),console.log(n.t0),r({type:u.wX}),(0,l.P)(n.t0,"Failed to fetch users"),n.abrupt("return",n.t0);case 18:case"end":return n.stop()}}),n,null,[[5,12]])})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post("/users",e);case 3:if(null===(a=n.sent)||void 0===a||!a.success||null===a||void 0===a||!a.result){n.next=8;break}return(0,o.notify)("User added successfully",{type:"success"}),r({type:u.qH,payload:a.result}),n.abrupt("return",a);case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),r({type:u.Jh}),(0,l.P)(n.t0,"Failed to add user"),n.abrupt("return",n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=c(e),n.next=4,(0,s.V)("formData").post("/users/bulk-upload",e,{});case 4:null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,o.notify)("Users uploaded successfully",{type:"success"}),r(d({page:1}))),n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),(0,l.P)(n.t0,"Failed to upload users"),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.patch("/users/".concat(e),n);case 3:if(null===(i=r.sent)||void 0===i||!i.success||null===i||void 0===i||!i.result){r.next=7;break}return(0,o.notify)("User Updated successfully",{type:"success"}),r.abrupt("return",i);case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),console.log(r.t0),(0,l.P)(r.t0,"Failed to update user"),r.abrupt("return",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},x=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.delete("/users/".concat(e));case 3:n.sent&&((0,o.notify)("User deleted successfully",{type:"success"}),r(d({page:1}))),n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),(0,l.P)(n.t0,"Failed to delete user"),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:u._l}),e=(0,i.r)(e),n.prev=2,n.next=5,s.Z.get("/farmers".concat(e));case 5:null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result?r({type:u.cj,payload:null===a||void 0===a||null===(o=a.result)||void 0===o?void 0:o.data}):r({type:u.eZ}),n.next=15;break;case 9:return n.prev=9,n.t0=n.catch(2),console.log(n.t0),r({type:u.eZ}),(0,l.P)(n.t0),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/farmers/".concat(n));case 3:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.result);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),b=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post("/farmers",e);case 3:return null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,o.notify)("Farmer added successfully",{type:"success"}),r({type:u.Du,payload:a.result}),r(f({page:1}))),n.abrupt("return",a);case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),r({type:u.$0}),(0,l.P)(n.t0,"Failed to add farmer"),n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},g=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.patch("/farmers/".concat(e),n);case 3:return null!==(i=r.sent)&&void 0!==i&&i.success&&null!==i&&void 0!==i&&i.result&&(0,o.notify)("Farmer updated successfully",{type:"success"}),r.abrupt("return",i);case 8:return r.prev=8,r.t0=r.catch(0),console.log(r.t0),(0,l.P)(r.t0,"Failed to update farmer"),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},Z=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=c(e),n.next=4,(0,s.V)("formData")({method:"post",url:"/farmers/bulk-upload",data:e});case 4:null!==(a=n.sent)&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,o.notify)("Farmers uploaded successfully",{type:"success"}),r(f({page:1}))),n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),(0,l.P)(n.t0,"Failed to add farmer"),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e,n){return function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){var i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.post("/farmers/downloads/process-farmer-details",e);case 3:null!==(i=r.sent)&&void 0!==i&&i.success&&null!==i&&void 0!==i&&i.result&&((0,o.notify)("Farmers exported successfully",{type:"success"}),n("/user-management/farmers/exports")),r.next=12;break;case 7:return r.prev=7,r.t0=r.catch(0),console.log(r.t0),(0,l.P)(r.t0,"Failed to export farmers"),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},j=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/farmers/downloads");case 3:if(null===(n=e.sent)||void 0===n||!n.success||null===n||void 0===n||!n.result){e.next=6;break}return e.abrupt("return",null===n||void 0===n||null===(r=n.result)||void 0===r?void 0:r.data);case 6:return e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),(0,l.P)(e.t0,"Failed to fetch exports"),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:u.jt}),e=(0,i.r)(e),n.prev=2,n.next=5,s.Z.get("/sourcing-partners".concat(e));case 5:o=n.sent,r({type:u.rE,payload:null===o||void 0===o||null===(a=o.result)||void 0===a?void 0:a.sourcing_partners}),n.next=15;break;case 9:return n.prev=9,n.t0=n.catch(2),console.log(n.t0),r({type:u.ZU}),(0,l.P)(n.t0,"Failed to fetch sourcing agents"),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()},_=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.post("/sourcing-partners",e);case 3:return a=n.sent,console.log(a),null!==a&&void 0!==a&&a.success&&null!==a&&void 0!==a&&a.result&&((0,o.notify)("Sourcing agent added successfully",{type:"success"}),r({type:u.YJ,payload:a.result})),n.abrupt("return",a);case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),r({type:u.Dv}),(0,l.P)(n.t0,"Failed to add sourcing agent"),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},k=function(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.delete("/sourcing-partners/".concat(e));case 3:n.sent&&((0,o.notify)("Sourcing agent deleted successfully",{type:"success"}),r(w({page:1}))),n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),(0,l.P)(n.t0,"Failed to delete sourcing agent"),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}},4034:function(e,n,r){r.d(n,{t:function(){return a}});var t=r(132),a={name:function(e){return t.Z_().min(3,e?"".concat(e," must be 3 or more characters"):"Must be 3 or more characters")},number:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1e20,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e20;return t.Rx().min(n,e?"".concat(e," must be greater than ").concat(n):"Must be greater than ".concat(n)).max(r,e?"".concat(e," must be less than ").concat(r):"Must be less than ".concat(r))},email:function(e){return t.Z_().email()},password:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24;return t.Z_().min(n,e?"".concat(e," must be ").concat(n," or more characters"):"Must be 8 or more characters").max(r,e?"".concat(e," is too long"):"Too long")},date:function(e){return t.Z_().matches(/(\d{4}(-|\/|\\)\d{1,2}(-|\/|\\)\d{1,2})|(\d{1,2}(-|\/|\\)\d{1,2}(-|\/|\\)\d{4})/gi)},mobile:function(e){return t.Z_().matches(/[0-9)(+]/gi,"Invalid number")},bvn:function(e){return t.Z_().matches(/\d{11}/g,"Invalid BVN").length(11,"BVN must be 11 digits long")},blank:function(){return t.Z_()}}}}]);
//# sourceMappingURL=9438.bcf4f524.chunk.js.map