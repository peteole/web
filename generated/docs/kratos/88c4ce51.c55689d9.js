(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),s=n(9),a=(n(0),n(328)),i={id:"user-profile-management",title:"User Profile Management"},o={id:"self-service/flows/user-settings/user-profile-management",title:"User Profile Management",description:"Please read through the User Settings Documentation",source:"@site/docs/self-service/flows/user-settings/user-profile-management.mdx",permalink:"/kratos/docs/next/self-service/flows/user-settings/user-profile-management",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-settings/user-profile-management.mdx",version:"next",lastUpdatedBy:"John",lastUpdatedAt:1591798710,sidebar:"docs",previous:{title:"User Settings",permalink:"/kratos/docs/next/self-service/flows/user-settings"},next:{title:"Change Password",permalink:"/kratos/docs/next/self-service/flows/user-settings/change-password"}},c=[{value:"Browser Clients",id:"browser-clients",children:[]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security",id:"security",children:[{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[]},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Before you start")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Please read through the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-settings"}),"User Settings Documentation"),"\nfirst."))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"profile"),' strategy allows a user to change their identity traits\n("profile").'),Object(a.b)("p",null,"The updated traits must be valid against the JSON Schema defined for its\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../../concepts/identity-user-model"}),"Identity Traits"),'. If one or more fields\ndo not validate (e.g. "Not an email"), the profile will not be updated.'),Object(a.b)("p",null,"ORY Kratos will prompt the user to re-authenticate if a privileged trait (e.g.\nemail used to log in) is changed, similar to the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"}),"GitHub sudo mode"),"."),Object(a.b)("p",null,'You can configure how long a session is "privileged" by setting:'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  settings:\n    # Sessions older than a minute requires the user to sign in again before\n    # the password is changed.\n    privileged_session_max_age: 1m\n")),Object(a.b)("p",null,"This strategy does not implement any other flow."),Object(a.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(a.b)("p",null,"Redirecting the browser to the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-settings#user-settings-process-sequence"}),"Self-Service Settings Endpoint"),"\ninitiates the flow. The Settings Request Response Payload always includes a\n",Object(a.b)("inlineCode",{parentName:"p"},"profile")," method:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'9c6473d4-9ffd-44cd-9794-adb82cbe4009"'}),'{\n  "id": "9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n  "expires_at": "2020-05-02T16:06:08.131598Z",\n  "issued_at": "2020-05-02T15:06:08.131599Z",\n  "request_url": "http://127.0.0.1:4433/self-service/browser/flows/settings",\n  "active": "profile",\n  "methods": {\n    "profile": {\n      "method": "profile",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/profile?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "HfvOBEv/D6PbXc89hsoEd0UMfZXKsvQXJzmXZJnq6BsBAwm8zbMKQF4LLZwRL67hPDlViB/qcJtu6yf+klIBeg=="\n          },\n          {\n            "name": "traits.email",\n            "type": "text",\n            "required": false,\n            "value": "xx0bdh@l7zkk8"\n          },\n          {\n            "name": "traits.website",\n            "type": "text",\n            "required": false,\n            "value": "http://github.com/aeneasr"\n          }\n        ]\n      }\n    }\n  },\n  "identity": {\n    "id": "93548b1b-c8dc-4d3e-b19f-cfc6d812a8d0",\n    "traits_schema_id": "default",\n    "traits": {\n      "email": "xx0bdh@l7zkk8",\n      "website": "http://github.com/aeneasr"\n    }\n  },\n  "update_successful": false\n}\n')),Object(a.b)("p",null,"If the form validation fails, an error will be included:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'9c6473d4-9ffd-44cd-9794-adb82cbe4009"'}),"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, ...\n  active: 'profile', // <- this is now set!\n  methods: {\n    profile: {\n      method: 'profile',\n      config: {\n        // action, ...\n        fields: [\n          // csrf_token, ...\n          {\n            name: 'traits.website',\n            type: 'text',\n            required: false,\n            value: 'http://s',\n            messages: [\n              {\n                /* id, type */\n                text: 'length must be >= 10, but got 8'\n              }\n            ]\n          }\n        ]\n      }\n    }\n  },\n  // identity, ...\n  update_successful: false\n}\n")),Object(a.b)("p",null,"A successful flow will be marked with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5",metastring:'title="$ curl http://<kratos-admin>/self-service/browser/flows/requests/settings?request=9c6473d4-9ffd-44cd-9794-adb82cbe4009"',title:'"$',curl:!0,"http://<kratos-admin>/self-service/browser/flows/requests/settings?request":'9c6473d4-9ffd-44cd-9794-adb82cbe4009"'}),"{\n  id: '9c6473d4-9ffd-44cd-9794-adb82cbe4009',\n  // expires_at, active, methods, ...\n  update_successful: true\n}\n")),Object(a.b)("h2",{id:"api-clients"},"API Clients"),Object(a.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(a.b)("h2",{id:"security"},"Security"),Object(a.b)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/133"}),"kratos#133"),".")),Object(a.b)("h3",{id:"account-takeover-defenses"},"Account Takeover Defenses"),Object(a.b)("p",null,"The Settings flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"}),"GitHub sudo mode"),"."))}d.isMDXComponent=!0},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,f=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return n?s.a.createElement(f,o(o({ref:t},l),{},{components:n})):s.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);