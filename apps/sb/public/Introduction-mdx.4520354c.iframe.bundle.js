/*! For license information please see Introduction-mdx.4520354c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksb=self.webpackChunksb||[]).push([[281],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.0-rc.8_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/blocks/dist/index.mjs"),next_image=__webpack_require__("../../node_modules/.pnpm/next@13.2.4_6m24vuloj5ihw4zc5lbsktc4fu/node_modules/next/image.js"),image_default=__webpack_require__.n(next_image);const code_brackets={src:"static/media/code-brackets.b174d86c.svg",height:48,width:48,blurDataURL:"static/media/code-brackets.b174d86c.svg"},colors={src:"static/media/colors.d8002bff.svg",height:48,width:48,blurDataURL:"static/media/colors.d8002bff.svg"},comments={src:"static/media/comments.99a445bb.svg",height:48,width:48,blurDataURL:"static/media/comments.99a445bb.svg"},direction={src:"static/media/direction.aa124ee4.svg",height:48,width:48,blurDataURL:"static/media/direction.aa124ee4.svg"},flow={src:"static/media/flow.8dcedb2a.svg",height:48,width:48,blurDataURL:"static/media/flow.8dcedb2a.svg"},assets_plugin={src:"static/media/plugin.738c41b2.svg",height:48,width:48,blurDataURL:"static/media/plugin.738c41b2.svg"},repo={src:"static/media/repo.77297c5c.svg",height:48,width:48,blurDataURL:"static/media/repo.77297c5c.svg"},stackalt={src:"static/media/stackalt.5cf1d85a.svg",height:48,width:48,blurDataURL:"static/media/stackalt.5cf1d85a.svg"};const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",br:"br",a:"a",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"@HyezoUI/Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item-img-wrapper {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n\n    a > code {\n      color: #66BF!important;\n      background: #FFEDEF!important;\n    }\n  "}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hyezoui",children:"HyezoUI"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("div",{className:"subheading",children:"한글소개"}),"\n안녕하세요. ",(0,jsx_runtime.jsx)(_components.code,{children:"hyezoUI"}),"는 저의 ",(0,jsx_runtime.jsx)(_components.code,{children:"design system"})," 입니다.",(0,jsx_runtime.jsx)(_components.br,{}),"\n",(0,jsx_runtime.jsx)(_components.code,{children:"Next.js"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"TailwindCSS"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"Zod"})," 를 기반하여 채워가고 있습니다.",(0,jsx_runtime.jsx)(_components.br,{}),"\n","개인적으로 활용하기 위해 확장성과 편의성을 동시에 고민하며 만들고 있어요."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("div",{className:"subheading",children:"패키지"}),"\n모든 컴퍼넌트는 라이브러리 ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.npmjs.com/package/hyezo?activeTab=explore",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.code,{children:"hyezo"})}),"에 담아 배포하고 있습니다.",(0,jsx_runtime.jsx)(_components.br,{}),"\n","빌드에 사용된 커스텀 훅 또한 포함되어 있으며,",(0,jsx_runtime.jsx)(_components.br,{}),"\n","번들링에는 ",(0,jsx_runtime.jsx)(_components.code,{children:"tsup"}),"을 활용하였습니다."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:'pnpm i hyezo\n\nimport "hyezo/ui/styles.css"   // 설치 후 root파일에서(_app.tsx)\n'})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"📦 public\n ┣ 📂 hooks\n ┃ ┣ 📜 index.d.ts\n ┃ ┣ 📜 index.js\n ┃ ┣ 📜 index.mjs\n ┃ ┣ ...\n ┃ ┣ 📜 useZodForm.d.ts\n ┃ ┣ 📜 useZodForm.js\n ┃ ┗ 📜 useZodForm.mjs\n ┣ 📂 ui\n ┃ ┣ 📜 Button.d.ts\n ┃ ┣ 📜 Button.js\n ┃ ┣ 📜 Button.mjs\n ┃ ┣ ...\n ┃ ┣ 📜 index.d.ts\n ┃ ┣ 📜 index.js\n ┃ ┣ 📜 index.mjs\n ┃ ┗ 📜 styles.css\n ┣ 📜 CHANGELOG.md\n ┣ 📜 README.md\n ┗ 📜 package.json\n"})}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:assets_plugin,alt:"plugin"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Presets for popular tools"}),"\nEasy setup for TypeScript, SCSS and more."]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:stackalt,alt:"Build"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Build configuration"}),"\nHow to customize webpack and Babel"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:colors,alt:"colors"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Styling"}),"\nHow to load and configure CSS libraries"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:flow,alt:"flow"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Data"}),"\nProviders and mocking for data libraries"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Learn"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:repo,alt:"repo"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Storybook documentation"}),"\nConfigure, customize, and extend"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:direction,alt:"direction"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"In-depth guides"}),"\nBest practices from leading teams"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:code_brackets,alt:"code"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"GitHub project"}),"\nView the source and add issues"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("div",{className:"link-item-img-wrapper",children:(0,jsx_runtime.jsx)(image_default(),{src:comments,alt:"comments"})}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Discord chat"}),"\nChat with maintainers and the community"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ","\n",(0,jsx_runtime.jsx)("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);