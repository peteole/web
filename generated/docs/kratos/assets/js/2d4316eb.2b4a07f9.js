(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(549)),o={id:"ui-user-interface",title:"User Interface"},s={unversionedId:"concepts/ui-user-interface",id:"concepts/ui-user-interface",isDocsHomePage:!1,title:"User Interface",description:"Ory Kratos has no user interface included. Instead, it defines HTTP flows and",source:"@site/docs/concepts/ui-user-interface.md",sourceDirName:"concepts",slug:"/concepts/ui-user-interface",permalink:"/kratos/docs/next/concepts/ui-user-interface",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/ui-user-interface.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619686742,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"ui-user-interface",title:"User Interface"},sidebar:"docs",previous:{title:"Terminology",permalink:"/kratos/docs/next/concepts/terminology"},next:{title:"Identity Data Model",permalink:"/kratos/docs/next/concepts/identity-data-model"}},l=[{value:"Administrative User Interface (Admin UI)",id:"administrative-user-interface-admin-ui",children:[]},{value:"Self-service User Interface (SSUI)",id:"self-service-user-interface-ssui",children:[{value:"UI Data Models",id:"ui-data-models",children:[]}]}],c={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ory Kratos has no user interface included. Instead, it defines HTTP flows and\nAPIs that make it simple to write your own UI in a variety of languages and\nframeworks."),Object(i.b)("p",null,"The following two examples are typical UIs used in connection with Ory Kratos."),Object(i.b)("h2",{id:"administrative-user-interface-admin-ui"},"Administrative User Interface (Admin UI)"),Object(i.b)("p",null,"The AUI might show all of the identities in the system and provide features to\nadministrators such as editing profiles, resetting passwords, and so on."),Object(i.b)("p",null,"At present, there is no Open Source AUI for Ory Kratos."),Object(i.b)("h2",{id:"self-service-user-interface-ssui"},"Self-service User Interface (SSUI)"),Object(i.b)("p",null,'The SSUI renders forms such as "Login", "Registration", "Update your profile",\n"Recover access to your account", and others. The following provides more\nreference for SSUI at\n',Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"github.com/ory/kratos-selfservice-ui-node"),"."),Object(i.b)("p",null,"The SSUI can be built in any programming language including Java, Node, or\nPython and can be run both a server or a end-user device for example a browser,\nor a mobile phone. Implementing a SSUI is simple and straight forward. There is\nno complex authentication mechanism required and no need to worry about possible\nattack vectors such as CSRF or Session Attacks since Ory Kratos provides the\npreventive measures built in."),Object(i.b)("p",null,"Chapter ",Object(i.b)("a",{parentName:"p",href:"/kratos/docs/next/self-service"},"Self-Service Flows")," contains further information\non APIs and flows related to the SSUI, and build self-service applications."),Object(i.b)("h3",{id:"ui-data-models"},"UI Data Models"),Object(i.b)("p",null,"To make UI customization easy, Ory Kratos prepares all the necessary data for\nforms that need to be shown during e.g. login, registration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9b527900-2199-4221-9252-7971b3362282",\n  "type": "browser",\n  "expires_at": "2021-04-28T13:55:36.046466067Z",\n  "issued_at": "2021-04-28T12:55:36.046466067Z",\n  "ui": {\n    "action": "http://127.0.0.1:4433/self-service/settings?flow=9b527900-2199-4221-9252-7971b3362282",\n    "method": "POST",\n    "nodes": [\n      {\n        "type": "input",\n        "group": "default",\n        "attributes": {\n          "name": "csrf_token",\n          "type": "hidden",\n          "value": "U3r/lgEfT8rA1Lg0Eeo06oGO8mX6T4TKoe/z7rbInhvYeacbRg0IW9zrqnpU1wmQJXKiekNzdLnypx5naHXoPg==",\n          "required": true,\n          "disabled": false\n        },\n        "messages": null,\n        "meta": {}\n      }\n    ]\n  }\n}\n')),Object(i.b)("h4",{id:"node-groups"},"Node Groups"),Object(i.b)("p",null,"Nodes are grouped (using the ",Object(i.b)("inlineCode",{parentName:"p"},"group"),' key) based on the source that generated the\nnode. Sources are the different methods such as "password" ("Sign in/up with ID\n& assword"), "oidc" (Social Sign In), "link" (Password reset and email\nverification), "profile" ("Update your profile") and the "default" group which\ntypically contains the CSRF token.'),Object(i.b)("p",null,"You can use the node group to filter out items, re-arrange them, render them\ndifferently - up to you!"),Object(i.b)("h4",{id:"node-types"},"Node Types"),Object(i.b)("p",null,"The first (and for now only) node type is the ",Object(i.b)("inlineCode",{parentName:"p"},"input")," type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "input",\n  "group": "default",\n  "attributes": {\n    "name": "csrf_token",\n    "type": "hidden",\n    "value": "U3r/lgEfT8rA1Lg0Eeo06oGO8mX6T4TKoe/z7rbInhvYeacbRg0IW9zrqnpU1wmQJXKiekNzdLnypx5naHXoPg==",\n    "required": true,\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {}\n}\n')),Object(i.b)("p",null,"It contains different attributes which you can map 1:1 to an HTML form:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<input\n  type="hidden"\n  name="csrf_token"\n  value="U3r/lgEfT8rA1Lg0Eeo06oGO8mX6T4TKoe/z7rbInhvYeacbRg0IW9zrqnpU1wmQJXKiekNzdLnypx5naHXoPg=="\n  required\n/>\n')),Object(i.b)("p",null,"Similarly, other form input types can be sent:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.email",\n      "type": "email",\n      "value": "foo@ory.sh",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "E-Mail",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "method",\n      "type": "submit",\n      "value": "profile",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070003,\n        "text": "Save",\n        "type": "info"\n      }\n    }\n  }\n]\n')),Object(i.b)("p",null,"As you can see, some fields even include ",Object(i.b)("inlineCode",{parentName:"p"},"meta.label")," information which you can\nuse for the labels:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<fieldset>\n  <input type="email" name="traits.email" value="foo@ory.sh" />\n  <span>E-Mail</span>\n</fieldset>\n<fieldset>\n  <input type="submit" name="method" value="profile" />\n  <span>Save</span>\n</fieldset>\n')),Object(i.b)("h4",{id:"node-order-and-labels"},"Node Order and Labels"),Object(i.b)("p",null,"For all traits, the labels and orders are taken from the Identity JSON Schema. A\nJSON Schema such as"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "website": {\n          "title": "Website",\n          "type": "string",\n          "format": "uri",\n          "minLength": 10\n        },\n        "consent": {\n          "title": "Consent",\n          "const": true\n        },\n        "newsletter": {\n          "title": "Newsletter",\n          "type": "boolean"\n        }\n      },\n      "required": ["email", "website"],\n      "additionalProperties": false\n    }\n  }\n}\n')),Object(i.b)("p",null,"will generate the following fields - take note that the order of the JSON Schema\naffects the order of the nodes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.email",\n      "type": "email",\n      "value": "foo@ory.sh",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "E-Mail",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.name.first",\n      "type": "text",\n      "value": "Foo",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "First Name",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.name.last",\n      "type": "text",\n      "value": "Bar",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "Last Name",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "method",\n      "type": "submit",\n      "value": "profile",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070003,\n        "text": "Save",\n        "type": "info"\n      }\n    }\n  }\n]\n')),Object(i.b)("p",null,"Generally, submit buttons are the last node in a group. If you wish to have more\nflexibility with regards to order or labeling the best option is to implement\nthis in your UI using map, filter, and other JSON transformation functions."),Object(i.b)("h4",{id:"messages"},"Messages"),Object(i.b)("p",null,'Ory Kratos helps users understand what is happening by providing messages that\nexplain what went wrong or what needs to be done. Examples are "The provided\ncredentials are invalid", "Missing property email" and similar.'),Object(i.b)("p",null,"Typically login, registration, settings, ... flows include such messages on\ndifferent levels:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"At the root level, indicating that the message affects the whole request\n(e.g. request expired)"),Object(i.b)("li",{parentName:"ol"},"At the method (password, oidc, profile) level, indicating that the message\naffects a specific method / form."),Object(i.b)("li",{parentName:"ol"},"At the field level, indicating that the message affects a form field (e.g.\nvalidation errors).")),Object(i.b)("p",null,"Each message has a layout of:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json5"},"{\n  id: 1234,\n  // This ID will not change and can be used to translate the message or use your own message content.\n  text: 'Some default text',\n  // A default text in english that you can display if you do not want to customize the message.\n  context: {}\n  // A JSON object which may contain additional fields such as `expires_at`. This is helpful if you want to craft your own messages.\n}\n")),Object(i.b)("p",null,"We will list all messages, their contents, their contexts, and their IDs at a\nlater stage. For now please check out the code in the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/kratos/tree/master/text"},"text module"),"."),Object(i.b)("p",null,"The message ID is a 7-digit number (",Object(i.b)("inlineCode",{parentName:"p"},"xyyzzzz"),") where"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x")," is the message type which is either ",Object(i.b)("inlineCode",{parentName:"li"},"1")," for an info message (e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"1020000"),"), ",Object(i.b)("inlineCode",{parentName:"li"},"4")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"4020000"),") for an input validation error message, and\n",Object(i.b)("inlineCode",{parentName:"li"},"5")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"5020000"),") for a generic error message."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"yy")," is the module or flow this error references and can be:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"01")," for login messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1010000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"02")," for logout messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1020000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"03")," for multi-factor authentication messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1030000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"04")," for registration messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1040000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"05")," for settings messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1050000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"06")," for account recovery messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1060000"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"07")," for email/phone verification messages (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"1070000"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"zzzz")," is the message ID and typically starts at ",Object(i.b)("inlineCode",{parentName:"li"},"0001"),". For example, message\nID ",Object(i.b)("inlineCode",{parentName:"li"},"4070001")," (",Object(i.b)("inlineCode",{parentName:"li"},"4")," for input validation error, ",Object(i.b)("inlineCode",{parentName:"li"},"07")," for verification, ",Object(i.b)("inlineCode",{parentName:"li"},"0001"),"\nfor the concrete message) is:\n",Object(i.b)("inlineCode",{parentName:"li"},"The verification code has expired or was otherwise invalid. Please request another code."),".")))}p.isMDXComponent=!0},549:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);