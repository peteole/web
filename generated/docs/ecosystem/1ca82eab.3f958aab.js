(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(93)),o={id:"persistence",title:"Data Storage and Persistence"},l={unversionedId:"ecosystem/persistence",id:"ecosystem/persistence",isDocsHomePage:!1,title:"Data Storage and Persistence",description:"All ORY products support storing data in memory and in relational databases",source:"@site/docs/ecosystem/database.md",slug:"/ecosystem/persistence",permalink:"/docs/ecosystem/persistence",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/database.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1610093901},s=[{value:"In-memory (ephemeral)",id:"in-memory-ephemeral",children:[]},{value:"SQL (persistent)",id:"sql-persistent",children:[{value:"PostgreSQL",id:"postgresql",children:[]},{value:"MySQL",id:"mysql",children:[]},{value:"MariaDB",id:"mariadb",children:[]},{value:"CockroachDB (beta)",id:"cockroachdb-beta",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All ORY products support storing data in memory and in relational databases\n(PostgreSQL, MySQL)."),Object(r.b)("p",null,"ORY Hydra additionally supports CockroachDB, but still beta, use it at your own\nrisk!"),Object(r.b)("h2",{id:"in-memory-ephemeral"},"In-memory (ephemeral)"),Object(r.b)("p",null,"Storing data in-memory helps you get started quickly without worrying about\nsetting up a database first. Keep in mind that all data is ephemeral and will be\nremoved when the service is killed."),Object(r.b)("p",null,"Using in-memory storage is usually achieved by setting configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"dsn"),"\nto ",Object(r.b)("inlineCode",{parentName:"p"},"memory"),"."),Object(r.b)("h2",{id:"sql-persistent"},"SQL (persistent)"),Object(r.b)("p",null,"All ORY products support PostgreSQL and MySQL as first-class citizens."),Object(r.b)("p",null,"ORY Hydra additionally supports CockroachDB, but still beta, use it at your own\nrisk!"),Object(r.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(r.b)("p",null,"If configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"postgres://"),",\nthen PostgreSQL will be used as storage backend. An exemplary configuration\nwould look like this: ",Object(r.b)("inlineCode",{parentName:"p"},"DSN=postgres://user:password@host:123/database")),Object(r.b)("p",null,"Additionally, the following DSN parameters are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_conns")," (number): Sets the maximum number of open connections to the\ndatabase. Defaults to the number of CPU cores times 2."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_idle_conns")," (number): Sets the maximum number of connections in the idle.\nDefaults to the number of CPU cores."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_conn_lifetime"),' (duration): Sets the maximum amount of time ("ms", "s",\n"m", "h") a connection may be reused.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslmode")," (string): Whether or not to use SSL (default is require)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disable")," - No SSL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"require")," - Always SSL (skip verification)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verify-ca")," - Always SSL (verify that the certificate presented by the\n",Object(r.b)("inlineCode",{parentName:"li"},"server")," was signed by a trusted CA)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verify-full")," - Always SSL (verify that the certification presented by the\nserver was signed by a trusted CA and the server host name matches the one\nin the certificate)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fallback_application_name")," (string): An application_name to fall back to if\none isn't provided."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"connect_timeout")," (number): Maximum wait for connection, in seconds. Zero or\nnot specified means wait indefinitely."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslcert")," (string): Cert file location. The file must contain PEM encoded\ndata."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslkey")," (string): Key file location. The file must contain PEM encoded data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslrootcert")," (string): The location of the root certificate file. The file\nmust contain PEM encoded data.")),Object(r.b)("p",null,"To set such a parameter, append it to the DSN query, for example:\n",Object(r.b)("inlineCode",{parentName:"p"},"postgres://user:password@host:123/database?sslmode=verify-full")),Object(r.b)("h3",{id:"mysql"},"MySQL"),Object(r.b)("p",null,"If configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"mysql://"),", then\nMySQL will be used as storage backend. An exemplary configuration would look\nlike this: ",Object(r.b)("inlineCode",{parentName:"p"},"DSN=mysql://user:password@tcp(host:123)/database?parseTime=true")),Object(r.b)("p",null,"Additionally, the following DSN parameters are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_conns")," (number): Sets the maximum number of open connections to the\ndatabase. Defaults to the number of CPU cores times 2."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_idle_conns")," (number): Sets the maximum number of connections in the idle.\nDefaults to the number of CPU cores."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"max_conn_lifetime"),' (duration): Sets the maximum amount of time ("ms", "s",\n"m", "h") a connection may be reused. Defaults to 0s (disabled).'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"collation")," (string): Sets the collation used for client-server interaction on\nconnection. In contrast to charset, collation does not issue additional\nqueries. If the specified collation is unavailable on the target server, the\nconnection will fail."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loc")," (string): Sets the location for time.Time values. Note that this sets\nthe location for time.Time values but does not change MySQL's time_zone\nsetting. For that set the time_zone DSN parameter. Please keep in mind, that\nparam values must be url.QueryEscape'ed. Alternatively you can manually\nreplace the / with %2F. For example US/Pacific would be loc=US%2FPacific."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxAllowedPacket")," (number): Max packet size allowed in bytes. The default\nvalue is 4 MiB and should be adjusted to match the server settings.\nmaxAllowedPacket=0 can be used to automatically fetch the max_allowed_packet\nvariable from server on every connection."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readTimeout"),' (duration): I/O read timeout. The value must be a decimal number\nwith a unit suffix ("ms", "s", "m", "h"), such as "30s", "0.5m" or "1m30s".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"timeout"),' (duration): Timeout for establishing connections, aka dial timeout.\nThe value must be a decimal number with a unit suffix ("ms", "s", "m", "h"),\nsuch as "30s", "0.5m" or "1m30s".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls")," (bool / string): tls=true enables TLS / SSL encrypted connection to the\nserver. Use skip-verify if you want to use a self-signed or invalid\ncertificate (server side)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"writeTimeout"),' (duration): I/O write timeout. The value must be a decimal\nnumber with a unit suffix ("ms", "s", "m", "h"), such as "30s", "0.5m" or\n"1m30s".')),Object(r.b)("p",null,"To set such a parameter, append it to the DSN query, for example:\n",Object(r.b)("inlineCode",{parentName:"p"},"mysql://user:password@tcp(host:123)/database?parseTime=true&writeTimeout=123s")),Object(r.b)("h3",{id:"mariadb"},"MariaDB"),Object(r.b)("p",null,"Connections to MariaDB are possible by using a MySQL-style connection string and\nadding the argument ",Object(r.b)("inlineCode",{parentName:"p"},"sql_mode=MYSQL40"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"mysql://user:pass@tcp(ipOfMariadb:3306)/database_name?sql_mode=MYSQL40\n")),Object(r.b)("h3",{id:"cockroachdb-beta"},"CockroachDB (beta)"),Object(r.b)("p",null,"If configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"dsn")," (Data Source Name) is prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"cockroach://"),",\nthen CockroachDB will be used as storage backend. An exemplary configuration\nwould look like this: ",Object(r.b)("inlineCode",{parentName:"p"},"DSN=cockroach://user:password@host:123/database")),Object(r.b)("p",null,"Additionally, the following DSN parameters are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslmode")," (string): Whether or not to use SSL (default is require)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disable")," - No SSL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"require")," - Always SSL (skip verification)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verify-ca")," - Always SSL (verify that the certificate presented by the\n",Object(r.b)("inlineCode",{parentName:"li"},"server")," was signed by a trusted CA)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verify-full")," - Always SSL (verify that the certification presented by the\nserver was signed by a trusted CA and the server host name matches the one\nin the certificate)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"application_name")," (string): An initial value for the application_name session\nvariable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslcert")," (string): Cert file location. The file must contain PEM encoded\ndata."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslkey")," (string): Key file location. The file must contain PEM encoded data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sslrootcert")," (string): The location of the root certificate file. The file\nmust contain PEM encoded data.")),Object(r.b)("p",null,"To set such a parameter, append it to the DSN query, for example:\n",Object(r.b)("inlineCode",{parentName:"p"},"cockroach://user:password@host:123/database?sslmode=verify-full")))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=b(n),p=a,d=m["".concat(o,".").concat(p)]||m[p]||u[p]||r;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);