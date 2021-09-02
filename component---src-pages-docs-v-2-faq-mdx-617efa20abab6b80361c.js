(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8ujr":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return m}));var n=t("k1TG"),s=t("8o2o"),c=(t("FdF9"),t("7ljp")),o=t("7oih"),p={},b={_frontmatter:p},r=o.a;function m(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)(r,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"frequently-asked-questions-faq",style:{position:"relative"}},Object(c.b)("a",{parentName:"h1",href:"#frequently-asked-questions-faq","aria-label":"frequently asked questions faq permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Frequently Asked Questions (FAQ)"),Object(c.b)("p",null,"Don't see your question here? Feel free to ask on\n",Object(c.b)("a",{parentName:"p",href:"https://spectrum.chat/popper-js"},"Spectrum"),"! We'll try to answer you within a\nday or two."),Object(c.b)("h2",{id:"why-is-my-popper-in-the-wrong-location-or-not-visible-at-all",style:{position:"relative"}},Object(c.b)("a",{parentName:"h2",href:"#why-is-my-popper-in-the-wrong-location-or-not-visible-at-all","aria-label":"why is my popper in the wrong location or not visible at all permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Why is my popper in the wrong location (or not visible at all)?"),Object(c.b)("p",null,"For the ",Object(c.b)("code",{parentName:"p",className:"language-text"},"left")," and ",Object(c.b)("code",{parentName:"p",className:"language-text"},"top")," placements, Popper relies on HTML Standards Mode for\nthe ",Object(c.b)("code",{parentName:"p",className:"language-text"},"computeStyles")," modifier's ",Object(c.b)("code",{parentName:"p",className:"language-text"},"adaptive")," option. A problem will occur in Quirks\nMode when the ",Object(c.b)("code",{parentName:"p",className:"language-text"},"<body>")," is the popper element's offsetParent, and it's taller\nthan the viewport."),Object(c.b)("p",null,"To fix it, use the Standards Mode doctype:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(c.b)("pre",{parentName:"div",className:"language-html"},Object(c.b)("code",{parentName:"pre",className:"language-html"},Object(c.b)("span",{parentName:"code",className:"token doctype"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<!"),Object(c.b)("span",{parentName:"span",className:"token doctype-tag"},"DOCTYPE")," ",Object(c.b)("span",{parentName:"span",className:"token name"},"html"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"html"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",Object(c.b)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"html"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">"))))),Object(c.b)("p",null,"Additionally, make sure your popper element (tooltip, popover, etc...) CSS\ndoesn't include some positioning styles (such as ",Object(c.b)("code",{parentName:"p",className:"language-text"},"top"),", ",Object(c.b)("code",{parentName:"p",className:"language-text"},"left"),", ",Object(c.b)("code",{parentName:"p",className:"language-text"},"right"),",\n",Object(c.b)("code",{parentName:"p",className:"language-text"},"bottom"),", and ",Object(c.b)("code",{parentName:"p",className:"language-text"},"transform"),") because they could interfere with the Popper\npositioning logic."),Object(c.b)("h2",{id:"why-is-my-popper-jittering-while-scrolling",style:{position:"relative"}},Object(c.b)("a",{parentName:"h2",href:"#why-is-my-popper-jittering-while-scrolling","aria-label":"why is my popper jittering while scrolling permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Why is my popper jittering while scrolling?"),Object(c.b)("p",null,"If your reference element is ",Object(c.b)("code",{parentName:"p",className:"language-text"},"position: fixed"),", use the ",Object(c.b)("code",{parentName:"p",className:"language-text"},'"fixed"')," strategy:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.b)("pre",{parentName:"div",className:"language-js"},Object(c.b)("code",{parentName:"pre",className:"language-js"},Object(c.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  strategy",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'fixed'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(c.b)("p",null,"Due to the way browsers handle element updates, there will likely be some\ninevitable stutters if the strategy does not match the reference element's\nposition."),Object(c.b)("h2",{id:"how-do-i-add-css-transitions-without-disabling-adaptive",style:{position:"relative"}},Object(c.b)("a",{parentName:"h2",href:"#how-do-i-add-css-transitions-without-disabling-adaptive","aria-label":"how do i add css transitions without disabling adaptive permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How do I add CSS transitions without disabling ",Object(c.b)("code",{parentName:"h2",className:"language-text"},"adaptive"),"?"),Object(c.b)("p",null,"We recommend making the popper element a wrapper around an inner element that\ncan have any CSS property transitioned:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(c.b)("pre",{parentName:"div",className:"language-html"},Object(c.b)("code",{parentName:"pre",className:"language-html"},Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"class"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"popper",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"class"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"box",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n    Content\n  ",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">"))))),Object(c.b)("p",null,"In the above case, the ",Object(c.b)("code",{parentName:"p",className:"language-text"},".popper")," element is the one that's positioned but has no\nstyles applied. The ",Object(c.b)("code",{parentName:"p",className:"language-text"},".box")," element has all of the CSS styling and animations."),Object(c.b)("h2",{id:"how-do-i-set-modifier-defaults-and-allow-them-to-be-overridden",style:{position:"relative"}},Object(c.b)("a",{parentName:"h2",href:"#how-do-i-set-modifier-defaults-and-allow-them-to-be-overridden","aria-label":"how do i set modifier defaults and allow them to be overridden permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How do I set modifier defaults and allow them to be overridden?"),Object(c.b)("p",null,"Modifiers are merged by name, where later items in the array override earlier\nones. This provides a way to configure some defaults for modifiers, but allow\nthem to be overridden easily:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.b)("pre",{parentName:"div",className:"language-js"},Object(c.b)("code",{parentName:"pre",className:"language-js"},Object(c.b)("span",{parentName:"code",className:"token comment"},"// A user passes this object in:"),"\n",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," popperOptions ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  strategy",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'fixed'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  modifiers",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      name",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'preventOverflow'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      options",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        padding",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token number"},"0"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(c.b)("span",{parentName:"code",className:"token comment"},"// Your library sets its own defaults:"),"\n",Object(c.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",Object(c.b)("span",{parentName:"code",className:"token operator"},"..."),"popperOptions",Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  modifiers",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      name",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'preventOverflow'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      options",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        rootBoundary",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'document'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        padding",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token number"},"10"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(c.b)("span",{parentName:"code",className:"token operator"},"..."),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"popperOptions",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"modifiers ",Object(c.b)("span",{parentName:"code",className:"token operator"},"||")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(c.b)("h2",{id:"how-do-i-change-offset-based-on-the-browser-width-media-queries",style:{position:"relative"}},Object(c.b)("a",{parentName:"h2",href:"#how-do-i-change-offset-based-on-the-browser-width-media-queries","aria-label":"how do i change offset based on the browser width media queries permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How do I change ",Object(c.b)("code",{parentName:"h2",className:"language-text"},"offset")," based on the browser width (media queries)?"),Object(c.b)("p",null,"Popper doesn't accept margins, but you can still make offset dynamic based on\nmedia queries."),Object(c.b)("p",null,Object(c.b)("code",{parentName:"p",className:"language-text"},"window.matchMedia()")," is a useful API for this — since ",Object(c.b)("code",{parentName:"p",className:"language-text"},"offset")," can take a\nfunction, it allows you to dynamically change the offset based on a condition:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(c.b)("pre",{parentName:"div",className:"language-js"},Object(c.b)("code",{parentName:"pre",className:"language-js"},Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," mediaQuery ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," window",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"matchMedia"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token string"},"'(max-width: 500px)'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(c.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  modifiers",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      name",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},"'offset'"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      options",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// 0px distance at <= 500px width, otherwise 10px distance"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"offset"),Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(c.b)("span",{parentName:"code",className:"token number"},"0"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},",")," mediaQuery",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"matches ",Object(c.b)("span",{parentName:"code",className:"token operator"},"?")," ",Object(c.b)("span",{parentName:"code",className:"token number"},"0")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token number"},"10"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(c.b)("h2",{id:"my-popper-is-bigger-than-the-viewport-what-do-i-do",style:{position:"relative"}},Object(c.b)("a",{parentName:"h2",href:"#my-popper-is-bigger-than-the-viewport-what-do-i-do","aria-label":"my popper is bigger than the viewport what do i do permalink",className:"gatsby-link-icon before"},Object(c.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"My popper is bigger than the viewport, what do I do?"),Object(c.b)("p",null,"Here are some options:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Prevent the popper's width from ever exceeding the browser's width with\n",Object(c.b)("code",{parentName:"li",className:"language-text"},"max-width: 100vw;")," CSS (along with ",Object(c.b)("code",{parentName:"li",className:"language-text"},"box-sizing: border-box"),")."),Object(c.b)("li",{parentName:"ul"},"Set ",Object(c.b)("code",{parentName:"li",className:"language-text"},"preventOverflow"),"'s ",Object(c.b)("code",{parentName:"li",className:"language-text"},"rootBoundary")," option to ",Object(c.b)("code",{parentName:"li",className:"language-text"},"document")," if it must be\nlarger than the viewport."),Object(c.b)("li",{parentName:"ul"},"Create a custom ",Object(c.b)("code",{parentName:"li",className:"language-text"},"size")," modifier that changes the size of the popper based on\nthe available space remaining, and allow the popper box to be scrolled. The\n",Object(c.b)("code",{parentName:"li",className:"language-text"},"detectOverflow")," utility enables this.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-faq-mdx-617efa20abab6b80361c.js.map