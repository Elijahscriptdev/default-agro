"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[2850],{1303:function(e,n,t){t.d(n,{SV:function(){return r},cE:function(){return i}});var i={borderRadius:"5px",backgroundColor:"#F3F3F4",width:{md:"477.61px",xs:"100%"},"& fieldset":{border:"none"}},r={minWidth:{xs:"320px",md:"initial"}}},7068:function(e,n,t){t(2791);var i=t(4373),r=t(184);n.Z=function(e){var n=e.nextHandler,t=e.prevHandler,s=e.limitHandler,o=e.page,l=e.totalRecords,a=void 0===l?0:l,c=e.limit,d=void 0===c?1:c,u=e.showLimit,x=void 0===u||u,p=e.hideOnMobile,h=void 0!==p&&p,f=Math.ceil(a/d);return(0,r.jsxs)("div",{className:"flex justify-end table-controls ".concat(h?"hide-on-mobile":""," "),children:[x&&"false"!==x&&!1!==x?(0,r.jsxs)("div",{className:"filter-input mr-5",children:[(0,r.jsx)("label",{children:"Rows per page: "}),(0,r.jsxs)("select",{onChange:s,children:[(0,r.jsx)("option",{value:"15",children:"15"}),(0,r.jsx)("option",{value:"25",children:"25"}),(0,r.jsx)("option",{value:"50",children:"50"}),(0,r.jsx)("option",{value:"100",children:"100"})]})]}):null,(0,r.jsxs)("div",{className:"flex text-green-500",children:[(0,r.jsxs)("p",{className:"px-4",children:["Viewing ",(o-1)*d+1," -"," ",d*o>a?a:d*o," of"," ",a]}),(0,r.jsx)("button",{disabled:o<=1,onClick:t,children:(0,r.jsx)(i.u1R,{})}),(0,r.jsx)("button",{disabled:o>=f,onClick:n,children:(0,r.jsx)(i.hjJ,{})})]})]})}},4496:function(e,n,t){t(2791);var i=t(184);n.Z=function(e){var n=e.value,t=e.type,r={boxSizing:"border-box",width:"auto",height:"26px",padding:"8px",borderRadius:"13px",borderWidth:"0.6px",display:"flex",justifyContent:"center",alignItems:"center"},s={fontSize:"12px",fontWeight:600,display:"block"};switch(void 0===t?"pending":t){case"success":r.backgroundColor="#F6FFED",r.borderColor="#B7EB8F",s.color="#52C41A";break;case"pending":r.backgroundColor="#FFF7E6",r.borderColor="#FA8C16",s.color="#FA8C16";break;default:r.backgroundColor="#FFF1F0",r.borderColor="#F5222D",s.color="#F5222D"}return(0,i.jsx)("div",{style:r,children:(0,i.jsx)("span",{style:s,children:n})})}},2850:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var i=t(1413),r=t(4165),s=t(5861),o=t(885),l=t(2791),a=t(890),c=t(9373),d=t(3168),u=t(7068),x=t(5865),p=t(4496),h=t(9434),f=t(38),v=(0,t(3814).Z)(),g=t(3767),j=t(5524),m=t(2214),b=t(3287),y=t(2426),Z=t.n(y),w=t(6871),C=t(1657),S=t(5262),k=t(184),D=function(){var e,n=(0,w.s0)(),t=(0,h.I0)(),y=(0,l.useState)(1),D=(0,o.Z)(y,2),F=D[0],H=D[1],R=(0,l.useState)(10),N=(0,o.Z)(R,2),A=N[0],z=N[1],W=(0,l.useState)(0),M=(0,o.Z)(W,2),_=M[0],P=M[1],B=(0,l.useState)(null),I=(0,o.Z)(B,2),E=I[0],T=I[1],L=(0,l.useState)(!1),V=(0,o.Z)(L,2),Y=V[0],K=V[1],J=(0,l.useState)(!0),q=(0,o.Z)(J,2),O=q[0],G=(q[1],(0,l.useState)(!1)),Q=(0,o.Z)(G,2),U=Q[0],X=(Q[1],(0,l.useState)([])),$=(0,o.Z)(X,2),ee=$[0],ne=$[1],te=(0,l.useState)(!1),ie=(0,o.Z)(te,2),re=ie[0],se=ie[1],oe=(0,h.v9)((function(e){return e.AuthReducer.userProfile})),le=oe&&(null===oe||void 0===oe||null===(e=oe.tenant)||void 0===e?void 0:e.wallet_balance),ae=function(){K(!1)},ce=((0,l.useCallback)((function(e){return function(n){switch(e){case"pending-payments":T((0,k.jsx)(b.hK,{closeHandler:ae}));break;case"collection-settings":T((0,k.jsx)(b.AH,{closeHandler:ae}));break;default:T(null)}K(!0)}}),[]),(0,l.useCallback)(function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,i,s,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se(!0),t={headers:{"tenant-id":n}},e.prev=2,e.next=5,f.Z.get("/payment/loan-list?page=".concat(F,"&limit=").concat(A),t);case 5:(i=e.sent).result?(ne(null===i||void 0===i||null===(s=i.result[0])||void 0===s?void 0:s.data),z((null===i||void 0===i||null===(o=i.result[0])||void 0===o?void 0:o.per_page)||15),P((null===i||void 0===i||null===(l=i.result[0])||void 0===l?void 0:l.total)||0),se(!1)):(0,C.notify)("Failed to get disbursements",{type:"error"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),se(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),[A,F]));(0,l.useEffect)((function(){t((0,S.et)())}),[t]),(0,l.useEffect)((function(){null!==oe&&void 0!==oe&&oe.tenant_id?(console.log("getting loan list"),ce(null===oe||void 0===oe?void 0:oe.tenant_id)):(0,C.notify)("Tenant ID missing",{type:"error"})}),[null===oe||void 0===oe?void 0:oe.tenant_id,ce]);var de=(0,l.useMemo)((function(){return[{Header:"Name",Cell:function(e){e.value;var n,t,i=e.row.original;return(0,k.jsx)("span",{children:((null===i||void 0===i||null===(n=i.farmer)||void 0===n?void 0:n.first_name)||"")+" "+((null===i||void 0===i||null===(t=i.farmer)||void 0===t?void 0:t.last_name)||"")})}},{Header:"Type",accessor:"type"},{Header:"Amount",accessor:"amount"},{Header:"Reference",accessor:"ref_code"},{Header:"Status",Cell:function(e){e.value;var n=e.row.original,t=function(e){switch(!0){case"successful"===e.status:return{value:e.status,type:"success"};case"failed"===e.status:return{value:e.status,type:"error"};case"pending"===e.status:return{value:e.status,type:"pending"};default:return null}}(n);return t?(0,k.jsx)(p.Z,(0,i.Z)({},t)):(0,k.jsx)("span",{children:n.status})}},{Header:"Date",Cell:function(e){e.value;var n=e.row.original;return(0,k.jsx)("span",{children:Z()(n.created_at).format("MMM, DD YYYY")})}}]}),[]),ue=(0,l.useMemo)((function(){return ee}),[ee]);return(0,k.jsxs)("div",{children:[(0,k.jsx)("nav",{id:"quick-nav",children:(0,k.jsx)(x.Z,{breadcrumbs:[(0,k.jsx)(a.Z,{color:"inherit",children:"Payments"},"1"),(0,k.jsx)(a.Z,{color:"primary.main",children:"Disbursment"},"2")]})}),(0,k.jsx)(v,{children:(0,k.jsxs)(g.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{flexWrap:{xs:"wrap",md:"no-wrap"}},children:[(0,k.jsxs)("div",{style:{width:"350px",height:"130px",backgroundColor:"#009688",borderRadius:"5px",marginTop:"22px",marginBottom:"28px"},children:[(0,k.jsx)("div",{style:{paddingTop:24,paddingBottom:8,paddingLeft:29},children:(0,k.jsx)("span",{style:{fontSize:"18px",fontWeight:700,color:"white"},children:"Available Balance"})}),(0,k.jsx)("div",{style:{paddingBottom:40,paddingLeft:29},children:(0,k.jsxs)("span",{style:{fontSize:"24px",fontWeight:800,color:"white"},children:["N ",(le||0).toFixed(2)]})})]}),(0,k.jsxs)(g.Z,{direction:"row",spacing:2,sx:{my:2},children:[(0,k.jsx)(j.Z,{value:"Send Money",sx:{marginRight:"21px"},onClick:function(){return n("/payment/send-money")}}),(0,k.jsx)(j.Z,{value:"Download History"})]})]})}),(0,k.jsxs)("h2",{className:"with-spinner",style:{fontSize:"20px"},children:[(0,k.jsx)("span",{children:"All Disbursments"}),re?(0,k.jsx)(d.Z,{size:20,color:"primary"}):""]}),(0,k.jsx)(c.Z,{data:ue,columns:de,isLoading:re}),(0,k.jsx)(u.Z,{nextHandler:function(){H(F+1)},prevHandler:function(){F>1&&H(F-1)},limitHandler:function(e){return function(e){z(parseInt(e.target.value))}(e)},page:F,limit:A,totalRecords:_}),(0,k.jsx)(m.Z,{open:Y,closeHandler:ae,individual:O,bulk:U,children:E})]})}},3287:function(e,n,t){t.d(n,{AH:function(){return x},hK:function(){return u}});t(2791);var i=t(5705),r=t(254),s=t(8870),o=t(7123),l=t(5524),a=t(203),c=t(1303),d=t(184),u=function(e){var n=e.closeHandler;return(0,d.jsxs)(s.Z,{sx:c.SV,children:[(0,d.jsx)(a.Z,{title:"Pending Payments",closeHandler:n}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{style:{marginBottom:"26px",marginTop:"20px"},children:[(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:400,color:"#6C757D",marginRight:"49px"},children:"Name:"}),(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:700,color:"#6C757D"},children:"Alatiwa Ajakaye"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:400,color:"#6C757D",marginRight:"33.79px"},children:"Amount:"}),(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:700,color:"#6C757D"},children:"N10,000.00"})]})]}),(0,d.jsx)(o.Z,{sx:{p:0},children:(0,d.jsxs)("div",{className:"buttons mt-8",style:{width:"100%"},children:[(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{value:"cancel",sx:{backgroundColor:"white",color:"#6C757D"}})}),(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{value:"Process Payments",sx:{color:"white"}})})]})})]})},x=function(e){var n=e.closeHandler;return(0,d.jsxs)(s.Z,{sx:c.SV,children:[(0,d.jsx)(a.Z,{title:"Collection Settings",closeHandler:n}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{style:{marginBottom:"26px",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:400,color:"#6C757D",marginRight:"40px"},children:"New price per Kg:"}),(0,d.jsx)("div",{children:(0,d.jsx)(i.J9,{initialValues:{newPrice:""},children:function(){return(0,d.jsx)(i.l0,{children:(0,d.jsx)(i.gN,{as:r.Z,name:"newPrice",sx:{width:"206px",backgroundColor:"#F3F3F4",borderRadius:"5px"},inputProps:{style:{height:"14px"}}})})}})})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:400,color:"#6C757D",marginRight:"70px"},children:"Current Rate:"}),(0,d.jsx)("span",{style:{fontSize:"16px",fontWeight:700,color:"#6C757D"},children:"N10,000.00"})]})]}),(0,d.jsx)(o.Z,{sx:{p:0},children:(0,d.jsxs)("div",{className:"buttons mt-8",style:{width:"100%"},children:[(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{value:"cancel",sx:{backgroundColor:"white",color:"#6C757D"}})}),(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{value:"Submit",sx:{color:"white"}})})]})})]})}},7123:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(3366),r=t(7462),s=t(2791),o=t(8182),l=t(4419),a=t(7630),c=t(1046),d=t(1217);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,t(5878).Z)("MuiDialogActions",["root","spacing"]);var x=t(184),p=["className","disableSpacing"],h=(0,a.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=s.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiDialogActions"}),s=t.className,a=t.disableSpacing,d=void 0!==a&&a,f=(0,i.Z)(t,p),v=(0,r.Z)({},t,{disableSpacing:d}),g=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(t,u,n)}(v);return(0,x.jsx)(h,(0,r.Z)({className:(0,o.Z)(g.root,s),ownerState:v,ref:n},f))}))}}]);
//# sourceMappingURL=2850.162b24c8.chunk.js.map