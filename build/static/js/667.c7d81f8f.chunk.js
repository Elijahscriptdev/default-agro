"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[667],{4406:function(e,n,r){r.d(n,{Z:function(){return u}});var a=r(2982),t=r(1413),o=r(5987),i=r(2791),l=r(1358),s=r(3168),d=r(184),c=["indeterminate"];function u(e){var n=e.columns,r=e.data,u=e.isLoading,m=void 0!==u&&u,p=e.setSelectedRows,v=void 0===p?function(){}:p,f=i.forwardRef((function(e,n){var r=e.indeterminate,a=(0,o.Z)(e,c),l=i.useRef(),s=n||l;return i.useEffect((function(){s.current.indeterminate=r}),[s,r]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("input",(0,t.Z)({type:"checkbox",ref:s},a))})})),x=(0,l.useTable)({columns:n,data:r},l.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllRowsSelectedProps;return(0,d.jsx)("div",{children:(0,d.jsx)(f,(0,t.Z)({},n()))})},Cell:function(e){var n=e.row.getToggleRowSelectedProps();return(0,d.jsx)("div",{children:(0,d.jsx)(f,(0,t.Z)({},n))})}}].concat((0,a.Z)(e))}))})),h=x.getTableProps,g=x.getTableBodyProps,b=x.headerGroups,j=x.rows,Z=x.prepareRow,w=x.selectedFlatRows;return(0,i.useEffect)((function(){v(w.map((function(e){return e.original})))}),[w,v]),(0,d.jsx)("div",{className:"mt-2 mb-5 flex flex-col overflow-x-auto border",children:(0,d.jsx)("div",{className:"-my-2 -mx-4 sm:-mx-6 lg:-mx-8",children:(0,d.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,d.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:[(0,d.jsxs)("table",(0,t.Z)((0,t.Z)({},h()),{},{className:"min-w-full divide-y divide-gray-200",children:[(0,d.jsx)("thead",{className:"bg-gray-50",children:b.map((function(e){return(0,d.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,d.jsx)("th",(0,t.Z)((0,t.Z)({},e.getHeaderProps()),{},{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:e.render("Header")}))}))}))}))}),(0,d.jsx)("tbody",(0,t.Z)((0,t.Z)({},g()),{},{className:"bg-white divide-y divide-gray-200",children:j.map((function(e){return Z(e),(0,d.jsx)("tr",(0,t.Z)((0,t.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e,n){return(0,d.jsx)("td",(0,t.Z)((0,t.Z)({},e.getCellProps),{},{className:"px-6 py-4 whitespace-nowrap",children:e.render("Cell")}),n)}))}))}))}))]})),0===r.length?(0,d.jsx)("div",{className:"bg-gray-50 no-table-data",children:m?(0,d.jsx)(s.Z,{size:20,color:"primary"}):(0,d.jsxs)("div",{className:"flex flex-col",style:{alignItems:"center"},children:[(0,d.jsxs)("svg",{width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M34.1995 10.7998H6.19993L2 28.9995H29.9995L34.1995 10.7998Z",stroke:"#009688",strokeOpacity:"0.4",strokeWidth:"2",strokeMiterlimit:"10"}),(0,d.jsx)("path",{d:"M2 28.9995V1H11.0999L13.8998 4.49994H32.0995V10.7998",stroke:"#009688",strokeOpacity:"0.4",strokeWidth:"2",strokeMiterlimit:"10"})]}),(0,d.jsx)("span",{className:"mt-2",children:"No Data"})]})}):null]})})})})}},3715:function(e,n,r){var a=r(1413),t=r(5987),o=(r(2791),r(254)),i=r(184),l=["sx","placeholder","value"];n.Z=function(e){var n=e.sx,r=void 0===n?{}:n,s=e.placeholder,d=void 0===s?"":s,c=e.value,u=void 0===c?"":c,m=(0,t.Z)(e,l);return(0,i.jsx)(o.Z,(0,a.Z)({placeholder:d,sx:(0,a.Z)({p:0,border:"1px solid rgba(0, 150, 136, 0.2)",borderRadius:"5px",backgroundColor:"#FFF","& *":{borderColor:"transparent"},"& input":{padding:"10px"}},r),value:u},m))}},4496:function(e,n,r){r(2791);var a=r(184);n.Z=function(e){var n=e.value,r=e.type,t={boxSizing:"border-box",width:"auto",height:"26px",padding:"8px",borderRadius:"13px",borderWidth:"0.6px",display:"flex",justifyContent:"center",alignItems:"center"},o={fontSize:"12px",fontWeight:600,display:"block"};switch(void 0===r?"pending":r){case"success":t.backgroundColor="#F6FFED",t.borderColor="#B7EB8F",o.color="#52C41A";break;case"pending":t.backgroundColor="#FFF7E6",t.borderColor="#FA8C16",o.color="#FA8C16";break;default:t.backgroundColor="#FFF1F0",t.borderColor="#F5222D",o.color="#F5222D"}return(0,a.jsx)("div",{style:t,children:(0,a.jsx)("span",{style:o,children:n})})}},6416:function(e,n,r){r.d(n,{o:function(){return o}});var a=r(9201),t=r(184),o=(0,a.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search")},667:function(e,n,r){r.r(n);var a=r(885),t=r(2791),o=r(9434),i=r(3767),l=r(890),s=r(8870),d=r(3400),c=r(6151),u=r(911),m=r(7865),p=r(6416),v=r(7425),f=r(3715),x=r(7068),h=r(5013),g=r(5524),b=r(4496),j=r(4406),Z=r(2214),w=r(5865),y=r(3466),F=r(5497),C=r(1350),k=r(5163),S=r(4298),N=r(9971),R=r(1657),_=r(184);function M(e){var n,r=e.handleModalOpen,o=t.useState(null),i=(0,a.Z)(o,2),l=i[0],s=i[1],p=Boolean(l),f=function(){s(null)},x=function(n){f(),r("assign-farm",e.data)(n)};return(0,_.jsxs)("div",{children:[(0,_.jsx)(d.Z,{id:"basic-button","aria-controls":p?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,onClick:function(e){s(e.currentTarget)},children:(0,_.jsx)(v.LB8,{})}),(0,_.jsxs)(u.Z,{id:"basic-menu",anchorEl:l,open:p,onClose:f,MenuListProps:{"aria-labelledby":"basic-button"},sx:{"& .MuiMenu-paper":{borderRadius:"15px",boxShadow:"0px 5px 20px rgba(108, 117, 125, 0.4)"}},children:[(0,_.jsx)(m.Z,{onClick:f,children:(0,_.jsx)(c.Z,{href:"/farm-management/edit-farm-unit/".concat(null===(n=e.data)||void 0===n?void 0:n.id),sx:{p:0,m:0,textTransform:"capitalize",color:"inherit",fontSize:"inherit","&:hover":{backgroundColor:"transparent"}},children:"View Farm Unit"})}),(0,_.jsx)(m.Z,{onClick:function(n){f(),r("view-map",e.data)(n)},children:"View Map"}),(0,_.jsx)(N.Z,{role:e.role,perform:"farm-management:farm:bulk-assign",yes:function(){return(0,_.jsx)(m.Z,{onClick:x,children:"Assign Farm"})},no:function(){return null}})]})]})}n.default=function(){var e,n,r,d=(0,o.I0)(),c=(0,t.useState)(1),u=(0,a.Z)(c,2),m=u[0],v=u[1],P=(0,t.useState)(15),H=(0,a.Z)(P,2),A=H[0],L=H[1],E=(0,t.useRef)(null),z=(0,t.useState)(""),I=(0,a.Z)(z,2),T=I[0],B=I[1],W=(0,t.useState)(""),G=(0,a.Z)(W,2),O=G[0],D=G[1],U=(0,t.useState)(""),V=(0,a.Z)(U,2),q=V[0],J=V[1],Y=(0,t.useState)(""),K=(0,a.Z)(Y,2),Q=K[0],X=K[1],$=(0,t.useState)(""),ee=(0,a.Z)($,2),ne=ee[0],re=ee[1],ae=(0,o.v9)((function(e){var n;return(null===(n=e.AppReducer)||void 0===n?void 0:n.states)||{}})),te=(0,o.v9)((function(e){var n;return(null===(n=e.AppReducer)||void 0===n?void 0:n.localGovt)||[]})),oe=(0,o.v9)((function(e){var n;return null===(n=e.FarmMangementReducer)||void 0===n?void 0:n.farmLots})),ie=(0,t.useState)(null),le=(0,a.Z)(ie,2),se=le[0],de=le[1],ce=(0,t.useState)(!1),ue=(0,a.Z)(ce,2),me=ue[0],pe=ue[1],ve=(0,t.useState)([]),fe=(0,a.Z)(ve,2),xe=fe[0],he=fe[1],ge=(0,o.v9)((function(e){return e.AuthReducer.userProfile||JSON.parse(sessionStorage.getItem("user_profile"))})),be=function(){pe(!1)},je=(0,t.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(r){switch(e){case"view-map":de((0,_.jsx)(F.Nw,{closeHandler:be,data:n}));break;case"assign-farm":de((0,_.jsx)(F.wr,{closeHandler:be,farm:n}));break;case"bulk-assign-farms":de((0,_.jsx)(F.vY,{closeHandler:be,selections:n}));break;default:de(null)}pe(!0)}}),[]),Ze=function(e){xe.length>0?je("bulk-assign-farms",xe)(e):(0,R.notify)("Please select at least one row",{type:"info"}),console.log(xe)};(0,t.useEffect)((function(){var e={page:m,search:T};""!==ne?e.client_name=ne:delete e.client_name,""!==O?e.mapped=O:delete e.mapped,q?e.state=q:delete e.state,Q?e.community=Q:delete e.community,d((0,k.fb)(e)),d((0,S.Pz)())}),[ne,d,O,m,q,Q,T]);var we=(0,t.useMemo)((function(){return[{Header:"Lots ID",accessor:"farm_id"},{Header:"Farmer",accessor:"farmer_name"},{Header:"Crop",accessor:"crop"},{Header:"State",accessor:"state"},{Header:"LGA",accessor:"lga"},{Header:"Mapped",Cell:function(e){e.value;var n=e.row.original;return(0,_.jsx)(b.Z,{value:n.mapped?"Mapped":"Not Mapped",type:n.mapped?"success":"error"})}},{Header:"Client Name",accessor:"last_login"},{Header:"Sub Cluster",Cell:function(e){e.value;var n=e.row.original;return(0,_.jsx)("span",{children:n.sub_cluster||"-"})}},{Header:"Actions",Cell:function(e){e.value;var n,r=e.row.original;return(0,_.jsx)(M,{data:r,role:null===ge||void 0===ge||null===(n=ge.my_role)||void 0===n?void 0:n.role,handleModalOpen:je,handleModalClose:be})}}]}),[null===ge||void 0===ge||null===(e=ge.my_role)||void 0===e?void 0:e.role,je]),ye=(0,t.useMemo)((function(){var e;return(null===(e=oe.data)||void 0===e?void 0:e.map((function(e){var n,r,a,t,o,i,l,s;return{id:e.id,address:e.address.replace(/,/g,"."),clay:e.clay,cluster:e.cluster,community:e.community,created:e.created,crop:e.crop,farm_id:e.farm_id,farmer_id:null===(n=e.farmer)||void 0===n?void 0:n.id,farmer_name:"".concat(null===(r=e.farmer)||void 0===r?void 0:r.first_name," ").concat(null===(a=e.farmer)||void 0===a?void 0:a.middle_name," ").concat(null===(t=e.farmer)||void 0===t?void 0:t.last_name),mapped:null===(o=e.farmer)||void 0===o?void 0:o.mapped,state:null===(i=ae[e.state.state_id])||void 0===i?void 0:i.name,lga:null===(l=e.lga)||void 0===l?void 0:l.local_name,loam:e.loam,nitrogen:e.nitrogen,phosphorus:e.phosphorus,potassium:e.potassium,size:e.size,slit:e.slit,status:e.status,sub_cluster:null===(s=e.sub_cluster)||void 0===s?void 0:s.name,tenant:e.tenant,tenant_id:e.tenant_id}})))||[]}),[ae,oe.data]);return(0,_.jsxs)(t.Fragment,{children:[(0,_.jsxs)("section",{children:[(0,_.jsx)("nav",{id:"quick-nav",children:(0,_.jsx)(w.Z,{breadcrumbs:[(0,_.jsx)(l.Z,{color:"inherit",children:"Farm Management"},"1"),(0,_.jsx)(l.Z,{color:"primary.main",children:"Farm Units"},"2")]})}),(0,_.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{flexWrap:{xs:"wrap",md:"no-wrap"}},children:[(0,_.jsx)(f.Z,{InputProps:{ref:E,startAdornment:(0,_.jsx)(y.Z,{position:"start",children:(0,_.jsx)(p.o,{fontSize:"small"})})},value:T,onChange:function(e){return B(e.target.value)},placeholder:"Search",sx:{width:"100%",maxWidth:{sm:"250px"}}}),(0,_.jsxs)(i.Z,{direction:"row",spacing:2,sx:{my:2},children:[(0,_.jsx)(N.Z,{role:null===ge||void 0===ge||null===(n=ge.my_role)||void 0===n?void 0:n.role,perform:"farm-management:farm:create",yes:function(){return(0,_.jsx)(g.Z,{href:"/farm-management/add-farm-unit",value:"Add New Unit",disableElevation:!0})},no:function(){return null}}),(0,_.jsx)(N.Z,{role:null===ge||void 0===ge||null===(r=ge.my_role)||void 0===r?void 0:r.role,perform:"farm-management:farm:bulk-assign",yes:function(){return(0,_.jsx)(g.Z,{value:"Bulk Assign",onClick:Ze,disableElevation:!0,disabled:0===xe.length})},no:function(){return null}})]})]}),xe.length>0&&(0,_.jsx)("div",{style:{marginBottom:"-25px"},children:"".concat(xe.length," selected farms")}),(0,_.jsx)("div",{className:"farmmanagementheader flex flex-row items-end space-between overflow-x-auto",style:{justifyContent:"space-between"},children:(0,_.jsxs)("div",{style:{flexGrow:1},children:[(0,_.jsx)("span",{className:"filtertext mr-2 ml-2",children:"Filter by:"}),(0,_.jsxs)(i.Z,{direction:"row",alignItems:"center",flexWrap:"wrap",children:[(0,_.jsx)("div",{className:"mr-2 ml-2 component-wrapper",children:(0,_.jsx)(h.Z,{width:"100%",height:"32px",borderRadius:"5px",backgroundColor:"#FFFFFF",noneLabel:(0,_.jsx)("em",{children:"All"}),options:[{name:"Mapped",value:1},{name:"Not Mapped",value:0}],onChange:function(e){return D(e.target.value)}})}),(0,_.jsx)("div",{className:"mr-2 ml-2 component-wrapper",children:(0,_.jsx)(h.Z,{width:"100%",height:"32px",noneLabel:(0,_.jsx)("em",{children:"State"}),options:Object.values(ae).map((function(e){return{name:e.name,value:e.state_id}})),sx:{borderRadius:"5px"},backgroundColor:"#FFFFFF",onChange:function(e){console.log({state:e.target.value}),e.target.value?(J(e.target.value),d((0,S.zW)(e.target.value))):(X(""),J(""),d({type:C.UZ,payload:{localGovt:[]}}))}})}),(0,_.jsx)("div",{className:"mr-2 ml-2 component-wrapper",children:(0,_.jsx)(h.Z,{width:"100%",height:"32px",noneLabel:(0,_.jsx)("em",{children:"All L.G.A"}),options:te.map((function(e){return{name:e.local_name,value:e.local_id}})),borderRadius:"5px",backgroundColor:"#FFFFFF",onChange:function(e){return X(e.target.value)}})}),(0,_.jsx)("div",{className:"mr-2 ml-2 component-wrapper",children:(0,_.jsx)(h.Z,{width:"100%",height:"32px",noneLabel:(0,_.jsx)("em",{children:"Client Name"}),options:[{name:"Abc Client",value:"abc client"}],borderRadius:"5px",backgroundColor:"#FFFFFF",onChange:function(e){return re(e.target.value)}})})]})]})}),(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(j.Z,{columns:we,data:ye,isLoading:oe.loading,setSelectedRows:he}),(0,_.jsx)(x.Z,{nextHandler:function(){v(m+1)},prevHandler:function(){m>1&&v(m-1)},limitHandler:function(e){return function(e){L(parseInt(e.target.value))}(e)},page:m,totalRecords:oe.total,limit:A})]})]}),(0,_.jsx)(Z.Z,{open:me,closeHandler:be,PaperProps:{sx:{maxWidth:"unset"}},children:se})]})}},3466:function(e,n,r){r.d(n,{Z:function(){return w}});var a=r(4942),t=r(3366),o=r(7462),i=r(2791),l=r(8182),s=r(4419),d=r(4036),c=r(890),u=r(3840),m=r(2930),p=r(7630),v=r(1217);function f(e){return(0,v.Z)("MuiInputAdornment",e)}var x,h=(0,r(5878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=r(1046),b=r(184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Z=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["position".concat((0,d.Z)(r.position))],!0===r.disablePointerEvents&&n.disablePointerEvents,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===r.variant&&(0,a.Z)({},"&.".concat(h.positionStart,"&:not(.").concat(h.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),w=i.forwardRef((function(e,n){var r=(0,g.Z)({props:e,name:"MuiInputAdornment"}),a=r.children,p=r.className,v=r.component,h=void 0===v?"div":v,w=r.disablePointerEvents,y=void 0!==w&&w,F=r.disableTypography,C=void 0!==F&&F,k=r.position,S=r.variant,N=(0,t.Z)(r,j),R=(0,m.Z)()||{},_=S;S&&R.variant,R&&!_&&(_=R.variant);var M=(0,o.Z)({},r,{hiddenLabel:R.hiddenLabel,size:R.size,disablePointerEvents:y,position:k,variant:_}),P=function(e){var n=e.classes,r=e.disablePointerEvents,a=e.hiddenLabel,t=e.position,o=e.size,i=e.variant,l={root:["root",r&&"disablePointerEvents",t&&"position".concat((0,d.Z)(t)),i,a&&"hiddenLabel",o&&"size".concat((0,d.Z)(o))]};return(0,s.Z)(l,f,n)}(M);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(Z,(0,o.Z)({as:h,ownerState:M,className:(0,l.Z)(P.root,p),ref:n},N,{children:"string"!==typeof a||C?(0,b.jsxs)(i.Fragment,{children:["start"===k?x||(x=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,b.jsx)(c.Z,{color:"text.secondary",children:a})}))})}))}}]);
//# sourceMappingURL=667.c7d81f8f.chunk.js.map