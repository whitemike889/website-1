(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{kvPJ:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return r}));var n=t("k1TG"),s=t("8o2o"),c=(t("FdF9"),t("7ljp")),p=t("7oih"),o={},b={_frontmatter:o},m=p.a;function r(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)(m,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"usage-with-reactdomcreateportal",style:{position:"relative"}},Object(c.b)("a",{parentName:"h1",href:"#usage-with-reactdomcreateportal","aria-label":"usage with reactdomcreateportal permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Usage with ",Object(c.b)("code",{parentName:"h1",className:"language-text"},"ReactDOM.createPortal")),Object(c.b)("p",null,"Popper.js is smart enough to work even if the ",Object(c.b)("strong",{parentName:"p"},"popper")," and ",Object(c.b)("strong",{parentName:"p"},"reference"),"\nelements aren't in the same DOM context.",Object(c.b)("br",{parentName:"p"}),"\n","This means that you can use\n",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/portals.html"},Object(c.b)("code",{parentName:"a",className:"language-text"},"ReactDOM.createPortal"))," (or any pre\nReact 16 alternative) to move the popper component somewhere else in the DOM."),Object(c.b)("x-ad",null),Object(c.b)("p",null,"This can be useful if you want to position a tooltip inside an\n",Object(c.b)("code",{parentName:"p",className:"language-text"},"overflow: hidden")," container that you want to make overflow."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Please note that you can also try ",Object(c.b)("code",{parentName:"strong",className:"language-text"},"strategy: 'fixed'")," to obtain a similar\neffect with less hassle.")),Object(c.b)("div",{className:"gatsby-highlight","data-language":"jsx"},Object(c.b)("pre",{parentName:"div",className:"language-jsx"},Object(c.b)("code",{parentName:"pre",className:"language-jsx"},Object(c.b)("span",{parentName:"code",className:"token keyword"},"import")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{")," usePopper ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'react-popper'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"Example")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),"referenceElement",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," setReferenceElement",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," React",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"useState"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token keyword"},"null"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),"popperElement",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," setPopperElement",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," React",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"useState"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token keyword"},"null"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{")," styles",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," attributes ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token function"},"usePopper"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"referenceElement",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," popperElement",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n  ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"\n    ",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<")),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n      "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"type"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"button",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'))," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"ref"),Object(c.b)("span",{parentName:"span",className:"token script language-javascript"},Object(c.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),"setReferenceElement",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}")),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n        Reference\n      "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n      "),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"ReactDOM",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"createPortal"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"\n        ",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"div"),"\n          ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"ref"),Object(c.b)("span",{parentName:"span",className:"token script language-javascript"},Object(c.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),"setPopperElement",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n          ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"style"),Object(c.b)("span",{parentName:"span",className:"token script language-javascript"},Object(c.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),"styles",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"."),"popper",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n          ",Object(c.b)("span",{parentName:"span",className:"token spread"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"..."),Object(c.b)("span",{parentName:"span",className:"token attr-value"},"attributes"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"span",className:"token attr-value"},"popper"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n        ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n          Popper\n        "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        document",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"querySelector"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token string"},"'#destination'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),"\n      ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n    "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</")),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")))))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-react-popper-v-2-react-portals-mdx-380efbbd8cde27201fae.js.map