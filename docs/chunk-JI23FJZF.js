import{a as w,b as _,c as y,d as v,e as V,f as W,g as M}from"./chunk-BUZYPD2S.js";import{a as E}from"./chunk-UBAZ5NUQ.js";import"./chunk-FNNOMT4Y.js";import{Ab as D,Bb as b,Ha as d,Va as c,Wa as s,Xa as p,Y as m,Ya as h,hb as i,ib as n,jb as f,tb as e,ub as x,vb as u,wb as g,xb as C,zb as S}from"./chunk-FXDS7WTG.js";var T=()=>[W,import("./chunk-25TIQA5B.js").then(t=>t.LazyWhenConditionComponent),import("./chunk-QJ633DIY.js").then(t=>t.LazySharedComponent),import("./chunk-OM6YQUOO.js").then(t=>t.StUpIdCaSePipe),import("./chunk-LP2ZSYCX.js").then(t=>t.HighlightDirective)];function L(t,o){t&1&&(i(0,"lazy-when-condition")(1,"article"),e(2,"some "),i(3,"code"),e(4,"@defer (when isVisible)"),n(),e(5," content"),n()(),i(6,"lazy-shared")(7,"article"),e(8,"some "),i(9,"code"),e(10,"@defer (when isVisible)"),n(),e(11," content"),n()(),i(12,"non-standalone")(13,"article"),e(14,"some "),i(15,"code"),e(16,"@defer (when isVisible)"),n(),e(17," content"),n()(),i(18,"h2"),e(19,"pipe"),n(),e(20),D(21,"StUpIdCaSe"),i(22,"h2"),e(23,"directive"),n(),i(24,"div",3),e(25,"lazy loaded directive - I'm highlighted lol \u{1F979}"),n()),t&2&&(d(20),x(" ",b(21,1,"Lazy loaded pipe here")," "))}function z(t,o){t&1&&f(0,"app-loader")}function F(t,o){t&1&&(e(0," placeholder is shown before "),i(1,"code"),e(2,"@defer"),n(),e(3," is triggered "))}function I(t,o){t&1&&e(0," something went wrong! ")}var G=(()=>{let o=class o{constructor(){this.isVisible=!1}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=m({type:o,selectors:[["defer-when-condition"]],standalone:!0,features:[S],decls:31,vars:2,consts:[[1e3,100],[500],["type","checkbox",3,"ngModelChange","ngModel"],["highlight",""]],template:function(l,r){l&1&&(i(0,"app-box")(1,"content"),e(2,"\u{1F4DA} if the "),i(3,"code"),e(4,"when"),n(),e(5," condition switches back to "),i(6,"code"),e(7,"false"),n(),e(8,", the defer block is "),i(9,"strong"),e(10,"not reverted back"),n(),e(11," to the placeholder. The swap is a one-time operation. If the content within the block should be conditionally rendered, an "),i(12,"code"),e(13,"if"),n(),e(14," condition can be used within the block itself."),n(),i(15,"content"),e(16,"\u{1F590}\uFE0F toggle the checkbox; when checked, the "),i(17,"code"),e(18,"@defer (when isVisible)"),n(),e(19," condition will switch to true."),n(),i(20,"div")(21,"label")(22,"input",2),C("ngModelChange",function(a){return g(r.isVisible,a)||(r.isVisible=a),a}),n(),i(23,"code"),e(24,"isVisible"),n()()()(),c(25,L,26,3)(26,z,1,0)(27,F,4,0)(28,I,1,0),p(29,25,T,26,27,28,0,1,s)),l&2&&(d(22),u("ngModel",r.isVisible),d(7),h(r.isVisible))},dependencies:[v,w,_,y,M,E,V],encapsulation:2});let t=o;return t})();export{G as DeferWhenConditionComponent};
