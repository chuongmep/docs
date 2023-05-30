"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"Tutorials/PostproductionRenderer",id:"Tutorials/PostproductionRenderer",title:"PostproductionRenderer",description:"\ud83e\uddea Cool Post-Production Effects",source:"@site/docs/Tutorials/PostproductionRenderer.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/PostproductionRenderer",permalink:"/docs/Tutorials/PostproductionRenderer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OrthoPerspectiveCamera",permalink:"/docs/Tutorials/OrthoPerspectiveCamera"},next:{title:"ScreenCuller",permalink:"/docs/Tutorials/ScreenCuller"}},l={},c=[{value:"\ud83e\uddea Cool Post-Production Effects",id:"-cool-post-production-effects",level:3},{value:"\ud83c\udfe2 Adding Fragments",id:"-adding-fragments",level:3},{value:"\ud83c\udf9b\ufe0f Setting Up Post-Production",id:"\ufe0f-setting-up-post-production",level:3},{value:"\u274e Excluding Unwanted Elements",id:"-excluding-unwanted-elements",level:3},{value:"\ud83c\udfac Activating the Post-Production",id:"-activating-the-post-production",level:3},{value:"\ud83d\udd04 Updating Post-Product Effect",id:"-updating-post-product-effect",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-cool-post-production-effects"},"\ud83e\uddea Cool Post-Production Effects"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Post-production effects enrich your 3D scenes. There are several post-production effects, such as\nadding shadows, rendering outlines, adding ambient occlusion and applying bloom, that can enhance\nand make your scene look cool.\ud83c\udf79"),(0,r.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,r.kt)("p",null,"In this tutorial we will use ",(0,r.kt)("strong",{parentName:"p"},"Post-Production Renderer")," to add neat ",(0,r.kt)("strong",{parentName:"p"},"Outlines")," and ",(0,r.kt)("strong",{parentName:"p"},"Ambient Occlusion")," to the 3D Model.\ud83e\uddbe"),(0,r.kt)("h3",{id:"-adding-fragments"},"\ud83c\udfe2 Adding Fragments"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll start by adding a ",(0,r.kt)("strong",{parentName:"p"},"Fragment")," to our scene using Fragment Manager.\nWe'll use a simple fragment for the purposes of this tutorial, but the code is capable of handling big files as well.\ud83c\udfd7\ufe0f"),(0,r.kt)("admonition",{title:"Using Fragment Manager!",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udfcb\ufe0f There is a dedicated tutorial on how to use Fragment Manager to load ",(0,r.kt)("strong",{parentName:"p"},"IFC")," files!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nfragments.load(buffer);\n')),(0,r.kt)("h3",{id:"\ufe0f-setting-up-post-production"},"\ud83c\udf9b\ufe0f Setting Up Post-Production"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll now set up the post-production, which requires modifying the renderer to use the preferences we've specified.\nLet's start by specifying the outline color, we'll set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"0x999999"),". Also, we will pass the\ncamera controls to the post-production object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"components.renderer.postproduction.outlineColor = 0x999999;\ncomponents.renderer.postproduction.setup(components.camera.controls);\n")),(0,r.kt)("h3",{id:"-excluding-unwanted-elements"},"\u274e Excluding Unwanted Elements"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At times, we might have to turn off post-production effects for some elements.\nBy doing this, the scene is kept clean and unnecessary computation is avoided.\ud83d\udc22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const gridMesh = grid.get();\ncomponents.renderer.postproduction.excludedItems.add(gridMesh);\n")),(0,r.kt)("h3",{id:"-activating-the-post-production"},"\ud83c\udfac Activating the Post-Production"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now that set up is complete, we wil activate the post-production effect.\nAlso, we will enable the visibility for post-production layer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postproduction.active")," - Enable or Disable the active status of the post-processing effect"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"postproduction.visible")," - Toggle the visibility of post-processing layer that is created to display the effect.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"components.renderer.postproduction.active = true;\ncomponents.renderer.postproduction.visible = true;\n")),(0,r.kt)("h3",{id:"-updating-post-product-effect"},"\ud83d\udd04 Updating Post-Product Effect"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Every time the ",(0,r.kt)("strong",{parentName:"p"},"camera")," is changed, we also need to update the post-production effect.\ud83c\udfa5\nIn order to achieve this, we will write an easy timeout function that will be called after ",(0,r.kt)("strong",{parentName:"p"},"1000")," milliseconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let timeout;\nfunction updatePostproduction() {\nclearTimeout(timeout);\ncomponents.renderer.postproduction.visible = false;\ntimeout = setTimeout(() => {\ncomponents.renderer.postproduction.active = true;\ncomponents.renderer.postproduction.visible = true;\ncomponents.renderer.postproduction.update();\n}, 1000);\n}\n")),(0,r.kt)("admonition",{title:"Timing the Function Execution",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u23f1\ufe0f Check out ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"},"setTimout")," for more information on\nhow ",(0,r.kt)("strong",{parentName:"p"},"setTimeout")," can be useful when you want to run a function after a certain amount of time!")),(0,r.kt)("p",null,"Now, we will invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePostproduction")," method on mouse events.\ud83d\udce2\nThe ",(0,r.kt)("strong",{parentName:"p"},"updatePostproduction")," function will be invoked each time a user scrolls to zoom-in or zoom-out and whenever any mouse buttons are pressed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.onwheel = () => updatePostproduction();\nwindow.onmousedown = () => updatePostproduction();\nwindow.onmouseup = () => updatePostproduction();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial! Now you know how to add cool effects easily using\nPost Production \ud83d\uddbc\ufe0f\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,r.kt)("iframe",{src:"https://ifcjs.github.io/components/src/navigation/PostproductionRenderer/index.html"}))}d.isMDXComponent=!0}}]);