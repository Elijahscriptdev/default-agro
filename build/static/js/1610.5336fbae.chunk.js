"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[1610],{7770:function(t,r,e){e.d(r,{Dc:function(){return y},F1:function(){return b},H6:function(){return k},Pb:function(){return Z},UA:function(){return l},Uk:function(){return g},_5:function(){return h},_Y:function(){return f},ck:function(){return x},cq:function(){return d},eH:function(){return i},wr:function(){return v}});var n=e(4165),u=e(5861),c=e(38),a=e(1657),o=e(3528),s=e(4028),p=e(4584),i=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/config/crop-profile",t);case 3:r.sent?((0,a.notify)("Crop profile created",{type:"success"}),e(l())):(0,a.notify)("Failed",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},f=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.put("/config/crop-profile",t);case 3:r.sent?((0,a.notify)("Crop profile updated",{type:"success"}),e(l())):(0,a.notify)("Failed to update",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e({type:p.rL}),u=(0,s.r)(t),r.next=5,c.Z.get("/dashboard/crop-profiles".concat(u));case 5:(a=r.sent)&&e({type:p.fu,payload:a}),r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(0),e({type:p.b1}),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}()},v=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.delete("/config/crop-profile/".concat(t));case 3:(u=r.sent)&&u.success?((0,a.notify)("Crop profile deleted",{type:"success"}),e(l())):(0,a.notify)("Failed to delete",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},d=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/config/category",t);case 3:r.sent?(0,a.notify)("Crop Category created",{type:"success"}):(0,a.notify)("Failed",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u,i,f,l,v;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e({type:p.nE}),i=(0,s.r)(t),r.next=5,c.Z.get("/config/activities/tasks".concat(i));case 5:f=r.sent,l=f.success,v=null===(u=f.result)||void 0===u?void 0:u.data,l&&v?e({type:p.u4,payload:v}):(e({type:p.Gi}),(0,a.notify)(f.message||"An error occured",{type:"error"})),r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(0),e({type:p.Gi}),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(t){return r.apply(this,arguments)}}()},Z=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/config/task",t);case 3:(u=r.sent)?((0,a.notify)("Task created",{type:"success"}),e(y())):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},h=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.delete("/config/task",{data:t});case 3:(u=r.sent).success?((0,a.notify)("Task deleted successfully",{type:"success"}),e(y())):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u,i,f,l,v,d,y,Z;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e({type:p.yz}),f=(0,s.r)(t),r.next=5,c.Z.get("/config/seasons".concat(f));case 5:l=r.sent,v=l.success,d=null===(u=l.result)||void 0===u||null===(i=u.data)||void 0===i?void 0:i.data,v&&d?e({type:p.xm,payload:{data:d,total:null===(y=l.result)||void 0===y||null===(Z=y.data)||void 0===Z?void 0:Z.total}}):(e({type:p.Ro}),(0,a.notify)(l.message||"An error occured",{type:"error"})),r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(0),e({type:p.Ro}),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(t){return r.apply(this,arguments)}}()},g=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/config/season",t);case 3:(u=r.sent)?((0,a.notify)("Season created",{type:"success"}),e(x())):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},b=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.put("/config/season",t);case 3:(u=r.sent)?((0,a.notify)("Season updated successfully",{type:"success"}),e(x())):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u,i,f,l,v;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e({type:p.Vt}),i=(0,s.r)(t),r.next=5,c.Z.get("/config/categories".concat(i));case 5:f=r.sent,l=f.success,v=null===(u=f.result)||void 0===u?void 0:u.data,l&&v?e({type:p.RJ,payload:{data:v,total:(null===v||void 0===v?void 0:v.length)||0}}):(e({type:p.oi}),(0,a.notify)(f.message||"An error occured",{type:"error"})),r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(0),e({type:p.oi}),(0,o.P)(r.t0),r.abrupt("return",r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(t){return r.apply(this,arguments)}}()}},5163:function(t,r,e){e.d(r,{A0:function(){return v},DE:function(){return l},XW:function(){return h},Zz:function(){return f},aY:function(){return Z},fb:function(){return x},iQ:function(){return b},lu:function(){return d},nJ:function(){return g},nn:function(){return y},p_:function(){return k},zd:function(){return i}});var n=e(4165),u=e(5861),c=e(38),a=e(1657),o=e(4028),s=e(3528),p=e(8481),i=function(){return function(){var t=(0,u.Z)((0,n.Z)().mark((function t(r){var e,u,a,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:p.HZ}),t.next=4,c.Z.get("/clusters");case 4:u=t.sent,a=u.success,o=null===(e=u.result)||void 0===e?void 0:e.clusters,a&&o&&r({type:p.ej,payload:o}),t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),r({type:p.d}),(0,s.P)(t.t0),t.abrupt("return",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}()},f=function(){var t=(0,u.Z)((0,n.Z)().mark((function t(r){var e,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/clusters/".concat(r));case 3:return u=t.sent,t.abrupt("return",null===u||void 0===u||null===(e=u.result)||void 0===e?void 0:e.cluster);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),l=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/clusters",t);case 3:u=r.sent,console.log(u),u?((0,a.notify)("Cluster created",{type:"success"}),e(i({}))):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),console.log(r.t0),(0,s.P)(r.t0,"Failed to add cluster"),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},v=function(t,r){return function(){var e=(0,u.Z)((0,n.Z)().mark((function e(u){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/clusters/".concat(t),r);case 3:o=e.sent,console.log(o),o?((0,a.notify)("Cluster updated",{type:"success"}),u(i({}))):(0,a.notify)(o.message||"An error occured",{type:"error"}),e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),(0,s.P)(e.t0,"Failed to update cluster"),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},d=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/sub-clusters",t);case 3:u=r.sent,console.log(u),u?((0,a.notify)("Sub-Cluster created",{type:"success"}),e(Z({}))):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),console.log(r.t0),(0,s.P)(r.t0,"Failed to add subcluster"),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},y=function(t,r){return function(){var e=(0,u.Z)((0,n.Z)().mark((function e(u){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/sub-clusters/".concat(t),r);case 3:o=e.sent,console.log(o),o?((0,a.notify)("Sub-cluster updated",{type:"success"}),u(Z({}))):(0,a.notify)(o.message||"An error occured",{type:"error"}),e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),(0,s.P)(e.t0,"Failed to update sub-cluster"),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u,i,f,l;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e({type:p.AL}),u=(0,o.r)(t),r.next=5,c.Z.get("/sub-clusters".concat(u));case 5:i=r.sent,f=i.success,l=null===i||void 0===i?void 0:i.result["sub-clusters"],f&&l?e({type:p.Q_,payload:l}):(e({type:p.N}),(0,a.notify)(i.message||"An error occured",{type:"error"})),r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(0),e({type:p.N}),(0,s.P)(r.t0),r.abrupt("return",r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(t){return r.apply(this,arguments)}}()},h=function(){var t=(0,u.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/sub-clusters/".concat(r));case 3:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.result["sub-cluster"]);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u,i,f,l,v,d;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e({type:p.LL}),f=(0,o.r)(t),console.log(f),r.next=6,c.Z.get("/farms".concat(f));case 6:l=r.sent,v=l.success,d=null===(u=l.result)||void 0===u||null===(i=u.data)||void 0===i?void 0:i.data,v&&d?e({type:p.c5,payload:{data:d,total:l.result.data.total}}):(e({type:p.t3}),(0,a.notify)(l.message||"An error occured",{type:"error"})),r.next=17;break;case 12:return r.prev=12,r.t0=r.catch(0),e({type:p.t3}),(0,s.P)(r.t0),r.abrupt("return",r.t0);case 17:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(t){return r.apply(this,arguments)}}()},g=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.post("/farms",t);case 3:u=r.sent,console.log(u),u?((0,a.notify)("Farm unit created",{type:"success"}),e(x({}))):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),console.log(r.t0),(0,s.P)(r.t0,"Failed to add farm unit"),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},b=function(t,r){return function(){var e=(0,u.Z)((0,n.Z)().mark((function e(u){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/farms/".concat(t),r);case 3:o=e.sent,console.log(o),o?((0,a.notify)("Farm updated",{type:"success"}),u(x({}))):(0,a.notify)(o.message||"An error occured",{type:"error"}),e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),(0,s.P)(e.t0,"Failed to update farm"),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return function(){var r=(0,u.Z)((0,n.Z)().mark((function r(e){var u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.patch("/farms/bulk/assign",t);case 3:null!==(u=r.sent)&&void 0!==u&&u.success?((0,a.notify)("Farm assigned",{type:"success"}),e(x({page:1}))):(0,a.notify)(u.message||"An error occured",{type:"error"}),r.next=12;break;case 7:return r.prev=7,r.t0=r.catch(0),console.log(r.t0),(0,s.P)(r.t0,"Failed to assign farms"),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=1610.5336fbae.chunk.js.map