"use strict";(self.webpackChunksb=self.webpackChunksb||[]).push([[664],{"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>n});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/owner.js");function n(...e){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.r)(...e)),[...e])}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>i(t)));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{u(i(t))}),[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>u});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>F});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/owner.js");function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{o.current=t,l.current=r}),[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.r)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign((i=>f(i)),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)}),[e,c,o,l])}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/calculate-active-index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>a,d:()=>x});var e,a=((e=a||{})[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e);function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=null!=l?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex((e=>!n.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((i,c,u)=>!(-1!==s&&u.length-c-1>=s)&&!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,i)=>!(i<=s)&&!n.resolveDisabled(e)));case 3:{let e=t.slice().reverse().findIndex((i=>!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((e=>n.resolveId(e)===r.id));case 5:return null;default:!function f(r){throw new Error("Unexpected object: "+r)}(r)}})();return-1===d?l:d}},"../../packages/utils/src/ui/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),cva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/utils/src/utils/cn.ts"),_ButtonOrLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/utils/src/ui/ButtonOrLink.tsx"),_excluded=["color","fullWidth","outline","size","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonStyles=(0,cva__WEBPACK_IMPORTED_MODULE_1__.j)("flex itmes-center justify-center px-4 border outline-none py-2 rounded-lg font-medium focus:bg-transparent focus:ring-2 hover:bg-transparent dark:hover:bg-transparent disabled:cursor-not-allowed disabled:hover:animate-wiggle duration-300 focus:font-bold",{variants:{color:{blue:"bg-blue-500 focus:text-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:text-blue-500",red:"bg-red-500 focus:text-red-500 focus:ring-red-500 hover:border-red-500 hover:text-red-500",orange:"bg-orange-500 focus:text-orange-500 focus:ring-orange-500 hover:border-orange-500 hover:text-orange-500",emerald:"bg-emerald-500 focus:text-emerald-500 focus:ring-emerald-500 hover:border-emerald-500 hover:text-emerald-500",twitter:"bg-twitter-500 focus:text-twitter-500 focus:ring-twitter-500 hover:border-twitter-500 hover:text-twitter-500",black:"bg-black/90 hover:bg-white hover:text-black hover:border-black focus:text-black focus:ring-black/90"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg"},outline:{true:"bg-transparent dark:bg-transparent hover:text-white",false:"border-transparent text-white"},fullWidth:{true:"w-full"}},compoundVariants:[{color:"blue",outline:!0,className:"border-blue-500 text-blue-500 hover:bg-blue-500"},{color:"red",outline:!0,className:"border-red-500 text-red-500 hover:bg-red-500"},{color:"orange",outline:!0,className:"border-orange-500 text-orange-500 hover:bg-orange-500"},{color:"emerald",outline:!0,className:"border-emerald-500 text-emerald-500 hover:bg-emerald-500"},{color:"twitter",outline:!0,className:"border-twitter-500 text-twitter-500 hover:bg-twitter-500"},{color:"black",outline:!0,className:"border-white/75 text-white/90 hover:bg-white hover:text-black focus:text-black focus:bg-white focus:ring-black"}],defaultVariants:{color:"twitter",size:"xs",fullWidth:!1,outline:!1}});function Button(_ref){var color=_ref.color,fullWidth=_ref.fullWidth,outline=_ref.outline,size=_ref.size,className=_ref.className,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_ButtonOrLink__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonStyles({color,outline,fullWidth,size,className}))},props))}Button.displayName="Button",Button.__docgenInfo={description:"Button component that can be used as a link or button. If `href` is provided, it will be rendered as a children of Next.js `<Link>` component. Otherwise, it will be rendered as a button.\n@params {string} color - The color of the button.\n@params {string} size - The size of the button. It is a combinations of `xs`, `sm`, `md`, `lg`.\n@params {boolean} outline - Whether the button should have an outline & transparent.\n@params {boolean} fullWidth - Whether the button should have a full width.",methods:[],displayName:"Button",composes:["ButtonOrLinkProps","VariantProps"]}},"../../packages/utils/src/ui/ButtonOrLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ButtonOrLink});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_excluded=["href"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ButtonOrLink(_ref){var href=_ref.href,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),isLink=void 0!==href,Button=__jsx("button",props);return isLink?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href,target:"_blank",rel:"noopener noreferrer"},Button):Button}ButtonOrLink.__docgenInfo={description:"This is a base component that will render either a button or a link,\ndepending on the props that are passed to it. The link rendered will\nalso correctly get wrapped in a next/link component to ensure ideal\npage-to-page transitions.",methods:[],displayName:"ButtonOrLink",composes:["Omit"]}},"../../packages/utils/src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.9.1/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"./stories/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,default:()=>Menu_stories});var e,o,react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ButtonOrLink=__webpack_require__("../../packages/utils/src/ui/ButtonOrLink.tsx"),match=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/render.js"),disposables=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/disposables.js"),use_disposables=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_iso_morphic_effect=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_sync_refs=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_id=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-id.js"),keyboard=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/keyboard.js"),calculate_active_index=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/calculate-active-index.js"),bugs=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/focus-management.js"),use_outside_click=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_tree_walker=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js"),open_closed=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/internal/open-closed.js"),use_resolve_button_type=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_owner=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_event=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-event.js"),use_tracked_pointer=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js"),pe=((o=pe||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),de=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(de||{}),me=((e=me||{})[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e);function U(t,i=(o=>o)){let o=null!==t.activeItemIndex?t.items[t.activeItemIndex]:null,s=(0,focus_management.z2)(i(t.items.slice()),(u=>u.dataRef.current.domRef.current)),a=o?s.indexOf(o):null;return-1===a&&(a=null),{items:s,activeItemIndex:a}}let fe={1:t=>1===t.menuState?t:{...t,activeItemIndex:null,menuState:1},0:t=>0===t.menuState?t:{...t,menuState:0},2:(t,i)=>{var a;let o=U(t),s=(0,calculate_active_index.d)(i,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(a=i.trigger)?a:1}},3:(t,i)=>{let s=""!==t.searchQuery?0:1,a=t.searchQuery+i.value.toLowerCase(),n=(null!==t.activeItemIndex?t.items.slice(t.activeItemIndex+s).concat(t.items.slice(0,t.activeItemIndex+s)):t.items).find((d=>{var l;return(null==(l=d.dataRef.current.textValue)?void 0:l.startsWith(a))&&!d.dataRef.current.disabled})),e=n?t.items.indexOf(n):-1;return-1===e||e===t.activeItemIndex?{...t,searchQuery:a}:{...t,searchQuery:a,activeItemIndex:e,activationTrigger:1}},4:t=>""===t.searchQuery?t:{...t,searchQuery:"",searchActiveItemIndex:null},5:(t,i)=>{let o=U(t,(s=>[...s,{id:i.id,dataRef:i.dataRef}]));return{...t,...o}},6:(t,i)=>{let o=U(t,(s=>{let a=s.findIndex((u=>u.id===i.id));return-1!==a&&s.splice(a,1),s}));return{...t,...o,activationTrigger:1}}},G=(0,react.createContext)(null);function F(t){let i=(0,react.useContext)(G);if(null===i){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,F),o}return i}function Te(t,i){return(0,match.E)(i.type,fe,t,i)}G.displayName="MenuContext";let ye=react.Fragment,Ie=(0,render.yV)((function(i,o){let s=(0,react.useReducer)(Te,{menuState:1,buttonRef:(0,react.createRef)(),itemsRef:(0,react.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:u,buttonRef:n},e]=s,d=(0,use_sync_refs.T)(o);(0,use_outside_click.O)([n,u],((R,A)=>{var g;e({type:1}),(0,focus_management.sP)(A,focus_management.tJ.Loose)||(R.preventDefault(),null==(g=n.current)||g.focus())}),0===a);let l=(0,use_event.z)((()=>{e({type:1})})),f=(0,react.useMemo)((()=>({open:0===a,close:l})),[a,l]),M=i,T={ref:d};return react.createElement(G.Provider,{value:s},react.createElement(open_closed.up,{value:(0,match.E)(a,{0:open_closed.ZM.Open,1:open_closed.ZM.Closed})},(0,render.sY)({ourProps:T,theirProps:M,slot:f,defaultTag:ye,name:"Menu"})))})),Me=(0,render.yV)((function(i,o){var g;let s=(0,use_id.M)(),{id:a=`headlessui-menu-button-${s}`,...u}=i,[n,e]=F("Menu.Button"),d=(0,use_sync_refs.T)(n.buttonRef,o),l=(0,use_disposables.G)(),f=(0,use_event.z)((c=>{switch(c.key){case keyboard.R.Space:case keyboard.R.Enter:case keyboard.R.ArrowDown:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame((()=>e({type:2,focus:calculate_active_index.T.First})));break;case keyboard.R.ArrowUp:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame((()=>e({type:2,focus:calculate_active_index.T.Last})))}})),M=(0,use_event.z)((c=>{if(c.key===keyboard.R.Space)c.preventDefault()})),T=(0,use_event.z)((c=>{if((0,bugs.P)(c.currentTarget))return c.preventDefault();i.disabled||(0===n.menuState?(e({type:1}),l.nextFrame((()=>{var b;return null==(b=n.buttonRef.current)?void 0:b.focus({preventScroll:!0})}))):(c.preventDefault(),e({type:0})))})),R=(0,react.useMemo)((()=>({open:0===n.menuState})),[n]),A={ref:d,id:a,type:(0,use_resolve_button_type.f)(i,n.buttonRef),"aria-haspopup":"menu","aria-controls":null==(g=n.itemsRef.current)?void 0:g.id,"aria-expanded":i.disabled?void 0:0===n.menuState,onKeyDown:f,onKeyUp:M,onClick:T};return(0,render.sY)({ourProps:A,theirProps:u,slot:R,defaultTag:"button",name:"Menu.Button"})})),be=render.AN.RenderStrategy|render.AN.Static,Ae=(0,render.yV)((function(i,o){var b,S;let s=(0,use_id.M)(),{id:a=`headlessui-menu-items-${s}`,...u}=i,[n,e]=F("Menu.Items"),d=(0,use_sync_refs.T)(n.itemsRef,o),l=(0,use_owner.i)(n.itemsRef),f=(0,use_disposables.G)(),M=(0,open_closed.oJ)(),T=null!==M?(M&open_closed.ZM.Open)===open_closed.ZM.Open:0===n.menuState;(0,react.useEffect)((()=>{let r=n.itemsRef.current;!r||0===n.menuState&&r!==(null==l?void 0:l.activeElement)&&r.focus({preventScroll:!0})}),[n.menuState,n.itemsRef,l]),(0,use_tree_walker.B)({container:n.itemsRef.current,enabled:0===n.menuState,accept:r=>"menuitem"===r.getAttribute("role")?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(r){r.setAttribute("role","none")}});let R=(0,use_event.z)((r=>{var h,L;switch(f.dispose(),r.key){case keyboard.R.Space:if(""!==n.searchQuery)return r.preventDefault(),r.stopPropagation(),e({type:3,value:r.key});case keyboard.R.Enter:if(r.preventDefault(),r.stopPropagation(),e({type:1}),null!==n.activeItemIndex){let{dataRef:p}=n.items[n.activeItemIndex];null==(L=null==(h=p.current)?void 0:h.domRef.current)||L.click()}(0,focus_management.wI)(n.buttonRef.current);break;case keyboard.R.ArrowDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:calculate_active_index.T.Next});case keyboard.R.ArrowUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:calculate_active_index.T.Previous});case keyboard.R.Home:case keyboard.R.PageUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:calculate_active_index.T.First});case keyboard.R.End:case keyboard.R.PageDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:calculate_active_index.T.Last});case keyboard.R.Escape:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,disposables.k)().nextFrame((()=>{var p;return null==(p=n.buttonRef.current)?void 0:p.focus({preventScroll:!0})}));break;case keyboard.R.Tab:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,disposables.k)().nextFrame((()=>{(0,focus_management.EO)(n.buttonRef.current,r.shiftKey?focus_management.TO.Previous:focus_management.TO.Next)}));break;default:1===r.key.length&&(e({type:3,value:r.key}),f.setTimeout((()=>e({type:4})),350))}})),A=(0,use_event.z)((r=>{if(r.key===keyboard.R.Space)r.preventDefault()})),g=(0,react.useMemo)((()=>({open:0===n.menuState})),[n]),c={"aria-activedescendant":null===n.activeItemIndex||null==(b=n.items[n.activeItemIndex])?void 0:b.id,"aria-labelledby":null==(S=n.buttonRef.current)?void 0:S.id,id:a,onKeyDown:R,onKeyUp:A,role:"menu",tabIndex:0,ref:d};return(0,render.sY)({ourProps:c,theirProps:u,slot:g,defaultTag:"div",features:be,visible:T,name:"Menu.Items"})})),ve=react.Fragment,Se=(0,render.yV)((function(i,o){let s=(0,use_id.M)(),{id:a=`headlessui-menu-item-${s}`,disabled:u=!1,...n}=i,[e,d]=F("Menu.Item"),l=null!==e.activeItemIndex&&e.items[e.activeItemIndex].id===a,f=(0,react.useRef)(null),M=(0,use_sync_refs.T)(o,f);(0,use_iso_morphic_effect.e)((()=>{if(0!==e.menuState||!l||0===e.activationTrigger)return;let p=(0,disposables.k)();return p.requestAnimationFrame((()=>{var v,B;null==(B=null==(v=f.current)?void 0:v.scrollIntoView)||B.call(v,{block:"nearest"})})),p.dispose}),[f,l,e.menuState,e.activationTrigger,e.activeItemIndex]);let T=(0,react.useRef)({disabled:u,domRef:f});(0,use_iso_morphic_effect.e)((()=>{T.current.disabled=u}),[T,u]),(0,use_iso_morphic_effect.e)((()=>{var p,v;T.current.textValue=null==(v=null==(p=f.current)?void 0:p.textContent)?void 0:v.toLowerCase()}),[T,f]),(0,use_iso_morphic_effect.e)((()=>(d({type:5,id:a,dataRef:T}),()=>d({type:6,id:a}))),[T,a]);let R=(0,use_event.z)((()=>{d({type:1})})),A=(0,use_event.z)((p=>{if(u)return p.preventDefault();d({type:1}),(0,focus_management.wI)(e.buttonRef.current)})),g=(0,use_event.z)((()=>{if(u)return d({type:2,focus:calculate_active_index.T.Nothing});d({type:2,focus:calculate_active_index.T.Specific,id:a})})),c=(0,use_tracked_pointer.g)(),b=(0,use_event.z)((p=>c.update(p))),S=(0,use_event.z)((p=>{!c.wasMoved(p)||u||l||d({type:2,focus:calculate_active_index.T.Specific,id:a,trigger:0})})),r=(0,use_event.z)((p=>{!c.wasMoved(p)||u||!l||d({type:2,focus:calculate_active_index.T.Nothing})})),h=(0,react.useMemo)((()=>({active:l,disabled:u,close:R})),[l,u,R]);return(0,render.sY)({ourProps:{id:a,ref:M,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,disabled:void 0,onClick:A,onFocus:g,onPointerEnter:b,onMouseEnter:b,onPointerMove:S,onMouseMove:S,onPointerLeave:r,onMouseLeave:r},theirProps:n,slot:h,defaultTag:ve,name:"Menu.Item"})})),Ze=Object.assign(Ie,{Button:Me,Items:Ae,Item:Se});var transition=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js"),Button=__webpack_require__("../../packages/utils/src/ui/Button.tsx"),_excluded=["children"],__jsx=react.createElement;function Menu(_ref){var children=_ref.children,MenuButton=Ze.Button;return __jsx(Ze,{as:"div",className:"relative"},__jsx(MenuButton,{as:Button.Z},"Menu Button"),__jsx(transition.u,{as:react.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},__jsx(Ze.Items,{className:"absolute left-0 z-20 mt-2 w-56 origin-top-left rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"},children)))}function MenuItem(_ref2){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded);return __jsx(Ze.Item,null,(function(_ref3){var active=_ref3.active;return __jsx(ButtonOrLink.Z,(0,esm_extends.Z)({className:"flex w-full items-center gap-2 px-4 py-2 text-sm text-blue-400 ".concat(active?"bg-gray-300 text-black dark:bg-gray-600":"")},props),children)}))}Menu.displayName="Menu",MenuItem.displayName="MenuItem",Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}},MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",composes:["ButtonOrLinkProps"]};var Menu_stories_jsx=react.createElement;const Menu_stories={title:"UI/Menu",component:Menu};var Template=function Template(args){return Menu_stories_jsx(Menu,args,Menu_stories_jsx(MenuItem,null,"Item 1"),Menu_stories_jsx(MenuItem,null,"Item 2"),Menu_stories_jsx(MenuItem,null,"Item 3"))};Template.displayName="Template";var Example=Template.bind({});Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'function Template(args) {\n  return __jsx(Menu, args, __jsx(MenuItem, null, "Item 1"), __jsx(MenuItem, null, "Item 2"), __jsx(MenuItem, null, "Item 3"));\n}',...Example.parameters?.docs?.source}}}}}]);