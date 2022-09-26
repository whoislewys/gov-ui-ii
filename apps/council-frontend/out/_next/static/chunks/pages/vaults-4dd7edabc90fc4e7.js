(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{34772:function(e){var t,n,r=Function.prototype,i=Object.prototype,a=r.toString,o=i.hasOwnProperty,c=a.call(Object),u=i.toString,s=(t=Object.getPrototypeOf,n=Object,function(e){return t(n(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=u.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=s(e);if(null===t)return!0;var n=o.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==c}},94239:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vaults",function(){return n(64206)}])},64206:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Qe}});var r=n(52322),i=n(2784),a=n(53322),o=n(7690),c=n(26460),u=n(56094),s=n(1208);function l(){var e,t,n=(e=["",""],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var f=function(e){var t=e.vaultTitle,n=e.children;return(0,r.jsxs)(o.Z,{noPadding:!0,variant:o.T.BLACK,className:"mt-auto rounded-xl w-full h-full mx-3",children:[(0,r.jsx)("div",{className:"p-6 center-items",children:(0,r.jsx)(u.Z,{className:"text-base tracking-wide text-white",children:(0,s.t)(l(),t)})}),(0,r.jsx)(c.i,{}),(0,r.jsx)("div",{className:"p-6",children:n})]})},d=n(72779),m=n.n(d);var h=function(e){var t=e.onClick,n=e.text,i=e.icon,a=e.className;return(0,r.jsxs)(o.Z,{interactive:!0,onClick:t,className:m()("text-white flex w-full place-content-center",a),children:[(0,r.jsx)("div",{className:"h-5 w-5 flex-shrink-0 mr-2",children:i}),(0,r.jsx)("p",{className:"font-medium text-sm",children:n})]})};function x(e){var t=e.small,n=e.className,i=e.children;return(0,r.jsx)("span",{className:m()({"text-sm":t,"text-base":!t},n),children:i})}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(){var e=v(["",""]);return b=function(){return e},e}function j(){var e=v(["",""]);return j=function(){return e},e}var p=function(e){var t=e.label,n=e.data;return(0,r.jsxs)(o.Z,{variant:o.T.DARK_GRAY,className:"flex flex-col mb-4 px-4 py-3.5",noPadding:!0,children:[(0,r.jsx)(x,{small:!0,className:"tracking-wide text-fiatLightGray pb-1",children:(0,s.t)(b(),t)}),(0,r.jsx)(x,{small:!0,className:"tracking-wide text-white",children:(0,s.t)(j(),n)})]})};var g=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}))})),w=n(47025),O=n(48975),k=n(4455),y=n(86131),N=n(64887);function E(e){var t=(0,y.J8)(N.e$,"locked",{callArgs:[e],enabled:!!e}).data;return t||""}var C=n(28278),M=n(38999);var L=n(58105);function A(e){var t=e.setDepositModal,n=e.setWithdrawModal,i=e.setQuitLockModal,a=e.setExtendLockModal,o=(0,O.Ge)().account,c=(0,w.U)(o),u=function(e){var t=E(e);return t&&t[1]?(0,M.sg)(new Date(t[1].toNumber()*C.s9)):""}(o),s=function(e){var t=E(e);return t&&t[0]?(0,L.formatEther)(t[0]):0}(o);return(0,r.jsxs)(f,{vaultTitle:"VeVault",children:[(0,r.jsx)(p,{label:"Balance",data:"".concat((0,k._I)(s)," FDT")}),(0,r.jsx)(p,{label:"Lock Expiration",data:u||"-"}),(0,r.jsx)(p,{label:"Voting Power",data:"".concat((0,k._I)(Number(c))," FDT")}),(0,r.jsxs)("div",{className:"flex w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col mr-4 w-full",children:[(0,r.jsx)(h,{onClick:function(){return t()},icon:(0,r.jsx)(g,{}),text:"Deposit",className:"mb-4"}),(0,r.jsx)(h,{onClick:function(){return i()},icon:(0,r.jsx)(g,{}),text:"Quit Lock"})]}),(0,r.jsxs)("div",{className:"flex flex-col w-full",children:[(0,r.jsx)(h,{onClick:function(){return n()},icon:(0,r.jsx)(g,{}),text:"Withdraw",className:"mb-4"}),(0,r.jsx)(h,{onClick:function(){return a()},icon:(0,r.jsx)(g,{}),text:"Extend Lock"})]})]})]})}function W(){var e=(0,O.Ge)(),t=e.account,n=e.library;t&&(null===n||void 0===n||n.getSigner(t));return(0,r.jsxs)(f,{vaultTitle:"ComitiumVault",children:[(0,r.jsx)(p,{label:"Balance",data:"x,xxx,xx"}),(0,r.jsx)(p,{label:"Lock Expiration",data:"June 17, 2022"}),(0,r.jsx)(p,{label:"Voting Power",data:"2,154 FDT"}),(0,r.jsx)("div",{className:"h-20"}),(0,r.jsxs)("div",{className:"flex w-full mt-2",children:[(0,r.jsx)(h,{icon:(0,r.jsx)(g,{}),text:"Migrate",className:"mr-4"}),(0,r.jsx)(h,{icon:(0,r.jsx)(g,{}),text:"Withdraw"})]})]})}var S=n(59156);function z(e){var t,n=e.setWithdrawModal,i=(0,O.Ge)().account,a=(0,S.s)(i);t=i,(0,y.J8)(N.En,"getGrant",{callArgs:[t],enabled:!!t}).data;return(0,r.jsxs)(f,{vaultTitle:"VestingVault",children:[(0,r.jsx)(p,{label:"Vested",data:"x,xxx,xx"}),(0,r.jsx)(p,{label:"Unvested Balance",data:"x,xxx,xx"}),(0,r.jsx)(p,{label:"Voting Power",data:"".concat(a," FDT")}),(0,r.jsx)("div",{className:"h-20"}),(0,r.jsx)(h,{onClick:function(){return n()},icon:(0,r.jsx)(g,{}),text:"Withdraw Vested Tokens",className:"mt-2"})]})}var P=n(90711),T=n(59656),R=n(5563),V=n(62761),Z=n(381),D=n(54948);function G(){var e,t,n=(e=["MAX"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return G=function(){return n},n}function $(e){var t=e.className,n=e.inputClassName,a=e.screenReaderLabel,o=e.id,c=e.name,u=e.placeholder,l=e.value,f=e.error,d=void 0!==f&&f,h=e.disabled,x=void 0!==h&&h,v=e.showMaxButton,b=void 0!==v&&v,j=e.maxValue,p=e.onChange,g=(0,i.useCallback)((function(e){var t=e.target.value;p(t)}),[p]);return(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("label",{htmlFor:o,className:"sr-only",children:a}),(0,r.jsxs)("div",{className:m()("relative",{"pointer-events-none":x,"opacity-50":x}),children:[(0,r.jsx)("input",{disabled:x,type:"text",name:c,id:o,className:m()("bg-fiatDarkGray border-fiatLightGray text-fiatWhite placeholder-fiatLightGray block h-12 w-full rounded-md shadow-sm sm:text-sm",{"focus:border-fiatLightGray":!d,"focus:ring-fiatLightGray":!d,"focus:border-fiatRed":d,"border-fiatRed":d,"focus:ring-fiatRed":d},n),placeholder:u,value:l,onChange:g}),b&&j?(0,r.jsx)(V.Z,{className:"absolute top-1/2 right-3 -translate-y-1/2 rounded-md px-2 py-1",variant:Z.Wu.OUTLINE_LAVENDER,size:Z.qE.SMALL,onClick:function(){return p(j)},disabled:x,children:(0,r.jsx)("span",{className:"text-xs text-fiatWhite",children:(0,s.t)(G())})}):null]})]})}var _={min:0,max:999999999999};function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=n.min,i=n.max,a=n.maxPrecision;return t?"."===t?"0.":I(t,r,i,a)?t:e:""}function I(e,t,n,r){var i=Number(e);if(!k.ws.test(e))return!1;if(!(0,k.z0)(i))return!1;if((0,k.z0)(t)&&i<t)return!1;if((0,k.z0)(n)&&i>n)return!1;if((0,k.r7)(r)&&function(e){return e&&-1!==e.indexOf(".")&&null!==(t=e.split(".")[1].length)&&void 0!==t?t:0;var t}(e)>r)return!1;return!0}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=(0,i.useState)(""),n=t[0],r=t[1],a=(0,i.useCallback)((function(t){r(B(n,t,e))}),[e,n]);return{value:n,setNumericValue:a}}var Q=n(41469),Y=n(52519),U=n(12764),X=n(91377),q=n(47021);function J(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function K(){var e=J(["View on etherscan"]);return K=function(){return e},e}function H(){var e=J(["Depositing... ",""]);return H=function(){return e},e}function ee(){var e=J(["Deposit successful"]);return ee=function(){return e},e}function te(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ne(){var e=te(["View on etherscan"]);return ne=function(){return e},e}function re(){var e=te(["Approving... ",""]);return re=function(){return e},e}function ie(){var e=te(["Approval successfull"]);return ie=function(){return e},e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ae(e,t,n[t])}))}return e}function ce(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ue(){var e=ce(["Enter amount to lock"]);return ue=function(){return e},e}function se(){var e=ce(["Enter amount to lock"]);return se=function(){return e},e}function le(){var e=ce(["Enter amount to lock"]);return le=function(){return e},e}function fe(){var e=ce(["Enter weeks to lock"]);return fe=function(){return e},e}function de(){var e=ce(["Enter weeks to lock"]);return de=function(){return e},e}function me(){var e=ce(["Enter weeks to lock"]);return me=function(){return e},e}function he(e){var t,n,a=e.isOpen,o=e.onClose,c=(0,O.Ge)(),u=c.account,l=c.library,f=oe({},_,{max:52}),d=F(f),h=d.value,x=d.setNumericValue,v=oe({},_,{max:999969420}),b=F(v),j=b.value,p=b.setNumericValue,g=T.parseEther(""===j?"0":j),w=u?null===l||void 0===l?void 0:l.getSigner(u):void 0,k=function(e,t){var n=(0,i.useRef)();return(0,Y.E)(N.e$,"createLock",t,{onError:function(e){Q.Am.error(e.message,{id:n.current})},onTransactionSubmitted:function(e){var t=(0,r.jsx)(q.Z,{href:"".concat(X.RL,"/").concat(e.hash),text:(0,s.t)(K()),className:"text-fiatWhite"}),i=(0,r.jsx)("div",{children:(0,s.jt)(H(),t)});n.current=Q.Am.loading(i)},onTransactionMined:function(){U.E.invalidateQueries((0,y.E)(N.e$.address,"balanceOf",[e])),Q.Am.success((0,s.t)(ee()),{id:n.current})}})}(u,w),E=k.mutate,M=k.isLoading,L=k.isError,A=(k.isSuccess,R.Z.addresses.votingEscrow),W=function(e){var t=(0,i.useRef)();return(0,Y.E)(N.K5,"approve",e,{onError:function(e){Q.Am.error(e.message,{id:t.current})},onTransactionSubmitted:function(e){var n=(0,r.jsx)(q.Z,{href:"".concat(X.RL,"/").concat(e.hash),text:(0,s.t)(ne()),className:"text-fiatWhite"}),i=(0,r.jsx)("div",{children:(0,s.jt)(re(),n)});t.current=Q.Am.loading(i)},onTransactionMined:function(){Q.Am.success((0,s.t)(ie()),{id:t.current})}})}(w),S=W.mutate,z=P.Bz,G=parseInt(h)*C.cy+C.Yx;return(0,r.jsxs)(D.Z,{isOpen:a,onClose:o,children:[(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4 text-3xl font-semibold"),children:"Create Lock"}),(0,r.jsx)("p",{className:m()("text-fiatWhite text-md mb-1"),children:"Amount"}),(0,r.jsx)($,{screenReaderLabel:(0,s.t)(ue()),name:(0,s.t)(se()),id:"amount-to-lock",value:j,onChange:function(e){return p(e)},placeholder:(0,s.t)(le()),className:m()("mb-4"),showMaxButton:!0,maxValue:null===(t=v.max)||void 0===t?void 0:t.toString(),disabled:M,error:L}),(0,r.jsx)("p",{className:m()("text-fiatWhite text-md mb-1"),children:"Weeks to lock"}),(0,r.jsx)($,{screenReaderLabel:(0,s.t)(fe()),name:(0,s.t)(de()),id:"weeks-to-lock",value:h,onChange:function(e){return x(e)},placeholder:(0,s.t)(me()),className:m()("mb-6"),showMaxButton:!0,maxValue:null===(n=f.max)||void 0===n?void 0:n.toString(),disabled:M,error:L}),(0,r.jsx)(V.Z,{variant:Z.Wu.GRADIENT,onClick:function(){return S([A,z])},className:m()("mr-4"),children:"Approve"}),(0,r.jsx)(V.Z,{variant:Z.Wu.GRADIENT,onClick:function(){return E([g,G])},children:"Create Lock"})]})}function xe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ve(){var e=xe(["View on etherscan"]);return ve=function(){return e},e}function be(){var e=xe(["Withdrawing... ",""]);return be=function(){return e},e}function je(){var e=xe(["Withdrawl successful"]);return je=function(){return e},e}function pe(e){var t=e.isOpen,n=e.onClose,a=(0,O.Ge)(),o=a.account,c=a.library,u=function(e,t){var n=(0,i.useRef)();return(0,Y.E)(N.e$,"withdraw",t,{onError:function(e){Q.Am.error(e.message,{id:n.current})},onTransactionSubmitted:function(e){var t=(0,r.jsx)(q.Z,{href:"".concat(X.RL,"/").concat(e.hash),text:(0,s.t)(ve()),className:"text-fiatWhite"}),i=(0,r.jsx)("div",{children:(0,s.jt)(be(),t)});n.current=Q.Am.loading(i)},onTransactionMined:function(){U.E.invalidateQueries((0,y.E)(N.e$.address,"balanceOf",[e])),Q.Am.success((0,s.t)(je()),{id:n.current})}})}(o,o?null===c||void 0===c?void 0:c.getSigner(o):void 0),l=u.mutate;return(0,r.jsxs)(D.Z,{isOpen:t,onClose:n,children:[(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4 text-3xl font-semibold"),children:"Withdraw"}),(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4"),children:"Are you sure you want to withdraw? You will lose all voting power"}),(0,r.jsx)(V.Z,{variant:Z.Wu.GRADIENT,onClick:function(){return l([])},children:"Withdraw"})]})}function ge(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function we(){var e=ge(["View on etherscan"]);return we=function(){return e},e}function Oe(){var e=ge(["Extending Lock... ",""]);return Oe=function(){return e},e}function ke(){var e=ge(["Lock successfully extended"]);return ke=function(){return e},e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ne(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ee(){var e=Ne(["Enter weeks to extend lock"]);return Ee=function(){return e},e}function Ce(){var e=Ne(["Enter weeks to extend lock"]);return Ce=function(){return e},e}function Me(){var e=Ne(["Enter weeks to extend lock"]);return Me=function(){return e},e}function Le(e){var t,n=e.isOpen,a=e.onClose,o=(0,O.Ge)(),c=o.account,u=o.library,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ye(e,t,n[t])}))}return e}({},_,{max:52}),f=F(l),d=f.value,h=f.setNumericValue,x=function(e,t){var n=(0,i.useRef)();return(0,Y.E)(N.e$,"increaseUnlockTime",t,{onError:function(e){Q.Am.error(e.message,{id:n.current})},onTransactionSubmitted:function(e){var t=(0,r.jsx)(q.Z,{href:"".concat(X.RL,"/").concat(e.hash),text:(0,s.t)(we()),className:"text-fiatWhite"}),i=(0,r.jsx)("div",{children:(0,s.jt)(Oe(),t)});n.current=Q.Am.loading(i)},onTransactionMined:function(){U.E.invalidateQueries((0,y.E)(N.e$.address,"balanceOf",[e])),Q.Am.success((0,s.t)(ke()),{id:n.current})}})}(c,c?null===u||void 0===u?void 0:u.getSigner(c):void 0),v=x.mutate,b=x.isLoading,j=x.isError,p=parseInt(d)*C.cy+C.Yx;return(0,r.jsxs)(D.Z,{isOpen:n,onClose:a,children:[(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4 text-3xl font-semibold"),children:"Extend Lock"}),(0,r.jsx)("p",{className:m()("text-fiatWhite text-md mb-1"),children:"Weeks to extend lock"}),(0,r.jsx)($,{screenReaderLabel:(0,s.t)(Ee()),name:(0,s.t)(Ce()),id:"weeks-to-lock",value:d,onChange:function(e){return h(e)},placeholder:(0,s.t)(Me()),className:m()("mb-6"),showMaxButton:!0,maxValue:null===(t=l.max)||void 0===t?void 0:t.toString(),disabled:b,error:j}),(0,r.jsx)(V.Z,{variant:Z.Wu.GRADIENT,onClick:function(){return v([p])},children:"Extend Lock"})]})}function Ae(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function We(){var e=Ae(["View on etherscan"]);return We=function(){return e},e}function Se(){var e=Ae(["Quitting Lock... ",""]);return Se=function(){return e},e}function ze(){var e=Ae(["Lock successfully Quit"]);return ze=function(){return e},e}function Pe(e){var t=e.isOpen,n=e.onClose,a=(0,O.Ge)(),o=a.account,c=a.library,u=function(e,t){var n=(0,i.useRef)();return(0,Y.E)(N.e$,"quitLock",t,{onError:function(e){Q.Am.error(e.message,{id:n.current})},onTransactionSubmitted:function(e){var t=(0,r.jsx)(q.Z,{href:"".concat(X.RL,"/").concat(e.hash),text:(0,s.t)(We()),className:"text-fiatWhite"}),i=(0,r.jsx)("div",{children:(0,s.jt)(Se(),t)});n.current=Q.Am.loading(i)},onTransactionMined:function(){U.E.invalidateQueries((0,y.E)(N.e$.address,"balanceOf",[e])),Q.Am.success((0,s.t)(ze()),{id:n.current})}})}(o,o?null===c||void 0===c?void 0:c.getSigner(o):void 0),l=u.mutate;return(0,r.jsxs)(D.Z,{isOpen:t,onClose:n,children:[(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4 text-3xl font-semibold"),children:"Quit Lock"}),(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4"),children:"Are you sure you want to quit lock? You will lose all voting power"}),(0,r.jsx)(V.Z,{variant:Z.Wu.GRADIENT,onClick:function(){return l([])},children:"Quit Lock"})]})}function Te(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Re(){var e=Te(["View on etherscan"]);return Re=function(){return e},e}function Ve(){var e=Te(["Withdrawing... ",""]);return Ve=function(){return e},e}function Ze(){var e=Te(["Withdrawl successful"]);return Ze=function(){return e},e}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ge(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function $e(){var e=Ge(["Enter amount to withdraw"]);return $e=function(){return e},e}function _e(){var e=Ge(["Enter amount to withdraw"]);return _e=function(){return e},e}function Be(){var e=Ge(["Enter amount to withdraw"]);return Be=function(){return e},e}function Ie(e){var t,n=e.isOpen,a=e.onClose,o=(0,O.Ge)(),c=o.account,u=o.library,l=function(e){var t=(0,i.useRef)();return(0,Y.E)(N.En,"withdraw",e,{onError:function(e){Q.Am.error(e.message,{id:t.current})},onTransactionSubmitted:function(e){var n=(0,r.jsx)(q.Z,{href:"".concat(X.RL,"/").concat(e.hash),text:(0,s.t)(Re()),className:"text-fiatWhite"}),i=(0,r.jsx)("div",{children:(0,s.jt)(Ve(),n)});t.current=Q.Am.loading(i)},onTransactionMined:function(){Q.Am.success((0,s.t)(Ze()),{id:t.current})}})}(c?null===u||void 0===u?void 0:u.getSigner(c):void 0),f=l.mutate,d=l.isLoading,h=l.isError,x=c||"",v=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){De(e,t,n[t])}))}return e}({},_,{max:999969420}),b=F(v),j=b.value,p=b.setNumericValue,g=(0,L.parseEther)(""===j?"0":j);return(0,r.jsxs)(D.Z,{isOpen:n,onClose:a,children:[(0,r.jsx)("p",{className:m()("text-fiatWhite mb-4 text-3xl font-semibold"),children:"Withdraw"}),(0,r.jsx)("p",{className:m()("text-fiatWhite text-md mb-1"),children:"Amount"}),(0,r.jsx)($,{screenReaderLabel:(0,s.t)($e()),name:(0,s.t)(_e()),id:"amount-to-withdraw",value:j,onChange:function(e){return p(e)},placeholder:(0,s.t)(Be()),className:m()("mb-4"),showMaxButton:!0,maxValue:null===(t=v.max)||void 0===t?void 0:t.toString(),disabled:d,error:h}),(0,r.jsx)(V.Z,{variant:Z.Wu.GRADIENT,onClick:function(){console.log(12,g,x),f([g,x])},children:"Withdraw"})]})}function Fe(){var e=(0,i.useState)(!1),t=e[0],n=e[1],a=(0,i.useState)(!1),o=a[0],c=a[1],u=(0,i.useState)(!1),s=u[0],l=u[1],f=(0,i.useState)(!1),d=f[0],m=f[1],h=(0,i.useState)(!1),x=h[0],v=h[1];return(0,r.jsx)("div",{className:"flex flex-col items-center h-full",children:(0,r.jsxs)("div",{className:"flex w-full h-fit px-7 pt-6",children:[(0,r.jsx)(A,{setDepositModal:function(){return n(!0)},setWithdrawModal:function(){return c(!0)},setQuitLockModal:function(){return l(!0)},setExtendLockModal:function(){return m(!0)}}),(0,r.jsx)(W,{}),(0,r.jsx)(z,{setWithdrawModal:function(){return v(!0)}}),(0,r.jsx)(he,{isOpen:t,onClose:function(){return n(!1)}}),(0,r.jsx)(pe,{isOpen:o,onClose:function(){return c(!1)}}),(0,r.jsx)(Pe,{isOpen:s,onClose:function(){return l(!1)}}),(0,r.jsx)(Le,{isOpen:d,onClose:function(){return m(!1)}}),(0,r.jsx)(Ie,{isOpen:x,onClose:function(){return v(!1)}})]})})}function Qe(){return(0,r.jsx)(a.Z,{childrenContainerClassName:"w-full",pageTitle:"Vaults",children:(0,r.jsx)(Fe,{})})}},38999:function(e,t,n){"use strict";n.d(t,{sg:function(){return i}});var r=n(70002);n(28278),n(1208);(0,r.i$)("%d"),(0,r.i$)("%B %d, %Y");var i=(0,r.i$)("%b %d, %Y");(0,r.i$)("%b %d"),(0,r.i$)("%Y")},4455:function(e,t,n){"use strict";n.d(t,{_I:function(){return s},r7:function(){return c},ws:function(){return a},y8:function(){return u},z0:function(){return o}});var r=n(23524),i=n(58105),a=/^-?[0-9]\d*\.?\d*$/;function o(e){return Number.isFinite(e)}function c(e){return Number.isInteger(e)}function u(e){var t=(0,r.WU)(".2s");return e>1e4?t(e).replace("G","B"):(0,i.commify)(e)}function s(e){return e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}},59156:function(e,t,n){"use strict";n.d(t,{U:function(){return o},s:function(){return a}});var r=n(64887),i=n(41741);function a(e,t,n){return(0,i.M0)(e,r.En,t,n,"0x00")}function o(e,t){return(0,i.jg)(e,r.En,t)}},23524:function(e,t,n){"use strict";function r(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}n.d(t,{WU:function(){return d}});var i,a=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function o(e){if(!(t=a.exec(e)))throw new Error("invalid format: "+e);var t;return new c({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function c(e){this.fill=void 0===e.fill?" ":e.fill+"",this.align=void 0===e.align?">":e.align+"",this.sign=void 0===e.sign?"-":e.sign+"",this.symbol=void 0===e.symbol?"":e.symbol+"",this.zero=!!e.zero,this.width=void 0===e.width?void 0:+e.width,this.comma=!!e.comma,this.precision=void 0===e.precision?void 0:+e.precision,this.trim=!!e.trim,this.type=void 0===e.type?"":e.type+""}function u(e,t){var n=r(e,t);if(!n)return e+"";var i=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+i:i.length>a+1?i.slice(0,a+1)+"."+i.slice(a+1):i+new Array(a-i.length+2).join("0")}o.prototype=c.prototype,c.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var s={"%":(e,t)=>(100*e).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:function(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)},e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>u(100*e,t),r:u,s:function(e,t){var n=r(e,t);if(!n)return e+"";var a=n[0],o=n[1],c=o-(i=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,u=a.length;return c===u?a:c>u?a+new Array(c-u+1).join("0"):c>0?a.slice(0,c)+"."+a.slice(c):"0."+new Array(1-c).join("0")+r(e,Math.max(0,t+c-1))[0]},X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function l(e){return e}var f,d,m=Array.prototype.map,h=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function x(e){var t,n,a=void 0===e.grouping||void 0===e.thousands?l:(t=m.call(e.grouping,Number),n=e.thousands+"",function(e,r){for(var i=e.length,a=[],o=0,c=t[0],u=0;i>0&&c>0&&(u+c+1>r&&(c=Math.max(1,r-u)),a.push(e.substring(i-=c,i+c)),!((u+=c+1)>r));)c=t[o=(o+1)%t.length];return a.reverse().join(n)}),c=void 0===e.currency?"":e.currency[0]+"",u=void 0===e.currency?"":e.currency[1]+"",f=void 0===e.decimal?".":e.decimal+"",d=void 0===e.numerals?l:function(e){return function(t){return t.replace(/[0-9]/g,(function(t){return e[+t]}))}}(m.call(e.numerals,String)),x=void 0===e.percent?"%":e.percent+"",v=void 0===e.minus?"\u2212":e.minus+"",b=void 0===e.nan?"NaN":e.nan+"";function j(e){var t=(e=o(e)).fill,n=e.align,r=e.sign,l=e.symbol,m=e.zero,j=e.width,p=e.comma,g=e.precision,w=e.trim,O=e.type;"n"===O?(p=!0,O="g"):s[O]||(void 0===g&&(g=12),w=!0,O="g"),(m||"0"===t&&"="===n)&&(m=!0,t="0",n="=");var k="$"===l?c:"#"===l&&/[boxX]/.test(O)?"0"+O.toLowerCase():"",y="$"===l?u:/[%p]/.test(O)?x:"",N=s[O],E=/[defgprs%]/.test(O);function C(e){var o,c,u,s=k,l=y;if("c"===O)l=N(e)+l,e="";else{var x=(e=+e)<0||1/e<0;if(e=isNaN(e)?b:N(Math.abs(e),g),w&&(e=function(e){e:for(var t,n=e.length,r=1,i=-1;r<n;++r)switch(e[r]){case".":i=t=r;break;case"0":0===i&&(i=r),t=r;break;default:if(!+e[r])break e;i>0&&(i=0)}return i>0?e.slice(0,i)+e.slice(t+1):e}(e)),x&&0===+e&&"+"!==r&&(x=!1),s=(x?"("===r?r:v:"-"===r||"("===r?"":r)+s,l=("s"===O?h[8+i/3]:"")+l+(x&&"("===r?")":""),E)for(o=-1,c=e.length;++o<c;)if(48>(u=e.charCodeAt(o))||u>57){l=(46===u?f+e.slice(o+1):e.slice(o))+l,e=e.slice(0,o);break}}p&&!m&&(e=a(e,1/0));var C=s.length+e.length+l.length,M=C<j?new Array(j-C+1).join(t):"";switch(p&&m&&(e=a(M+e,M.length?j-l.length:1/0),M=""),n){case"<":e=s+e+l+M;break;case"=":e=s+M+e+l;break;case"^":e=M.slice(0,C=M.length>>1)+s+e+l+M.slice(C);break;default:e=M+s+e+l}return d(e)}return g=void 0===g?6:/[gprs]/.test(O)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),C.toString=function(){return e+""},C}return{format:j,formatPrefix:function(e,t){var n,i=j(((e=o(e)).type="f",e)),a=3*Math.max(-8,Math.min(8,Math.floor((n=t,((n=r(Math.abs(n)))?n[1]:NaN)/3)))),c=Math.pow(10,-a),u=h[8+a/3];return function(e){return i(c*e)+u}}}}f=x({thousands:",",grouping:[3],currency:["$",""]}),d=f.format,f.formatPrefix}},function(e){e.O(0,[126,934,303,929,2,35,92,819,774,888,179],(function(){return t=94239,e(e.s=t);var t}));var t=e.O();_N_E=t}]);