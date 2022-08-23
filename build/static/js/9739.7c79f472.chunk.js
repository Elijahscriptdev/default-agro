"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[9739],{9739:function(e,n,r){r.r(n);var t=r(4165),o=r(5861),a=r(1413),i=r(885),s=r(2791),c=r(6871),u=r(890),l=r(3767),d=r(8870),f=r(3400),m=r(533),p=r(7692),v=r(8820),Z=r(3168),h=r(9373),x=r(7068),b=r(5865),g=r(5497),j=r(2214),y=r(5163),w=r(184),C=r(1657).notify;n.default=function(){var e=(0,c.UO)(),n=(0,c.s0)(),r=(0,s.useState)(1),S=(0,i.Z)(r,2),k=S[0],H=S[1],_=(0,s.useState)(0),D=(0,i.Z)(_,2),F=D[0],V=D[1],z=(0,s.useState)([]),M=(0,i.Z)(z,2),A=M[0],N=M[1],R=(0,s.useState)({}),I=(0,i.Z)(R,2),L=I[0],B=I[1],T=(0,s.useState)(!1),q=(0,i.Z)(T,2),E=q[0],O=q[1],P=(0,s.useState)(null),W=(0,i.Z)(P,2),U=W[0],G=W[1],J=(0,s.useState)(!1),K=(0,i.Z)(J,2),Q=K[0],X=K[1],Y=function(){X(!1)},$=(0,s.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(r){switch(e){case"add-sub-cluster":G((0,w.jsx)(g.j6,{closeHandler:Y}));break;case"edit-sub-cluster":G((0,w.jsx)(g.fd,{closeHandler:Y,data:n}));break;default:G(null)}X(!0)}}),[]),ee=(0,s.useMemo)((function(){return[{Header:"S/N",accessor:"serial"},{Header:"Name",accessor:"name"},{Header:"Description",accessor:"description"},{Header:"Agent",Cell:function(e){e.value;var n,r,t=e.row.original,o="".concat((null===t||void 0===t||null===(n=t.agent)||void 0===n?void 0:n.first_name)||""," ").concat((null===t||void 0===t||null===(r=t.agent)||void 0===r?void 0:r.last_name)||"").trim()||t.agent;return console.log("name",o),(0,w.jsx)("span",{children:o})}},{Header:"Sub-Cluster ID",accessor:"sub_cluster_id"},{Header:"Size",Cell:function(e){e.value;var n=e.row.original;return(0,w.jsx)("span",{children:n.farms_sum_size?"".concat(n.farms_sum_size):"-"})}},{Header:"View",Cell:function(e){e.value;var r=e.row.original;return(0,w.jsx)(f.Z,{onClick:function(){n("/farm-management/sub-clusters/".concat(r.id))},children:(0,w.jsx)(v.Zju,{})})}},{Header:"Edit",Cell:function(e){e.value;var n=e.row.original;return(0,w.jsx)(f.Z,{onClick:$("edit-sub-cluster",n),children:(0,w.jsx)(p.vpV,{})})}}]}),[$,n]),ne=(0,s.useMemo)((function(){return(A||[]).map((function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{serial:n+k})}))}),[A,k]);return(0,s.useEffect)((function(){!function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading cluster..."),e.prev=1,O(!0),e.next=5,(0,y.Zz)(n);case 5:(r=e.sent)?(N(r.sub_clusters||[]),B(r)):C("Failed to get subclusters",{type:"error"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),C(e.t0,{type:"error"});case 12:return e.prev=12,O(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(n){return e.apply(this,arguments)}}()(e.clusterId)}),[e.clusterId]),(0,w.jsxs)(s.Fragment,{children:[(0,w.jsxs)("section",{children:[(0,w.jsx)("nav",{id:"quick-nav",children:(0,w.jsx)(b.Z,{breadcrumbs:[(0,w.jsx)(u.Z,{color:"inherit",children:"Farm Management"},"1"),(0,w.jsx)(m.Z,{href:"/farm-management/clusters",color:"inherit",children:"Farm Clusters"},"2"),(0,w.jsx)(u.Z,{color:"primary.main",children:"View Cluster"},"3")]})}),(0,w.jsx)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:(0,w.jsxs)("h2",{className:"with-spinner",style:{fontSize:"20px"},children:[(0,w.jsx)("span",{children:null!==L&&void 0!==L&&L.cluster_id?"".concat(L.cluster_id," Sub Clusters"):"Sub Clusters"}),E?(0,w.jsx)(Z.Z,{size:20,color:"primary"}):""]})}),(0,w.jsxs)(d.Z,{children:[(0,w.jsx)(h.Z,{columns:ee,data:ne,isLoading:E}),(0,w.jsx)(x.Z,{nextHandler:function(){H(k+1)},prevHandler:function(){k>1&&H(k-1)},limitHandler:function(e){return function(e){V(parseInt(e.target.value))}(e)},totalRecords:A.length,limit:F||A.length,page:k})]})]}),(0,w.jsx)(j.Z,{open:Q,closeHandler:Y,children:U})]})}},533:function(e,n,r){r.d(n,{Z:function(){return H}});var t=r(2982),o=r(885),a=r(4942),i=r(3366),s=r(7462),c=r(2791),u=r(8182),l=r(4419),d=r(4036),f=r(7630),m=r(1046),p=r(3031),v=r(2071),Z=r(890),h=r(1217);function x(e){return(0,h.Z)("MuiLink",e)}var b=(0,r(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=r(8529),j=r(2065),y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=function(e){var n=e.theme,r=e.ownerState,t=function(e){return y[e]||e}(r.color),o=(0,g.D)(n,"palette.".concat(t),!1)||r.color,a=(0,g.D)(n,"palette.".concat(t,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,j.Fq)(o,.4)},C=r(184),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,f.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:w({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),H=c.forwardRef((function(e,n){var r=(0,m.Z)({props:e,name:"MuiLink"}),a=r.className,f=r.color,Z=void 0===f?"primary":f,h=r.component,b=void 0===h?"a":h,g=r.onBlur,j=r.onFocus,w=r.TypographyClasses,H=r.underline,_=void 0===H?"always":H,D=r.variant,F=void 0===D?"inherit":D,V=r.sx,z=(0,i.Z)(r,S),M=(0,p.Z)(),A=M.isFocusVisibleRef,N=M.onBlur,R=M.onFocus,I=M.ref,L=c.useState(!1),B=(0,o.Z)(L,2),T=B[0],q=B[1],E=(0,v.Z)(n,I),O=(0,s.Z)({},r,{color:Z,component:b,focusVisible:T,underline:_,variant:F}),P=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,l.Z)(a,x,n)}(O);return(0,C.jsx)(k,(0,s.Z)({color:Z,className:(0,u.Z)(P.root,a),classes:w,component:b,onBlur:function(e){N(e),!1===A.current&&q(!1),g&&g(e)},onFocus:function(e){R(e),!0===A.current&&q(!0),j&&j(e)},ref:E,ownerState:O,variant:F,sx:[].concat((0,t.Z)(Object.keys(y).includes(Z)?[]:[{color:Z}]),(0,t.Z)(Array.isArray(V)?V:[V]))},z))}))}}]);
//# sourceMappingURL=9739.7c79f472.chunk.js.map