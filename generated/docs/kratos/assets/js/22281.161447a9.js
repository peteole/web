(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[22281,69031],{24608:function(e,t,r){"use strict";r.r(t);var a=r(67294),n=r(16199),o=r(24973);t.default=function(){return a.createElement(n.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},82924:function(e,t,r){"use strict";var a=r(67294).createContext(void 0);t.Z=a},85350:function(e,t,r){"use strict";var a=r(67294),n=r(82924);t.Z=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},546:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(22122),n=r(19756),o=r(67294),l=r(86010),s=r(36742),c=r(13018),i=r(44996),m="footerLogoLink_qW4Z",u=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,r=e.href,l=e.label,c=e.prependBaseUrlToHref,m=(0,n.Z)(e,u),f=(0,i.Z)(t),d=(0,i.Z)(r,{forcePrependBaseUrl:!0});return o.createElement(s.Z,(0,a.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:c?d:r}:{to:f},m),l)}var d=function(e){var t=e.url,r=e.alt;return o.createElement("img",{className:"footer__logo",alt:r,src:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},r=t.copyright,a=t.links,n=void 0===a?[]:a,s=t.logo,u=void 0===s?{}:s,h=(0,i.Z)(u.src);return e?o.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},n&&n.length>0&&o.createElement("div",{className:"row footer__links"},n.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(f,e))}))):null)}))),(u||r)&&o.createElement("div",{className:"text--center"},u&&u.src&&o.createElement("div",{className:"margin-bottom--sm"},u.href?o.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:m},o.createElement(d,{alt:u.alt,url:h})):o.createElement(d,{alt:u.alt,url:h})),o.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}}}]);