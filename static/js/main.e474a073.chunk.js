(this["webpackJsonpgener8or-site"]=this["webpackJsonpgener8or-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),i=n(0),l=n(16),r=n(3),s=n(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"/gener8or-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=a.NODE_ENV,j=a.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(r.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),d=n(22),h=[{index:!0,label:"Gener8or Studios",path:"/"},{label:"Gallery",path:"/services"},{label:"Live",path:"/live"},{label:"About",path:"/about"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,165,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(26),f=n(29),v=n(31),g=n(30),N=n(32),S=n(28),k=[{link:"mailto:gener8ive@gmail.com",label:"Email",icon:n(27).faEnvelope},{link:"https://twitter.com/gener8ive",label:"Twitter",icon:S.faTwitter},{link:"https://instagram.com/gener8ive",label:"Instagram",icon:f.a},{link:"https://linktr.ee/gener8or",label:"Linktree",icon:g.faPaypal},{link:"https://medium.com/gener8ive",label:"Medium",icon:v.faMedium},{link:"https://www.youtube.com/channel/UCmxa6mDOmtdHOWzKCwcYtBQ",label:"Youtube",icon:N.faYoutube}],w=function(){return Object(c.jsx)("ul",{className:"icons",children:k.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(p.a,{icon:e.icon})})},e.label)}))})},y=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsx)("section",{id:"intro",children:Object(c.jsx)("header",{children:Object(c.jsx)("h2",{children:"Gener8or Studios"})})}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Gener8or Studios is a Toronto-based AI art studio."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/about")?Object(c.jsx)(u.b,{to:"/services",className:"button",children:"Learn More"}):Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Us"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(w,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Gener8or Studios ",Object(c.jsx)(u.b,{to:"/",children:"gener8or.ca"}),". ",Object(c.jsx)("a",{href:"https://github.com/gener8or/gener8or-site",children:"Code"})]})]})]})},E=function(){var e=Object(r.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},T=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(E,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Gener8or Studios",defaultTitle:"Gener8or Studios",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(y,{})]})]})};T.defaultProps={children:null,fullPage:!1,title:null,description:"Gener8or Studios website."};t.a=T},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),l=n.n(i),r=n(15),s=n(5),a=n(3),o=n(20),j=(n(45),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,160))}))),b=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,168))})),u=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,161))})),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,162))})),h=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,166))})),O=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,163))})),x=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,164))})),m=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,167))})),p=function(){return Object(c.jsx)(s.a,{basename:"/gener8or-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(a.a,{path:"/about",component:j}),Object(c.jsx)(a.a,{path:"/insights",component:m}),Object(c.jsx)(a.a,{path:"/services",component:h}),Object(c.jsx)(a.a,{path:"/live",component:x}),Object(c.jsx)(a.a,{path:"/contact",component:b}),Object(c.jsx)(a.a,{path:"/team",component:O}),Object(c.jsx)(a.a,{component:d,status:404})]})})})},f=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(p,{})})},v=document.getElementById("root");v.hasChildNodes()?Object(r.hydrate)(Object(c.jsx)(f,{}),v):Object(r.render)(Object(c.jsx)(f,{}),v)}},[[46,1,3]]]);
//# sourceMappingURL=main.e474a073.chunk.js.map