import{a as p,c as u,e as x,f,g as h,h as g}from"./chunk-6RT6RMAZ.js";import"./chunk-UBAZ5NUQ.js";import{k as s}from"./chunk-FNNOMT4Y.js";import{Y as a,hb as t,ib as n,jb as m,tb as e,zb as l}from"./chunk-FXDS7WTG.js";var E=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=a({type:o,selectors:[["app-about"]],standalone:!0,features:[l],decls:51,vars:0,template:function(r,c){r&1&&(t(0,"article")(1,"h3"),e(2,"about this app"),n(),t(3,"ul")(4,"li"),e(5," Open browser devtools "),t(6,"em"),e(7,"Network"),n(),e(8," tab: "),t(9,"ul")(10,"li"),e(11,"to see "),t(12,"strong"),e(13,"bundles lazily loaded"),n()(),t(14,"li"),e(15," to "),t(16,"strong"),e(17,"throttle"),n(),e(18," your connection speed (see the spinner) "),n()()(),t(19,"li"),e(20," Each routed component: "),t(21,"ul")(22,"li"),e(23,"is statically imported on router level"),n(),t(24,"li"),e(25," includes following elements in a "),t(26,"code"),e(27,"@defer"),n(),e(28," block: "),t(29,"ol")(30,"li"),e(31," its "),t(32,"strong"),e(33,"dedicated"),n(),e(34," (separate) lazy loaded component (each example has its own, not shared across sections) "),n(),t(35,"li"),e(36,"a "),t(37,"strong"),e(38,"shared"),n(),e(39," component"),n(),t(40,"li"),e(41," a non-standalone component (belongs to an NgModule) which won't get lazy loaded at all (lazy loading works only for "),t(42,"strong"),e(43,"standalone"),n(),e(44," components "),n(),t(45,"li"),e(46,"a lazy loaded, "),t(47,"strong"),e(48,"shared"),n(),e(49," fLiPcAsE pipe"),n(),e(50," (shared items are single instance, loaded over the network only for the first time, later reused) "),n()()()()()())},dependencies:[s]});let i=o;return i})();var S=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=a({type:o,selectors:[["defer-guide"]],standalone:!0,features:[l],decls:67,vars:0,consts:[["href","https://web.dev/articles/optimize-lcp"],["href","https://web.dev/articles/fid"],["href","https://angularexperts.io/blog/angular-deferred-views-lazy-loading-total-guide"]],template:function(r,c){r&1&&(t(0,"article")(1,"h3"),e(2,"about the "),t(3,"code"),e(4,"@defer"),n(),e(5," block"),n(),t(6,"ul")(7,"li"),e(8," Angular "),t(9,"code"),e(10,"@defer"),n(),e(11," block allows "),t(12,"code"),e(13,"standalone: true "),n(),t(14,"strong"),e(15,"components"),n(),e(16,", "),t(17,"strong"),e(18,"directives"),n(),e(19," and "),t(20,"strong"),e(21,"pipes"),n(),e(22," to be dynamically loaded in runtime (via separate bundles) whenever a specified contition is met. "),n(),t(23,"li"),e(24," Note that if a file which exports a standalone component (or directive, pipe) also exports something else (object, function, whatever) and it gets "),t(25,"strong"),e(26,"statically imported"),n(),e(27," (e.g. "),t(28,"code"),e(29,"import { anotherThing } from './my-component'"),n(),e(30,"), then the file is "),t(31,"strong"),e(32,"NOT"),n(),e(33," separated to its own bundle (included in the one that does the static import). This is "),t(34,"strong"),e(35,"not"),n(),e(36," angular-specific, similar constraints exist in other frameworks. "),n(),t(37,"li"),e(38," The "),t(39,"strong"),e(40,"main goal"),n(),e(41," of "),t(42,"code"),e(43,"@defer"),n(),e(44," is to enable more convenient "),t(45,"strong"),e(46,"lazy loading"),n(),e(47," on template level. "),n(),t(48,"li"),e(49," Expected result: improved "),t(50,"a",0),e(51,"LCP / Largest Contenftul Paint"),n(),e(52," (since there's less to download, parse, execute and eventually less to render) and potentially also improved "),t(53,"a",1),e(54,"FID / First Input Delay"),n(),e(55," (since there's less JS to download and parse, there's also higher chance that less messages would get enqueued within the Event Loop) metrics. "),n(),t(56,"li"),e(57," For each "),t(58,"strong"),e(59,"deferrable item"),n(),e(60,", respective lazy chunk is created, which is reflected while building Angular applications: "),n()(),m(61,"pre"),e(62," Recommended reads: "),t(63,"ul")(64,"li")(65,"a",2),e(66,"Total guide to lazy loading with Angular @defer"),n()()()())},dependencies:[s]});let i=o;return i})();var b=[{path:"about",component:E},{path:"defer-guide",component:S},{path:"",redirectTo:"about",pathMatch:"full"},{path:"",loadComponent:()=>import("./chunk-MDOQ4J7K.js"),children:[{path:"defer-when-condition",loadComponent:()=>import("./chunk-JI23FJZF.js").then(i=>i.DeferWhenConditionComponent)},{path:"defer-on-idle",loadComponent:()=>import("./chunk-5ICRHQB7.js").then(i=>i.DeferOnIdleComponent)},{path:"defer-on-viewport",loadComponent:()=>import("./chunk-CITXVHAD.js").then(i=>i.DeferOnViewportComponent)},{path:"defer-on-interaction",loadComponent:()=>import("./chunk-MSTW25RJ.js").then(i=>i.DeferOnInteractionComponent)},{path:"defer-on-hover",loadComponent:()=>import("./chunk-LNUG5DPR.js").then(i=>i.DeferOnHoverComponent)},{path:"defer-on-immediate",loadComponent:()=>import("./chunk-SJBHL2ZW.js").then(i=>i.DeferOnImmediateComponent)},{path:"defer-on-timer",loadComponent:()=>import("./chunk-PZVE724T.js").then(i=>i.DeferOnTimerComponent)}]}];var k={providers:[h(b)]};var w=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=a({type:o,selectors:[["app-root"]],standalone:!0,features:[l],decls:51,vars:0,consts:[[1,"angular-gradient"],["href","https://lasitha.dev/"],["href","https://github.com/LasithaPrabodha/angular-deferred-views"],["href","https://angular.dev/guide/defer"],["href","https://angular.io/guide/defer"],["routerLink","/about","routerLinkActive","active"],["routerLink","/defer-guide","routerLinkActive","active"],["routerLink","/defer-when-condition","routerLinkActive","active"],["routerLink","/defer-on-idle","routerLinkActive","active"],["routerLink","/defer-on-viewport","routerLinkActive","active"],["routerLink","/defer-on-interaction","routerLinkActive","active"],["routerLink","/defer-on-hover","routerLinkActive","active"],["routerLink","/defer-on-immediate","routerLinkActive","active"],["routerLink","/defer-on-timer","routerLinkActive","active"]],template:function(r,c){r&1&&(t(0,"header")(1,"h1",0),e(2," Angular \u26A1\uFE0F "),t(3,"code"),e(4,"@defer"),n(),e(5," \u26A1\uFE0F Interactive Examples "),n(),t(6,"section")(7,"strong"),e(8,"author"),n(),e(9,": by Lasitha Prabodha, "),t(10,"a",1),e(11,"lasitha.dev"),n(),e(12,", see this "),t(13,"a",2),e(14,"github repo"),n()(),t(15,"section")(16,"strong"),e(17,"documentation"),n(),e(18,": "),t(19,"a",3),e(20,"official docs"),n(),e(21,", "),t(22,"a",4),e(23,"legacy docs"),n()(),t(24,"section"),e(25,"Open Browser Devtools "),t(26,"em"),e(27,"Network"),n(),e(28," tab."),n()(),t(29,"nav")(30,"a",5),e(31,"\u{1F4A1} about this app"),n(),t(32,"a",6),e(33,"\u{1F4DA} defer guide"),n(),m(34,"br")(35,"br"),t(36,"a",7),e(37," \u26A1\uFE0F when condition "),n(),t(38,"a",8),e(39,"\u26A1\uFE0F on idle"),n(),t(40,"a",9),e(41," \u26A1\uFE0F on viewport "),n(),t(42,"a",10),e(43," \u26A1\uFE0F on interaction "),n(),t(44,"a",11),e(45,"\u26A1\uFE0F on hover"),n(),t(46,"a",12),e(47," \u26A1\uFE0F on immediate "),n(),t(48,"a",13),e(49,"\u26A1\uFE0F on timer"),n()(),m(50,"router-outlet"))},dependencies:[g,u,x,f],styles:["h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:20px;background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent}nav[_ngcontent-%COMP%]{background-color:var(--background-color);padding:10px 0;margin:4px 0;border-top:1px solid var(--main-accent-color);border-bottom:1px solid var(--main-accent-color)}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-color);text-decoration:none;margin-right:10px}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:-webkit-linear-gradient(var(--angle),var(--orange-red) 0%,var(--electric-violet) 50%,var(--vivid-pink) 100%);background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{font-weight:700;background:-webkit-linear-gradient(var(--angle),var(--orange-red) 0%,var(--vivid-pink) 50%,var(--electric-violet) 100%);background-size:100%;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent}"]});let i=o;return i})();p(w,k).catch(i=>console.error(i));