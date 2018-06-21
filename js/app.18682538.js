(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([5,0]),n()})({"+93x":function(e,t,n){},5:function(e,t,n){e.exports=n("Vtdi")},"9pqG":function(e,t,n){"use strict";var o=n("xMgd"),r=n.n(o);r.a},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var o=n("Kw5r"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("jumbo"),n("Introduction")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",{staticClass:"center"},[n("h1",{directives:[{name:"badge",rawName:"v-badge",value:{value:3,styles:e.styles},expression:"{value: 3, styles: styles}"}]},[e._v("This is vue-shadow-badge")]),n("p",[e._v("A simple way to add badges to any element!")]),n("p",[e._v("yarn add vue-shadow-badge or npm i --save vue-shadow-badge")])])])},s=[];n("xfY5"),n("fN96");function u(e,t){return e["down-left"]?{bottom:"0",left:"0"}:e["down-right"]?{bottom:"0",right:"0"}:e["up-left"]?{top:"0",left:"0"}:e["up-right"]?{top:"0",right:"0"}:t.bottom||t.top||t.left||t.right?{bottom:t.bottom||0,top:t.top||0,left:t.left||0,right:t.right||0}:{top:"0",right:"0"}}function c(){return document.head.createShadowRoot||document.head.attachShadow}function l(e){return e.createShadowRoot()}function d(e,t){var n=u(e.modifiers,e.value),o=Number.isInteger(e.value)?e.value:e.value.value;t.innerHTML="\n    <style>\n    :host::after {\n      content: '".concat(o,"';\n      position: absolute;\n      right: ").concat(n.right||"unset",";\n      top: ").concat(n.top||"unset",";\n      bottom: ").concat(n.bottom||"unset",";\n      left: ").concat(n.left||"unset",";\n      font-size: .6em;\n      background: #00796bcc;\n      align-items: center;\n      justify-content: center;\n      display: flex;\n      color: white;\n      width: 18px;\n      font-weight: 600;\n      height: 18px;\n      border-radius: 50%;\n      ").concat(e.value.styles,"\n    }\n    </style>\n    <content></content>\n  ")}var p=function(e,t){if(!c())throw"Your browser doesn't support shadow dom";if("relative"!==window.getComputedStyle(e).getPropertyValue("position")&&(e.style.position="relative"),t.value)if(e.shadowRoot){var n=e.shadowRoot;d(t,n)}else{var o=l(e,t);d(t,o)}},f=o["a"].directive("badge",p),v={data:function(){return{styles:"\n        border-radius: 20px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.45);\n        right: -20px;\n      "}},directives:{Badge:f}},g=v,h=(n("9pqG"),n("KHd+")),b=Object(h["a"])(g,i,s,!1,null,"2c20b88f",null),m=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"area-separator"},[n("h1",{directives:[{name:"badge",rawName:"v-badge",value:{value:1,right:"-20px",top:"-4px"},expression:"{value: 1, right: '-20px', top: '-4px'}"}]},[e._v("How it works?")]),e._m(0),n("p",[e._v("It inserts a ::after element on the choosen element very easily.")])]),n("div",{staticClass:"area-separator"},[n("h1",{directives:[{name:"badge",rawName:"v-badge",value:e.badge2Config,expression:"badge2Config"}]},[e._v("Examples")]),n("div",{staticClass:"flex-row"},[n("div",{staticClass:"flex-item-column"},[n("p",[e._v("Badge on a Button!")]),n("button-outline",{directives:[{name:"badge",rawName:"v-badge",value:{value:e.buttonCounter,right:"-25px",top:"-4px",styles:e.buttonBadgeStyle},expression:"{\n          value: buttonCounter,\n          right: '-25px',\n          top: '-4px',\n          styles: buttonBadgeStyle\n        }"}],attrs:{msg:"Click Me!"},nativeOn:{click:function(t){e.buttonCounter++}}})],1)])])])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("vue-shadow-badge uses the "),n("a",{attrs:{href:"https://caniuse.com/#feat=shadowdom",target:"_blank"}},[e._v("Shadow DOM")]),e._v(" feature from Chrome (thus, only work on Chrome).")])}],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",[e._v(e._s(e.msg))])},_=[],C={props:["msg"]},k=C,O=(n("YCLv"),Object(h["a"])(k,y,_,!1,null,"76ca0538",null)),j=O.exports,S={data:function(){return{buttonCounter:1,badge2Config:{value:2,right:"-20px",top:"-4px"},buttonBadgeStyle:"\n        border: 2px solid #662a24;\n        color: #662a24;\n        background-color: transparent;\n        font-size: 0.9em;\n      "}},directives:{Badge:f},components:{ButtonOutline:j}},N=S,B=(n("kzsz"),Object(h["a"])(N,w,x,!1,null,"ee5cc640",null)),E=B.exports,M={name:"app",components:{Jumbo:m,Introduction:E},mounted:function(){document.head.createShadowRoot||document.head.attachShadow?console.log("yay, it works"):console.log("sad")}},z=M,P=(n("nNx0"),Object(h["a"])(z,r,a,!1,null,null,null)),R=P.exports,Y=n("lIOY");Object(Y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("0sYV");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(R)}}).$mount("#app")},YCLv:function(e,t,n){"use strict";var o=n("ddLG"),r=n.n(o);r.a},ddLG:function(e,t,n){},kzsz:function(e,t,n){"use strict";var o=n("+93x"),r=n.n(o);r.a},nNx0:function(e,t,n){"use strict";var o=n("uWEC"),r=n.n(o);r.a},uWEC:function(e,t,n){},xMgd:function(e,t,n){}});
//# sourceMappingURL=app.18682538.js.map