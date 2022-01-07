"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61859:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"install",title:"Installation"},s=void 0,u={unversionedId:"install",id:"version-v0.5/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Keto on any system is straightforward. We provide pre-built",source:"@site/versioned_docs/version-v0.5/install.md",sourceDirName:".",slug:"/install",permalink:"/keto/docs/v0.5/install",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.5/install.md",tags:[],version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1590665913,formattedLastUpdatedAt:"5/28/2020",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v0.5/docs",previous:{title:"Introduction",permalink:"/keto/docs/v0.5/"},next:{title:"Configure and Deploy",permalink:"/keto/docs/v0.5/configure-deploy"}},c=[{value:"Docker",id:"docker",children:[],level:2},{value:"macOS",id:"macos",children:[],level:2},{value:"Linux",id:"linux",children:[],level:2},{value:"Windows",id:"windows",children:[],level:2},{value:"Download Binaries",id:"download-binaries",children:[],level:2},{value:"Building from Source",id:"building-from-source",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Installing ORY Keto on any system is straightforward. We provide pre-built\nbinaries, Docker images, and support a number of package managers."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"We recommend using Docker to run ORY Keto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/keto:v0.5.6-alpha.1\n$ docker run --rm -it oryd/keto:v0.5.6-alpha.1 help\n")),(0,a.kt)("h2",{id:"macos"},"macOS"),(0,a.kt)("p",null,"You can install ORY Keto using ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/keto\n$ brew install ory/keto/keto\n$ keto help\n")),(0,a.kt)("h2",{id:"linux"},"Linux"),(0,a.kt)("p",null,"On linux, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/keto/master/install.sh) -b . v0.5.6-alpha.1\n$ ./keto help\n")),(0,a.kt)("p",null,"You may want to move ORY Keto into your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./keto /usr/local/bin/\n$ keto help\n")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("p",null,"You can install ORY Keto using ",(0,a.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-keto https://github.com/ory/scoop-keto.git\n> scoop install keto\n> keto help\n")),(0,a.kt)("h2",{id:"download-binaries"},"Download Binaries"),(0,a.kt)("p",null,"The client and server ",(0,a.kt)("strong",{parentName:"p"},"binaries are downloadable via\n",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/ory/keto/releases"},"GitHub releases")),". There is currently no\ninstaller available. You have to add the Keto binary to the PATH environment\nvariable yourself or put the binary in a location that is already in your\n",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),"."),(0,a.kt)("p",null,"Once installed, you should be able to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ keto help\n")),(0,a.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,a.kt)("p",null,"If you wish to compile ORY Keto yourself, you need to install and set up\n",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.12+")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,a.kt)("p",null,"The following commands check out the latest release tag of ORY Keto, compile it,\nand set up flags so that ",(0,a.kt)("inlineCode",{parentName:"p"},"keto version")," works as expected. Please note that this\nwill only work with a Linux shell like bash or sh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get -d -u github.com/ory/keto\n$ cd $(go env GOPATH)/src/github.com/ory/keto\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/keto help\n")))}d.isMDXComponent=!0}}]);