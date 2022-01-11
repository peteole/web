"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[20401],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"hsm-support",title:"Hardware Security Module support for JSON Web Key Sets"},l=void 0,p={unversionedId:"guides/hsm-support",id:"guides/hsm-support",isDocsHomePage:!1,title:"Hardware Security Module support for JSON Web Key Sets",description:"The",source:"@site/docs/guides/hsm-support.md",sourceDirName:"guides",slug:"/guides/hsm-support",permalink:"/hydra/docs/next/guides/hsm-support",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/hsm-support.md",tags:[],version:"current",lastUpdatedBy:"Mart Aarma",lastUpdatedAt:1641915202,formattedLastUpdatedAt:"1/11/2022",frontMatter:{id:"hsm-support",title:"Hardware Security Module support for JSON Web Key Sets"},sidebar:"docs",previous:{title:"Distributed Tracing",permalink:"/hydra/docs/next/guides/tracing"},next:{title:"Secrets and Key Rotation",permalink:"/hydra/docs/next/guides/secrets-key-rotation"}},d=[{value:"Hardware Security Module configuration",id:"hardware-security-module-configuration",children:[],level:3},{value:"PKCS#11 attribute mappings to JSON Web Key Set attributes",id:"pkcs11-attribute-mappings-to-json-web-key-set-attributes",children:[],level:3},{value:"Supported key algorithms",id:"supported-key-algorithms",children:[],level:3},{value:"Generating key pairs",id:"generating-key-pairs",children:[{value:"Initializing token",id:"initializing-token",children:[],level:4},{value:"Generating key pair",id:"generating-key-pair",children:[{value:"Key type mappings",id:"key-type-mappings",children:[],level:5}],level:4}],level:3},{value:"Testing with SoftHSM",id:"testing-with-softhsm",children:[{value:"Install SoftHSM/OpenSC on Mac OSX",id:"install-softhsmopensc-on-mac-osx",children:[],level:4},{value:"Install SoftHSM/OpenSC on Ubuntu",id:"install-softhsmopensc-on-ubuntu",children:[],level:4},{value:"Install SoftHSM/OpenSC on Windows",id:"install-softhsmopensc-on-windows",children:[],level:4},{value:"Run Ory Hydra with HSM using Docker",id:"run-ory-hydra-with-hsm-using-docker",children:[],level:4},{value:"Run Tests with HSM enabled using Docker",id:"run-tests-with-hsm-enabled-using-docker",children:[],level:4}],level:3}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/pkcs11/pkcs11-base/v2.40/os/pkcs11-base-v2.40-os.html"},"PKCS#11 Cryptographic Token Interface Standard"),",\nalso known as Cryptoki, is one of the Public Key Cryptography Standards\ndeveloped by RSA Security. PKCS#11 defines the interface between an application\nand a cryptographic device."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If a key is not found in the Hardware Security Module, the regular Software Key\nManager with AES-GCM software encryption will be used as a fallback. Storing\nkeys will always use the Software Key Manager as it is not possible to add keys\nto a Hardware Security Module."))),(0,i.kt)("p",null,"PKCS#11 is used as a low-level interface to perform cryptographic operations\nwithout the need for the application to directly interface a device through its\ndriver. PKCS#11 represents cryptographic devices using a common model referred\nto simply as a token. An application can therefore perform cryptographic\noperations on any device or token, using the same independent command set."),(0,i.kt)("a",{name:"hsm-configuration"}),(0,i.kt)("h3",{id:"hardware-security-module-configuration"},"Hardware Security Module configuration"),(0,i.kt)("p",null,"Ory Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,i.kt)("p",null,">",">"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/configuration"},"https://www.ory.sh/hydra/docs/reference/configuration")," ","<","<"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HSM_ENABLED=true\nHSM_LIBRARY=/path/to/hsm-vendor/library.so\nHSM_TOKEN_LABEL=hydra\nHSM_SLOT=0\nHSM_PIN=1234\n")),(0,i.kt)("p",null,"Token that is denoted by environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_TOKEN_LABEL")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_SLOT"),"\nmust preexist and optionally contain RSA or ECDSA key pairs with labels\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.openid.id-token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.jwt.access-token")," depending on configuration.\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"If keys with these labels don't exist, they will be generated upon\nstartup."))," If both ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_TOKEN_LABEL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_SLOT")," are set, ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_TOKEN_LABEL"),"\ntakes preference over ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_SLOT"),". In this case first slot that contains this\nlabel is used. ",(0,i.kt)("inlineCode",{parentName:"p"},"HSM_LIBRARY")," must point to vendor specific PKCS#11 library or\nSoftHSM library if you want to ",(0,i.kt)("a",{parentName:"p",href:"#testing-with-softhsm"},"test HSM support"),"."),(0,i.kt)("a",{name:"pkcs11-attribute-mappings"}),(0,i.kt)("h3",{id:"pkcs11-attribute-mappings-to-json-web-key-set-attributes"},"PKCS#11 attribute mappings to JSON Web Key Set attributes"),(0,i.kt)("p",null,"When key pair is generated or requested from HSM, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_LABEL")," attribute is\nused as JSON Web Key Set name, ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_ID")," attribute as ",(0,i.kt)("inlineCode",{parentName:"p"},"kid"),". Key usage is\ndetermined by private key attributes, where ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_SIGN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_DECRYPT")," are\nmapped to ",(0,i.kt)("inlineCode",{parentName:"p"},"sig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"enc")," respectively and set as key ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," attribute.\nFurthermore, ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_ID's")," of key pair private/public handles must be identical.\nAttribute ",(0,i.kt)("inlineCode",{parentName:"p"},"alg")," is determined from ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_KEY_TYPE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CKA_ECDSA_PARAMS"),"."),(0,i.kt)("a",{name:"supported-key-algorithms"}),(0,i.kt)("h3",{id:"supported-key-algorithms"},"Supported key algorithms"),(0,i.kt)("p",null,"Ory Hydra supports generating 4096 bit RSA, ECDSA keys with curves secp256r1 or\nsecp521r1. As of now PKCS#11 v2.4 doesn't support EdDSA keys using curve\nEd25519. However,\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/pkcs11/pkcs11-curr/v3.0/pkcs11-curr-v3.0.html"},"PKCS#11 v3.0"),"\ncontains support for EdDSA and therefore can be supported in upcoming versions.\nSymmetric key algorithms are not supported because it would imply, that shared\nHSM is used between server and authenticating client."),(0,i.kt)("a",{name:"generating-key-pairs"}),(0,i.kt)("h3",{id:"generating-key-pairs"},"Generating key pairs"),(0,i.kt)("a",{name:"initializing-token"}),(0,i.kt)("h4",{id:"initializing-token"},"Initializing token"),(0,i.kt)("p",null,"Different policies can apply for tokens, therefore HSM configuration expects,\nthat token where to find or generate keys already exists. Depending on HSM\nvendor, tools initializing tokens and generating keys vary. To demonstrate key\npair generation we first initialize token using ",(0,i.kt)("inlineCode",{parentName:"p"},"pkcs11-tool")," (see how to\n",(0,i.kt)("a",{parentName:"p",href:"#testing-with-softhsm"},"setup SoftHSM and OpenSC"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ pkcs11-tool --module /usr/lib/softhsm/libsofthsm2.so --slot 0 --init-token --so-pin 0000 --pin 1234 --init-pin --label hydra\n\nUsing slot 0 with a present token (0x2763db07)\nToken successfully initialized\nUser PIN successfully initialized\n")),(0,i.kt)("p",null,"Corresponding Ory Hydra configuration to access this token would be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HSM_ENABLED=true\nHSM_LIBRARY=/usr/lib/softhsm/libsofthsm2.so\nHSM_TOKEN_LABEL=hydra\nHSM_SLOT=0\nHSM_PIN=1234\n")),(0,i.kt)("a",{name:"generating-key-pair"}),(0,i.kt)("h4",{id:"generating-key-pair"},"Generating key pair"),(0,i.kt)("p",null,"Generating RSA keypair for JSON Web Key ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.openid.id-token")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ pkcs11-tool --module /usr/lib/softhsm/libsofthsm2.so \\\n--pin 1234 --token-label hydra \\\n--keypairgen --key-type rsa:4096 --usage-sign \\\n--label hydra.openid.id-token --id 746573742d6b65792d6964\n\nKey pair generated:\nPrivate Key Object; RSA\n  label:      hydra.openid.id-token\n  ID:         746573742d6b65792d6964\n  Usage:      sign\nPublic Key Object; RSA 4096 bits\n  label:      hydra.openid.id-token\n  ID:         746573742d6b65792d6964\n  Usage:      verify\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--module")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Points to vendor specific PKCS#11 library or SoftHSM library when testing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--pin 1234")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pin that was used in token initialization to perform token operations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--token-label hydra")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Performs key generation on first slot with label ",(0,i.kt)("inlineCode",{parentName:"td"},"hydra"),". Use ",(0,i.kt)("inlineCode",{parentName:"td"},"--slot")," option instead if you want to specify specific slot.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--label hydra.openid.id-token")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets key pair label attribute ",(0,i.kt)("inlineCode",{parentName:"td"},"CKA_LABEL")," and is used as JSON Web Key Set name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--id 746573742d6b65792d6964")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets key pair id attribute ",(0,i.kt)("inlineCode",{parentName:"td"},"CKA_ID")," and is used as JSON Web Key Set ",(0,i.kt)("inlineCode",{parentName:"td"},"kid"),". It must be set as a big-endian hexadecimal integer value. ",(0,i.kt)("inlineCode",{parentName:"td"},'StringToHex("test-key-id") == 746573742d6b65792d6964'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--keypairgen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Perform key pair generation on token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--key-type rsa:4096")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Type and length of the key to generate. Supported values are ",(0,i.kt)("inlineCode",{parentName:"td"},"rsa:4096"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"EC:secp256r1")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"EC:secp521r1"),". Sets ",(0,i.kt)("inlineCode",{parentName:"td"},"CKA_KEY_TYPE"),",",(0,i.kt)("inlineCode",{parentName:"td"},"CKA_ECDSA_PARAMS")," attributes and is used to determine JSON Web Key Set ",(0,i.kt)("inlineCode",{parentName:"td"},"alg")," attribute.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--usage-sign")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"--usage-decrypt")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets private key attribute ",(0,i.kt)("inlineCode",{parentName:"td"},"CKA_SIGN")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"CKA_DECRYPT")," respectively. Used to determine JSON Web Key Set ",(0,i.kt)("inlineCode",{parentName:"td"},"use")," attribute.")))),(0,i.kt)("a",{name:"key-type-mappings"}),(0,i.kt)("h5",{id:"key-type-mappings"},"Key type mappings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"JWT signing algorithm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"rsa:4096"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RS256")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"EC:secp256r1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ES256")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"EC:secp521r1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ES512")))),(0,i.kt)("a",{name:"testing-with-softhsm"}),(0,i.kt)("h3",{id:"testing-with-softhsm"},"Testing with SoftHSM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.opendnssec.org/softhsm/"},"SoftHSM")," is an implementation of a\ncryptographic store accessible through a PKCS #11 interface. You can use it to\nexplore PKCS#11 without having a Hardware Security Module. It is being developed\nas a part of the OpenDNSSEC project."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wiki.opendnssec.org/display/SoftHSMDOCS/SoftHSM+Documentation+v2"},"Follow these instructions to build SoftHSM from source.")),(0,i.kt)("h4",{id:"install-softhsmopensc-on-mac-osx"},"Install SoftHSM/OpenSC on Mac OSX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 2> /dev/null\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install softhsm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 2> /dev/null\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install opensc\n")),(0,i.kt)("h4",{id:"install-softhsmopensc-on-ubuntu"},"Install SoftHSM/OpenSC on Ubuntu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt update\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install softhsm opensc\n")),(0,i.kt)("h4",{id:"install-softhsmopensc-on-windows"},"Install SoftHSM/OpenSC on Windows"),(0,i.kt)("p",null,"Follow these instructions to install\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/disig/SoftHSM2-for-Windows"},"SoftHSM")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenSC/OpenSC/wiki"},"OpenSC")," on windows."),(0,i.kt)("h4",{id:"run-ory-hydra-with-hsm-using-docker"},"Run Ory Hydra with HSM using Docker"),(0,i.kt)("p",null,"Alternatively you can use quickstart docker container that setups\nSoftHSM/OpenSC, builds and runs Ory Hydra with HSM configuration enabled. You\nneed to have the latest ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"Docker Compose")," version installed. To run\nquickstart HSM change into the directory with the Hydra source code and run the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker-compose -f quickstart-hsm.yml up --build\n")),(0,i.kt)("p",null,"Following is logged on startup if Hardware Security Module is successfully\nconfigured:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker logs ory-hydra-example--hydra\ntime="2021-07-07T12:51:23Z" level=info msg="Hardware Security Module is configured."\ntime="2021-07-07T12:51:23Z" level=info msg="JSON Web Key Set \'hydra.openid.id-token\' does not exist yet, generating new key pair..."\n')),(0,i.kt)("h4",{id:"run-tests-with-hsm-enabled-using-docker"},"Run Tests with HSM enabled using Docker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ make quicktest-hsm\n")))}c.isMDXComponent=!0}}]);