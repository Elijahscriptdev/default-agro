"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[6806],{6806:function(e,n,r){r.r(n);var t=r(885),a=r(2791),s=r(3767),i=r(8870),o=r(3400),c=r(3466),l=r(890),u=r(6416),d=r(7425),m=r(9373),f=r(7068),x=r(5524),g=r(2214),h=r(5865),p=r(3715),j=r(1682),Z=r(5750),v=r(4298),b=r(9434),w=r(3168),H=r(184);n.default=function(){var e=(0,b.I0)(),n=(0,a.useState)(1),r=(0,t.Z)(n,2),S=r[0],k=r[1],A=(0,a.useState)(10),C=(0,t.Z)(A,2),N=C[0],_=C[1],y=(0,a.useState)(""),M=(0,t.Z)(y,2),I=M[0],P=M[1],z=(0,a.useRef)(null),R=(0,a.useState)(null),F=(0,t.Z)(R,2),L=F[0],W=F[1],q=(0,a.useState)(!1),E=(0,t.Z)(q,2),O=E[0],U=E[1],B=(0,b.v9)((function(e){return e.UserManagementReducer.sourcingAgents})),D=function(e){_(parseInt(e.target.value))},G=function(){S>1&&k(S-1)},J=function(){k(S+1)},K=function(){U(!1)},Q=(0,a.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(r){if("delete-sourcing-agent"===e)W((0,H.jsx)(j.ju,{closeHandler:K,data:n}));else W(null);U(!0)}}),[]),T=(0,a.useMemo)((function(){return[{Header:"First Name",accessor:"first_name"},{Header:"Last Name",accessor:"last_name"},{Header:"Phone Number",accessor:"mobile"},{Header:"Account Number",accessor:"account_no"},{Header:"Bank Name",accessor:"bank"},{Header:"No of Farmers",accessor:"farmers"},{Header:"Delete",Cell:function(e){e.value;var n=e.row.original;return(0,H.jsx)(o.Z,{onClick:Q("delete-sourcing-agent",n),children:(0,H.jsx)(d.qy0,{})})}}]}),[Q]),V=(0,a.useMemo)((function(){return(null===B||void 0===B?void 0:B.data)||[]}),[B]);return(0,a.useEffect)((function(){var n={page:S,per_page:N};I&&I.length>1&&(n.search_by_name=I),e((0,Z.ZO)(n)),e((0,v.Pz)({}))}),[e,S,N,I]),(0,H.jsxs)(a.Fragment,{children:[(0,H.jsxs)("section",{children:[(0,H.jsx)("nav",{id:"quick-nav",children:(0,H.jsx)(h.Z,{breadcrumbs:[(0,H.jsx)(l.Z,{color:"inherit",children:"User Management"},"1"),(0,H.jsx)(l.Z,{color:"primary.main",children:"Manage Sourcing Agents"},"2")]})}),(0,H.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{flexWrap:{xs:"wrap",md:"nowrap"}},children:[(0,H.jsx)(p.Z,{InputProps:{ref:z,startAdornment:(0,H.jsx)(c.Z,{position:"start",children:(0,H.jsx)(u.o,{fontSize:"small"})})},value:I,onChange:function(e){return P(e.target.value)},placeholder:"Search customers",sx:{width:"100%",maxWidth:{sm:"250px"}}}),(0,H.jsx)(s.Z,{direction:"row",spacing:2,sx:{mt:{xs:2,md:0},mb:{xs:2,md:0}},children:(0,H.jsx)(x.Z,{href:"/user-management/add-sourcing-agent",value:"Add New Sourcing Agent",disableElevation:!0})})]}),(0,H.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)("h2",{className:"with-spinner",style:{fontSize:"20px"},children:[(0,H.jsx)("span",{children:"All Sourcing Agents"}),B.loading?(0,H.jsx)(w.Z,{size:20,color:"primary"}):""]}),(0,H.jsx)(f.Z,{showLimit:"false",hideOnMobile:"true",nextHandler:function(){return J()},prevHandler:function(){return G()},limitHandler:function(e){return D(e)},totalRecords:B.total,page:S,limit:N})]}),(0,H.jsxs)(i.Z,{children:[(0,H.jsx)(m.Z,{columns:T,data:V,isLoading:B.loading}),(0,H.jsx)(f.Z,{nextHandler:function(){return J()},prevHandler:function(){return G()},limitHandler:function(e){return D(e)},totalRecords:B.total,page:S,limit:N})]})]}),(0,H.jsx)(g.Z,{open:O,closeHandler:K,PaperProps:{sx:{maxWidth:"unset"}},children:L})]})}}}]);
//# sourceMappingURL=6806.65329076.chunk.js.map