"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=o(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,p[1]=l;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(7462),i=(n(7294),n(3905));const r={id:"components.Component",title:"Class: Component<Type>",sidebar_label:"Component",custom_edit_url:null},p=void 0,l={unversionedId:"api/classes/components.Component",id:"api/classes/components.Component",title:"Class: Component<Type>",description:"components.Component",source:"@site/docs/api/classes/components.Component.md",sourceDirName:"api/classes",slug:"/api/classes/components.Component",permalink:"/docs/api/classes/components.Component",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"components.Component",title:"Class: Component<Type>",sidebar_label:"Component",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CloudProcessor",permalink:"/docs/api/classes/components.CloudProcessor"},next:{title:"Components",permalink:"/docs/api/classes/components.Components"}},s={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4}],m={toc:o},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/components"},"components"),".Component"),(0,i.kt)("p",null,"Components are the building blocks of this library. Everything is a\ncomponent: tools, scenes, objects, cameras, etc.\nAll components must inherit from this class. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," parameter defines\nthe type of the core of this component. For instance, a component containing a"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Type"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Component"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.BaseRenderer"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRenderer"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimpleScene"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleScene"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.ToolComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"ToolComponent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimpleCamera"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleCamera"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimpleRaycaster"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleRaycaster"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimpleGrid"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleGrid"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimpleClipper"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleClipper"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimplePlane"},(0,i.kt)("inlineCode",{parentName:"a"},"SimplePlane"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.SimpleDimensions"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleDimensions"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.FragmentManager"},(0,i.kt)("inlineCode",{parentName:"a"},"FragmentManager"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.FragmentIfcLoader"},(0,i.kt)("inlineCode",{parentName:"a"},"FragmentIfcLoader"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.UIManager"},(0,i.kt)("inlineCode",{parentName:"a"},"UIManager"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.CloudProcessor"},(0,i.kt)("inlineCode",{parentName:"a"},"CloudProcessor"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"enabled"},"enabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"enabled"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether this component is active or not. The behaviour can vary depending\non the type of component. E.g. a disabled dimension tool will stop creating\ndimensions, while a disabled camera will stop moving. A disabled component\nwill not be updated automatically each frame."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:19"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The main identifier of this component. It can be used to retrieve it and index it."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:11"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"get"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")),(0,i.kt)("p",null,"The core of the component. For instance, if it's a camera component, it\ncould be a ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/cameras/Camera"},"THREE.Camera"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Type")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:25"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hasui"},"hasUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,i.kt)("p",null,"Whether is component implements any kind of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.UI"},"UI"),"."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"this is UI"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:48"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Disposable"},"Disposable"),"."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"this is Disposable"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:28"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ishideable"},"isHideable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Hideable"},"Hideable"),"."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,"this is Hideable"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:43"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Resizeable"},"Resizeable"),"."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"this is Resizeable"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:33"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Updateable"},"Updateable"),"."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"this is Updateable"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:38"))}c.isMDXComponent=!0}}]);