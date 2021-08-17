(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[25855],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1377:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"hydra-janitor",title:"hydra janitor",description:"hydra janitor Clean the database of old tokens and login/consent requests"},l=void 0,d={unversionedId:"cli/hydra-janitor",id:"version-v1.10/cli/hydra-janitor",isDocsHomePage:!1,title:"hydra janitor",description:"hydra janitor Clean the database of old tokens and login/consent requests",source:"@site/versioned_docs/version-v1.10/cli/hydra-janitor.md",sourceDirName:"cli",slug:"/cli/hydra-janitor",permalink:"/hydra/docs/cli/hydra-janitor",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-janitor.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1628772392,formattedLastUpdatedAt:"8/12/2021",frontMatter:{id:"hydra-janitor",title:"hydra janitor",description:"hydra janitor Clean the database of old tokens and login/consent requests"},sidebar:"version-v1.10/docs",previous:{title:"hydra clients update",permalink:"/hydra/docs/cli/hydra-clients-update"},next:{title:"hydra keys",permalink:"/hydra/docs/cli/hydra-keys"}},c=[{value:"hydra janitor",id:"hydra-janitor",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Warning",id:"warning",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-janitor"},"hydra janitor"),(0,i.kt)("p",null,"Clean the database of old tokens and login/consent requests"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This command will cleanup any expired oauth2 tokens as well as login/consent\nrequests. This will select records to delete with a limit and delete records in\nbatch to ensure that no table locking issues arise in big production databases."),(0,i.kt)("h3",{id:"warning"},"Warning"),(0,i.kt)("p",null,"This command is in beta. Proceed with caution!"),(0,i.kt)("p",null,"This is a destructive command and will purge data directly from the database.\nPlease use this command with caution if you need to keep historic data for any\nreason."),(0,i.kt)("p",null,"###############"),(0,i.kt)("p",null,"Janitor can be used in several ways."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By passing the database connection string (DSN) as an argument Pass the\ndatabase url (dsn) as an argument to janitor. E.g. janitor\n","<","database-url",">")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By passing the DSN as an environment variable"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"export DSN=...\njanitor -e\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By passing a configuration file containing the DSN janitor -c\n/path/to/conf.yml")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Extra ",(0,i.kt)("em",{parentName:"p"},"optional")," parameters can also be added such as"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"janitor --keep-if-younger 23h --access-lifespan 1h --refresh-lifespan 40h --consent-request-lifespan 10m &lt;database-url&gt;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Running only a certain cleanup"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"janitor --tokens &lt;database-url&gt;\n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"janitor --requests &lt;database-url&gt;\n")),(0,i.kt)("p",{parentName:"li"},"or both"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"janitor --tokens --requests &lt;database-url&gt;\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra janitor [&lt;database-url&gt;] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --access-lifespan duration            Set the access token lifespan e.g. 1s, 1m, 1h.\n      --batch-size int                      Define how many records are deleted with each iteration. (default 100)\n  -c, --config strings                      Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --consent-request-lifespan duration   Set the login/consent request lifespan e.g. 1s, 1m, 1h\n  -h, --help                                help for janitor\n      --keep-if-younger duration            Keep database records that are younger than a specified duration e.g. 1s, 1m, 1h.\n      --limit int                           Limit the number of records retrieved from database for deletion. (default 10000)\n  -e, --read-from-env                       If set, reads the database connection string from the environment variable DSN or config file key dsn.\n      --refresh-lifespan duration           Set the refresh token lifespan e.g. 1s, 1m, 1h.\n      --requests                            This will only run the cleanup on requests and will skip token cleanup.\n      --tokens                              This will only run the cleanup on tokens and will skip requests cleanup.\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra"},"hydra")," - Run and manage ORY Hydra")))}u.isMDXComponent=!0}}]);