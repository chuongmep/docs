"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={},o=void 0,r={unversionedId:"Tutorials/SimpleClipper",id:"Tutorials/SimpleClipper",title:"SimpleClipper",description:"\u2702\ufe0f Clipping Tool",source:"@site/docs/Tutorials/SimpleClipper.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/SimpleClipper",permalink:"/docs/Tutorials/SimpleClipper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updateable",permalink:"/docs/api/interfaces/components.Updateable"},next:{title:"SimpleRaycaster",permalink:"/docs/Tutorials/SimpleRaycaster"}},p={},s=[{value:"\u2702\ufe0f Clipping Tool",id:"\ufe0f-clipping-tool",level:3},{value:"\ud83c\udfb2 Creating a Cube Mesh",id:"-creating-a-cube-mesh",level:3},{value:"\u2699\ufe0f Adding Simple Clipper",id:"\ufe0f-adding-simple-clipper",level:3},{value:"\u23cf\ufe0f Creating a Toolbar for the Clipper",id:"\ufe0f-creating-a-toolbar-for-the-clipper",level:3},{value:"\ud83e\udd1d Performing Clipping Events",id:"-performing-clipping-events",level:3},{value:"\ud83e\uddf9 Deleting the Clipping Planes",id:"-deleting-the-clipping-planes",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\ufe0f-clipping-tool"},"\u2702\ufe0f Clipping Tool"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The Clipping Tool is a powerful feature in 3D modelling that helps you dissect 3D objects.\nClipping Tool is useful for inspecting and analyzing objects in detail.\ud83d\udcaa\nIn this tutorial, we will use the Clipping Tool to dissect a Cube using planes and transformation controls.\nThis tutorial will help you add Clipping functionality to your project easily.\ud83d\ude80"),(0,l.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,l.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,l.kt)("h3",{id:"-creating-a-cube-mesh"},"\ud83c\udfb2 Creating a Cube Mesh"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Let's start by adding a Cube, which we can dissect.\nWe will create a ",(0,l.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry"},"Cube"),"\nwith ",(0,l.kt)("inlineCode",{parentName:"p"},"3x3x3")," dimensions and use red color for the material."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst redMaterial = new THREE.MeshStandardMaterial({color: "red"});\nconst redCube = new THREE.Mesh(cubeGeometry, redMaterial);\nredCube.position.set(0, 1.5, 0);\n')),(0,l.kt)("p",null,"Now, we will add the Cube to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Scene"),". We must also add the ",(0,l.kt)("strong",{parentName:"p"},"cube")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"components.meshes"),",\nwhich is simply an array of all the meshes in the Scene \ud83d\uddc4\ufe0f."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"scene.add(redCube);\ncomponents.meshes.push(redCube);\n")),(0,l.kt)("h3",{id:"\ufe0f-adding-simple-clipper"},"\u2699\ufe0f Adding Simple Clipper"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Here comes the interesting part, we will add a Simple Clipper to our scene \ud83e\udd41\nA ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleClipper"},"Simple Clipper"))," requires two things: ",(0,l.kt)("inlineCode",{parentName:"p"},"components")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Simple Plane")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const clipper = new OBC.SimpleClipper(components, OBC.SimplePlane);\n")),(0,l.kt)("admonition",{title:"PLANE WITH TRANSFORMATION CONTROLS AND MORE",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../api/classes/components.SimplePlane"},"Simple Plane"))," is useful in generating planes along with\ncustomizations.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SimpleClipper")," includes everything needed to provide clipping capabilities,\nincluding the ability to build numerous clipping planes.\nSimpleClipper also controls the SimplePlane internally,\nallowing you to execute clipping on any 3D object by just dragging the planes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"components.tools.add(clipper);\nclipper.enabled = true;\n")),(0,l.kt)("admonition",{title:"Adding it to the tools component",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The Tools Component will help you keep your code tidy. For more information about the Tools component, check out\n",(0,l.kt)("a",{parentName:"p",href:"/docs/Tutorials/ToolsComponent"},"its own tutorial"),". \ud83d\udd0d")),(0,l.kt)("h3",{id:"\ufe0f-creating-a-toolbar-for-the-clipper"},"\u23cf\ufe0f Creating a Toolbar for the Clipper"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"We'll make a ",(0,l.kt)("strong",{parentName:"p"},"Toolbar Component")," and set it at the bottom.\nIn addition, we will add a clipper button to this toolbar that will be used to toggle the clipping state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const mainToolbar = new OBC.Toolbar(components, { name: 'Main Toolbar', position: 'bottom' });\nmainToolbar.addButton(clipper.uiElement);\ncomponents.ui.addToolbar(mainToolbar);\n")),(0,l.kt)("p",null,"\ud83c\udf9b\ufe0f Check ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/Tutorials/UIManager"},"Toolbar and UIManager"))," tutorial if you have any doubts!"),(0,l.kt)("h3",{id:"-performing-clipping-events"},"\ud83e\udd1d Performing Clipping Events"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Now, we need a way to create a Clipping Plane on demand, you can do it with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Single Click")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"Double Click")," of a mouse.\nFor this tutorial, we will use ",(0,l.kt)("strong",{parentName:"p"},"Double Click"),", to create a Clipper that will generate a\nplane on the 3D object's face."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"container.ondblclick = () => clipper.create();\n")),(0,l.kt)("admonition",{title:"Raycaster below the hood \ud83c\udfa9",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"We use the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/Tutorials/SimpleRaycaster"},"Simple Raycaster"))," to determine if the intersection has occurred.\nThe clipper places a plane after detecting the face on which the mouse was clicked.\nHere, the SimpleClipper handles everything for you \ud83d\ude0e")),(0,l.kt)("h3",{id:"-deleting-the-clipping-planes"},"\ud83e\uddf9 Deleting the Clipping Planes"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Now that we know how to make multiple clippers, we must also know how to delete them when necessary.\nClipping planes can be removed using ",(0,l.kt)("inlineCode",{parentName:"p"},"clipper.delete()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"clipper.delete(plane)"),", which deletes a single plane.\n",(0,l.kt)("strong",{parentName:"p"},"clipper.delete()")," deletes the plane on which your mouse pointer is now located."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.onkeydown = (event) => {\nif (event.code === 'Delete' || event.code === 'Backspace') {\nclipper.delete();\n}\n}\n")),(0,l.kt)("admonition",{title:"Delete all the Clipping Planes",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u274e If you want to safely delete all the clipping planes that were created you can simply call\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"clipper.deleteAll()")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial! Now you can inspect BIM Models or any 3D Object easily using\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleClipper"},"Clipper Component"))," \ud83e\uddd0\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,l.kt)("iframe",{src:"https://ifcjs.github.io/components/src/core/SimpleClipper/index.html"}))}u.isMDXComponent=!0}}]);