(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{362:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),o=(t(0),t(406)),r={id:"advanced",title:"Advanced Topics"},s={unversionedId:"advanced",id:"version-v1.5/advanced",isDocsHomePage:!1,title:"Advanced Topics",description:"This guide aims to help setting up a production system with ORY Hydra.",source:"@site/versioned_docs/version-v1.5/advanced.md",slug:"/advanced",permalink:"/hydra/docs/v1.5/advanced",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/advanced.md",version:"v1.5",lastUpdatedBy:"Natalia",lastUpdatedAt:1601673997,sidebar:"version-v1.5/docs",previous:{title:"Common Problems & Debugging",permalink:"/hydra/docs/v1.5/debugging"},next:{title:"Consuming OAuth 2.0",permalink:"/hydra/docs/v1.5/integration"}},c=[{value:"Self-Signed SSL",id:"self-signed-ssl",children:[]},{value:"Mobile &amp; Browser (SPA) Authorization",id:"mobile--browser-spa-authorization",children:[{value:"Creating a public OAuth 2.0 Client",id:"creating-a-public-oauth-20-client",children:[]}]},{value:"Key rotation",id:"key-rotation",children:[{value:"Rotation of JSON Web Token Signing Keys",id:"rotation-of-json-web-token-signing-keys",children:[]},{value:"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys",id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys",children:[]}]},{value:"OAuth 2.0",id:"oauth-20",children:[{value:"Audience",id:"audience",children:[]},{value:"JSON Web Tokens",id:"json-web-tokens",children:[]},{value:"OAuth 2.0 Client Authentication with private/public keypairs",id:"oauth-20-client-authentication-with-privatepublic-keypairs",children:[]}]},{value:"OpenID Connect",id:"openid-connect",children:[{value:"Subject Identifier Algorithms",id:"subject-identifier-algorithms",children:[]},{value:"Using login_hint with Different Subject",id:"using-login_hint-with-different-subject",children:[]}]},{value:"CORS",id:"cors",children:[]},{value:"Cookies",id:"cookies",children:[]}],l={rightToc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide aims to help setting up a production system with ORY Hydra."),Object(o.b)("h2",{id:"self-signed-ssl"},"Self-Signed SSL"),Object(o.b)("p",null,"If you want to run ORY Hydra using self-signed TLS certificates, you can do the\nfollowing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"$ openssl genrsa -out key.pem 4096\n$ openssl req -new -x509 -sha256 -key key.pem -out cert.crt -days 365\n\n$ SERVE_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_TLS_KEY_BASE64=$(base64 -i key.pem)\n\n# or\n\n$ SERVE_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_TLS_CERT_PATH=/path/to/cert.crt\n")),Object(o.b)("p",null,"If you run Docker locally, you can then use"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"$ docker run ... \\\n    -e SERVE_TLS_CERT_BASE64=$(SERVE_TLS_CERT_BASE64) \\\n    -e SERVE_TLS_KEY_BASE64=$(SERVE_TLS_KEY_BASE64) \\\n    ...\n")),Object(o.b)("p",null,"or mount the files using ",Object(o.b)("inlineCode",{parentName:"p"},"--mount")," and linking to the files."),Object(o.b)("h2",{id:"mobile--browser-spa-authorization"},"Mobile & Browser (SPA) Authorization"),Object(o.b)("p",null,"We have an\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/oauth2-for-mobile-app-spa-browser"}),"excellent blog post")," on\nthis topic. Read it now!"),Object(o.b)("h3",{id:"creating-a-public-oauth-20-client"},"Creating a public OAuth 2.0 Client"),Object(o.b)("p",null,"You can create a public OAuth 2.0 Client (e.g. for the authorize code + PKCE or\nimplicit flow) with the CLI"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"hydra clients create --endpoint http://ory-hydra-admin-api --token-endpoint-auth-method none\n")),Object(o.b)("p",null,"or by setting in the HTTP API JSON body when POSTing to ",Object(o.b)("inlineCode",{parentName:"p"},"/clients"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n    "client_id": "...",\n    "token_endpoint_auth_method": "none"\n}\n')),Object(o.b)("p",null,"Be aware that when making requests to ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/token")," or ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/revoke")," with a\npublic OAuth 2.0 Client, you can not authenticate with the HTTP Basic\nAuthorization but must include the ",Object(o.b)("inlineCode",{parentName:"p"},"client_id")," in the POST body."),Object(o.b)("h2",{id:"key-rotation"},"Key rotation"),Object(o.b)("p",null,"There are two types of key rotation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rotation of JSON Web Token Signing Keys"),Object(o.b)("li",{parentName:"ul"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys")),Object(o.b)("h3",{id:"rotation-of-json-web-token-signing-keys"},"Rotation of JSON Web Token Signing Keys"),Object(o.b)("p",null,"JSON Web Token Signing Key rotation is simple with ORY Hydra. You can rotate\nOpenID Connect ID Token and OAuth 2.0 Access Tokens, when using the JSON Web\nToken strategy, keys with one simple command."),Object(o.b)("p",null,"ORY Hydra takes the latest key from the key store to sign JSON Web Tokens. All\npublic keys will be shown at\n",Object(o.b)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),"."),Object(o.b)("h4",{id:"openid-connect-id-token"},"OpenID Connect ID Token"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.openid.id-token -a RS256\n")),Object(o.b)("h4",{id:"oauth-20-access-tokens-json-web-token"},"OAuth 2.0 Access Tokens (JSON Web Token)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This will only work when using the JWT access token strategy. Otherwise, this\nwill have no effect.")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.jwt.access-token -a RS256\n")),Object(o.b)("h3",{id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys"),Object(o.b)("p",null,"Rotating database encryption keys is done by prepending the new encryption key\nto the respective configuration value. Assuming configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"secrets:\n  cookie:\n    - the-old-cookie-encryption-key\n  system:\n    - the-old-system-encryption-key\n")),Object(o.b)("p",null,"one would add the new keys as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"secrets:\n  cookie:\n    - the-new-cookie-encryption-key # the new key must be the first entry\n    - the-old-cookie-encryption-key\n  system:\n    - the-new-system-encryption-key # the new key must be the first entry\n    - the-old-system-encryption-key\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It is very important that the new key is the first entry in the list as only\nthe first key is used for encryption while all keys from the list are used for\ndecryption. Please note that existing data will not be automatically\nre-encrypted using the new key. Only new data will be signed and encrypted\nusing the new key. It is therefore imperative that the old key is added to the\nlist, unless you want to also invalidate all data that was signed or encrypted\nusing the old key.")),Object(o.b)("h2",{id:"oauth-20"},"OAuth 2.0"),Object(o.b)("h3",{id:"audience"},"Audience"),Object(o.b)("p",null,"There are two types of audience concept in the context of OAuth 2.0 and OpenID\nConnect:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'OAuth 2.0: Access and Refresh Tokens are "internal-facing". The ',Object(o.b)("inlineCode",{parentName:"li"},"aud")," claim\nof an OAuth 2.0 Access and Refresh token defines at which ",Object(o.b)("em",{parentName:"li"},"endpoints")," the\ntoken can be used."),Object(o.b)("li",{parentName:"ol"},'OpenID Connect: The ID Token is "external-facing". The ',Object(o.b)("inlineCode",{parentName:"li"},"aud")," claim of an\nOpenID Connect ID Token defines which ",Object(o.b)("em",{parentName:"li"},"clients")," should accept it.")),Object(o.b)("p",null,"While modifying the audience of an ID Token is not desirable, specifying the\naudience of an OAuth 2.0 Access Token is. This is not defined as an IETF\nStandard but is considered good practice in certain environments."),Object(o.b)("p",null,"For this reason, Hydra allows you to control the aud claim of the access token.\nTo do so, you must specify the intended audiences in the OAuth 2.0 Client's\nmetadata on a per-client basis:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n    "client_id": "...",\n    "audience": ["https://api.my-cloud.com/user", "https://some-tenant.my-cloud.com/"]\n}\n')),Object(o.b)("p",null,"The audience is a list of case-sensitive URLs. ",Object(o.b)("strong",{parentName:"p"},"URLs must not contain\nwhitespaces"),"."),Object(o.b)("h4",{id:"oauth-20-authorization-code-implicit-hybrid-flows"},"OAuth 2.0 Authorization Code, Implicit, Hybrid Flows"),Object(o.b)("p",null,"When performing an OAuth 2.0 authorize code, implicit, or hybrid flow, you can\nrequest audiences at the ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/auth")," endpoint\n",Object(o.b)("inlineCode",{parentName:"p"},"https://my-hydra.com/oauth2/auth?client_id=...&scope=...&audience=https%3A%2F%2Fapi.my-cloud.com%2Fuser+https%3A%2F%2Fsome-tenant.my-cloud.com%2F"),"\nwhich requests audiences ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.my-cloud.com/user")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"https://some-tenant.my-cloud.com/"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"audience")," query parameter may contain multiple strings separated by a\nurl-encoded space (",Object(o.b)("inlineCode",{parentName:"p"},"+")," or ",Object(o.b)("inlineCode",{parentName:"p"},"%20"),"). The audience values themselves must also be\nurl encoded. The values will be validated against the whitelisted audiences\ndefined in the OAuth 2.0 Client:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An OAuth 2.0 Client with the allowed audience ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.my-cloud/user")," is\nallowed to request audience values ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.my-cloud/user"),Object(o.b)("inlineCode",{parentName:"li"},"https://api.my-cloud/user/1234")," but not ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.my-cloud/not-user")," nor\n",Object(o.b)("inlineCode",{parentName:"li"},"https://something-else/"),".")),Object(o.b)("p",null,"The requested audience from the query parameter is then part of the login and\nconsent request payload as field ",Object(o.b)("inlineCode",{parentName:"p"},"requested_access_token_audience"),". You can then\nalter the audience using ",Object(o.b)("inlineCode",{parentName:"p"},"grant_audience.access_token")," when accepting the\nconsent request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'hydra.acceptConsentRequest(challenge, {\n  // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.\n  grant_audience: {\n    access_token: response.requested_access_token_audience,\n    // or, for example:\n    // access_token: ["https://api.my-cloud/not-user"]\n  },\n\n  // ... remember: false\n  // ...\n})\n')),Object(o.b)("p",null,"When introspecting the OAuth 2.0 Access Token, the response payload will include\nthe audience:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'{\n  "active": true,\n  // ...\n  "audience": ["https://api.my-cloud/user", "https://api.my-cloud/user/1234"]\n}\n')),Object(o.b)("h4",{id:"oauth-20-client-credentials-grant"},"OAuth 2.0 Client Credentials Grant"),Object(o.b)("p",null,"When performing the client credentials grant, the audience parameter from the\nPOST body of the ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/token")," is decoded and validated according to the same\nrules of the previous section, except for the login and consent part which does\nnot exist for this flow."),Object(o.b)("h3",{id:"json-web-tokens"},"JSON Web Tokens"),Object(o.b)("p",null,"ORY Hydra issues opaque OAuth 2.0 Access Tokens per default for the following\nreasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"OAuth 2.0 Access Tokens represent internal state but are public\nknowledge:")," An Access Token often contains internal data (e.g. session data)\nor other sensitive data (e.g. user roles and permissions) and is sometimes\nused as a means of transporting system-relevant information in a stateless\nmanner. Therefore, making these tokens transparent (by using JSON Web Tokens\nas Access Tokens) comes with risk of exposing this information accidentally,\nand with the downside of not storing this information in the OAuth 2.0 Access\nToken at all."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"JSON Web Tokens can not hold secrets:")," Unless encrypted, JSON Web Tokens\ncan be read by everyone, including 3rd Parties. Therefore, they can not keep\nsecrets. This point is similar to (1), but it is important to stress this."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Access Tokens as JSON Web Tokens can not be revoked:"),' Well, you can revoke\nthem, but they will be considered valid until the "expiry" of the token is\nreached. Unless, of course, you have a blacklist or check with Hydra if the\ntoken was revoked, which however defeats the purpose of using JSON Web Tokens\nin the first place.'),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Certain OpenID Connect features will not work")," when using JSON Web Tokens\nas Access Tokens, such as the pairwise subject identifier algorithm."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"There is a better solution: Use\n",Object(o.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),"!"),' ORY Oathkeeper is a\nproxy you deploy in front of your services. It will "convert" ORY Hydra\'s\nopaque Access Tokens into JSON Web Tokens for your backend services. This\nallows your services to work without additional REST Calls while solving all\nprevious points. ',Object(o.b)("strong",{parentName:"li"},"We really recommend this option if you want JWTs!"))),Object(o.b)("p",null,"If you are not convinced that ORY Oathkeeper is the right tool for the job, you\ncan still enable JSON Web Tokens in ORY Hydra by setting:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"strategies:\n  access_token: jwt\n")),Object(o.b)("p",null,"Be aware that only access tokens are formatted as JSON Web Tokens. Refresh\ntokens are not impacted by this strategy. By performing OAuth 2.0 Token\nIntrospection you can check if the token is still valid. If a token is revoked\nor otherwise blacklisted, the OAuth 2.0 Token Introspection will return\n",Object(o.b)("inlineCode",{parentName:"p"},'{ "active": false }'),". This is useful when you do not want to rely only on the\ntoken's expiry."),Object(o.b)("h4",{id:"json-web-token-validation"},"JSON Web Token Validation"),Object(o.b)("p",null,"You can validate JSON Web Tokens issued by ORY Hydra by pointing your ",Object(o.b)("inlineCode",{parentName:"p"},"jwt"),"\nlibrary (e.g. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/auth0/node-jwks-rsa"}),"node-jwks-rsa"),") to\n",Object(o.b)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),". All necessary keys are\navailable there."),Object(o.b)("h3",{id:"oauth-20-client-authentication-with-privatepublic-keypairs"},"OAuth 2.0 Client Authentication with private/public keypairs"),Object(o.b)("p",null,"ORY Hydra supports OAuth 2.0 Client Authentication with RSA and ECDSA\nprivate/public keypairs with currently supported signing algorithms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"RS256 (default), RS384, RS512"),Object(o.b)("li",{parentName:"ul"},"PS256, PS384, PS512"),Object(o.b)("li",{parentName:"ul"},"ES256, ES384, ES512")),Object(o.b)("p",null,"This authentication method replaces the classic HTTP Basic Authorization and\nHTTP POST Authorization schemes. Instead of sending the ",Object(o.b)("inlineCode",{parentName:"p"},"client_id")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"client_secret"),", you authenticate the client with a signed JSON Web Token."),Object(o.b)("p",null,"To enable this feature for a specific OAuth 2.0 Client, you must set\n",Object(o.b)("inlineCode",{parentName:"p"},"token_endpoint_auth_method")," to ",Object(o.b)("inlineCode",{parentName:"p"},"private_key_jwt")," and register the public key of\nthe RSA/ECDSA signing key either using the ",Object(o.b)("inlineCode",{parentName:"p"},"jwks_uri")," or ",Object(o.b)("inlineCode",{parentName:"p"},"jwks")," fields of the\nclient."),Object(o.b)("p",null,"When authenticating the client at the token endpoint, you generate and sign\n(with the RSA/ECDSA private key) a JSON Web Token with the following claims:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"iss"),": REQUIRED. Issuer. This MUST contain the client_id of the OAuth Client."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sub"),": REQUIRED. Subject. This MUST contain the client_id of the OAuth Client."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"aud"),": REQUIRED. Audience. The aud (audience) Claim. Value that identifies the\nAuthorization Server (ORY Hydra) as an intended audience. The Authorization\nServer MUST verify that it is an intended audience for the token. The Audience\nSHOULD be the URL of the Authorization Server's Token Endpoint."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"jti"),": REQUIRED. JWT ID. A unique identifier for the token, which can be used\nto prevent reuse of the token. These tokens MUST only be used once, unless\nconditions for reuse were negotiated between the parties; any such negotiation\nis beyond the scope of this specification."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"exp"),": REQUIRED. Expiration time on or after which the ID Token MUST NOT be\naccepted for processing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"iat"),": OPTIONAL. Time at which the JWT was issued.")),Object(o.b)("p",null,"When making a request to the ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/token")," endpoint, you include\n",Object(o.b)("inlineCode",{parentName:"p"},"client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"client_assertion=<signed-jwt>")," in the request body:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"POST /oauth2/token HTTP/1.1\nHost: my-hydra.com\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&\ncode=i1WsRn1uB1&\nclient_id=s6BhdRkqt3&\nclient_assertion_type=\nurn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&\nclient_assertion=PHNhbWxwOl ... ZT\n")),Object(o.b)("p",null,"Here's what a client with a ",Object(o.b)("inlineCode",{parentName:"p"},"jwks")," containing one RSA public key looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "client_id": "rsa-client-jwks",\n  "jwks": {\n    "keys": [\n      {\n        "kty": "RSA",\n        "n": "jL7h5wc-yeMUsHGJHc0xe9SbTdaLKXMHvcIHQck20Ji7SvrHPdTDQTvZtTDS_wJYbeShcCrliHvbJRSZhtEe0mPJpyWg3O_HkKy6_SyHepLK-_BR7HfcXYB6pVJCG3BW-lVMY7gl5sULFA74kNZH50h8hdmyWC9JgOHn0n3YLdaxSWlhctuwNPSwqwzY4qtN7_CZub81SXWpKiwj4UpyB10b8rM8qn35FS1hfsaFCVi0gQpd4vFDgFyqqpmiwq8oMr8RZ2mf0NMKCP3RXnMhy9Yq8O7lgG2t6g1g9noWbzZDUZNc54tv4WGFJ_rJZRz0jE_GR6v5sdqsDTdjFquPlQ",\n        "e": "AQAB",\n        "use": "sig",\n        "kid": "rsa-jwk"\n      }\n    ]\n  },\n  "token_endpoint_auth_method": "private_key_jwt",\n  "token_endpoint_auth_signing_alg": "RS256"\n}\n')),Object(o.b)("p",null,"And here is how it looks like for a ",Object(o.b)("inlineCode",{parentName:"p"},"jwks")," including an ECDSA public key:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "client_id": "ecdsa-client-jwks",\n  "jwks": {\n    "keys": [\n      {\n        "kty": "EC",\n        "use": "sig",\n        "crv": "P-256",\n        "kid": "ecdsa-jwk",\n        "x": "nQjdhpecjZRlworpYk_TJAQBe4QbS8IwHY1DWkfR0w0",\n        "y": "UQfLzHxhc4i3EETUeaAS1vDVFJ-Y01hIESiXqqS86Vc"\n      }\n    ]\n  },\n  "token_endpoint_auth_method": "private_key_jwt",\n  "token_endpoint_auth_signing_alg": "ES256"\n}\n')),Object(o.b)("p",null,"And with ",Object(o.b)("inlineCode",{parentName:"p"},"jwks_uri"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "client_id": "client-jwks-uri",\n  "jwks_uri": "http://path-to-my-public/keys.json",\n  "token_endpoint_auth_method": "private_key_jwt",\n  "token_endpoint_auth_signing_alg": "RS256"\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"jwks_uri")," must return a JSON object containing the public keys associated\nwith the OAuth 2.0 Client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "keys": [\n    {\n      "kty": "RSA",\n      "n": "jL7h5wc-yeMUsHGJHc0xe9SbTdaLKXMHvcIHQck20Ji7SvrHPdTDQTvZtTDS_wJYbeShcCrliHvbJRSZhtEe0mPJpyWg3O_HkKy6_SyHepLK-_BR7HfcXYB6pVJCG3BW-lVMY7gl5sULFA74kNZH50h8hdmyWC9JgOHn0n3YLdaxSWlhctuwNPSwqwzY4qtN7_CZub81SXWpKiwj4UpyB10b8rM8qn35FS1hfsaFCVi0gQpd4vFDgFyqqpmiwq8oMr8RZ2mf0NMKCP3RXnMhy9Yq8O7lgG2t6g1g9noWbzZDUZNc54tv4WGFJ_rJZRz0jE_GR6v5sdqsDTdjFquPlQ",\n      "e": "AQAB",\n      "use": "sig",\n      "kid": "rsa-jwk"\n    }\n  ]\n}\n')),Object(o.b)("h2",{id:"openid-connect"},"OpenID Connect"),Object(o.b)("h3",{id:"subject-identifier-algorithms"},"Subject Identifier Algorithms"),Object(o.b)("p",null,"Hydra supports two\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes"}),"Subject Identifier Algorithms"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"public"),": This provides the same ",Object(o.b)("inlineCode",{parentName:"li"},"sub")," (subject) value to all Clients\n(default)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pairwise"),": This provides a different ",Object(o.b)("inlineCode",{parentName:"li"},"sub")," value to each Client, so as not to\nenable Clients to correlate the End-User's activities without permission.")),Object(o.b)("p",null,"You can enable either one or both algorithms using the following configuration\nlayout:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"oidc:\n  subject_identifiers:\n    enabled:\n      - public\n      - pairwise\n")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"pairwise")," is enabled, you must also set\n",Object(o.b)("inlineCode",{parentName:"p"},"oidc.subject_identifiers.pairwise.salt"),". The salt is used to obfuscate the\n",Object(o.b)("inlineCode",{parentName:"p"},"sub")," value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"oidc:\n  subject_identifiers:\n    enabled:\n      - public\n      - pairwise\n    pairwise:\n      salt: some-salt\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This value should not be changed once set in production. Changing it will\ncause all client applications to receive new user IDs from ORY Hydra which will\nlead to serious complications with authentication on their side!")),Object(o.b)("p",null,"Each OAuth 2.0 Client has a configuration field ",Object(o.b)("inlineCode",{parentName:"p"},"subject_type"),". The value of\nthat ",Object(o.b)("inlineCode",{parentName:"p"},"subject_type")," is either ",Object(o.b)("inlineCode",{parentName:"p"},"public")," or ",Object(o.b)("inlineCode",{parentName:"p"},"pairwise"),". If the identifier\nalgorithm is enabled, ORY Hydra will choose the right strategy automatically."),Object(o.b)("p",null,"While ORY Hydra handles ",Object(o.b)("inlineCode",{parentName:"p"},"sub")," obfuscation out of the box, you may also override\nthis value with your own obfuscated ",Object(o.b)("inlineCode",{parentName:"p"},"sub")," value by setting\n",Object(o.b)("inlineCode",{parentName:"p"},"force_subject_identifier")," when accepting the login challenge in your user login\napp."),Object(o.b)("h3",{id:"using-login_hint-with-different-subject"},"Using login_hint with Different Subject"),Object(o.b)("p",null,"When a user already logged in with a subject(e.g. user-A), and she would like to\nlogin as another user using login_hint(e.g. login_hint=user-B), directly\naccepting the latter login request in your login provider will make hydra reply:\n",Object(o.b)("inlineCode",{parentName:"p"},"Subject from payload does not match subject from previous authentication")),Object(o.b)("p",null,"The suggested flow is:"),Object(o.b)("p",null,"Check the response from\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/hydra/docs/reference/api#get-a-login-request"}),"GET login request"),",\nif both the ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," and ",Object(o.b)("inlineCode",{parentName:"p"},"login_hint")," are NOT empty and also NOT the same user,\nredirect UserAgent to ",Object(o.b)("inlineCode",{parentName:"p"},"request_url")," which is appended with '?prompt=login'. This\nwill make hydra ignore the existing authentication, and allow your login\nprovider to login a different subject."),Object(o.b)("p",null,"For more information on ",Object(o.b)("inlineCode",{parentName:"p"},"prompt=login")," and other options, please check\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest"}),"Authentication Request"),"."),Object(o.b)("h2",{id:"cors"},"CORS"),Object(o.b)("p",null,"Both ORY Hydra's Admin and Public endpoints support CORS. For detailed\ninformation, head over to the exemplary\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/docs/config.yaml"}),"config file"),"."),Object(o.b)("p",null,"For CORS to work properly, we encourage to set the following values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"serve:\n  admin:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n      exposed_headers:\n        - Content-Type\n  public:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n      exposed_headers:\n        - Content-Type\n")),Object(o.b)("p",null,"Keep in mind that the OAuth 2.0 Authorization Endpoint (",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/auth"),") does not\nexpose CORS by design. This endpoint should never be consumed in a CORS-fashion.\nSome endpoints (",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/token"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/userinfo"),", ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/revoke"),") additionally\ninclude URLs listed in field ",Object(o.b)("inlineCode",{parentName:"p"},"allowed_cors_origins")," of the OAuth 2.0 Client that\nis making the request. For example, OAuth 2.0 Client"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "client_id": "foo",\n  "allowed_cors_origins": ["https://foo-bar.com/"]\n}\n')),Object(o.b)("p",null,"is allowed to make CORS request to ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/token")," from origin\n",Object(o.b)("inlineCode",{parentName:"p"},"https://foo-bar.com/")," even if that origin is not listed in\n",Object(o.b)("inlineCode",{parentName:"p"},"public.cors.allowed_origins"),"."),Object(o.b)("h2",{id:"cookies"},"Cookies"),Object(o.b)("p",null,"By default, cookies sent by the Hydra Public endpoints are set without\nexplicitly specifying a SameSite mode. If you wish for these cookies to be set\nwith a mode you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"serve.cookies.same_site_mode")," setting. Possible\nvalues are ",Object(o.b)("inlineCode",{parentName:"p"},"Strict"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Lax")," or ",Object(o.b)("inlineCode",{parentName:"p"},"None"),"."),Object(o.b)("p",null,"If you wish to embed requests to hydra on a third party site (for example an\niframe that periodically polls to check session status) you will need to set the\nmode to ",Object(o.b)("inlineCode",{parentName:"p"},"None"),"."),Object(o.b)("p",null,"Some\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.chromium.org/updates/same-site/incompatible-clients"}),"browser versions"),"\nreject cookies using the ",Object(o.b)("inlineCode",{parentName:"p"},"Same-Site=None")," attribute. Hydra implements a\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients"}),"workaround"),"\nthat can be enabled by setting ",Object(o.b)("inlineCode",{parentName:"p"},"serve.cookies.same_site_legacy_workaround")," to\n",Object(o.b)("inlineCode",{parentName:"p"},"true"),". This workaround is disabled by default, and only takes effect when\n",Object(o.b)("inlineCode",{parentName:"p"},"serve.cookies.same_site_mode")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"None"),"."))}b.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),u=i,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return t?a.a.createElement(h,s(s({ref:n},l),{},{components:t})):a.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);