"use strict";(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[436],{436:function(e,r,a){a.r(r),a.d(r,{default:function(){return p}});var n=a(4165),s=a(5861),t=(a(2791),a(6871)),i=a(9434),o=a(5705),c=a(132),l=a(5262),u=a(3168),d=a(6197),m=a(4034),h=a(184),p=function(){var e=(0,i.I0)(),r=(0,t.s0)(),a=(0,i.v9)((function(e){return e.AuthReducer.isLoading})),p=c.Ry({email:m.t.email("Email").required("Email is required"),password:m.t.password("Password",8,24).required("Password is required")});return(0,h.jsx)("div",{className:"flex flex-row",children:(0,h.jsx)("div",{className:"md:w-3/5 w-full mx-auto h-screen flex flex-col justify-center",children:(0,h.jsx)(o.J9,{initialValues:{email:"",password:""},validationSchema:p,onSubmit:function(){var a=(0,s.Z)((0,n.Z)().mark((function a(s,t){var i;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.setSubmitting,i={email:s.email,password:s.password,source:"web"},e((0,l.x4)(i,r));case 3:case"end":return a.stop()}}),a)})));return function(e,r){return a.apply(this,arguments)}}(),children:function(e){var r=e.values,n=e.errors,s=e.touched,t=e.handleChange,i=e.handleBlur,o=e.handleSubmit;e.isSubmitting,e.isValid,e.dirty;return(0,h.jsxs)("form",{onSubmit:o,children:[(0,h.jsx)("img",{src:d,alt:"tradebuza",style:{margin:"0 auto 1.8rem",display:"block"}}),(0,h.jsxs)("div",{className:"form_wrapper",children:[(0,h.jsx)("p",{className:"text-xl text-gray-500 font-bold text-center",children:"Sign In"}),(0,h.jsxs)("div",{className:"form_input_wrapper",children:[(0,h.jsx)("input",{type:"text",name:"email",onChange:t,onBlur:i,value:r.email,placeholder:"Enter email address...",className:n.email&&s.email?"input-error":null}),n.email&&s.email&&(0,h.jsx)("span",{className:"error",children:n.email})]}),(0,h.jsxs)("div",{className:"form_input_wrapper password-input",children:[(0,h.jsx)("input",{type:"password",name:"password",onChange:t,onBlur:i,value:r.password,placeholder:"Enter password",className:n.password&&s.password?"input-error":null}),n.password&&s.password&&(0,h.jsx)("span",{className:"error",children:n.password})]}),(0,h.jsx)("div",{className:"login-btn",children:(0,h.jsx)("button",{type:"submit",children:a?(0,h.jsx)(u.Z,{size:20,color:"secondary"}):"LOGIN"})}),(0,h.jsx)("div",{className:"mt-4",children:(0,h.jsx)("a",{href:"#e",children:"Forgot Password?"})})]})]})}})})})}},4034:function(e,r,a){a.d(r,{t:function(){return s}});var n=a(132),s={name:function(e){return n.Z_().min(3,e?"".concat(e," must be 3 or more characters"):"Must be 3 or more characters")},number:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1e20,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e20;return n.Rx().min(r,e?"".concat(e," must be greater than ").concat(r):"Must be greater than ".concat(r)).max(a,e?"".concat(e," must be less than ").concat(a):"Must be less than ".concat(a))},email:function(e){return n.Z_().email()},password:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24;return n.Z_().min(r,e?"".concat(e," must be ").concat(r," or more characters"):"Must be 8 or more characters").max(a,e?"".concat(e," is too long"):"Too long")},date:function(e){return n.Z_().matches(/(\d{4}(-|\/|\\)\d{1,2}(-|\/|\\)\d{1,2})|(\d{1,2}(-|\/|\\)\d{1,2}(-|\/|\\)\d{4})/gi)},mobile:function(e){return n.Z_().matches(/[0-9)(+]/gi,"Invalid number")},bvn:function(e){return n.Z_().matches(/\d{11}/g,"Invalid BVN").length(11,"BVN must be 11 digits long")},blank:function(){return n.Z_()}}}}]);
//# sourceMappingURL=436.38b279df.chunk.js.map