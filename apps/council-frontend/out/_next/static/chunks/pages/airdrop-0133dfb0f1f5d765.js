(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{17065:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/airdrop",function(){return n(24266)}])},24266:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return qt}});var r=n(52322),c=n(2784),i=n(97729),a=n.n(i),s=n(48975),l=n(98537),o=n(72779),u=n.n(o),f=n(82668),d=n(62761),x=n(381),m=n(7690),v=n(1208);function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function j(){var e=h(["Next"]);return j=function(){return e},e}function p(){var e=h(["Back"]);return p=function(){return e},e}function b(e){var t=e.onNextStep,n=e.onPrevStep,c=e.nextStepDisabled,i=e.nextStepLabel,a=void 0===i?(0,v.t)(j()):i,s=e.prevStepLabel,l=void 0===s?(0,v.t)(p()):s,o=e.children,f=e.className;return(0,r.jsx)(m.Z,{variant:m.T.DARK_GRAY,className:u()("flex flex-col text-white",f),children:(0,r.jsxs)("div",{className:"flex h-full flex-col justify-between p-2",children:[o,(0,r.jsxs)("div",{className:"flex justify-between pt-6",children:[n&&(0,r.jsx)(d.Z,{onClick:n,variant:x.Wu.WHITE,children:(0,r.jsx)("span",{className:"px-10",children:l})}),(0,r.jsx)(d.Z,{className:"ml-auto",disabled:c,onClick:t,variant:x.Wu.GRADIENT,children:(0,r.jsx)("span",{className:"px-10",children:a})})]})]})})}var N=n(56094),E=n(31675),y=n(73228),g=n(38928),w=n(41007),O=n.n(w),S=n(96102),R=n(56059),A=n(39660);function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function C(){var e=T(["Review transaction"]);return C=function(){return e},e}function I(){var e=T(["Choose a delegate from the list below"]);return I=function(){return e},e}function P(){var e=T(["Name"]);return P=function(){return e},e}function D(){var e=T(["Name / Voting Power"]);return D=function(){return e},e}function _(){var e=T(["Voting Power"]);return _=function(){return e},e}function L(){var e=T(["Choose"]);return L=function(){return e},e}function Z(){var e=T(["Choose Delegate"]);return Z=function(){return e},e}function k(){var e=T(["or"]);return k=function(){return e},e}function z(){var e=T(["Self-delegate"]);return z=function(){return e},e}function W(){var e=T(["Self-delegated!"]);return W=function(){return e},e}function G(){var e=T(["or enter an address"]);return G=function(){return e},e}function M(){var e=T(["Enter delegate address"]);return M=function(){return e},e}function V(){var e=T(["Enter delegate address"]);return V=function(){return e},e}function Y(){var e=T(["Enter delegate address"]);return Y=function(){return e},e}function U(){var e=T(["Invalid address"]);return U=function(){return e},e}function K(e){var t=e.account,n=e.provider,i=e.onNextStep,a=e.onChooseDelegate,s=e.onPrevStep,o=(0,c.useState)(),m=o[0],h=o[1],j=(0,c.useState)(!1),p=j[0],w=j[1],T=(0,c.useState)(),K=T[0],H=T[1],F=(0,A.B)(K,n).data,J=(0,c.useMemo)((function(){return O()(f.f)}),[]),B=void 0===m&&!p&&!F,$=(0,c.useCallback)((function(){p?a(t):F?a(F):void 0!==m&&J[m].address&&a(J[m].address),i()}),[t,F,p,a,i,m,J]),X=(0,c.useCallback)((function(){w(!0);var e=J.findIndex((function(e){return e.address===t}));h(-1===e?void 0:e),H("")}),[t,J]),q=(0,c.useCallback)((function(e){H(e.target.value);var n=J.findIndex((function(t){return t.address===e.target.value}));h(-1===n?void 0:n),t===e.target.value?w(!0):w(!1)}),[t,J]);return(0,r.jsx)(b,{className:"relative",onNextStep:$,nextStepDisabled:B,nextStepLabel:(0,v.t)(C()),onPrevStep:s,children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center space-y-4",children:[(0,r.jsx)(N.Z,{children:(0,v.t)(I())}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("div",{className:"mb-4 grid grid-cols-10 border-b-2 pb-2 font-bold text-white",children:[(0,r.jsx)("span",{className:"col-span-7 ml-4 hidden lg:col-span-4 lg:block",children:(0,v.t)(P())}),(0,r.jsx)("span",{className:"col-span-7 ml-4 lg:col-span-4 lg:hidden",children:(0,v.t)(D())}),(0,r.jsx)("div",{className:"col-span-2 ml-auto mr-14 hidden truncate lg:block",children:(0,r.jsx)("span",{children:(0,v.t)(_())})}),(0,r.jsx)("span",{className:"col-span-3 lg:col-span-4"})]}),(0,r.jsx)("div",{className:"h-[40vh] min-h-[392px] overflow-auto pr-1 shadow",children:(0,r.jsx)("ul",{className:"flex flex-col gap-y-2",children:J.map((function(e,c){var i=function(){h(c),H(""),t===e.address?w(!0):w(!1)},a=c===m;return(0,r.jsx)("li",{children:(0,r.jsx)(g.Z,{provider:n,selected:a,highlightSelected:!0,delegate:e,actionButton:(0,r.jsx)(d.Z,{onClick:i,variant:x.Wu.PRIMARY,disabled:a,className:"inline-flex w-full justify-center",children:(0,v.t)(L())}),profileActionButton:(0,r.jsx)(d.Z,{onClick:i,variant:x.Wu.PRIMARY,disabled:a,className:"inline-flex w-full justify-center",children:(0,v.t)(Z())})})},"".concat(e.address,"-").concat(c,"}"))}))})}),(0,r.jsxs)("div",{className:"mt-6 flex px-4",children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-col space-y-2",children:[(0,r.jsx)(N.Z,{className:"text-center",children:(0,v.t)(k())}),(0,r.jsx)("div",{className:"flex items-center justify-center space-x-4",children:p?(0,r.jsx)("div",{className:u()("text-right"),children:(0,r.jsxs)(y.V,{intent:S.S.SUCCESS,children:[(0,r.jsx)(l.Z,{height:24,className:"mr-2"}),(0,r.jsx)("span",{className:"font-bold",children:(0,v.t)(W())})]})}):(0,r.jsx)(d.Z,{onClick:X,variant:x.Wu.OUTLINE_WHITE,children:(0,v.t)(z())})})]}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col space-y-2",children:[(0,r.jsx)(N.Z,{className:"text-center",children:(0,v.t)(G())}),(0,r.jsxs)("div",{className:"relative flex items-center justify-center space-x-4",children:[(0,r.jsx)(E.Z,{screenReaderLabel:(0,v.t)(M()),id:"delegate-address",name:(0,v.t)(V()),placeholder:(0,v.t)(Y()),error:!!K&&!F,containerClassName:"flex-1",className:u()("text-fiatWhite placeholder-fiatWhite mb-4 h-12 flex-1 text-left",{"pr-12":F}),value:K,onChange:q}),(0,r.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center pr-3",children:K?(0,r.jsx)(R.A,{isValid:!!F,invalidToolipContent:(0,v.t)(U())}):null})]})]})]})]})]})})}var H=n(80531),F=n(44e3),J=n(53140);function B(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function $(){var e=B(["Introducing "," ELFI"]);return $=function(){return e},e}function X(){var e=B(["Contribute to the evolution of the Element DAO"]);return X=function(){return e},e}function q(){var e=B(["With the launch of the Element DAO, the community now leads the\n              future of the protocol."]);return q=function(){return e},e}function Q(){var e=B(["","ELFI airdrop recipients can use their\n              voting power to participate in governance, or delegate their votes\n              to another member."]);return Q=function(){return e},e}function ee(){var e=B(["Connect wallet"]);return ee=function(){return e},e}var te=(0,r.jsx)(F.m,{inline:!0,size:F.J.MEDIUM},"element-icon");function ne(e){var t=e.onNextStep;return(0,H.Z)(t),(0,r.jsxs)(m.Z,{variant:m.T.DARK_GRAY,className:"flex h-full min-h-full w-full flex-col text-center text-white",children:[(0,r.jsx)("div",{className:"flex justify-end p-2"}),(0,r.jsxs)("div",{className:"flex h-full flex-col items-center justify-center space-y-5 p-12",children:[(0,r.jsxs)("div",{className:"flex w-full flex-col items-center justify-center space-y-8 md:w-7/12",children:[(0,r.jsx)("span",{className:"flex items-center text-center text-base font-semibold tracking-wider",children:(0,v.jt)($(),te)}),(0,r.jsx)("div",{className:"text-3xl font-bold",children:(0,v.t)(X())}),(0,r.jsxs)("div",{className:"flex flex-col space-y-8 px-2 text-justify text-base",children:[(0,r.jsx)("p",{className:"inline",children:(0,v.t)(q())}),(0,r.jsx)("p",{className:"inline",children:(0,v.jt)(Q(),te)})]})]}),(0,r.jsx)("div",{className:"flex w-full justify-center space-x-4 pt-12",children:(0,r.jsx)(J.p,{label:(0,v.t)(ee()),variant:x.Wu.GRADIENT})})]})]})}var re=n(53440);function ce(){var e,t,n=(e=["Checking for airdrop rewards..."],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return ce=function(){return n},n}function ie(){return(0,r.jsx)(m.Z,{variant:m.T.DARK_GRAY,className:"flex h-full flex-col items-center justify-center text-center text-white",children:(0,r.jsx)("div",{className:"mb-4 flex animate-pulse flex-col items-center justify-center text-center text-sm",children:(0,r.jsx)("div",{className:"font-semibold tracking-wider",children:(0,v.t)(ce())})})})}function ae(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function se(){var e=ae(["Not eligible for airdrop"]);return se=function(){return e},e}function le(){var e=ae(["No airdrop found"]);return le=function(){return e},e}function oe(){var e=ae(["This wallet has no ","ELFI available to delegate."]);return oe=function(){return e},e}function ue(){var e=ae(["Airdrop amount"]);return ue=function(){return e},e}var fe=(0,r.jsx)(F.m,{className:"bg-paleLily ml-0.5 mr-1 inline-block",inline:!0,size:F.J.MEDIUM},"element-icon-in-body-text");function de(){return(0,r.jsx)(m.Z,{variant:m.T.DARK_GRAY,className:"text-white",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"mb-4 text-right md:mb-0",children:(0,r.jsxs)(y.V,{intent:S.S.WARNING,children:[(0,r.jsx)("span",{className:"font-bold",children:(0,v.t)(se())}),(0,r.jsx)(l.Z,{height:24,className:"ml-4"})]})}),(0,r.jsx)("div",{className:"mb-2 flex items-center justify-center text-3xl font-bold",children:(0,r.jsx)("span",{className:"text-center",children:(0,v.t)(le())})}),(0,r.jsx)("div",{className:"mb-10 flex w-full flex-col items-center justify-center text-center text-base",children:(0,r.jsx)("span",{className:"mb-6 w-full font-bold ",children:(0,v.jt)(oe(),fe)})}),(0,r.jsx)("div",{className:"mb-16 flex flex-col justify-center space-y-10 px-12 md:flex-row md:space-x-10 md:space-y-0",children:(0,r.jsx)(m.Z,{variant:m.T.HACKER_SKY,className:"h-64 w-72 text-center shadow-[0_0_52px_rgba(143,216,231,.7)] md:w-96",children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center p-6",children:[(0,r.jsx)("div",{className:"text-fiatWhite mb-3 text-lg font-bold text-opacity-60",children:(0,v.t)(ue())}),(0,r.jsxs)("div",{className:"text-fiatWhite flex justify-center gap-2 text-center text-5xl font-bold",children:[(0,r.jsx)(F.m,{className:"bg-paleLily mr-2",size:F.J.LARGE}),(0,r.jsx)("span",{children:"0"})]})]})})})]})})}var xe=n(58105),me=n(50334);function ve(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function he(){var e=ve(["Claimable voting power"]);return he=function(){return e},e}function je(){var e=ve([""," ELFI"]);return je=function(){return e},e}function pe(){var e=ve(["0 ELFI"]);return pe=function(){return e},e}function be(e){var t=e.account,n=(0,re.mZ)(t,re.Vm.RETRO).data,c=function(e){if(e)return(0,v.t)(je(),(0,xe.commify)(e));return(0,v.t)(pe())}((0,me.w)(t,n));return(0,r.jsx)(m.Z,{variant:m.T.HACKER_SKY,className:"h-64 text-center shadow-[0_0_52px_rgba(143,216,231,.7)]",children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center p-6",children:[(0,r.jsx)("div",{className:"text-fiatWhite mb-3 text-lg font-bold text-opacity-60",children:(0,v.t)(he())}),(0,r.jsxs)("div",{className:"text-fiatWhite flex justify-center gap-2 text-center text-5xl font-bold",children:[(0,r.jsx)(F.m,{className:"bg-paleLily mr-2",size:F.J.LARGE}),(0,r.jsx)("span",{children:c})]})]})})}function Ne(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ee(){var e=Ne(["Eligible for airdrop"]);return Ee=function(){return e},e}function ye(){var e=Ne(["Congratulations!"]);return ye=function(){return e},e}function ge(){var e=Ne(["You have some ","ELFI to claim."]);return ge=function(){return e},e}function we(){var e=Ne(["You've received this voting\n          power for being an active member of the Element community. We hope to\n          see you continue to contribute to the future of Element. Use or\n          delegate your voting power wisely!"]);return we=function(){return e},e}var Oe=(0,r.jsx)(F.m,{inline:!0,size:F.J.MEDIUM},"element-icon");function Se(e){var t=e.onNextStep,n=e.onPrevStep,c=e.account,i=(0,re.mZ)(c,re.Vm.RETRO),a=i.data;return i.isLoading&&!a?(0,r.jsx)(ie,{}):a?(0,r.jsx)(b,{onPrevStep:n,onNextStep:t,children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"mb-4 text-right md:mb-0",children:(0,r.jsxs)(y.V,{intent:S.S.SUCCESS,children:[(0,r.jsx)("span",{className:"font-bold",children:(0,v.t)(Ee())}),(0,r.jsx)(l.Z,{height:24,className:"ml-4"})]})}),(0,r.jsx)("div",{className:"mb-2 flex items-center justify-center text-3xl font-bold",children:(0,r.jsx)("span",{className:"text-center",children:(0,v.t)(ye())})}),(0,r.jsxs)("div",{className:"mb-10 flex w-full flex-col items-center justify-center text-center text-base",children:[(0,r.jsx)("div",{className:"mb-6 flex w-full items-center justify-center font-bold",children:(0,v.jt)(ge(),Oe)}),(0,r.jsx)("span",{className:"w-3/4 text-justify",children:(0,v.t)(we())})]}),(0,r.jsx)("div",{className:"mb-8 flex flex-col justify-center space-y-10 px-12 md:flex-row md:space-x-10 md:space-y-0",children:(0,r.jsx)(be,{account:c})})]})}):(0,r.jsx)(de,{})}var Re=n(71505),Ae=n(32641),Te=n(81314),Ce=n(34870),Ie=n(69058);function Pe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function De(){var e=Pe(["Choose Delegate"]);return De=function(){return e},e}function _e(){var e=Pe(["What is delegation?"]);return _e=function(){return e},e}function Le(){var e=Pe(["As a participant in the Element DAO, you can use your\n        ","ELFI voting power yourself (i.e., self-delegate),\n        or you can delegate it to another member to represent you and your\n        vision. You can only delegate it to one user, but you can change your\n        selection at any time."]);return Le=function(){return e},e}var Ze=(0,r.jsx)(F.m,{inline:!0,size:F.J.SMALL},"element-icon");function ke(e){var t=e.onNextStep,n=e.onPrevStep;return(0,r.jsx)(b,{onNextStep:t,onPrevStep:n,className:"md:h-[624px]",nextStepLabel:(0,v.t)(De()),children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center space-y-8",children:[(0,r.jsx)(Ie.Z,{children:(0,v.t)(_e())}),(0,r.jsx)("div",{className:"mb-8 w-2/3",children:(0,v.jt)(Le(),Ze)})]})})}var ze=n(41469),We=n(10729),Ge=n(91377),Me=n(17957),Ve=n(65178),Ye=n(79165);function Ue(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ke(){var e=Ue(["Your voting power"]);return Ke=function(){return e},e}function He(){var e=Ue([""," ELFI"]);return He=function(){return e},e}function Fe(){var e=Ue(["will be delegated to"]);return Fe=function(){return e},e}function Je(e){var t=e.account,n=e.provider,c=e.delegateAddress,i=(0,re.mZ)(t,re.Vm.RETRO).data,a=(0,me.w)(t,i),s=(0,Me.G)(c),l=(0,Ye.p)(c,n),o=s?s.name:l;return(0,r.jsx)(m.Z,{variant:m.T.HACKER_SKY,className:"h-64 text-center shadow-[0_0_52px_rgba(143,216,231,.7)]",children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col justify-center px-8 ",children:[(0,r.jsx)("div",{className:"text-fiatWhite font-bold text-opacity-60",children:(0,v.t)(Ke())}),(0,r.jsx)("div",{className:"mb-10",children:(0,r.jsxs)("div",{className:"text-fiatWhite flex items-center justify-center gap-2 font-bold md:text-3xl",children:[(0,r.jsx)(F.m,{className:"bg-paleLily ml-1",size:F.J.MEDIUM}),(0,v.t)(He(),a?(0,xe.commify)(a):0)]})}),(0,r.jsx)("div",{className:"text-fiatWhite font-bold text-opacity-60",children:(0,v.t)(Fe())}),(0,r.jsxs)("div",{className:"text-fiatWhite flex items-center justify-center font-bold md:text-3xl",children:[(0,r.jsx)(Ve._,{className:"flex justify-center",account:c,size:24}),(0,r.jsx)("span",{className:"ml-1",children:o})," "]})]})})}var Be=n(2176),$e=n(52519);var Xe=n(47021),qe=n(31451);function Qe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function et(){var e=Qe(["View on etherscan"]);return et=function(){return e},e}function tt(){var e=Qe(["Confirming transaction... ",""]);return tt=function(){return e},e}function nt(){var e=Qe(["Transaction successfully confirmed"]);return nt=function(){return e},e}function rt(){var e=Qe(["Confirm transaction"]);return rt=function(){return e},e}function ct(){var e=Qe(["Review Transaction"]);return ct=function(){return e},e}function it(e){var t=e.account,n=e.provider,i=e.delegateAddress,a=e.signer,s=e.onPrevStep,l=e.onNextStep,o=(0,c.useRef)(),u=(0,re.mZ)(t,re.Vm.RETRO).data,f=(0,c.useState)(!1),d=f[0],x=f[1],m=(0,me.w)(t,u),h=function(e,t){return(0,$e.E)(Be.e1,"claimAndDelegate",e,t)}(a,{onError:function(e){ze.ZP.error(e.message,{id:o.current})},onTransactionSubmitted:function(e){var t=(0,r.jsx)(Xe.Z,{href:"".concat(Ge.RL,"/").concat(e.hash),text:(0,v.t)(et()),className:"text-fiatWhite"}),n=(0,r.jsx)("div",{children:(0,v.jt)(tt(),t)});o.current=ze.ZP.loading(n),x(!0)},onTransactionMined:function(){ze.ZP.success((0,v.t)(nt()),{id:o.current}),x(!1),l()}}),j=h.mutate,p=(0,c.useCallback)((function(){t&&u&&j([(0,xe.parseEther)(m),i,(0,xe.parseEther)(u.leaf.value),u.proof,t])}),[t,j,m,i,u]);return(0,r.jsx)(b,{onNextStep:p,nextStepDisabled:d||!(0,We.A)(i),nextStepLabel:d?(0,r.jsx)(qe.$,{}):(0,v.t)(rt()),onPrevStep:s,children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(Ie.Z,{className:"mt-8 mb-10 text-center",children:(0,v.t)(ct())}),(0,r.jsx)("div",{className:"mb-10 flex w-full flex-col justify-center space-y-10 px-12 md:flex-row md:space-x-10 md:space-y-0",children:(0,r.jsx)(Je,{account:t,delegateAddress:i,provider:n})})]})})}var at=n(97038),st=n(66573);function lt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ot(){var e=lt(["You claimed and deposited"]);return ot=function(){return e},e}function ut(){var e=lt(["$ELFI tokens"]);return ut=function(){return e},e}function ft(e){var t=e.account,n=(0,st._)(t);return(0,r.jsx)(m.Z,{variant:m.T.HACKER_SKY,className:"h-64 flex-1",children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col",children:[(0,r.jsx)("div",{className:"mb-2 text-lg font-bold text-gray-500",children:(0,v.t)(ot())}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"text-fiatWhite text-2xl font-bold",children:n}),(0,r.jsxs)("div",{className:"flex flex-col items-center text-gray-500",children:[(0,r.jsx)("span",{className:"mb-4",children:(0,v.t)(ut())}),(0,r.jsx)(F.m,{className:"ml-2",size:F.J.LARGE})]})]})]})})}var dt=n(54725),xt=n(13545);function mt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function vt(){var e=mt(["You delegated to"]);return vt=function(){return e},e}function ht(){var e=mt(["Visit dashboard"]);return ht=function(){return e},e}function jt(e){var t=e.account,n=e.provider,c=(0,dt.H)(t),i=(0,Ye.p)(c,n),a=c&&(0,Me.G)(c);return(0,r.jsx)(m.Z,{variant:m.T.HACKER_SKY,className:"h-64 flex-1",children:(0,r.jsxs)("div",{className:"flex h-full w-full flex-col",children:[(0,r.jsx)("div",{className:"mb-2 text-lg font-bold text-gray-500",children:(0,v.t)(vt())}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"text-fiatWhite text-lg font-bold",children:a&&a.name||i}),(0,r.jsxs)("div",{className:"flex flex-col items-center text-gray-500",children:[(0,r.jsx)("span",{className:"mb-4",children:i}),(0,r.jsx)(xt.Z,{link:"/delegate",variant:x.Wu.WHITE,children:(0,v.t)(ht())})]})]})]})})}function pt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function bt(){var e=pt(["Already claimed tokens"]);return bt=function(){return e},e}function Nt(){var e=pt(["Review Claim"]);return Nt=function(){return e},e}function Et(){var e=pt(["You have already claimed the $ELFI tokens in which you were eligible for."]);return Et=function(){return e},e}function yt(){var e=pt(["To change your delegation, you can visit the delegate dashboard live in the main governance system."]);return yt=function(){return e},e}function gt(e){var t=e.account,n=e.provider;return(0,r.jsx)(m.Z,{variant:m.T.DARK_GRAY,className:"flex h-[600px] flex-col text-center text-white",children:(0,r.jsxs)("div",{className:"flex flex-col p-2",children:[(0,r.jsx)("div",{className:"text-right",children:(0,r.jsxs)(y.V,{intent:S.S.WARNING,children:[(0,r.jsx)("span",{className:"font-bold",children:(0,v.t)(bt())}),(0,r.jsx)(at.Z,{height:24,className:"ml-4"})]})}),(0,r.jsx)("div",{className:"mb-10 text-left text-3xl font-bold",children:(0,v.t)(Nt())}),(0,r.jsx)("div",{className:"mb-10 flex w-full justify-center text-base font-bold",children:(0,r.jsx)("span",{className:"w-full md:w-1/2",children:(0,v.t)(Et())})}),(0,r.jsxs)("div",{className:"mb-10 flex w-full flex-col space-y-10 px-12 md:flex-row md:space-x-10 md:space-y-0",children:[(0,r.jsx)(ft,{account:t}),(0,r.jsx)(jt,{account:t,provider:n})]}),(0,r.jsx)("div",{className:"flex w-full justify-center text-base",children:(0,r.jsx)("span",{className:"w-full md:w-1/2",children:(0,v.t)(yt())})})]})})}function wt(e){var t=e.label,n=e.icon;return(0,r.jsx)(m.Z,{interactive:!0,variant:m.T.HACKER_SKY,className:"h-full w-full",children:(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"text-fiatWhite mb-2 text-lg font-bold",children:t}),(0,r.jsx)("div",{className:"flex flex-col items-center",children:n})]})})})}var Ot=n(19902),St=n(58925),Rt=n(73655),At=n(65195),Tt=n(39097),Ct=n.n(Tt),It=n(38128);function Pt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Dt(){var e=Pt(["Delegation Successful!"]);return Dt=function(){return e},e}function _t(){var e=Pt(["Congratulations on\n          delegating your "," ELFI."]);return _t=function(){return e},e}function Lt(){var e=Pt(["Back to Overview"]);return Lt=function(){return e},e}function Zt(){var e=Pt(["Share your airdrop \n        experience on Twitter and join the Element Discord to get more involved \n        in the community and governance system."]);return Zt=function(){return e},e}function kt(){var e=Pt(["I just accepted my portion of responsibility to govern the Element DAO. The experimentation of governance, fixed rates, DeFi and so much more has just begun!"]);return kt=function(){return e},e}function zt(){var e=Pt(["Tweet @element_fi"]);return zt=function(){return e},e}function Wt(){var e=Pt(["Join Discord"]);return Wt=function(){return e},e}function Gt(){var e=Pt(["Visit forum"]);return Gt=function(){return e},e}var Mt=(0,r.jsx)(F.m,{className:"mx-1 md:mx-2",size:F.J.MEDIUM},"element-icon");function Vt(){return(0,r.jsx)(m.Z,{variant:m.T.DARK_GRAY,className:"flex h-full flex-col text-center text-white",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center p-6",children:[(0,r.jsx)("h2",{className:"mb-6 text-3xl font-bold",children:(0,v.t)(Dt())}),(0,r.jsx)("div",{className:"mb-10 flex w-full flex-col items-center space-y-3 text-base",children:(0,r.jsx)("p",{className:"flex justify-center font-bold",children:(0,v.jt)(_t(),Mt)})}),(0,r.jsx)(Ct(),{href:"/",children:(0,r.jsx)("a",{className:"mb-10 w-2/3",children:(0,r.jsx)(wt,{label:(0,v.t)(Lt()),icon:(0,r.jsx)(It.ZP,{className:"h-8 w-8"})})})}),(0,r.jsx)("p",{className:"mb-4 w-full text-justify md:w-2/3",children:(0,v.t)(Zt())}),(0,r.jsxs)("div",{className:"flex w-full space-x-4",children:[(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"flex-1",href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent((0,v.t)(kt()))),children:(0,r.jsx)(wt,{label:(0,v.t)(zt()),icon:(0,r.jsx)(Ot.Z,{})})}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:At.Z.DISCORD,className:"flex-1",children:(0,r.jsx)(wt,{label:(0,v.t)(Wt()),icon:(0,r.jsx)(St.Z,{})})}),(0,r.jsx)("a",{href:At.Z.FORUM,className:"flex-1",children:(0,r.jsx)(wt,{label:(0,v.t)(Gt()),icon:(0,r.jsx)(Rt.Z,{})})})]})]})})}var Yt,Ut=n(97497);function Kt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ht(){var e=Kt(["Element Airdrop | Fiat Council Protocol"]);return Ht=function(){return e},e}function Ft(){var e=Kt(["View airdrop"]);return Ft=function(){return e},e}function Jt(){var e=Kt(["Choose delegate"]);return Jt=function(){return e},e}function Bt(){var e=Kt(["Review Transaction"]);return Bt=function(){return e},e}function $t(){var e=(0,s.Ge)(),t=e.account,n=e.active,i=e.library,l=(0,Ae.m)(t,i),o=(0,re.mZ)(null===t||void 0===t?void 0:t.toLowerCase(),re.Vm.RETRO).data,u=(0,me.w)(t,o),f=(0,c.useState)(),d=f[0],x=f[1],m=(0,Ut.Z)({steps:[Yt.START_AIRDROP,Yt.AIRDROP_PREVIEW,Yt.DELEGATE_INSTRUCTIONS,Yt.CHOOSE_DELEGATE,Yt.REVIEW_TRANSACTION,Yt.DELEGATE_COMPLETE,Yt.ALREADY_CLAIMED]}),h=m.currentStep,j=m.canViewStep,p=m.getStepPath,b=m.getStepStatus,N=m.goToNextStep,E=m.goToPreviousStep,y=m.goToStep,g=function(e){var t=e.map((function(e){return b(e)}));return t.includes(Ut.k.CURRENT)?Te.k.CURRENT:t.includes(Ut.k.PENDING)?Te.k.PENDING:Te.k.COMPLETE};return(0,r.jsxs)("div",{className:"flex w-full max-w-4xl flex-1 flex-col items-center gap-4",children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:(0,v.t)(Ht())})}),(0,r.jsx)("div",{className:"w-[600px] max-w-full",children:(0,r.jsxs)(Re.Z,{className:"w-full",children:[(0,r.jsx)(Te.$,{stepLabel:"1",status:g([Yt.START_AIRDROP,Yt.AIRDROP_PREVIEW]),href:p(Yt.START_AIRDROP),children:(0,v.t)(Ft())}),(0,r.jsx)(Ce.a,{}),(0,r.jsx)(Te.$,{stepLabel:"2",status:g([Yt.DELEGATE_INSTRUCTIONS,Yt.CHOOSE_DELEGATE]),href:j(Yt.DELEGATE_INSTRUCTIONS)?p(Yt.DELEGATE_INSTRUCTIONS):void 0,children:(0,v.t)(Jt())}),(0,r.jsx)(Ce.a,{}),(0,r.jsx)(Te.$,{stepLabel:"3",status:g([Yt.REVIEW_TRANSACTION]),href:j(Yt.REVIEW_TRANSACTION)?p(Yt.REVIEW_TRANSACTION):void 0,children:(0,v.t)(Bt())})]})}),(0,r.jsx)("div",{className:"w-full",children:function(){switch(h){case Yt.START_AIRDROP:default:return(0,r.jsx)(ne,{account:t,library:i,walletConnectionActive:n,onNextStep:function(){!function(e,t){return e&&(0,xe.parseEther)(t).isZero()}(o,u)?N():y(Yt.ALREADY_CLAIMED)}});case Yt.ALREADY_CLAIMED:return(0,r.jsx)(gt,{account:t,provider:i});case Yt.AIRDROP_PREVIEW:return(0,r.jsx)(Se,{account:t,onNextStep:N});case Yt.DELEGATE_INSTRUCTIONS:return(0,r.jsx)(ke,{account:t,onPrevStep:E,onNextStep:N});case Yt.CHOOSE_DELEGATE:return(0,r.jsx)(K,{account:t,provider:i,onChooseDelegate:x,onPrevStep:E,onNextStep:N});case Yt.REVIEW_TRANSACTION:return(0,r.jsx)(it,{account:t,provider:i,signer:l,delegateAddress:d,onPrevStep:E,onNextStep:N});case Yt.DELEGATE_COMPLETE:return(0,r.jsx)(Vt,{})}}()})]})}!function(e){e.START_AIRDROP="start",e.AIRDROP_PREVIEW="preview",e.DELEGATE_INSTRUCTIONS="instructions",e.CHOOSE_DELEGATE="delegate",e.REVIEW_TRANSACTION="transaction",e.DELEGATE_COMPLETE="complete",e.ALREADY_CLAIMED="claimed"}(Yt||(Yt={}));var Xt=n(53322);function qt(){return(0,r.jsx)(Xt.Z,{showSidebar:!0,childrenContainerClassName:"flex justify-center",children:(0,r.jsx)($t,{})})}},13545:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(52322),c=(n(2784),n(72779)),i=n.n(c),a=n(39097),s=n.n(a),l=n(381);function o(e){var t=e.link,n=e.variant,c=e.round,a=e.className,o=e.children,u=(0,l.Hx)({variant:n,round:c});return(0,r.jsx)(s(),{href:t,children:(0,r.jsx)("a",{className:i()(u,"cursor-pointer",a),children:o})})}},69058:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(52322),c=n(72779),i=n.n(c);function a(e){var t=e.className,n=e.children;return(0,r.jsx)("h1",{className:i()("text-3xl font-bold",t),children:n})}},34870:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(52322);function c(){return(0,r.jsx)("div",{className:"bg-principalRoyalBlue mt-5 flex h-0.5 w-24 opacity-50"})}},81314:function(e,t,n){"use strict";n.d(t,{$:function(){return d},k:function(){return r}});var r,c=n(52322),i=n(39097),a=n.n(i),s=n(72779),l=n.n(s);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function d(e){var t=e.stepLabel,n=e.status,i=e.children,a=e.href,s=a?x:"div";return(0,c.jsxs)(s,{className:"flex-1",href:a,children:[(0,c.jsx)("div",{className:"mb-2 flex h-10 items-center justify-center",children:(0,c.jsx)(m,{status:n,label:t})}),(0,c.jsx)("div",{className:l()("text-fiatWhite flex items-center justify-center text-center font-semibold",{"text-opacity-50":n===r.PENDING}),children:i})]})}function x(e){var t=e.href,n=e.children,r=e.className,i=f(e,["href","children","className"]);return(0,c.jsx)(a(),{href:t,children:(0,c.jsx)("a",u({},i,{className:l()("block",r),children:n}))})}function m(e){var t=e.label,n=e.status;return(0,c.jsx)("div",{className:l()("border-principalRoyalBlue flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",{"bg-principalRoyalBlue":n===r.COMPLETE,"border-opacity-50":n===r.PENDING}),children:(0,c.jsx)("span",{className:l()("font-semibold","complete"===n?"text-white":"text-fiatWhite",{"text-opacity-50":n===r.PENDING}),children:t})})}!function(e){e.COMPLETE="complete",e.CURRENT="current",e.PENDING="pending"}(r||(r={}))},71505:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(52322),c=n(72779),i=n.n(c);n(2784);function a(e){var t=e.className,n=e.children;return(0,r.jsx)("div",{className:i()("flex",t),children:n})}},54725:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(86131),c=n(23981);function i(e){var t=(0,r.J8)(c.e$,"locked",{callArgs:[e],enabled:!!e}).data;return t&&t[3]?t[3]:""}},97497:function(e,t,n){"use strict";n.d(t,{k:function(){return r},Z:function(){return u}});var r,c=n(2784),i=n(5632);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,c=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw c}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(){var e=(0,i.useRouter)().query;return(0,c.useMemo)((function(){return Object.entries(e).reduce((function(e,t){var n=l(t,2),r=n[0],c=n[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},e,s({},r,Array.isArray(c)?c.slice(-1)[0]:c))}),{})}),[e])}function u(e){var t=(0,c.useRef)(e||{}).current,n=t.paramName,a=void 0===n?"step":n,s=t.initialCompleted,l=void 0===s?0:s,u=t.steps,f=(0,i.useRouter)(),d=f.pathname,x=f.push,m=f.replace,v=o()[a],h=(0,c.useRef)({safePush:x,safeReplace:m}).current,j=h.safePush,p=h.safeReplace,b=(0,c.useState)(l),N=b[0],E=b[1],y=(0,c.useMemo)((function(){return u?v||u[0]:v?parseInt(v):1}),[v,u]),g=(0,c.useCallback)((function(e){return"number"===typeof e?e:u?u.indexOf(e)+1:0}),[u]),w=(0,c.useCallback)((function(e){var t="".concat(d,"?").concat(a,"=");return u?"".concat(t).concat("number"===typeof e?u[e-1]:e):"".concat(d,"?").concat(a,"=").concat(e)}),[d,a,u]),O=(0,c.useCallback)((function(e){return g(e)<g(y)?r.COMPLETE:g(e)>g(y)?r.PENDING:r.CURRENT}),[g,y]),S=(0,c.useCallback)((function(e){var t=g(e);return t>0&&t<=N+1}),[g,N]),R=(0,c.useCallback)((function(e){E((function(t){return Math.max(t,g(e))}))}),[g]),A=(0,c.useCallback)((function(e){R(g(e)-1),j(w(e))}),[j,w,R,g]),T=(0,c.useCallback)((function(){A(g(y)-1)}),[A,g,y]),C=(0,c.useCallback)((function(){A(g(y)+1)}),[A,g,y]);return(0,c.useEffect)((function(){S(y)||p(w(N+1),void 0,{shallow:!0})}),[v,S,y,p,w,N]),{canViewStep:S,completedSteps:N,completeStep:R,currentStep:y,getStepNumber:g,getStepPath:w,getStepStatus:O,goToNextStep:C,goToPreviousStep:T,goToStep:A,setCompletedSteps:E}}!function(e){e[e.COMPLETE=0]="COMPLETE",e[e.CURRENT=1]="CURRENT",e[e.PENDING=2]="PENDING"}(r||(r={}))},97038:function(e,t,n){"use strict";var r=n(2784);const c=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",clipRule:"evenodd"}))}));t.Z=c}},function(e){e.O(0,[126,934,303,929,382,198,798,49,7,35,92,819,682,943,774,888,179],(function(){return t=17065,e(e.s=t);var t}));var t=e.O();_N_E=t}]);