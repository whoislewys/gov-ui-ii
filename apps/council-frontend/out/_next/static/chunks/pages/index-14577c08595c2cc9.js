(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{87314:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(64741)}])},64741:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Ie},default:function(){return Le}});var r=n(52322),i=n(2784),o=n(97729),a=n.n(o),s=n(69309),u=n(59081),c=n(48975),l=n(72779),f=n.n(l),d=n(1208),h=n(65195),p=n(7690),v=n(47021),m=n(91377),g=n(53440),x=n(72074),y=n(87849),b=n(79165),w=n(50835),j=n(14878),N=n(52610);function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(){var e=P(["Portfolio"]);return k=function(){return e},e}function E(){var e=P(["veFDT"]);return E=function(){return e},e}function S(){var e=P(["",""]);return S=function(){return e},e}function O(){var e=P(["Your Voting Power"]);return O=function(){return e},e}function M(e){var t=e.account,n=e.provider,i=(e.signer,(0,b.p)(t,n)),o=(0,y.g)(t)||"0",a=((0,g.mZ)(t,g.Vm.RETRO).data,(0,j.U)(t));return(0,r.jsxs)(p.Z,{variant:p.T.BLACK,className:"w-full shadow-md xl:max-w-[512px]",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-xl font-bold tracking-widest text-white",children:(0,d.t)(k())}),t&&(0,r.jsxs)("span",{className:"ml-2 text-white",children:["(",(0,r.jsx)(v.Z,{href:(0,m.Gg)(t),text:i||"",className:"inline-flex text-sm font-light text-white"}),")"]})]}),(0,r.jsxs)("div",{className:"mb-8 flex min-h-full flex-col align-bottom",children:[(0,r.jsx)(x.G,{className:"mt-8 w-full",balance:o,label:(0,d.t)(E())}),(0,r.jsx)(x.G,{className:"mt-8 w-full",balance:a,tooltipText:(0,d.t)(S(),w.v.OWNED_VOTING_POWER),label:(0,d.t)(O())}),(0,r.jsx)("div",{className:"mt-4 flex items-center align-middle",children:(0,r.jsx)("div",{className:"mr-8 basis-96",children:(0,r.jsx)(N.u,{account:t})})})]})]})}var A=n(4455),C=n(30156);var D=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))})),I=n(53201);var L=function(e){var t=e.title,n=e.balance,i=e.children,o=e.tooltipContent;return(0,r.jsxs)(p.Z,{className:"flex flex-col lg:flex-1",variant:p.T.BLACK,children:[(0,r.jsxs)("div",{className:"text-fiatWhite flex items-center justify-center",children:[t,o?(0,r.jsx)(I.Z,{content:o,children:(0,r.jsx)(D,{className:"ml-1 h-4 cursor-help"})}):null]}),(0,r.jsx)("div",{className:"text-fiatWhite flex flex-1 items-center justify-center py-4 text-center text-5xl font-extralight",children:n}),i]})},T=n(46718),G=n(10528),R=n(41175),Z=n(58105),B=n(82066),F=n(5563),_=n(64887),z=n(86131);function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=F.Z.addresses.comitiumVault;function W(){var e,t,n=function(){var e=(0,T.SP)(_.En,"VoteChange").data,t=(0,i.useMemo)((function(){if(!e)return"0";var t={};e.forEach((function(e){var n=V(e.args||[R.AddressZero,R.AddressZero,G.O$.from(0)],3),r=n[0],i=n[2],o=t[r]||G.O$.from(0);t[r]=o.add(i)}));var n=G.O$.from(0);return Object.keys(t).forEach((function(e){var r=t[e];n=n.add(r)})),(0,Z.formatEther)(n)}),[null===e||void 0===e?void 0:e.length]);return t}(),r=function(){var e,t=(0,B.useQuery)({queryKey:["votingEscrowVotingPower"],queryFn:function(){return _.e$.totalSupply()}});return(0,Z.formatEther)(null!==(e=t.data)&&void 0!==e?e:G.O$.from(0))}(),o=(e=_.Ng,t=K,(0,z.J8)(e,"balanceOf",{callArgs:[t],enabled:!!t})).data;return+n+ +r+ +(0,Z.formatEther)(o||0)}var q=n(39097),$=n.n(q),J=n(2176);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function X(){var e=Y(["Active Proposals"]);return X=function(){return e},e}function ee(){var e=Y(["Circulating Voting Power"]);return ee=function(){return e},e}function te(){var e=Y(["The total amount of voting power in the system."]);return te=function(){return e},e}function ne(e){var t=e.proposalsJson,n=(0,C.K)().data,i=n?t.proposals.filter((function(e){return e.expiration>n})).length:0,o=(function(){var e=(0,T.SP)(J.HH,"VoteChange").data;console.log("lockingVaultVoteChangeEvents: ",e),(0,T.SP)(_.e$,"Deposit").data;var t=(0,T.SP)(_.e$,"Withdraw").data;console.log("votring escrow with evts: ",t);var n={};null===e||void 0===e||e.forEach((function(e){var t=Q(e.args,3),r=(t[0],t[1]),i=t[2];r in n&&(n[r]=n[r].add(i)),n[r]=i})),Object.values(n).filter((function(e){return!e.isZero()})).length}(),W()),a=(0,A.y8)(Math.round(o));return(0,r.jsxs)("div",{className:"flex flex-col justify-around space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6",children:[(0,r.jsx)(L,{title:(0,r.jsx)($(),{href:"/proposals",children:(0,r.jsx)("a",{className:"underline hover:no-underline",children:(0,d.t)(X())})}),balance:i}),(0,r.jsx)(L,{title:(0,d.t)(ee()),balance:"".concat(a),tooltipContent:(0,d.t)(te())})]})}var re=n(80191),ie=n(32641);function oe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ae(){var e=oe(["Overview | Fiat Consilium Protocol"]);return ae=function(){return e},e}function se(){var e=oe(["Council's Docs."]);return se=function(){return e},e}function ue(){var e=oe(["FAQ"]);return ue=function(){return e},e}function ce(){var e=oe(["What is Consilium?"]);return ce=function(){return e},e}function le(){var e=oe(["Consilium is an on-chain decentralized governance system through which a community can manage a DAO. It gives the community total flexibility over how to distribute Voting Power and allows it to adapt its governance system to the continuously evolving needs of the DAO."]);return le=function(){return e},e}function fe(){var e=oe(["The system also includes the optional structure of a Governance Steering Council (GSC) with added governance powers and responsibilities, all to be decided upon by the community."]);return fe=function(){return e},e}function de(){var e=oe(["This flexibility is possible thanks to the use of Voting Vaults. Learn more in ",""]);return de=function(){return e},e}function he(){var e=oe(["What is a voting vault?"]);return he=function(){return e},e}function pe(){var e=oe(["Voting vaults are smart contracts that allow any programmable logic to be used for allocating voting power to governance participants. Some example metrics include:"]);return pe=function(){return e},e}function ve(){var e=oe(["Reputation or merit-based systems"]);return ve=function(){return e},e}function me(){var e=oe(["User protocol usage metrics"]);return me=function(){return e},e}function ge(){var e=oe(["User governance participation data"]);return ge=function(){return e},e}function xe(){var e=oe(["Token-holding"]);return xe=function(){return e},e}function ye(){var e=oe(["Positions in DeFi protocols (staked assets, collateral, positions, etc.)"]);return ye=function(){return e},e}function be(){var e=oe(["Any other metric or combination of metrics"]);return be=function(){return e},e}function we(){var e=oe(["This gives the community complete modularity and flexibility over how to structure a DAO's governance framework, and provides a way for governance participants to keep their holdings' capital efficiency without sacrificing their voting power in the protocol."]);return we=function(){return e},e}function je(){var e=oe(["How does delegated voting work?"]);return je=function(){return e},e}function Ne(){var e=oe(["You can assign all of your Voting Power in the protocol to someone else, and they can vote on your behalf. This is called Delegation. It's important that you select a delegate who is aligned with your vision for how the protocol should evolve, as your votes would be counted towards their selection."]);return Ne=function(){return e},e}function Pe(){var e=oe(["This alleviates the issues of having to keep up with the multitude of discussions that happen surrounding the protocol, and having to interact with on-chain contracts for each decision that needs to be made. Reducing the governance load on each participant ultimately helps to reduce some of the friction and encourage higher levels of voter participation in governance decisions."]);return Pe=function(){return e},e}function ke(){var e=oe(["Who are the GSC (Governance Steering Council)?"]);return ke=function(){return e},e}function Ee(){var e=oe(["The GSC is a group of delegates, each of whom has reached a pre-established threshold of delegated voting power, giving them additional governance powers within the system, and as a result, additional responsibilities."]);return Ee=function(){return e},e}function Se(){var e=oe(["GSC members can have different special functions (propose votes directly on chain, spend a portion of treasury funds at their discretion, etc.), different responsibilities (DAO2DAO relationships, collaborations, treasury management, community engagement, etc.), and could be compensated for the time and effort that they dedicate to improving the protocol. All of these functions and responsibilities must be defined and ratified through the governance process."]);return Se=function(){return e},e}var Oe=re.iw;var Me=function(e){var t=e.proposalsJson,n=(0,c.Ge)(),i=n.account,o=n.library,s=(0,ie.m)(i,o);return(0,r.jsxs)("div",{className:"h-full w-full space-y-6 xl:max-w-[1024px]",children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:(0,d.t)(ae())})}),(0,r.jsx)("div",{className:"px-8 py-4"}),(0,r.jsx)(ne,{proposalsJson:t}),(0,r.jsxs)("div",{className:"flex w-full grid-cols-2 flex-col justify-center space-y-6 xl:flex-row xl:space-x-6 xl:space-y-0",children:[(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(M,{account:i,signer:s,provider:Oe})}),(0,r.jsx)("div",{className:"flex w-full flex-col gap-6",children:(0,r.jsx)(Ce,{})})]})]})},Ae=(0,r.jsx)(v.Z,{href:h.Z.DOCS,className:"inline-flex !gap-1",children:(0,d.t)(se())},"faq-docs-link");function Ce(){return(0,r.jsxs)(p.Z,{variant:p.T.BLACK,className:"w-full shadow-md xl:max-w-[512px]",children:[(0,r.jsx)("span",{className:"text-xl font-bold tracking-widest text-fiatWhite",children:(0,d.t)(ue())}),(0,r.jsx)("div",{className:"w-full pt-4",children:(0,r.jsxs)("div",{className:"w-full rounded-2xl bg-fiatBlack",children:[(0,r.jsx)(s.p,{as:"div",className:"mt-2",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p.Button,{className:"flex w-full justify-between rounded-lg bg-fiatDarkGray p-4 text-left text-sm font-medium text-fiatWhite hover:bg-fiatDarkGray-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",children:[(0,r.jsx)("span",{children:(0,d.t)(ce())}),(0,r.jsx)(u.Z,{className:f()(t?f()("rotate-180 transform"):"","ml-2 h-5 w-5 transition duration-150 ease-in-out"),"aria-hidden":"true"})]}),(0,r.jsxs)(s.p.Panel,{className:"flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500",children:[(0,r.jsx)("p",{children:(0,d.t)(le())}),(0,r.jsx)("p",{children:(0,d.t)(fe())}),(0,r.jsx)("p",{children:(0,d.jt)(de(),Ae)})]})]})}}),(0,r.jsx)(s.p,{as:"div",className:"mt-2",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p.Button,{className:"flex w-full justify-between rounded-lg bg-fiatDarkGray p-4 text-left text-sm font-medium text-fiatWhite hover:bg-fiatDarkGray-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",children:[(0,r.jsx)("span",{children:(0,d.t)(he())}),(0,r.jsx)(u.Z,{className:f()(t?f()("rotate-180 transform"):"","ml-2 h-5 w-5 transition duration-150 ease-in-out"),"aria-hidden":"true"})]}),(0,r.jsxs)(s.p.Panel,{className:"flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500",children:[(0,r.jsx)("p",{children:(0,d.t)(pe())}),(0,r.jsxs)("ul",{className:"ml-7 flex list-disc flex-col gap-1",children:[(0,r.jsx)("li",{className:"list-item",children:(0,d.t)(ve())}),(0,r.jsx)("li",{children:(0,d.t)(me())}),(0,r.jsx)("li",{children:(0,d.t)(ge())}),(0,r.jsx)("li",{children:(0,d.t)(xe())}),(0,r.jsx)("li",{children:(0,d.t)(ye())}),(0,r.jsx)("li",{children:(0,d.t)(be())})]}),(0,r.jsx)("p",{children:(0,d.t)(we())})]})]})}}),(0,r.jsx)(s.p,{as:"div",className:"mt-2",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p.Button,{className:"flex w-full justify-between rounded-lg bg-fiatDarkGray p-4 text-left text-sm font-medium text-fiatWhite hover:bg-fiatDarkGray-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",children:[(0,r.jsx)("span",{children:(0,d.t)(je())}),(0,r.jsx)(u.Z,{className:f()(t?f()("rotate-180 transform"):"","ml-2 h-5 w-5 transition duration-150 ease-in-out"),"aria-hidden":"true"})]}),(0,r.jsxs)(s.p.Panel,{className:"flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500",children:[(0,r.jsx)("p",{children:(0,d.t)(Ne())}),(0,r.jsx)("p",{children:(0,d.t)(Pe())})]})]})}}),(0,r.jsx)(s.p,{as:"div",className:"mt-2",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p.Button,{className:"flex w-full justify-between rounded-lg bg-fiatDarkGray p-4 text-left text-sm font-medium text-fiatWhite hover:bg-fiatDarkGray-dark focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",children:[(0,r.jsx)("span",{children:(0,d.t)(ke())}),(0,r.jsx)(u.Z,{className:f()(t?f()("rotate-180 transform"):"","ml-2 h-5 w-5 transition duration-150 ease-in-out"),"aria-hidden":"true"})]}),(0,r.jsxs)(s.p.Panel,{className:"flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500",children:[(0,r.jsx)("p",{children:(0,d.t)(Ee())}),(0,r.jsx)("p",{children:(0,d.t)(Se())})]})]})}})]})})]})}var De=n(53322),Ie=!0;function Le(e){var t=e.proposalsJson;return(0,r.jsx)(De.Z,{childrenContainerClassName:"flex justify-center",pageTitle:"Governance Overview",children:(0,r.jsx)(Me,{proposalsJson:t})})}},24545:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(76449),i=n(5563);function o(){var e=i.Z.chainId;return e===r.a_.MAINNET?14496292:(r.a_.GOERLI,0)}},23051:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(58105),i=n(23524);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,r.commify)((0,i.WU)(".".concat(t,"~f"))(+e))}},4455:function(e,t,n){"use strict";n.d(t,{_I:function(){return c},r7:function(){return s},ws:function(){return o},y8:function(){return u},z0:function(){return a}});var r=n(23524),i=n(58105),o=/^-?[0-9]\d*\.?\d*$/;function a(e){return Number.isFinite(e)}function s(e){return Number.isInteger(e)}function u(e){var t=(0,r.WU)(".2s");return e>1e4?t(e).replace("G","B"):(0,i.commify)(e)}function c(e){return e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}},28278:function(e,t,n){"use strict";n.d(t,{Ym:function(){return i},Yx:function(){return c},cy:function(){return o},mA:function(){return s},qu:function(){return a},s9:function(){return r}});var r=1e3,i=86400,o=7*i,a=1e3,s=13.3,u=Date.now(),c=Math.round(u/1e3)},91377:function(e,t,n){"use strict";n.d(t,{Gg:function(){return a},RL:function(){return s}});var r=n(5563),i=n(76449),o=function(){if(r.Z.chainId===i.a_.LOCAL)return"https://app.tryethernal.com";if(r.Z.chainId===i.a_.GOERLI)return"https://goerli.etherscan.io";return"https://etherscan.io"}();function a(e){return"".concat(o,"/address/").concat(e)}var s=r.Z.chainId===i.a_.LOCAL?"".concat(o,"/transaction"):"".concat(o,"/tx")},72074:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var r=n(52322),i=n(72779),o=n.n(i),a=n(59673),s=n(23051),u=n(44e3),c=n(53201);function l(e){var t=e.className,n=e.tooltipText,i=e.tooltipHref,l=e.label,f=e.balance;return(0,r.jsxs)("div",{className:o()("text-white",t),children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mr-2 text-2xl font-extralight",children:(0,s.a)(f,4)}),(0,r.jsx)(u.m,{size:u.J.MEDIUM})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mr-2 text-xl",children:l}),n&&(0,r.jsx)(c.Z,{content:n,children:i?(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:i,className:"underline",children:(0,r.jsx)(a.Z,{className:"h-4"})}):(0,r.jsx)(a.Z,{className:"h-4 cursor-help"})})]})]})}},44e3:function(e,t,n){"use strict";n.d(t,{J:function(){return s.Jh},m:function(){return c}});var r,i=n(52322),o=n(72779),a=n.n(o),s=(n(2784),n(6649));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=e.className,n=e.inline,r=void 0!==n&&n,o=e.size,u=void 0===o?s.Jh.SMALL:o,c=r?"span":"div",l=(0,i.jsx)(c,{className:a()(t,"flex w-max flex-shrink-0 items-center justify-center rounded-full bg-black p-0.5 shadow"),children:(0,i.jsx)(s.ZP,{height:f[u],width:d[u]})});return r?(0,i.jsx)("span",{className:"mx-1 inline-block align-middle",children:l}):l}var l,f=(u(r={},s.Jh.SMALL,"14"),u(r,s.Jh.MEDIUM,"24"),u(r,s.Jh.LARGE,"48"),r),d=(u(l={},s.Jh.SMALL,"14"),u(l,s.Jh.MEDIUM,"24"),u(l,s.Jh.LARGE,"48"),l)},57248:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(52322);function i(e){var t=e.progress,n=e.enableBar,i=e.color,o=Math.min(Math.floor(100*t),100),a=0;return t>1&&(a=Math.round(1/t*100)),(0,r.jsxs)("div",{className:"bg-fiatLavender-dark relative h-3 w-full rounded-full bg-opacity-50 ",children:[(0,r.jsx)("div",{style:{width:"".concat(o,"%")},className:"h-full rounded-full text-center text-xs text-white ".concat(null!==i&&void 0!==i?i:"bg-fiatLavender")}),!!a&&n&&(0,r.jsx)("div",{style:{width:3,height:"200%",left:"".concat(a,"%"),top:"-50%"},className:"bg-principalRoyalBlue absolute top-0 h-full rounded border border-white"})]})}},53201:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(52322),i=n(90198),o=n(72779),a=n.n(o),s=n(78839),u=n.n(s);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=e.popoverClassName,n=e.children,o=e.placement,s=void 0===o?"top":o,l=e.interactionKind,f={placement:s,interactionKind:void 0===l?"hover":l};return(0,r.jsx)(i.u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},e,f,{placement:s,popoverClassName:a()(u().popover,t,"max-w-sm"),children:n}))}},30156:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n(82066),i=n(80191);function o(){return(0,r.useQuery)({queryKey:"latest-block-number",queryFn:function(){return i.iw.getBlockNumber()},refetchInterval:5e3,keepPreviousData:!0,enabled:!!i.iw})}},52610:function(e,t,n){"use strict";n.d(t,{u:function(){return p}});var r=n(52322),i=(n(2784),n(58105)),o=n(1208),a=n(49467),s=n(14878),u=n(57248),c=n(76449),l=n(35727);function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=f(["GSC Eligibility"]);return d=function(){return e},e}function h(){var e=f(["required to join GSC"]);return h=function(){return e},e}function p(e){var t,n=e.account,f=e.gscStatus,p=(0,a.L)().data,v=(0,i.formatEther)(p||0),m=(0,s.U)(n),g=Math.floor(+m/+v*100);return(0,r.jsxs)("div",{className:"mr-3 w-full space-y-1 text-white",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"text-lg",children:(0,o.t)(d())})}),(0,r.jsx)(u.k,{progress:f===l.U.Expiring?100:+m/+v,color:(t=f,t===l.U.Current||t===l.U.Idle?"bg-fiatGreen":t===l.U.Expiring?"bg-deepRed":void 0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{className:"text-sm leading-5",children:["".concat(g,"%")," (",(0,c.Db)(m,4)," /"," ",(0,i.commify)(v)," )"," "]}),(0,r.jsx)("span",{className:"whitespace-nowrap",children:(0,o.t)(h())})]})]})}},9404:function(e,t,n){"use strict";n.d(t,{s:function(){return o}});var r=n(86131),i=n(64887);function o(){return(0,r.J8)(i.TG,"idleDuration",{select:function(e){return e.toNumber()}})}},35727:function(e,t,n){"use strict";n.d(t,{U:function(){return l},h:function(){return d}});var r=n(10528),i=n(58105),o=n(49467),a=n(41771),s=n(14878),u=n(46718),c=n(2176);var l,f=n(49376);!function(e){e[e.NotEligible=0]="NotEligible",e[e.Approaching=1]="Approaching",e[e.Eligible=2]="Eligible",e[e.Expiring=3]="Expiring",e[e.Kicked=4]="Kicked",e[e.Current=5]="Current",e[e.Idle=6]="Idle"}(l||(l={}));function d(e){var t=(0,s.U)(e),n=(0,o.L)().data,d=null!==n&&void 0!==n?n:r.O$.from(0),h=(0,a.B)(e).data,p=function(e){var t=(0,a.B)(e).data,n=(0,u.SP)(c.TG,"Kicked",{callArgs:[e],enabled:!!e}).data;return!t&&!!n&&n.length>0}(e),v=(0,f.q)(e),m=(0,i.parseEther)(t),g=m.gte(d),x=.9*+(0,i.formatEther)(d),y=!d.isZero()&&+(0,i.formatEther)(m)>x&&!g;return h&&!g?{status:l.Expiring,votingPower:t,threshold:d}:h&&v?{status:l.Idle,votingPower:t,threshold:d}:h?{status:l.Current,votingPower:t,threshold:d}:g?{status:l.Eligible,votingPower:t,threshold:d}:p?{status:l.Kicked,votingPower:t,threshold:d}:y?{status:l.Approaching,votingPower:t,threshold:d}:{status:l.NotEligible,votingPower:t,threshold:d}}},49467:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(86131),i=n(64887);function o(){return(0,r.J8)(i.TG,"votingPowerBound",{keepPreviousData:!0})}},41771:function(e,t,n){"use strict";n.d(t,{B:function(){return o}});var r=n(86131),i=n(64887);function o(e){return(0,r.J8)(i.TG,"members",{callArgs:[e],enabled:!!e,select:function(e){return!!e.toNumber()}})}},49376:function(e,t,n){"use strict";n.d(t,{q:function(){return d}});var r=n(46718),i=n(24545),o=n(64887),a=n(94776),s=n.n(a),u=n(82066),c=n(80191);function l(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}var f=n(9404);function d(e){var t=(0,f.s)().data,n=void 0===t?0:t,a=(0,r.SP)(o.TG,"MembershipProved",{fromBlock:(0,i.C)()}).data,d=(void 0===a?[]:a).filter((function(t){var n=t.args;return!(!n||!e)&&n[0]===e})).sort((function(e,t){return t.blockNumber-e.blockNumber}))[0],h=function(e){return(0,u.useQuery)({queryFn:(t=s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.iw.getBlock(e),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(e){l(o,r,i,a,s,"next",e)}function s(e){l(o,r,i,a,s,"throw",e)}a(void 0)}))}),queryKey:["ethereum-block",e]});var t}(null===d||void 0===d?void 0:d.blockHash),p=h.data;return!p||Math.floor(Date.now()/1e3)<p.timestamp+n}},32641:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(2784);function i(e,t){return(0,r.useMemo)((function(){return e?null===t||void 0===t?void 0:t.getSigner(e):void 0}),[e,t])}},50835:function(e,t,n){"use strict";var r;n.d(t,{v:function(){return r}}),function(e){e.OWNED_VOTING_POWER="All voting power allocated to you from voting vaults and delegated veFDT."}(r||(r={}))},41741:function(e,t,n){"use strict";n.d(t,{M0:function(){return h},jg:function(){return p}});var r=n(94776),i=n.n(r),o=n(82066),a=(n(86131),n(59656)),s=n(57036),u=n(58105),c=n(30156),l=n(28278);function f(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){f(o,r,i,a,s,"next",e)}function s(e){f(o,r,i,a,s,"throw",e)}a(void 0)}))}}function h(e,t,n,r,f){var h=(0,c.K)().data,p=n||h,v=r||l.Yx,m=(0,o.useQuery)({queryFn:d(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s.Logger.setLogLevel(u.Logger.levels.OFF),n.next=4,t.callStatic.queryVotePower(e,p,v,f);case 4:return r=n.sent,s.Logger.setLogLevel(u.Logger.levels.WARNING),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),queryKey:["queryVotePower",e,t.address,n],keepPreviousData:!!e,enabled:!!e&&!!p&&!!f}).data;return(0,a.formatEther)(m||0)}function p(e,t,n){var r=(0,c.K)().data,l=n||r,f=(0,o.useQuery)({queryFn:d(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s.Logger.setLogLevel(u.Logger.levels.OFF),n.next=4,t.callStatic.queryVotePowerView(e,l);case 4:return r=n.sent,s.Logger.setLogLevel(u.Logger.levels.WARNING),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),queryKey:["queryVotePower",e,t.address,n],keepPreviousData:!!e,enabled:!!e&&!!l}).data;return(0,a.formatEther)(f||0)}},47025:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var r=n(64887),i=n(41741);function o(e,t,n){return(0,i.M0)(e,r._t,t,n,"0x00")}},14878:function(e,t,n){"use strict";n.d(t,{U:function(){return o},u:function(){return a}});var r=n(30156),i=n(47025);function o(e){return s(e,(0,r.K)().data)}function a(e,t){return s(e,t)}function s(e,t,n){return(0,i.U)(e,t,n).toString()}},46718:function(e,t,n){"use strict";n.d(t,{SP:function(){return c}});var r=n(94776),i=n.n(r),o=n(82066);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function u(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t,n){var r=function(e,t,n){var r=n||{},o=r.enabled,a=void 0===o||o,c=r.staleTime,l=r.cacheTime,f=r.refetchOnWindowFocus,d=r.callArgs,h=r.fromBlock,p=r.toBlock,v=function(e,t,n,r,i){return["contractQueryFilter",t,null===e||void 0===e?void 0:e.address,r,i,n]}(e,t,d,h,p),m=function(){var n,r=(n=i().mark((function n(){var r,o,a,s,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=d||[],s=(r=(o=e).filters)[t].apply(r,u(a)),n.next=6,o.queryFilter(s,h,p);case 6:return c=n.sent,n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();return{queryKey:v,queryFn:m,onError:function(){console.error("Error calling ".concat(t," on: ").concat(null===e||void 0===e?void 0:e.address," with arguments:"),d)},enabled:!!e&&a,staleTime:c,cacheTime:l,refetchOnWindowFocus:f}}(e,t,n);return(0,o.useQuery)(r)}},78839:function(e){e.exports={popover:"Tooltip_popover__0GUcQ"}},69309:function(e,t,n){"use strict";n.d(t,{p:function(){return A}});var r,i,o=n(2784),a=n(3703),s=n(90544),u=n(33401),c=n(80586),l=n(99108),f=n(15426),d=n(47215),h=n(37352),p=n(29833),v=n(55559),m=((i=m||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),g=((r=g||{})[r.ToggleDisclosure=0]="ToggleDisclosure",r[r.CloseDisclosure=1]="CloseDisclosure",r[r.SetButtonId=2]="SetButtonId",r[r.SetPanelId=3]="SetPanelId",r[r.LinkPanel=4]="LinkPanel",r[r.UnlinkPanel=5]="UnlinkPanel",r);let x={0:e=>({...e,disclosureState:(0,a.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},y=(0,o.createContext)(null);function b(e){let t=(0,o.useContext)(y);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,b),t}return t}y.displayName="DisclosureContext";let w=(0,o.createContext)(null);function j(e){let t=(0,o.useContext)(w);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}w.displayName="DisclosureAPIContext";let N=(0,o.createContext)(null);function P(e,t){return(0,a.E)(t.type,x,e,t)}N.displayName="DisclosurePanelContext";let k=o.Fragment,E=(0,s.yV)((function(e,t){let{defaultOpen:n=!1,...r}=e,i=`headlessui-disclosure-button-${(0,c.M)()}`,l=`headlessui-disclosure-panel-${(0,c.M)()}`,f=(0,o.useRef)(null),h=(0,u.T)(t,(0,u.h)((e=>{f.current=e}),void 0===e.as||e.as===o.Fragment)),m=(0,o.useRef)(null),g=(0,o.useRef)(null),x=(0,o.useReducer)(P,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:g,panelRef:m,buttonId:i,panelId:l}),[{disclosureState:b},j]=x;(0,o.useEffect)((()=>j({type:2,buttonId:i})),[i,j]),(0,o.useEffect)((()=>j({type:3,panelId:l})),[l,j]);let N=(0,v.z)((e=>{j({type:1});let t=(0,p.r)(f);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(i):t.getElementById(i);null==n||n.focus()})),E=(0,o.useMemo)((()=>({close:N})),[N]),S=(0,o.useMemo)((()=>({open:0===b,close:N})),[b,N]),O={ref:h};return o.createElement(y.Provider,{value:x},o.createElement(w.Provider,{value:E},o.createElement(d.up,{value:(0,a.E)(b,{0:d.ZM.Open,1:d.ZM.Closed})},(0,s.sY)({ourProps:O,theirProps:r,slot:S,defaultTag:k,name:"Disclosure"}))))})),S=(0,s.yV)((function(e,t){let[n,r]=b("Disclosure.Button"),i=(0,o.useContext)(N),a=null!==i&&i===n.panelId,c=(0,o.useRef)(null),d=(0,u.T)(c,t,a?null:n.buttonRef),p=(0,v.z)((e=>{var t;if(a){if(1===n.disclosureState)return;switch(e.key){case l.R.Space:case l.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case l.R.Space:case l.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}})),m=(0,v.z)((e=>{if(e.key===l.R.Space)e.preventDefault()})),g=(0,v.z)((t=>{var i;(0,f.P)(t.currentTarget)||e.disabled||(a?(r({type:0}),null==(i=n.buttonRef.current)||i.focus()):r({type:0}))})),x=(0,o.useMemo)((()=>({open:0===n.disclosureState})),[n]),y=(0,h.f)(e,c),w=e,j=a?{ref:d,type:y,onKeyDown:p,onClick:g}:{ref:d,id:n.buttonId,type:y,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:p,onKeyUp:m,onClick:g};return(0,s.sY)({ourProps:j,theirProps:w,slot:x,defaultTag:"button",name:"Disclosure.Button"})})),O=s.AN.RenderStrategy|s.AN.Static,M=(0,s.yV)((function(e,t){let[n,r]=b("Disclosure.Panel"),{close:i}=j("Disclosure.Panel"),a=(0,u.T)(t,n.panelRef,(()=>{n.linkedPanel||r({type:4})})),c=(0,d.oJ)(),l=null!==c?c===d.ZM.Open:0===n.disclosureState;(0,o.useEffect)((()=>()=>r({type:5})),[r]),(0,o.useEffect)((()=>{var t;1===n.disclosureState&&(null==(t=e.unmount)||t)&&r({type:5})}),[n.disclosureState,e.unmount,r]);let f=(0,o.useMemo)((()=>({open:0===n.disclosureState,close:i})),[n,i]),h=e,p={ref:a,id:n.panelId};return o.createElement(N.Provider,{value:n.panelId},(0,s.sY)({ourProps:p,theirProps:h,slot:f,defaultTag:"div",features:O,visible:l,name:"Disclosure.Panel"}))})),A=Object.assign(E,{Button:S,Panel:M})},37352:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(2784),i=n(88064);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function a(e,t){let[n,a]=(0,r.useState)((()=>o(e)));return(0,i.e)((()=>{a(o(e))}),[e.type,e.as]),(0,i.e)((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[n,t]),n}},59081:function(e,t,n){"use strict";var r=n(2784);const i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=i},59673:function(e,t,n){"use strict";var r=n(2784);const i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))}));t.Z=i},23524:function(e,t,n){"use strict";function r(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}n.d(t,{WU:function(){return d}});var i,o=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function a(e){if(!(t=o.exec(e)))throw new Error("invalid format: "+e);var t;return new s({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function s(e){this.fill=void 0===e.fill?" ":e.fill+"",this.align=void 0===e.align?">":e.align+"",this.sign=void 0===e.sign?"-":e.sign+"",this.symbol=void 0===e.symbol?"":e.symbol+"",this.zero=!!e.zero,this.width=void 0===e.width?void 0:+e.width,this.comma=!!e.comma,this.precision=void 0===e.precision?void 0:+e.precision,this.trim=!!e.trim,this.type=void 0===e.type?"":e.type+""}function u(e,t){var n=r(e,t);if(!n)return e+"";var i=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+i:i.length>o+1?i.slice(0,o+1)+"."+i.slice(o+1):i+new Array(o-i.length+2).join("0")}a.prototype=s.prototype,s.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var c={"%":(e,t)=>(100*e).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:function(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)},e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>u(100*e,t),r:u,s:function(e,t){var n=r(e,t);if(!n)return e+"";var o=n[0],a=n[1],s=a-(i=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,u=o.length;return s===u?o:s>u?o+new Array(s-u+1).join("0"):s>0?o.slice(0,s)+"."+o.slice(s):"0."+new Array(1-s).join("0")+r(e,Math.max(0,t+s-1))[0]},X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function l(e){return e}var f,d,h=Array.prototype.map,p=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function v(e){var t,n,o=void 0===e.grouping||void 0===e.thousands?l:(t=h.call(e.grouping,Number),n=e.thousands+"",function(e,r){for(var i=e.length,o=[],a=0,s=t[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),o.push(e.substring(i-=s,i+s)),!((u+=s+1)>r));)s=t[a=(a+1)%t.length];return o.reverse().join(n)}),s=void 0===e.currency?"":e.currency[0]+"",u=void 0===e.currency?"":e.currency[1]+"",f=void 0===e.decimal?".":e.decimal+"",d=void 0===e.numerals?l:function(e){return function(t){return t.replace(/[0-9]/g,(function(t){return e[+t]}))}}(h.call(e.numerals,String)),v=void 0===e.percent?"%":e.percent+"",m=void 0===e.minus?"\u2212":e.minus+"",g=void 0===e.nan?"NaN":e.nan+"";function x(e){var t=(e=a(e)).fill,n=e.align,r=e.sign,l=e.symbol,h=e.zero,x=e.width,y=e.comma,b=e.precision,w=e.trim,j=e.type;"n"===j?(y=!0,j="g"):c[j]||(void 0===b&&(b=12),w=!0,j="g"),(h||"0"===t&&"="===n)&&(h=!0,t="0",n="=");var N="$"===l?s:"#"===l&&/[boxX]/.test(j)?"0"+j.toLowerCase():"",P="$"===l?u:/[%p]/.test(j)?v:"",k=c[j],E=/[defgprs%]/.test(j);function S(e){var a,s,u,c=N,l=P;if("c"===j)l=k(e)+l,e="";else{var v=(e=+e)<0||1/e<0;if(e=isNaN(e)?g:k(Math.abs(e),b),w&&(e=function(e){e:for(var t,n=e.length,r=1,i=-1;r<n;++r)switch(e[r]){case".":i=t=r;break;case"0":0===i&&(i=r),t=r;break;default:if(!+e[r])break e;i>0&&(i=0)}return i>0?e.slice(0,i)+e.slice(t+1):e}(e)),v&&0===+e&&"+"!==r&&(v=!1),c=(v?"("===r?r:m:"-"===r||"("===r?"":r)+c,l=("s"===j?p[8+i/3]:"")+l+(v&&"("===r?")":""),E)for(a=-1,s=e.length;++a<s;)if(48>(u=e.charCodeAt(a))||u>57){l=(46===u?f+e.slice(a+1):e.slice(a))+l,e=e.slice(0,a);break}}y&&!h&&(e=o(e,1/0));var S=c.length+e.length+l.length,O=S<x?new Array(x-S+1).join(t):"";switch(y&&h&&(e=o(O+e,O.length?x-l.length:1/0),O=""),n){case"<":e=c+e+l+O;break;case"=":e=c+O+e+l;break;case"^":e=O.slice(0,S=O.length>>1)+c+e+l+O.slice(S);break;default:e=O+c+e+l}return d(e)}return b=void 0===b?6:/[gprs]/.test(j)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),S.toString=function(){return e+""},S}return{format:x,formatPrefix:function(e,t){var n,i=x(((e=a(e)).type="f",e)),o=3*Math.max(-8,Math.min(8,Math.floor((n=t,((n=r(Math.abs(n)))?n[1]:NaN)/3)))),s=Math.pow(10,-o),u=p[8+o/3];return function(e){return i(s*e)+u}}}}f=v({thousands:",",grouping:[3],currency:["$",""]}),d=f.format,f.formatPrefix}},function(e){e.O(0,[126,934,303,929,382,198,35,92,774,888,179],(function(){return t=87314,e(e.s=t);var t}));var t=e.O();_N_E=t}]);