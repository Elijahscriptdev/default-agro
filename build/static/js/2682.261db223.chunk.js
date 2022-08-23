"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[2682],{1303:function(e,t,n){n.d(t,{SV:function(){return o},cE:function(){return r}});var r={borderRadius:"5px",backgroundColor:"#F3F3F4",width:{md:"477.61px",xs:"100%"},"& fieldset":{border:"none"}},o={minWidth:{xs:"320px",md:"initial"}}},5013:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),o=n(885),u=n(5987),a=n(2791),c=n(7865),s=n(8096),i=n(9321),l=n(184),p=["onChange","noneLabel","options","iconType","sx","backgroundColor"];function d(e){var t,n=e.onChange,d=void 0===n?function(e){}:n,f=e.noneLabel,v=e.options,h=void 0===v?[]:v,Z=e.iconType,y=e.sx,m=void 0===y?{}:y,b=(e.backgroundColor,(0,u.Z)(e,p)),g=(0,a.useState)(""),x=(0,o.Z)(g,2),w=x[0],k=x[1];if(!0===(!!Z&&"filled"===Z))t={"& .MuiSelect-icon":{backgroundColor:"primary.main",fill:"white",height:"100%",width:e.iconwidth||"48px",top:0,right:0}};else t={};return(0,l.jsx)(s.Z,{sx:{borderRadius:"5px",minWidth:120,width:e.width,height:e.height,backgroundColor:e.backgroundColor},children:(0,l.jsxs)(i.Z,(0,r.Z)((0,r.Z)({value:w,onChange:function(e){k(e.target.value),d(e)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},sx:(0,r.Z)((0,r.Z)({overflow:"hidden",boxShadow:e.disableshadow?"none":"0px 5px 20px rgba(108, 117, 125, 0.15)","& *":{border:"none"}},t),m)},b),{},{children:[(0,l.jsx)(c.Z,{value:"",children:f||(0,l.jsx)("em",{children:"None"})}),h.map((function(e,t){return(0,l.jsx)(c.Z,{value:e.value,selected:e.selected,children:e.name||""},t)}))]}))})}},705:function(e,t,n){n.d(t,{ax:function(){return i}});var r=n(4165),o=n(5861),u=n(38),a=(n(1657),n(4028)),c=n(3528),s=n(7740),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o,i,l,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:s.Rf}),t.next=4,u.Z.get("/tenants".concat((0,a.r)(e)));case 4:i=t.sent,l=i.success,p=null===(o=i.result)||void 0===o?void 0:o.tenants,l&&p&&n({type:s.ny,payload:{data:p.data,total:p.total}}),t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),n({type:s._v}),(0,c.P)(t.t0),t.abrupt("return",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}},5750:function(e,t,n){n.d(t,{NM:function(){return m},qH:function(){return F},cn:function(){return d},PH:function(){return g},x7:function(){return f},AI:function(){return P},h8:function(){return h},Cm:function(){return x},sg:function(){return w},n9:function(){return Z},wM:function(){return y},ZO:function(){return k},Rf:function(){return p},fP:function(){return b},Nq:function(){return v}});var r=n(4165),o=n(5861),u=n(38),a=n(1657),c=n(3528),s=n(4028);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new FormData;return Object.keys(e).length>0&&(console.log({body:e}),Object.keys(e).forEach((function(n){t.append(n,e[n])}))),t}var l=n(4329),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o,a,i,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.page||1,a=e.limit||10,i=(0,s.r)(e),n({type:l.Ny}),e=(0,s.r)(e),t.prev=5,t.next=8,u.Z.get("/viewusers?page=".concat(o,"&limit=").concat(a,"&query=").concat(i));case 8:p=t.sent,n({type:l.Oz,payload:p}),t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(5),console.log(t.t0),n({type:l.wX}),(0,c.P)(t.t0,"Failed to fetch users"),t.abrupt("return",t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.post("/users",e);case 3:if(null===(o=t.sent)||void 0===o||!o.success||null===o||void 0===o||!o.result){t.next=8;break}return(0,a.notify)("User added successfully",{type:"success"}),n({type:l.qH,payload:o.result}),t.abrupt("return",o);case 8:t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),n({type:l.Jh}),(0,c.P)(t.t0,"Failed to add user"),t.abrupt("return",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=i(e),t.next=4,(0,u.V)("formData").post("/users/bulk-upload",e,{});case 4:null!==(o=t.sent)&&void 0!==o&&o.success&&null!==o&&void 0!==o&&o.result&&((0,a.notify)("Users uploaded successfully",{type:"success"}),n(p({page:1}))),t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),(0,c.P)(t.t0,"Failed to upload users"),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var n=(0,o.Z)((0,r.Z)().mark((function n(o){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.patch("/users/".concat(e),t);case 3:if(null===(s=n.sent)||void 0===s||!s.success||null===s||void 0===s||!s.result){n.next=7;break}return(0,a.notify)("User Updated successfully",{type:"success"}),n.abrupt("return",s);case 7:n.next=14;break;case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),(0,c.P)(n.t0,"Failed to update user"),n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.delete("/users/".concat(e));case 3:t.sent&&((0,a.notify)("User deleted successfully",{type:"success"}),n(p({page:1}))),t.next=12;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),(0,c.P)(t.t0,"Failed to delete user"),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l._l}),e=(0,s.r)(e),t.prev=2,t.next=5,u.Z.get("/farmers".concat(e));case 5:null!==(o=t.sent)&&void 0!==o&&o.success&&null!==o&&void 0!==o&&o.result?n({type:l.cj,payload:null===o||void 0===o||null===(a=o.result)||void 0===a?void 0:a.data}):n({type:l.eZ}),t.next=15;break;case 9:return t.prev=9,t.t0=t.catch(2),console.log(t.t0),n({type:l.eZ}),(0,c.P)(t.t0),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/farmers/".concat(t));case 3:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.result);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.post("/farmers",e);case 3:return null!==(o=t.sent)&&void 0!==o&&o.success&&null!==o&&void 0!==o&&o.result&&((0,a.notify)("Farmer added successfully",{type:"success"}),n({type:l.Du,payload:o.result}),n(Z({page:1}))),t.abrupt("return",o);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),n({type:l.$0}),(0,c.P)(t.t0,"Failed to add farmer"),t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var n=(0,o.Z)((0,r.Z)().mark((function n(o){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.patch("/farmers/".concat(e),t);case 3:return null!==(s=n.sent)&&void 0!==s&&s.success&&null!==s&&void 0!==s&&s.result&&(0,a.notify)("Farmer updated successfully",{type:"success"}),n.abrupt("return",s);case 8:return n.prev=8,n.t0=n.catch(0),console.log(n.t0),(0,c.P)(n.t0,"Failed to update farmer"),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=i(e),t.next=4,(0,u.V)("formData")({method:"post",url:"/farmers/bulk-upload",data:e});case 4:null!==(o=t.sent)&&void 0!==o&&o.success&&null!==o&&void 0!==o&&o.result&&((0,a.notify)("Farmers uploaded successfully",{type:"success"}),n(Z({page:1}))),t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),(0,c.P)(t.t0,"Failed to add farmer"),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=(0,o.Z)((0,r.Z)().mark((function n(o){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.post("/farmers/downloads/process-farmer-details",e);case 3:null!==(s=n.sent)&&void 0!==s&&s.success&&null!==s&&void 0!==s&&s.result&&((0,a.notify)("Farmers exported successfully",{type:"success"}),t("/user-management/farmers/exports")),n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),(0,c.P)(n.t0,"Failed to export farmers"),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/farmers/downloads");case 3:if(null===(t=e.sent)||void 0===t||!t.success||null===t||void 0===t||!t.result){e.next=6;break}return e.abrupt("return",null===t||void 0===t||null===(n=t.result)||void 0===n?void 0:n.data);case 6:return e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),(0,c.P)(e.t0,"Failed to fetch exports"),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.jt}),e=(0,s.r)(e),t.prev=2,t.next=5,u.Z.get("/sourcing-partners".concat(e));case 5:a=t.sent,n({type:l.rE,payload:null===a||void 0===a||null===(o=a.result)||void 0===o?void 0:o.sourcing_partners}),t.next=15;break;case 9:return t.prev=9,t.t0=t.catch(2),console.log(t.t0),n({type:l.ZU}),(0,c.P)(t.t0,"Failed to fetch sourcing agents"),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.post("/sourcing-partners",e);case 3:return o=t.sent,console.log(o),null!==o&&void 0!==o&&o.success&&null!==o&&void 0!==o&&o.result&&((0,a.notify)("Sourcing agent added successfully",{type:"success"}),n({type:l.YJ,payload:o.result})),t.abrupt("return",o);case 9:return t.prev=9,t.t0=t.catch(0),console.log(t.t0),n({type:l.Dv}),(0,c.P)(t.t0,"Failed to add sourcing agent"),t.abrupt("return",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.delete("/sourcing-partners/".concat(e));case 3:t.sent&&((0,a.notify)("Sourcing agent deleted successfully",{type:"success"}),n(k({page:1}))),t.next=12;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),(0,c.P)(t.t0,"Failed to delete sourcing agent"),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},4034:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(132),o={name:function(e){return r.Z_().min(3,e?"".concat(e," must be 3 or more characters"):"Must be 3 or more characters")},number:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1e20,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e20;return r.Rx().min(t,e?"".concat(e," must be greater than ").concat(t):"Must be greater than ".concat(t)).max(n,e?"".concat(e," must be less than ").concat(n):"Must be less than ".concat(n))},email:function(e){return r.Z_().email()},password:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24;return r.Z_().min(t,e?"".concat(e," must be ").concat(t," or more characters"):"Must be 8 or more characters").max(n,e?"".concat(e," is too long"):"Too long")},date:function(e){return r.Z_().matches(/(\d{4}(-|\/|\\)\d{1,2}(-|\/|\\)\d{1,2})|(\d{1,2}(-|\/|\\)\d{1,2}(-|\/|\\)\d{4})/gi)},mobile:function(e){return r.Z_().matches(/[0-9)(+]/gi,"Invalid number")},bvn:function(e){return r.Z_().matches(/\d{11}/g,"Invalid BVN").length(11,"BVN must be 11 digits long")},blank:function(){return r.Z_()}}},533:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(2982),o=n(885),u=n(4942),a=n(3366),c=n(7462),s=n(2791),i=n(8182),l=n(4419),p=n(4036),d=n(7630),f=n(1046),v=n(3031),h=n(2071),Z=n(890),y=n(1217);function m(e){return(0,y.Z)("MuiLink",e)}var b=(0,n(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=n(8529),x=n(2065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=function(e){var t=e.theme,n=e.ownerState,r=function(e){return w[e]||e}(n.color),o=(0,g.D)(t,"palette.".concat(r),!1)||n.color,u=(0,g.D)(t,"palette.".concat(r,"Channel"));return"vars"in t&&u?"rgba(".concat(u," / 0.4)"):(0,x.Fq)(o,.4)},F=n(184),P=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,d.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,p.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return(0,c.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:k({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,u.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),S=s.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiLink"}),u=n.className,d=n.color,Z=void 0===d?"primary":d,y=n.component,b=void 0===y?"a":y,g=n.onBlur,x=n.onFocus,k=n.TypographyClasses,S=n.underline,D=void 0===S?"always":S,M=n.variant,_=void 0===M?"inherit":M,j=n.sx,V=(0,a.Z)(n,P),N=(0,v.Z)(),R=N.isFocusVisibleRef,A=N.onBlur,B=N.onFocus,L=N.ref,T=s.useState(!1),U=(0,o.Z)(T,2),q=U[0],H=U[1],O=(0,h.Z)(t,L),W=(0,c.Z)({},n,{color:Z,component:b,focusVisible:q,underline:D,variant:_}),E=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,u={root:["root","underline".concat((0,p.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,l.Z)(u,m,t)}(W);return(0,F.jsx)(C,(0,c.Z)({color:Z,className:(0,i.Z)(E.root,u),classes:k,component:b,onBlur:function(e){A(e),!1===R.current&&H(!1),g&&g(e)},onFocus:function(e){B(e),!0===R.current&&H(!0),x&&x(e)},ref:O,ownerState:W,variant:_,sx:[].concat((0,r.Z)(Object.keys(w).includes(Z)?[]:[{color:Z}]),(0,r.Z)(Array.isArray(j)?j:[j]))},V))}))}}]);
//# sourceMappingURL=2682.261db223.chunk.js.map